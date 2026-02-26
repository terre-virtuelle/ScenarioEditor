/**
 * Parser NaVisu4D — ES Module
 *
 * Architecture :
 *   1. splitScenario()  : découpe le fichier texte en étapes (JS pur)
 *                         → chaque étape = { text, rawCommands }
 *   2. parseCommandLine() : ANTLR4 parse une ligne de commandes enchaînées
 *                           "#cmd1,p1,p2#cmd2,p1"
 *   3. parseScenario()  : combine les deux
 *
 * Cette séparation évite tout conflit lexical entre le texte libre
 * (Unicode, accents, ponctuation…) et les commandes.
 */

import antlr4 from 'antlr4';
import NaVisu4DCommandsLexer  from './NaVisu4DCommandsLexer.js';
import NaVisu4DCommandsParser from './NaVisu4DCommandsParser.js';
import { CommandExtractor } from './command-actions.js';

const { InputStream, CommonTokenStream } = antlr4;

// ─── 1. Parse d'une ligne de commandes (une ou plusieurs commandes enchaînées) ───

/**
 * Parse un scénario complet (ensemble de commandes, dont #comment).
 * 
 * @param {string} source  Contenu du scénario (une commande par ligne ou enchaînées)
 * @returns {{ success: boolean, commands?: array, error?: string }}
 */
export function parseScenario(source) {
    try {
        const chars  = new InputStream(source, true);
        const lexer  = new NaVisu4DCommandsLexer(chars);
        const errors = [];

        lexer.removeErrorListeners();
        lexer.addErrorListener({
            syntaxError(r, sym, line, col, msg) {
                errors.push(`L${line}:${col} (lexer) – ${msg}`);
            }
        });

        const tokens = new CommonTokenStream(lexer);
        const parser = new NaVisu4DCommandsParser(tokens);
        parser.removeErrorListeners();
        parser.addErrorListener({
            syntaxError(r, sym, line, col, msg) {
                errors.push(`L${line}:${col} (parser) – ${msg}`);
            }
        });

        const tree = parser.commandLine();

        if (errors.length) return { success: false, error: errors.join('\n') };

        const visitor = new CommandExtractor();
        visitor.visit(tree);
        return { success: true, commands: visitor.commands };

    } catch (err) {
        return { success: false, error: err.message };
    }
}

// ─── 2. AST brut en JSON ─────────────────────────────────────────────────────

/**
 * Retourne l'AST ANTLR brut d'un scénario, sérialisé en JSON.
 */
export function astToJson(source) {
    const chars  = new InputStream(source, true);
    const lexer  = new NaVisu4DCommandsLexer(chars);
    lexer.removeErrorListeners();

    const tokens = new CommonTokenStream(lexer);
    const parser = new NaVisu4DCommandsParser(tokens);
    parser.removeErrorListeners();

    const tree = parser.commandLine();

    const ruleNames     = parser.ruleNames;
    const symbolicNames = parser.symbolicNames;

    function nodeToJson(ctx) {
        if (!ctx.children) {
            const sym = ctx.symbol;
            return {
                token: {
                    type: symbolicNames[sym.type] ?? `T_${sym.type}`,
                    text: sym.text
                }
            };
        }

        const ruleName = ruleNames[ctx.ruleIndex] ?? `rule_${ctx.ruleIndex}`;
        const node = {
            rule:     ruleName,
            text:     ctx.getText(),
            children: ctx.children.map(nodeToJson)
        };

        node.children = node.children.filter(
            ch => !(ch.token && (ch.token.text === '<EOF>' || ch.token.type === 'EOF'))
        );

        return node;
    }

    return nodeToJson(tree);
}

// ─── 3. Validation sémantique ─────────────────────────────────────────────────

export function validateScenario(source) {
    const parsed = parseScenario(source);
    if (!parsed.success) return { valid: false, errors: [parsed.error], warnings: [] };

    const errors = [], warnings = [];

    parsed.commands.forEach((cmd, ci) => {
        const loc = `Commande ${ci + 1} [${cmd.type}]`;

        if (cmd.type === 'bbox') {
            if (cmd.south >= cmd.north)
                errors.push(`${loc}: sud(${cmd.south}) ≥ nord(${cmd.north})`);
            if (cmd.west >= cmd.east)
                errors.push(`${loc}: ouest(${cmd.west}) ≥ est(${cmd.east})`);
            if (cmd.south < -90 || cmd.north > 90)
                errors.push(`${loc}: latitude hors [-90, 90]`);
            if (cmd.west < -180 || cmd.east > 180)
                errors.push(`${loc}: longitude hors [-180, 180]`);
        }

        if (cmd.type === 'move') {
            if (cmd.latitude  < -90  || cmd.latitude  > 90)
                errors.push(`${loc}: latitude hors plage`);
            if (cmd.longitude < -180 || cmd.longitude > 180)
                errors.push(`${loc}: longitude hors plage`);
            if (cmd.height < 0)
                warnings.push(`${loc}: hauteur négative (${cmd.height} m)`);
        }
    });

    return { valid: errors.length === 0, errors, warnings, commands: parsed.commands };
}

