# NaVisu4D Monaco Editor

Éditeur syntaxique pour les scénarios NaVisu4D basé sur Monaco Editor (le moteur de VS Code).

## 🚀 Démarrage rapide

### Option 1 : Serveur local simple

```bash
# Avec Python
python3 -m http.server 8000

# Avec Node.js
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis ouvrez : **http://localhost:8000/navisu4d-editor.html**

### Option 2 : Intégration dans votre projet

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/loader.min.js"></script>
</head>
<body>
    <div id="editor" style="height: 600px;"></div>
    
    <script type="module">
        import { registerNaVisu4DLanguage, defaultScenario } from './navisu4d-monaco-config.js';

        require.config({ 
            paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } 
        });

        require(['vs/editor/editor.main'], function() {
            registerNaVisu4DLanguage(monaco);

            const editor = monaco.editor.create(document.getElementById('editor'), {
                value: defaultScenario,
                language: 'navisu4d',
                theme: 'navisu4d-dark'
            });
        });
    </script>
</body>
</html>
```

## ✨ Fonctionnalités

### 1. **Coloration syntaxique**
- Commandes (`#bbox`, `#chart`, etc.) en violet gras
- Chaînes entre guillemets en orange
- Nombres en vert
- Mots-clés (vector, raster, etc.) en bleu
- Régions géographiques en cyan

### 2. **Autocomplétion intelligente**

**Après `#`** — Liste de toutes les commandes :
```
#comment    → #comment,"${1:Texte}"
#bbox       → #bbox,${1:48.0},${2:-5.0},${3:49.0},${4:2.0}
#chart      → #chart,${1|vector,raster,mbtiles|},${2:depare}
```

**Après `#chart,`** — Types de cartes :
```
vector
raster
mbtiles
```

**Après `#chart,vector,`** — Couches vectorielles :
```
depare       // Profondeurs
buoyage      // Balisage
hrbare       // Ports
resare       // Zones restreintes
landmark     // Amers
staticLight  // Phares
wrecks       // Épaves
```

### 3. **Info-bulles (hover)**

Survolez un mot pour voir sa documentation :

- `depare` → "Carte vectorielle S-57 : Profondeurs (DEPth AREa)"
- `emodnet` → "EMODnet Bathymetry : Modèle bathymétrique européen"
- `iroise` → "Zone maritime : Mer d'Iroise"

### 4. **Deux thèmes**

- **navisu4d-dark** — Thème sombre (par défaut)
- **navisu4d-light** — Thème clair

Changez via le bouton 🌓 ou par code :
```javascript
monaco.editor.setTheme('navisu4d-light');
```

## 📦 Fichiers

```
navisu4d-monaco-config.js   Configuration du langage Monaco
navisu4d-editor.html         Application web complète
README-monaco.md             Cette documentation
```

## 🔌 Intégration avec le parser ANTLR

Pour connecter l'éditeur à votre parser `parser.js` :

```javascript
// Dans navisu4d-editor.html, remplacez les stubs par :

import { parseScenario, validateScenario } from './parser.js';

async function parseScenarioReal(code) {
    const result = parseScenario(code);
    return result;
}

async function validateScenarioReal(code) {
    const result = validateScenario(code);
    return result;
}
```

Puis dans les event listeners :

```javascript
document.getElementById('btn-parse').addEventListener('click', async () => {
    const code = editor.getValue();
    const result = parseScenarioReal(code);  // ← Utiliser la vraie fonction
    
    if (result.success) {
        log(`✓ ${result.commands.length} commande(s) parsées`, 'success');
    } else {
        log(`✗ ${result.error}`, 'error');
    }
});
```

## 🎨 Personnalisation

### Ajouter une commande

Dans `navisu4d-monaco-config.js` :

