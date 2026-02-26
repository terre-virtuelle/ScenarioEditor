#!/usr/bin/env node
/**
 * generate-case-insensitive-tokens.js
 * 
 * Génère automatiquement les tokens ANTLR4 case-insensitive
 * à partir d'une liste de mots-clés.
 * 
 * Usage :
 *   node generate-case-insensitive-tokens.js                    # Affiche dans stdout
 *   node generate-case-insensitive-tokens.js > tokens.g4        # Sauvegarde dans fichier
 *   node generate-case-insensitive-tokens.js --check            # Vérifie les fragments manquants
 */

const keywords = [
    // Commandes principales
    'COMMENT', 'BBOX', 'MOVE', 'FLYTO', 'CAMERA', 'DAYNIGHT',
    'CHART', 'TERRAIN', 'LAYER',
    'IMAGE', 'IMAGE3D', 'VIDEO', 'VIDEO3D',
    'BILLBOARD', 'BILLBOARDCB', 'FIREWORKS',
    'TEXT', 'AUDIO', 'SPEECH', 'WEBCAM',
    'SIMULATION', 'NAVIGATION', 'SEABED', 'QUIZ',
    'CLEAR', 'CLEARALL',
    
    // Types de cartes
    'VECTOR', 'RASTER', 'MBTILES',
    
    // Terrain
    'GOOGLE3D',
    
    // Couches
    'BATHYMETRY', 'ALTIMETRY', 'OCEANOGRAPHY',
    'LITTO3D', 'SONAR',
    'TIDES', 'CURRENTS', 'TIDALATLAS', 'FORECAST',
    
    // Navigation
    'PILOTCHART', 'NAC', 'AVURNAV', 'GPX',
    
    // Formats
    'JSON', 'NMEA',
    
    // Booléens
    'TRUE', 'FALSE'
];

// ═══════════════════════════════════════════════════════════════════════════
//  Configuration
// ═══════════════════════════════════════════════════════════════════════════

const config = {
    // Largeur de colonne pour l'alignement
    columnWidth: 12,
    
    // Sections (pour l'organisation)
    sections: {
        'COMMENT': '// Commandes principales',
        'VECTOR': '// Types de cartes',
        'GOOGLE3D': '// Terrain',
        'BATHYMETRY': '// Couches',
        'PILOTCHART': '// Navigation',
        'JSON': '// Formats',
        'TRUE': '// Booléens'
    }
};

// ═══════════════════════════════════════════════════════════════════════════
//  Helpers
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Convertit un mot en séquence de fragments case-insensitive
 * "JSON" → "J S O N"
 * "BBOX" → "B B O X"
 * "IMAGE3D" → "I M A G E '3' D"
 */
function toFragmentSequence(word) {
    return word.split('').map(char => {
        // Les chiffres et underscore restent littéraux
        if (/[0-9_]/.test(char)) {
            return `'${char}'`;
        }
        return char;
    }).join(' ');
}

/**
 * Génère la définition d'un token case-insensitive
 * "JSON" → "JSON        : J S O N ;"
 */
function generateToken(keyword) {
    const sequence = toFragmentSequence(keyword);
    const padding = ' '.repeat(Math.max(1, config.columnWidth - keyword.length));
    return `${keyword}${padding}: ${sequence} ;`;
}

/**
 * Extrait toutes les lettres uniques utilisées dans les keywords
 */
function extractUsedLetters() {
    const letters = new Set();
    keywords.forEach(keyword => {
        keyword.split('').forEach(char => {
            if (/[A-Z]/.test(char)) {
                letters.add(char);
            }
        });
    });
    return Array.from(letters).sort();
}

/**
 * Génère tous les tokens avec sections
 */
function generateAllTokens() {
    console.log('// ══════════════════════════════════════════════════════');
    console.log('//  Tokens — mots-clés (insensibles à la casse)');
    console.log('// ══════════════════════════════════════════════════════\n');
    console.log('HASH  : \'#\' ;');
    console.log('COMMA : \',\' ;\n');
    
    keywords.forEach((keyword, i) => {
        // Afficher le titre de section si défini
        if (config.sections[keyword]) {
            if (i > 0) console.log('');
            console.log(config.sections[keyword]);
        }
        
        console.log(generateToken(keyword));
    });
}

/**
 * Génère les fragments (lettres A-Z)
 * Affiche seulement les lettres utilisées
 */
function generateFragments(mode = 'all') {
    console.log('\n// ══════════════════════════════════════════════════════');
    console.log('//  Fragments (insensibles à la casse)');
    console.log('// ══════════════════════════════════════════════════════\n');
    
    const letters = mode === 'used' 
        ? extractUsedLetters() 
        : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    const lines = [];
    
    for (let i = 0; i < letters.length; i += 4) {
        const chunk = letters.slice(i, i + 4);
        const fragments = chunk.map(letter => 
            `fragment ${letter}:[${letter.toLowerCase()}${letter}]`
        ).join('; ');
        lines.push(fragments + ';');
    }
    
    lines.forEach(line => console.log(line));
    
    if (mode === 'used') {
        console.log(`\n// ${letters.length}/26 lettres utilisées`);
    }
}

/**
 * Génère les autres tokens (nombres, chaînes, etc.)
 */
