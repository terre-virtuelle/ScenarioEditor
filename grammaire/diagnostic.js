#!/usr/bin/env node
/**
 * diagnostic.js
 * 
 * Script de diagnostic pour identifier les problèmes de parsing NaVisu4D
 * 
 * Usage: node diagnostic.js [fichier]
 */

import { readFileSync, existsSync } from 'fs';

const TESTS = [
    // Tests atomiques
    { name: 'clearAll simple', input: '#clearAll' },
    { name: 'bbox simple', input: '#bbox,48,-5,49,2' },
    { name: 'comment avec guillemets doubles', input: '#comment,"Test"' },
    { name: 'comment avec guillemets simples', input: "#comment,'Test'" },
    { name: 'deux commandes', input: '#clearAll#bbox,48,-5,49,2' },
    
    // Tests avec caractères spéciaux
    { name: 'comment avec accent', input: '#comment,"Testé"' },
    { name: 'comment avec apostrophe', input: '#comment,"Test d\'apostrophe"' },
    
    // Tests multi-lignes
    { name: 'deux lignes séparées', input: '#clearAll\n#bbox,48,-5,49,2' },
];

console.log('═══════════════════════════════════════════════════════════');
console.log('  Diagnostic NaVisu4D Parser');
console.log('═══════════════════════════════════════════════════════════\n');

// ─── 1. Vérification des fichiers ────────────────────────────────────────────

console.log('1️⃣  Vérification des fichiers\n');

const files = [
    'NaVisu4DCommands.g4',
    'NaVisu4DCommandsLexer.js',
    'NaVisu4DCommandsParser.js',
    'NaVisu4DCommandsVisitor.js',
    'parser.js',
    'cli.js'
];

let missingFiles = [];
files.forEach(file => {
    if (existsSync(file)) {
        console.log(`   ✅ ${file}`);
    } else {
        console.log(`   ❌ ${file} — MANQUANT !`);
        missingFiles.push(file);
    }
});

if (missingFiles.length > 0) {
    console.log('\n⚠️  Fichiers manquants détectés !');
    if (missingFiles.some(f => f.endsWith('.js') && f.includes('Commands'))) {
        console.log('   → Vous devez régénérer avec ANTLR4 :');
        console.log('   → java -jar antlr4.jar -Dlanguage=JavaScript -visitor NaVisu4DCommands.g4\n');
    }
}

// ─── 2. Vérification de la grammaire ─────────────────────────────────────────

console.log('\n2️⃣  Vérification de la grammaire\n');

if (existsSync('NaVisu4DCommands.g4')) {
    const grammar = readFileSync('NaVisu4DCommands.g4', 'utf-8');
    
    // Vérifier commentCmd
    const commentCmdMatch = grammar.match(/commentCmd\s*:\s*COMMENT\s+(.+?)\s*;/s);
    if (commentCmdMatch) {
        const rule = commentCmdMatch[1].trim();
        console.log(`   commentCmd : COMMENT ${rule} ;`);
        
        if (rule === 'freeText') {
            console.log('   ⚠️  PROBLÈME : Il manque COMMA avant freeText !');
            console.log('   → Devrait être : COMMENT COMMA freeText');
        } else if (rule === 'COMMA freeText') {
            console.log('   ✅ Correct : virgule présente');
        }
    }
    
    // Vérifier freeText
    const freeTextMatch = grammar.match(/freeText\s*:\s*(.+?)\s*;/s);
    if (freeTextMatch) {
        const rule = freeTextMatch[1].trim();
        console.log(`   freeText : ${rule} ;`);
        
        if (rule === 'QUOTED_STRING') {
            console.log('   ✅ Correct : guillemets obligatoires');
        }
    }
    
    // Vérifier QUOTED_STRING
    const quotedMatch = grammar.match(/QUOTED_STRING\s*:\s*(.+?)\s*;/);
    if (quotedMatch) {
        console.log(`   QUOTED_STRING : ${quotedMatch[1]} ;`);
        console.log('   ✅ Token défini');
    }
}

// ─── 3. Test du parser ────────────────────────────────────────────────────────

console.log('\n3️⃣  Tests de parsing\n');

// Essayer d'importer le parser
let parseScenario = null;
try {
    const parserModule = await import('./parser.js');
    parseScenario = parserModule.parseScenario;
    console.log('   ✅ parser.js importé avec succès\n');
} catch (err) {
    console.log(`   ❌ Erreur d'import : ${err.message}\n`);
    
    if (err.message.includes('antlr4')) {
        console.log('   → Installer antlr4 : npm install antlr4\n');
    }
    
    process.exit(1);
}