```javascript
// 1. Ajouter dans la liste des commandes (tokenizer)
commands: [
    'comment', 'bbox', 'move', /* ... */
    'maCommande'  // ← Ajouter ici
],

// 2. Ajouter dans l'autocomplétion
function getCommandSuggestions(monaco, range) {
    const commands = [
        /* ... */
        { 
            label: 'maCommande', 
            doc: 'Description de ma commande', 
            snippet: 'maCommande,${1:param1},${2:param2}' 
        }
    ];
    // ...
}

// 3. Ajouter la documentation hover
function getHoverDocumentation(word) {
    const docs = {
        /* ... */
        'macommande': 'Documentation complète de ma commande.\nSyntaxe : `#maCommande,param1,param2`'
    };
    // ...
}
```

### Modifier le thème

```javascript
monaco.editor.defineTheme('navisu4d-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'keyword.command', foreground: 'FF00FF' },  // ← Changer la couleur
        // ...
    ]
});
```

## 🐛 Validation en temps réel

Pour activer la validation pendant la frappe :

```javascript
let validationTimeout;

editor.onDidChangeModelContent(() => {
    clearTimeout(validationTimeout);
    validationTimeout = setTimeout(async () => {
        const code = editor.getValue();
        const result = await validateScenario(code);
        
        if (!result.valid) {
            // Afficher les erreurs dans Monaco
            monaco.editor.setModelMarkers(editor.getModel(), 'navisu4d', 
                result.errors.map((err, i) => ({
                    severity: monaco.MarkerSeverity.Error,
                    startLineNumber: i + 1,
                    startColumn: 1,
                    endLineNumber: i + 1,
                    endColumn: 100,
                    message: err
                }))
            );
        } else {
            monaco.editor.setModelMarkers(editor.getModel(), 'navisu4d', []);
        }
    }, 500);
});
```

## 📱 Responsive

L'éditeur s'adapte automatiquement à la taille de l'écran. Sur mobile (< 768px), la sidebar est masquée automatiquement.

## 🔗 Ressources

- [Monaco Editor Documentation](https://microsoft.github.io/monaco-editor/)
- [Monaco Monarch Language](https://microsoft.github.io/monaco-editor/monarch.html)
- [NaVisu4D OpenAPI Spec](./navisu4d-openapi.yaml)
- [Grammaire ANTLR](./NaVisu4DCommands.g4)

## 💡 Exemples de scénarios

### Scénario minimal
```
#comment,"Exemple minimal"
#bbox,48.0,-5.0,49.0,2.0
#chart,vector,depare
#clearAll
```

### Scénario complet
```
#comment,"Navigation maritime en Bretagne"
#bbox,48.0,-5.0,49.0,2.0
#move,flyTo,camera,-4.46,48.5,5000,0,-45,0

#comment,"Affichage des profondeurs"
#chart,vector,depare

#comment,"Bathymétrie EMODNET"
#layer,bathymetry,emodnet

#comment,"Courants 3D Iroise"
#layer,oceanography,currents,tidalAtlas,3D,iroise,surface

#comment,"Simulation drone"
#simulation,json,drone.json,drone.glb

#comment,"Nettoyage"
#clearAll
```

## 🛠️ Développement

### Structure du code

```javascript
navisu4d-monaco-config.js
├── registerNaVisu4DLanguage()
│   ├── monaco.languages.register()
│   ├── setMonarchTokensProvider()      // Tokenizer
│   ├── registerCompletionItemProvider() // Autocomplétion
│   ├── registerHoverProvider()         // Info-bulles
│   └── defineTheme()                   // Thèmes
├── getCommandSuggestions()
├── getHoverDocumentation()
└── defaultScenario (export)
```

### Débogage

Activez la console Monaco pour voir les tokens :

```javascript
editor.onDidChangeModelContent(() => {
    const model = editor.getModel();
    const tokens = monaco.editor.tokenize(model.getValue(), 'navisu4d');
    console.log(tokens);
});
```

## 📄 Licence

MIT — Utilisez librement dans vos projets.