// ─── 4. Transformation en AST structuré ───────────────────────────────────────

/**
 * Convertit la sortie du parser en AST structuré avec types explicites.
 */
export function toStructuredAst(source) {
    const parsed = typeof source === 'string' ? parseScenario(source) : source;
    
    if (!parsed.success) {
        throw new Error(`Impossible de créer l'AST : ${parsed.error}`);
    }

    return {
        type: "scenario",
        commands: parsed.commands.map(cmd => transformCommand(cmd))
    };
}

/**
 * Transforme une commande du format parser vers le format AST structuré.
 */
function transformCommand(cmd) {
    switch (cmd.type) {
        case 'comment':
            return {
                kind: 'comment',
                text: cmd.text
            };

        case 'bbox':
            return {
                kind: 'bbox',
                south: cmd.south,
                west: cmd.west,
                north: cmd.north,
                east: cmd.east
            };

        case 'move':
            return {
                kind: 'move',
                mode: 'flyTo',
                target: 'camera',
                longitude: cmd.longitude,
                latitude: cmd.latitude,
                height: cmd.height,
                heading: cmd.heading,
                pitch: cmd.pitch,
                roll: cmd.roll
            };

        case 'daynight':
            return {
                kind: 'daynight',
                enabled: cmd.enabled
            };

        case 'chart':
            return {
                kind: 'chart',
                format: cmd.chartType,
                name: cmd.layer
            };

        case 'terrain':
            return {
                kind: 'terrain',
                source: cmd.source
            };

        case 'layer':
            const layer = {
                kind: 'layer',
                subtype: cmd.subtype
            };
            // Copier tous les autres champs
            Object.keys(cmd).forEach(k => {
                if (k !== 'type' && k !== 'subtype') {
                    layer[k] = cmd[k];
                }
            });
            return layer;

        case 'image':
            return {
                kind: 'image',
                filename: cmd.filename,
                ...(cmd.title && { title: cmd.title }),
                ...(cmd.x !== undefined && { x: cmd.x }),
                ...(cmd.y !== undefined && { y: cmd.y })
            };

        case 'image3D':
            return {
                kind: 'image3D',
                filename: cmd.filename
            };

        case 'video':
            return {
                kind: 'video',
                url: cmd.url,
                ...(cmd.title && { title: cmd.title }),
                width: cmd.width,
                height: cmd.height
            };

        case 'video3D':
            return {
                kind: 'video3D',
                url: cmd.url,
                ...(cmd.autoplay !== undefined && { autoplay: cmd.autoplay })
            };

        case 'billboard':
            return {
                kind: 'billboard',
                filename: cmd.filename,
                ...(cmd.title && { title: cmd.title }),
                longitude: cmd.longitude,
                latitude: cmd.latitude
            };

        case 'billboardCB':
            return {
                kind: 'billboardCB',
                filename: cmd.filename
            };

        case 'text':
            return {
                kind: 'text',
                content: cmd.content,
                ...(cmd.title && { title: cmd.title })
            };

        case 'audio':
            return {
                kind: 'audio',
                filename: cmd.filename
            };

        case 'speech':
            return {
                kind: 'speech',
                text: cmd.text
            };

        case 'webcam':
            return { kind: 'webcam' };

        case 'simulation':
            return {
                kind: 'simulation',
                format: cmd.format,
                filename: cmd.filename,
                params: cmd.params
            };

        case 'navigation':
            const nav = {
                kind: 'navigation',
                mode: cmd.nav
            };
            // Ajouter les paramètres spécifiques
            if (cmd.month !== undefined) nav.month = cmd.month;
            if (cmd.region) nav.region = cmd.region;
            if (cmd.filename) nav.filename = cmd.filename;
            return nav;

        case 'seabed':
            return { kind: 'seabed' };

        case 'quiz':
            return {
                kind: 'quiz',
                filename: cmd.filename
            };

        case 'clear':
            return {
                kind: 'clear',
                layer: cmd.layer
            };

        case 'clearAll':
            return { kind: 'clearAll' };

        default:
            // Commande inconnue : copier tel quel en remplaçant type par kind
            return {
                kind: cmd.type,
                ...Object.fromEntries(
                    Object.entries(cmd).filter(([k]) => k !== 'type')
                )
            };
    }
}

// ─── 6. Visitor ANTLR → objets JS ────────────────────────────────────────────