function generateOtherTokens() {
    console.log('\n// ══════════════════════════════════════════════════════');
    console.log('//  Nombres et chaînes');
    console.log('// ══════════════════════════════════════════════════════\n');
    console.log('FLOAT : \'-\'? [0-9]+ \'.\' [0-9]+ ;');
    console.log('INT   : \'-\'? [0-9]+ ;\n');
    console.log('// Chaîne entre guillemets (obligatoire pour texte libre)');
    console.log(`QUOTED_STRING : '"' (~["\r\n])* '"' | '\\'' (~['\r\n])* '\\'' ;`);
    console.log('\n// Mot générique : lettres ASCII, chiffres, tiret, underscore, point');
    console.log('WORD : [a-zA-Z0-9._-]+ ;\n');
    console.log('// Espaces (gardés pour freeText, ignorés ailleurs)');
    console.log('WS : [ \\t]+ ;');
}

/**
 * Mode vérification : liste les fragments manquants
 */
function checkMode() {
    const usedLetters = new Set(extractUsedLetters());
    const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const unused = allLetters.filter(l => !usedLetters.has(l));
    
    console.log('═══════════════════════════════════════════════════════════');
    console.log('  Vérification des fragments');
    console.log('═══════════════════════════════════════════════════════════\n');
    
    console.log(`✓ Lettres utilisées : ${usedLetters.size}/26`);
    console.log(`  ${Array.from(usedLetters).join(' ')}\n`);
    
    if (unused.length > 0) {
        console.log(`ℹ Lettres non utilisées : ${unused.length}/26`);
        console.log(`  ${unused.join(' ')}\n`);
        console.log('→ Vous pouvez générer seulement les fragments utilisés avec --used\n');
    } else {
        console.log('→ Toutes les lettres sont utilisées\n');
    }
    
    // Vérifier les caractères spéciaux
    const specialChars = new Set();
    keywords.forEach(kw => {
        kw.split('').forEach(char => {
            if (/[0-9_]/.test(char)) {
                specialChars.add(char);
            }
        });
    });
    
    if (specialChars.size > 0) {
        console.log(`ℹ Caractères spéciaux détectés : ${Array.from(specialChars).join(' ')}`);
        console.log('  (Ces caractères sont automatiquement mis entre guillemets)\n');
    }
    
    // Statistiques
    console.log('═══════════════════════════════════════════════════════════');
    console.log('  Statistiques');
    console.log('═══════════════════════════════════════════════════════════\n');
    console.log(`Total mots-clés : ${keywords.length}`);
    
    const byLength = {};
    keywords.forEach(kw => {
        const len = kw.length;
        byLength[len] = (byLength[len] || 0) + 1;
    });
    
    console.log('\nDistribution par longueur :');
    Object.entries(byLength)
        .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
        .forEach(([len, count]) => {
            const bar = '█'.repeat(Math.ceil(count / 2));
            console.log(`  ${len.padStart(2)} caractères : ${bar} ${count}`);
        });
    
    console.log('\n═══════════════════════════════════════════════════════════\n');
}

/**
 * Mode statistiques : affiche des infos sur les keywords
 */
function statsMode() {
    console.log('═══════════════════════════════════════════════════════════');
    console.log('  Liste des mots-clés');
    console.log('═══════════════════════════════════════════════════════════\n');
    
    let currentSection = '';
    keywords.forEach((kw, i) => {
        if (config.sections[kw]) {
            if (currentSection) console.log('');
            currentSection = config.sections[kw];
            console.log(currentSection);
        }
        console.log(`  ${(i + 1).toString().padStart(2)}. ${kw.padEnd(15)} → ${toFragmentSequence(kw)}`);
    });
    
    console.log('\n═══════════════════════════════════════════════════════════\n');
}

// ═══════════════════════════════════════════════════════════════════════════
//  Main
// ═══════════════════════════════════════════════════════════════════════════

const args = process.argv.slice(2);
const mode = args[0];

if (mode === '--check') {
    checkMode();
    process.exit(0);
}

if (mode === '--stats') {
    statsMode();
    process.exit(0);
}

if (mode === '--help') {
    console.log('Usage:');
    console.log('  node generate-case-insensitive-tokens.js                # Génère tokens (stdout)');
    console.log('  node generate-case-insensitive-tokens.js > tokens.g4   # Sauvegarde dans fichier');
    console.log('  node generate-case-insensitive-tokens.js --check       # Vérifie fragments manquants');
    console.log('  node generate-case-insensitive-tokens.js --stats       # Affiche statistiques');
    console.log('  node generate-case-insensitive-tokens.js --used        # Génère seulement fragments utilisés');
    process.exit(0);
}

// Mode génération
console.log('/**');
console.log(' * Tokens ANTLR4 case-insensitive générés automatiquement');
console.log(' * Généré le:', new Date().toISOString());
console.log(` * Total mots-clés : ${keywords.length}`);
console.log(' * ');
console.log(' * Pour ajouter un nouveau mot-clé :');
console.log(' * 1. Ajouter dans le tableau `keywords` (ligne 13)');
console.log(' * 2. Relancer : node generate-case-insensitive-tokens.js');
console.log(' */\n');

generateAllTokens();
generateOtherTokens();

// Générer tous les fragments ou seulement ceux utilisés
const fragmentMode = mode === '--used' ? 'used' : 'all';
generateFragments(fragmentMode);

console.log('\n// ═══════════════════════════════════════════════════════════════════════════');
console.log('// Fin du fichier généré');
console.log('// ═══════════════════════════════════════════════════════════════════════════');

