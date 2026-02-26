/**
 * navisu4d-monaco-config.js
 * 
 * Configuration Monaco Editor pour le langage NaVisu4D
 * 
 * Utilisation :
 *   import { registerNaVisu4DLanguage } from './navisu4d-monaco-config.js';
 *   registerNaVisu4DLanguage(monaco);
 */

export function registerNaVisu4DLanguage(monaco) {
    // ═══════════════════════════════════════════════════════════════════════════
    //  1. Enregistrement du langage
    // ═══════════════════════════════════════════════════════════════════════════

    monaco.languages.register({ id: 'navisu4d' });

    // ═══════════════════════════════════════════════════════════════════════════
    //  2. Tokenizer (coloration syntaxique)
    // ═══════════════════════════════════════════════════════════════════════════

    monaco.languages.setMonarchTokensProvider('navisu4d', {
        defaultToken: '',
        ignoreCase: true,

        // Mots-clés de commandes
        commands: [
            'comment', 'bbox', 'move', 'flyTo', 'camera', 'daynight',
            'chart', 'vector', 'raster', 'mbtiles', 'terrain', 'google3d',
            'layer', 'bathymetry', 'altimetry', 'oceanography', 'litto3d',
            'emodnet', 'gebco', 'homonim', 'sonar',
            'tides', 'currents', 'tidalAtlas', 'forecast',
            'image', 'image3d', 'video', 'video3d', 'billboard', 'billboardcb',
            'fireworks', 'text', 'audio', 'speech', 'webcam',
            'simulation', 'json', 'nmea',
            'navigation', 'pilotchart', 'nac', 'avurnav', 'gpx',
            'seabed', 'quiz', 'clear', 'clearAll'
        ],

        // Régions géographiques
        regions: [
            'guadeloupe', 'saint-martin', 'saint-barthelemy',
            'finistere', 'morbihan', 'corse', 'var', 'herault',
            'pyrenees-orientales', 'manche', 'iroise', 'fromveur',
            'atl', 'man', 'med'
        ],

        // Couches vectorielles
        vectorLayers: [
            'buoyage', 'depare', 'hrbare', 'resare', 'landmark',
            'staticLight', 'wrecks'
        ],

        // Opérateurs et délimiteurs
        operators: [',', '#'],

        // Symboles
        symbols: /[#,]/,

        tokenizer: {
            root: [
                // Commande (commence par #)
                [/#[a-zA-Z0-9]+/, {
                    cases: {
                        '@commands': 'keyword.command',
                        '@default': 'invalid'
                    }
                }],

                // Chaînes entre guillemets
                [/"([^"\\]|\\.)*$/, 'string.invalid'],
                [/"/, { token: 'string.quote', bracket: '@open', next: '@string_double' }],
                [/'([^'\\]|\\.)*$/, 'string.invalid'],
                [/'/, { token: 'string.quote', bracket: '@open', next: '@string_single' }],

                // Nombres (entiers et flottants, y compris négatifs)
                [/-?\d+\.\d+/, 'number.float'],
                [/-?\d+/, 'number'],

                // Booléens
                [/\b(true|false)\b/i, 'constant.language.boolean'],

                // Mots-clés spéciaux
                [/\b[a-zA-Z0-9_-]+\b/, {
                    cases: {
                        '@commands': 'keyword',
                        '@regions': 'variable.region',
                        '@vectorLayers': 'variable.layer',
                        '@default': 'identifier'
                    }
                }],

                // Virgules
                [/,/, 'delimiter.comma'],

                // Whitespace
                [/[ \t\r\n]+/, 'white']
            ],

            string_double: [
                [/[^\\"]+/, 'string'],
                [/\\./, 'string.escape'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],

            string_single: [
                [/[^\\']+/, 'string'],
                [/\\./, 'string.escape'],
                [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ]
        }
    });

    // ═══════════════════════════════════════════════════════════════════════════
    //  3. Autocomplétion
    // ═══════════════════════════════════════════════════════════════════════════

    monaco.languages.registerCompletionItemProvider('navisu4d', {
        provideCompletionItems: (model, position) => {
            const word = model.getWordUntilPosition(position);
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };

            const line = model.getLineContent(position.lineNumber);
            const beforeCursor = line.substring(0, position.column - 1);

            // Si on est après un #, proposer les commandes
            if (beforeCursor.trimEnd().endsWith('#')) {
                return {
                    suggestions: getCommandSuggestions(monaco, range)
                };
            }

            // Si on est après "chart,", proposer les types
            if (/chart,\s*$/i.test(beforeCursor)) {
                return {
                    suggestions: [
                        createCompletion(monaco, 'vector', 'Chart type', 'vector', range),
                        createCompletion(monaco, 'raster', 'Chart type', 'raster', range),
                        createCompletion(monaco, 'mbtiles', 'Chart type', 'mbtiles', range)
                    ]
                };
            }

            // Si on est après "chart,vector,", proposer les couches vectorielles
            if (/chart,\s*vector,\s*$/i.test(beforeCursor)) {
                return {
                    suggestions: [
                        createCompletion(monaco, 'depare', 'Vector layer', 'depare  // Profondeurs', range),
                        createCompletion(monaco, 'buoyage', 'Vector layer', 'buoyage  // Balisage', range),
                        createCompletion(monaco, 'hrbare', 'Vector layer', 'hrbare  // Ports', range),
                        createCompletion(monaco, 'resare', 'Vector layer', 'resare  // Zones restreintes', range),
                        createCompletion(monaco, 'landmark', 'Vector layer', 'landmark  // Amers', range),
                        createCompletion(monaco, 'staticLight', 'Vector layer', 'staticLight  // Phares', range),
                        createCompletion(monaco, 'wrecks', 'Vector layer', 'wrecks  // Épaves', range)
                    ]
                };
            }

            // Suggestions par défaut
            return { suggestions: [] };
        }
    });

    // ═══════════════════════════════════════════════════════════════════════════
    //  4. Validation (diagnostics)
    // ═══════════════════════════════════════════════════════════════════════════

    monaco.languages.registerDocumentFormattingEditProvider('navisu4d', {
        provideDocumentFormattingEdits: (model) => {
            // Pas de formatage automatique pour l'instant
            return [];
        }
    });

    // ═══════════════════════════════════════════════════════════════════════════
    //  5. Hover (info-bulles)
    // ═══════════════════════════════════════════════════════════════════════════

    monaco.languages.registerHoverProvider('navisu4d', {
        provideHover: (model, position) => {
            const word = model.getWordAtPosition(position);
            if (!word) return null;

            const hoverText = getHoverDocumentation(word.word);
            if (!hoverText) return null;

            return {
                range: new monaco.Range(
                    position.lineNumber,
                    word.startColumn,
                    position.lineNumber,
                    word.endColumn
                ),
                contents: [
                    { value: `**${word.word}**` },
                    { value: hoverText }
                ]
            };
        }
    });

    // ═══════════════════════════════════════════════════════════════════════════
    //  6. Configuration de l'éditeur
    // ═══════════════════════════════════════════════════════════════════════════

    monaco.editor.defineTheme('navisu4d-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { token: 'keyword.command', foreground: 'C586C0', fontStyle: 'bold' },
            { token: 'keyword', foreground: '569CD6' },
            { token: 'string', foreground: 'CE9178' },
            { token: 'number', foreground: 'B5CEA8' },
            { token: 'number.float', foreground: 'B5CEA8' },
            { token: 'constant.language.boolean', foreground: '569CD6' },
            { token: 'variable.region', foreground: '4EC9B0' },
            { token: 'variable.layer', foreground: '4FC1FF' },
            { token: 'delimiter.comma', foreground: 'D4D4D4' },
            { token: 'invalid', foreground: 'F44747', fontStyle: 'italic' }
        ],
        colors: {
            'editor.background': '#1E1E1E',
            'editor.foreground': '#D4D4D4',
            'editorLineNumber.foreground': '#858585',
            'editor.selectionBackground': '#264F78',
            'editor.inactiveSelectionBackground': '#3A3D41'
        }
    });

    monaco.editor.defineTheme('navisu4d-light', {
        base: 'vs',
        inherit: true,
        rules: [
            { token: 'keyword.command', foreground: 'AF00DB', fontStyle: 'bold' },
            { token: 'keyword', foreground: '0000FF' },
            { token: 'string', foreground: 'A31515' },
            { token: 'number', foreground: '098658' },
            { token: 'number.float', foreground: '098658' },
            { token: 'constant.language.boolean', foreground: '0000FF' },
            { token: 'variable.region', foreground: '267F99' },
            { token: 'variable.layer', foreground: '001080' },
            { token: 'delimiter.comma', foreground: '000000' },
            { token: 'invalid', foreground: 'CD3131', fontStyle: 'italic' }
        ],
        colors: {
            'editor.background': '#FFFFFF',
            'editor.foreground': '#000000'
        }
    });
}

// ═══════════════════════════════════════════════════════════════════════════
//  Helpers
// ═══════════════════════════════════════════════════════════════════════════

function createCompletion(monaco, label, kind, insertText, range) {
    return {
        label,
        kind: monaco.languages.CompletionItemKind[kind] || monaco.languages.CompletionItemKind.Text,
        insertText,
        range
    };
}

function getCommandSuggestions(monaco, range) {
    const commands = [
        { label: 'comment', doc: 'Commentaire / texte libre', snippet: 'comment,"${1:Texte}"' },
        { label: 'bbox', doc: 'Zone d\'affichage', snippet: 'bbox,${1:48.0},${2:-5.0},${3:49.0},${4:2.0}' },
        { label: 'move', doc: 'Position de la caméra', snippet: 'move,flyTo,camera,${1:-4.46},${2:48.5},${3:5000},${4:0},${5:-45},${6:0}' },
        { label: 'daynight', doc: 'Cycle jour/nuit', snippet: 'daynight,${1|true,false|}' },
        { label: 'chart', doc: 'Couche cartographique', snippet: 'chart,${1|vector,raster,mbtiles|},${2:depare}' },
        { label: 'terrain', doc: 'Terrain 3D', snippet: 'terrain,google3d' },
        { label: 'layer', doc: 'Couche de données', snippet: 'layer,${1|bathymetry,altimetry,oceanography|},${2:emodnet}' },
        { label: 'image', doc: 'Image 2D', snippet: 'image,${1:filename.jpg},"${2:Titre}",${3:800},${4:600}' },
        { label: 'video', doc: 'Vidéo', snippet: 'video,${1:https://...},"${2:Titre}",${3:800},${4:600}' },
        { label: 'audio', doc: 'Audio', snippet: 'audio,${1:sound.wav}' },
        { label: 'speech', doc: 'Synthèse vocale', snippet: 'speech,"${1:Texte à prononcer}"' },
        { label: 'simulation', doc: 'Simulation', snippet: 'simulation,${1|json,nmea|},${2:data.json}' },
        { label: 'navigation', doc: 'Navigation', snippet: 'navigation,${1|pilotchart,avurnav,gpx|},${2:param}' },
        { label: 'clear', doc: 'Supprimer une couche', snippet: 'clear,${1:depare}' },
        { label: 'clearAll', doc: 'Tout supprimer', snippet: 'clearAll' }
    ];

    return commands.map(cmd => ({
        label: cmd.label,
        kind: monaco.languages.CompletionItemKind.Function,
        documentation: cmd.doc,
        insertText: cmd.snippet,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        range
    }));
}

function getHoverDocumentation(word) {
    const docs = {
        // Commandes
        'comment': 'Ajoute un commentaire ou texte libre.\nSyntaxe : `#comment,"Texte"`',
        'bbox': 'Définit la zone d\'affichage (bounding box).\nSyntaxe : `#bbox,south,west,north,east`',
        'move': 'Positionne la caméra.\nSyntaxe : `#move,flyTo,camera,lon,lat,height,heading,pitch,roll`',
        'daynight': 'Active ou désactive le cycle jour/nuit.\nSyntaxe : `#daynight,true|false`',
        'chart': 'Ajoute une couche cartographique.\nSyntaxe : `#chart,vector|raster|mbtiles,name`',
        'terrain': 'Active le terrain 3D Google.\nSyntaxe : `#terrain,google3d`',
        'layer': 'Ajoute une couche de données (bathymétrie, altimétrie, océanographie).\nSyntaxe : `#layer,type,params...`',
        'clearAll': 'Supprime toutes les couches affichées.\nSyntaxe : `#clearAll`',

        // Couches vectorielles
        'depare': 'Carte vectorielle S-57 : Profondeurs (DEPth AREa)',
        'buoyage': 'Carte vectorielle S-57 : Balisage maritime',
        'hrbare': 'Carte vectorielle S-57 : Ports et havres (HaRBour AREa)',
        'resare': 'Carte vectorielle S-57 : Zones restreintes (REStricted AREa)',
        'landmark': 'Carte vectorielle S-57 : Amers terrestres',
        'staticLight': 'Carte vectorielle S-57 : Phares et feux fixes',
        'wrecks': 'Carte vectorielle S-57 : Épaves',

        // Sources de données
        'emodnet': 'EMODnet Bathymetry : Modèle bathymétrique européen',
        'gebco': 'GEBCO : General Bathymetric Chart of the Oceans',
        'litto3d': 'Litto3D : Altimétrie littorale SHOM/IGN',

        // Régions
        'guadeloupe': 'Région Litto3D : Guadeloupe',
        'finistere': 'Région Litto3D : Finistère',
        'morbihan': 'Région Litto3D : Morbihan',
        'iroise': 'Zone maritime : Mer d\'Iroise',
        'manche': 'Zone maritime : Manche'
    };

    return docs[word.toLowerCase()] || null;
}

// ═══════════════════════════════════════════════════════════════════════════
//  Export du snippet par défaut
// ═══════════════════════════════════════════════════════════════════════════

export const defaultScenario = `#comment,"Introduction à la navigation maritime"
#bbox,48.0,-5.0,49.0,2.0
#move,flyTo,camera,-4.46,48.5,5000,0,-45,0

#comment,"Affichons la bathymétrie"
#chart,vector,depare

#comment,"Nettoyage"
#clearAll
`;
