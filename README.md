# 🗺️ NaVisu4D Scenario Editor

Éditeur et parser pour les scénarios de navigation maritime NaVisu4D.

## 🚀 Démarrage rapide

### 1. Lancer l'éditeur

```bash
# Démarrer un serveur HTTP local
python3 -m http.server 3010
# ou
npx http-server

# Ouvrir dans le navigateur
open http://localhost:3010
```

### 2. Utiliser le CLI

```bash
cd grammaire

# Parser un scénario
node cli.js parse exemple_scenario.txt

# Valider
node cli.js validate exemple_scenario.txt

# Statistiques
node cli.js info exemple_scenario.txt

# Exporter en JSON
node cli.js export exemple_scenario.txt
```

## 📁 Structure du projet

```
.
├── index.html                      # Page d'accueil
├── navisu4d-editor.html            # Éditeur Monaco complet
├── navisu4d-monaco-config.js       # Configuration langage
├── README.md                       # Ce fichier
└── grammaire/                      # Tout le parsing
    ├── NaVisu4DCommands.g4         # Grammaire ANTLR4
    ├── command-actions.js          # Actions de parsing (à modifier)
    ├── parser.js                   # API principale
    ├── parser-bundle.js            # Bundle pour navigateur
    ├── build-parser-bundle.js      # Script de build
    ├── cli.js                      # Outils CLI
    ├── dispatcher.js               # Envoi vers backend
    ├── exemple_scenario.txt        # Exemple complet
    ├── tests.js                    # Tests unitaires
    ├── diagnostic.js               # Débogage
    └── docs/
        ├── MAINTENANCE-GUIDE.md    # Ajouter des commandes
        ├── INTEGRATION-MONACO.md   # Intégrer le parser
        └── ANTLR-case-insensitivity.md
```

## ✨ Fonctionnalités

### Éditeur Monaco
- ✅ Coloration syntaxique
- ✅ Autocomplétion intelligente (Ctrl+Space)
- ✅ Info-bulles (hover)
- ✅ Validation en temps réel
- ✅ Snippets avec tabulations
- ✅ Thème clair/sombre

### CLI Tools
- ✅ Parse et validation
- ✅ Export JSON / AST structuré
- ✅ Statistiques
- ✅ Diagnostic de problèmes

### Parser ANTLR4
- ✅ Grammaire complète (45+ commandes)
- ✅ Insensible à la casse
- ✅ Support multi-lignes
- ✅ Actions personnalisables

## 🔧 Développement

### Ajouter une nouvelle commande

```bash
# 1. Modifier la grammaire
vim grammaire/NaVisu4DCommands.g4

# 2. Régénérer avec ANTLR
cd grammaire
java -jar antlr4.jar -Dlanguage=JavaScript -visitor NaVisu4DCommands.g4

# 3. Ajouter l'action dans command-actions.js
vim command-actions.js
# Ajouter : visitMaNouvelleCmd(ctx) { ... }

# 4. Créer le bundle pour le navigateur
node build-parser-bundle.js

# 5. Tester
node cli.js parse test.txt
```

Voir [MAINTENANCE-GUIDE.md](grammaire/MAINTENANCE-GUIDE.md) pour plus de détails.

### Intégrer le parser

```html
<!-- Charger ANTLR4 -->
<script src="https://cdn.jsdelivr.net/npm/antlr4@4.13.1/dist/antlr4.min.js"></script>

<!-- Charger le parser bundle -->
<script type="module">
    import './grammaire/parser-bundle.js';
    
    // Utiliser
    const { parseScenario } = window.NaVisu4DParser;
    const result = parseScenario('#comment,"Test"\n#clearAll');
    console.log(result.commands);
</script>
```

Voir [INTEGRATION-MONACO.md](grammaire/INTEGRATION-MONACO.md) pour plus de détails.

## 📝 Syntaxe des scénarios

### Exemple minimal

```
#comment,"Introduction"
#bbox,48,-5,49,2
#chart,vector,depare
#clearAll
```

