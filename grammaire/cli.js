#!/usr/bin/env node
/**
 * CLI NaVisu4D Scenario Parser — ES Module
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { parseScenario, validateScenario, astToJson, toStructuredAst } from './parser.js';

const R='\x1b[0m', B='\x1b[1m', RED='\x1b[31m', GRN='\x1b[32m',
      YEL='\x1b[33m', BLU='\x1b[34m', CYN='\x1b[36m';
const c = (t, col) => `${col}${t}${R}`;

function help() {
    console.log(c('\n=== NaVisu4D Scenario Parser ===\n', B));
    console.log('node cli.js parse      <fichier>   Afficher la structure');
    console.log('node cli.js validate   <fichier>   Validation sémantique');
    console.log('node cli.js info       <fichier>   Statistiques');
    console.log('node cli.js export     <fichier>   Exporter commandes en JSON');
    console.log('node cli.js structured <fichier>   Exporter AST structuré (kind:, format:, ...)');
    console.log('node cli.js ast        <fichier>   Exporter l\'AST ANTLR brut en JSON');
    console.log('node cli.js astshow    "#cmd,..."  Afficher l\'AST d\'une commande\n');
}

function load(filename) {
    if (!existsSync(filename)) {
        console.error(c(`✗ Fichier introuvable : ${filename}`, RED));
        process.exit(1);
    }
    return readFileSync(filename, 'utf-8');
}

function doParse(filename) {
    console.log(c(`\n=== Parsing : ${filename} ===\n`, CYN));
    const res = parseScenario(load(filename));

    if (!res.success) {
        console.error(c('✗ Erreur :', RED));
        console.error(res.error);
        process.exit(1);
    }

    console.log(c(`✓ ${res.commands.length} commande(s)\n`, GRN));
    
    res.commands.forEach((cmd, i) => {
        const detail = Object.entries(cmd)
            .filter(([k]) => k !== 'type')
            .map(([k, v]) => `${k}=${Array.isArray(v) ? `[${v.join(',')}]` : v}`)
            .join('  ');
        console.log(`  ${(i + 1).toString().padStart(3)}. ${c(cmd.type.padEnd(12), CYN)} ${detail}`);
    });
    console.log('');
}

function doValidate(filename) {
    console.log(c(`\n=== Validation : ${filename} ===\n`, CYN));
    const v = validateScenario(load(filename));
    if (v.valid) {
        console.log(c('✓ Valide', GRN));
    } else {
        console.log(c(`✗ ${v.errors.length} erreur(s) :`, RED));
        v.errors.forEach(e => console.log(c(`  • ${e}`, RED)));
    }
    if (v.warnings?.length) {
        console.log(c(`\n⚠  ${v.warnings.length} avertissement(s) :`, YEL));
        v.warnings.forEach(w => console.log(c(`  • ${w}`, YEL)));
    }
    console.log('');
    process.exit(v.valid ? 0 : 1);
}

function doInfo(filename) {
    console.log(c(`\n=== Info : ${filename} ===\n`, CYN));
    const res = parseScenario(load(filename));
    if (!res.success) { console.error(c('✗ ' + res.error, RED)); process.exit(1); }

    const types = {};
    res.commands.forEach(cmd => { 
        types[cmd.type] = (types[cmd.type] || 0) + 1; 
    });

    console.log(c('Statistiques :', B));
    console.log(`  Commandes      : ${res.commands.length}`);
    console.log(c('\nTypes de commandes :', B));
    Object.entries(types).sort((a,b) => b[1]-a[1]).forEach(([t,n]) => {
        console.log(`  ${t.padEnd(18)} ${String(n).padStart(3)}  (${((n/res.commands.length)*100).toFixed(1)}%)`);
    });
    console.log('');
}

function doAst(filename) {
    console.log(c(`\n=== AST ANTLR : ${filename} ===\n`, CYN));
    const ast  = scenarioAst(load(filename));
    const out  = filename.replace(/\.[^.]+$/, '.ast.json');
    const json = JSON.stringify(ast, null, 2);
    writeFileSync(out, json, 'utf-8');
    console.log(c(`✓ AST exporté → ${out}  (${json.length} octets)\n`, GRN));
    console.log('Structure :');
    ast.forEach((step, i) => {
        const preview = (step.text || '').replace(/\n/g,' ').substring(0,50);
        console.log(`  Étape ${i+1} : "${preview}"`);
        step.asts.forEach(a => {
            const rules = collectRules(a.ast);
            console.log(`    ${c(a.raw.substring(0,60), YEL)}`);
            console.log(`    Règles : ${rules.join(' → ')}`);
        });
    });
    console.log('');
}

function doAstShow(raw) {
    console.log(c(`\n=== AST de : ${raw} ===\n`, CYN));
    try {
        const ast  = astToJson(raw);
        const json = JSON.stringify(ast, null, 2);
        console.log(json);

        console.log(c('\n── Arbre lisible ──', BLU));
        printTree(ast, '');
        console.log('');
    } catch (e) {
        console.error(c('✗ ' + e.message, RED));
        process.exit(1);
    }
}

// Collecte récursive des noms de règles pour affichage résumé
function collectRules(node, acc = []) {
    if (node.rule) acc.push(node.rule);
    if (node.children) node.children.forEach(ch => collectRules(ch, acc));
    return [...new Set(acc)];
}

// Affichage arborescent lisible dans le terminal
function printTree(node, indent) {
    if (node.token) {
        console.log(`${indent}${c('TOKEN', YEL)} ${c(node.token.type, CYN)} = ${c(JSON.stringify(node.token.text), GRN)}`);
    } else {
        const preview = node.text.length > 40 ? node.text.substring(0, 40) + '…' : node.text;
        console.log(`${indent}${c('RULE', BLU)} ${c(node.rule, B)}  ${c(preview, '\x1b[90m')}`);
        if (node.children) {
            node.children.forEach(ch => printTree(ch, indent + '  '));
        }
    }
}

function doStructured(filename) {
    console.log(c(`\n=== AST structuré : ${filename} ===\n`, CYN));
    const res = parseScenario(load(filename));
    if (!res.success) { console.error(c('✗ ' + res.error, RED)); process.exit(1); }
    
    const ast = toStructuredAst(res);
    const out = filename.replace(/\.[^.]+$/, '.structured.json');
    const json = JSON.stringify(ast, null, 2);
    writeFileSync(out, json, 'utf-8');
    console.log(c(`✓ → ${out}  (${json.length} octets)\n`, GRN));
    
    console.log('Aperçu :');
    console.log(json.substring(0, 500) + (json.length > 500 ? '\n  ...' : ''));
    console.log('');
}

function doExport(filename) {
    console.log(c(`\n=== Export JSON : ${filename} ===\n`, CYN));
    const res = parseScenario(load(filename));
    if (!res.success) { console.error(c('✗ ' + res.error, RED)); process.exit(1); }
    const out  = filename.replace(/\.[^.]+$/, '.json');
    const json = JSON.stringify(res.commands, null, 2);
    writeFileSync(out, json, 'utf-8');
    console.log(c(`✓ → ${out}  (${json.length} octets)\n`, GRN));
}

const [cmd, filename] = process.argv.slice(2);
if (!cmd || cmd === 'help') { help(); process.exit(0); }
if (!filename) { console.error(c('✗ Fichier manquant', RED)); help(); process.exit(1); }

switch (cmd) {
    case 'parse':      doParse(filename);      break;
    case 'validate':   doValidate(filename);   break;
    case 'info':       doInfo(filename);       break;
    case 'export':     doExport(filename);     break;
    case 'structured': doStructured(filename); break;
    case 'ast':        doAst(filename);        break;
    case 'astshow':    doAstShow(filename);    break;
    default:
        console.error(c(`✗ Commande inconnue : ${cmd}`, RED));
        help(); process.exit(1);
}