// Exécuter les tests
let passed = 0;
let failed = 0;

for (const test of TESTS) {
    try {
        const result = parseScenario(test.input);
        
        if (result.success) {
            console.log(`   ✅ ${test.name}`);
            console.log(`      Input: ${test.input.replace(/\n/g, '\\n')}`);
            console.log(`      Commands: ${result.commands.length}`);
            passed++;
        } else {
            console.log(`   ❌ ${test.name}`);
            console.log(`      Input: ${test.input.replace(/\n/g, '\\n')}`);
            console.log(`      Error: ${result.error.split('\n')[0]}`);
            failed++;
        }
    } catch (err) {
        console.log(`   💥 ${test.name}`);
        console.log(`      Input: ${test.input.replace(/\n/g, '\\n')}`);
        console.log(`      Exception: ${err.message}`);
        failed++;
    }
    console.log('');
}

// ─── 4. Test du fichier utilisateur ───────────────────────────────────────────

const userFile = process.argv[2];

if (userFile && existsSync(userFile)) {
    console.log('4️⃣  Test du fichier utilisateur\n');
    console.log(`   Fichier: ${userFile}\n`);
    
    const content = readFileSync(userFile, 'utf-8');
    const lines = content.split('\n').filter(l => l.trim());
    
    console.log(`   Nombre de lignes : ${lines.length}\n`);
    
    // Afficher les 5 premières lignes
    console.log('   Premières lignes :');
    lines.slice(0, 5).forEach((line, i) => {
        // Convertir en hexadécimal pour détecter les caractères spéciaux
        const hex = Buffer.from(line).toString('hex').match(/.{1,2}/g).join(' ');
        console.log(`   ${i + 1}. ${line}`);
        if (line.length < 60) {
            console.log(`      hex: ${hex.substring(0, 80)}...`);
        }
    });
    
    console.log('');
    
    // Tester le parsing complet
    try {
        const result = parseScenario(content);
        
        if (result.success) {
            console.log(`   ✅ Parsing réussi`);
            console.log(`   Commands: ${result.commands.length}`);
            
            // Afficher les types de commandes
            const types = {};
            result.commands.forEach(cmd => {
                types[cmd.type] = (types[cmd.type] || 0) + 1;
            });
            
            console.log('\n   Répartition :');
            Object.entries(types).forEach(([type, count]) => {
                console.log(`      ${type.padEnd(15)} × ${count}`);
            });
        } else {
            console.log(`   ❌ Erreur de parsing`);
            console.log(`\n   ${result.error}\n`);
            
            // Analyser les erreurs ligne par ligne
            const errorLines = result.error.split('\n');
            const lineErrors = errorLines.filter(e => e.match(/^L\d+:/));
            
            if (lineErrors.length > 0) {
                console.log('   Erreurs par ligne :');
                lineErrors.forEach(err => {
                    const match = err.match(/^L(\d+):(\d+)/);
                    if (match) {
                        const lineNum = parseInt(match[1]) - 1;
                        console.log(`   ${err}`);
                        if (lines[lineNum]) {
                            console.log(`      → ${lines[lineNum]}`);
                        }
                    }
                });
            }
        }
    } catch (err) {
        console.log(`   💥 Exception: ${err.message}`);
        console.log(`   ${err.stack}`);
    }
}

// ─── 5. Résumé ────────────────────────────────────────────────────────────────

console.log('\n═══════════════════════════════════════════════════════════');
console.log('  Résumé');
console.log('═══════════════════════════════════════════════════════════\n');

console.log(`   Tests réussis : ${passed}`);
console.log(`   Tests échoués : ${failed}`);

if (failed > 0) {
    console.log('\n⚠️  Des tests ont échoué. Vérifications recommandées :\n');
    console.log('   1. Régénérer le parser avec ANTLR4 :');
    console.log('      java -jar antlr4.jar -Dlanguage=JavaScript -visitor NaVisu4DCommands.g4\n');
    console.log('   2. Vérifier que la règle commentCmd contient bien COMMA :');
    console.log('      commentCmd : COMMENT COMMA freeText ;\n');
    console.log('   3. Installer les dépendances :');
    console.log('      npm install antlr4\n');
}

console.log('═══════════════════════════════════════════════════════════\n');