### Commandes disponibles

| Catégorie | Commandes |
|-----------|-----------|
| **Base** | comment, bbox, move, daynight |
| **Cartographie** | chart, terrain, layer, clear, clearAll |
| **Multimédia** | image, video, billboard, text, audio, speech, webcam |
| **Simulation** | simulation, navigation |
| **Autres** | seabed, quiz, fireworks |

Voir [exemple_scenario.txt](grammaire/exemple_scenario.txt) pour un exemple complet.

## 🧪 Tests

```bash
cd grammaire

# Tests unitaires
node tests.js

# Diagnostic complet
node diagnostic.js exemple_scenario.txt
```

## 📚 Documentation

- [MAINTENANCE-GUIDE.md](grammaire/MAINTENANCE-GUIDE.md) — Ajouter des commandes
- [INTEGRATION-MONACO.md](grammaire/INTEGRATION-MONACO.md) — Intégrer le parser
- [ANTLR-case-insensitivity.md](grammaire/ANTLR-case-insensitivity.md) — Comprendre la grammaire
- [navisu4d-openapi.yaml](grammaire/navisu4d-openapi.yaml) — Spec de l'API REST

## 🌐 API REST

Le dispatcher peut envoyer les commandes vers le backend NaVisu4D :

```javascript
import { runScenarioText } from './grammaire/dispatcher.js';

await runScenarioText(scenarioText, {
    baseUrl: 'http://navisu4d.org/api/v1',
    originId: 'TV',      // Pool commun
    teamId: '',          // Vide = visible par tous
    dryRun: false        // true = ne pas envoyer
});
```

Voir [navisu4d-openapi.yaml](grammaire/navisu4d-openapi.yaml) pour la spec complète.

## 🛠️ Prérequis

### Pour l'éditeur
- Navigateur moderne (Chrome, Firefox, Safari, Edge)
- Serveur HTTP local (python, node, php, etc.)

### Pour le développement
- Node.js 16+
- Java (pour ANTLR4)
- `antlr4.jar` ([télécharger](https://www.antlr.org/download.html))

### Installation ANTLR4

```bash
# Télécharger
cd /usr/local/lib
sudo curl -O https://www.antlr.org/download/antlr-4.13.1-complete.jar

# Créer un alias
echo 'alias antlr4="java -jar /usr/local/lib/antlr-4.13.1-complete.jar"' >> ~/.bashrc
source ~/.bashrc

# Installer antlr4 runtime pour Node
npm install antlr4
```

## 🐛 Troubleshooting

### Erreur : "Cannot find module 'antlr4'"
```bash
npm install antlr4
```

### Erreur : "Parser bundle not found"
```bash
cd grammaire
node build-parser-bundle.js
```

### L'éditeur ne valide pas
1. Vérifiez que `parser-bundle.js` existe
2. Ouvrez la console du navigateur
3. Testez : `window.NaVisu4DParser.parseScenario('#clearAll')`
4. Si erreur, relancez : `node build-parser-bundle.js`

### Erreur de parsing
```bash
# Diagnostic complet
cd grammaire
node diagnostic.js votre-fichier.txt
```

## 📄 Licence

MIT — Utilisez librement dans vos projets.

## 🔗 Liens

- Site officiel : [navisu4d.org](http://navisu4d.org)
- Grammaire ANTLR4 : `grammaire/NaVisu4DCommands.g4`
- Éditeur en ligne : Ouvrez `index.html`

## 🙏 Contribution

Les contributions sont les bienvenues ! Pour ajouter une commande :

1. Fork le projet
2. Modifiez `grammaire/NaVisu4DCommands.g4`
3. Ajoutez l'action dans `grammaire/command-actions.js`
4. Testez : `node cli.js parse test.txt`
5. Pull request

---

**Questions ?** Consultez la [documentation complète](grammaire/MAINTENANCE-GUIDE.md) ou ouvrez une issue.
