# Charger un fichier externe au démarrage de Monaco Editor

## 🎯 Objectif

Charger un fichier depuis l'extérieur plutôt que d'utiliser `value: defaultScenario` dans la configuration de l'éditeur.

## ✅ Solution 1 : Fetch puis setValue (RECOMMANDÉ)

Créer l'éditeur vide, puis charger le contenu avec `setValue()`.

```javascript
require(['vs/editor/editor.main'], function() {
    // 1. Créer l'éditeur VIDE ou avec placeholder
    const editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: '// Chargement...',
        language: 'navisu4d',
        theme: 'navisu4d-dark',
        fontSize: 14,
        minimap: { enabled: true },
        automaticLayout: true
    });

    // 2. Charger le fichier externe
    fetch('exemple_scenario.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(content => {
            editor.setValue(content);
            log('✓ Fichier chargé : exemple_scenario.txt', 'success');
            setStatus('ready', 'Ready');
            updateStats();
        })
        .catch(error => {
            console.error('Erreur de chargement:', error);
            editor.setValue('# Erreur de chargement\n# ' + error.message);
            log(`✗ Erreur : ${error.message}`, 'error');
            setStatus('error', 'Error');
        });
    
    // 3. Setup des boutons et handlers
    // ...
});
```

### Avantages
- ✅ Séparation claire : création vs chargement
- ✅ Gestion d'erreur facile
- ✅ Affichage progressif possible
- ✅ Pas de blocage de l'UI

## ✅ Solution 2 : Charger AVANT de créer l'éditeur

Charger le fichier d'abord, puis créer l'éditeur avec le contenu.

```javascript
require(['vs/editor/editor.main'], async function() {
    let content = '// Chargement...';
    
    // 1. Charger le fichier d'abord
    try {
        const response = await fetch('exemple_scenario.txt');
        if (response.ok) {
            content = await response.text();
            log('✓ Fichier chargé', 'success');
        } else {
            throw new Error(`HTTP ${response.status}`);
        }
    } catch (error) {
        console.error('Erreur:', error);
        content = '# Erreur de chargement\n# ' + error.message;
        log(`✗ Erreur : ${error.message}`, 'error');
    }
    
    // 2. Créer l'éditeur avec le contenu chargé
    const editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: content,  // ← Contenu chargé
        language: 'navisu4d',
        theme: 'navisu4d-dark',
        fontSize: 14,
        minimap: { enabled: true },
        automaticLayout: true
    });
    
    // 3. Setup des boutons et handlers
    // ...
});
```

### Avantages
- ✅ Un seul rendu de l'éditeur
- ✅ Pas de `setValue()` nécessaire
- ✅ Plus rapide visuellement

### Inconvénients
- ❌ Bloque l'affichage pendant le chargement
- ❌ Pas de feedback visuel pendant le chargement

## ✅ Solution 3 : Paramètre URL

Charger différents fichiers selon l'URL.

```javascript
// Récupérer le paramètre ?file=...
const urlParams = new URLSearchParams(window.location.search);
const filename = urlParams.get('file') || 'exemple_scenario.txt';

require(['vs/editor/editor.main'], function() {
    const editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: '// Chargement de ' + filename + '...',
        language: 'navisu4d',
        theme: 'navisu4d-dark'
    });

    // Charger le fichier spécifié
    fetch(filename)
        .then(response => response.text())
        .then(content => {
            editor.setValue(content);
            log(`✓ Fichier chargé : ${filename}`, 'success');
        })
        .catch(error => {
            editor.setValue('# Erreur de chargement');
            log(`✗ Fichier introuvable : ${filename}`, 'error');
        });
});
```

### Usage
```
http://localhost:8000/editor.html?file=exemple_scenario.txt
http://localhost:8000/editor.html?file=scenarios/demo.txt
```

## ✅ Solution 4 : Liste de fichiers avec sélecteur

Afficher une liste de fichiers disponibles.

```javascript
const FILES = [
    { name: 'Exemple 1', path: 'scenarios/exemple1.txt' },
    { name: 'Exemple 2', path: 'scenarios/exemple2.txt' },
    { name: 'Demo Bretagne', path: 'scenarios/demo_bretagne.txt' }
];

require(['vs/editor/editor.main'], function() {
    const editor = monaco.editor.create(...);

    // Créer le sélecteur
    const select = document.getElementById('file-selector');
    FILES.forEach(file => {
        const option = document.createElement('option');
        option.value = file.path;
        option.textContent = file.name;
        select.appendChild(option);
    });

    // Charger le fichier sélectionné
    function loadFile(path) {
        fetch(path)
            .then(response => response.text())
            .then(content => {
                editor.setValue(content);
                log(`✓ Fichier chargé : ${path}`, 'success');
            })
            .catch(error => {
                log(`✗ Erreur : ${error.message}`, 'error');
            });
    }

    // Charger le premier fichier
    loadFile(FILES[0].path);

    // Écouter les changements
    select.addEventListener('change', (e) => {
        loadFile(e.target.value);
    });
});
```

### HTML associé
```html
<div class="header-actions">
    <select id="file-selector"></select>
    <button id="btn-open">📁 Open</button>
    <button id="btn-parse">Parse</button>
</div>
```

## ✅ Solution 5 : LocalStorage (dernier fichier ouvert)

Mémoriser le dernier fichier ouvert.

```javascript
require(['vs/editor/editor.main'], function() {
    // 1. Récupérer le dernier contenu sauvegardé
    const savedContent = localStorage.getItem('lastScenario');
    const initialContent = savedContent || defaultScenario;

    const editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: initialContent,
        language: 'navisu4d',
        theme: 'navisu4d-dark'
    });

    // 2. Sauvegarder automatiquement
    editor.onDidChangeModelContent(() => {
        const content = editor.getValue();
        localStorage.setItem('lastScenario', content);
    });

    // 3. Au chargement d'un fichier
    document.getElementById('file-input').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            editor.setValue(content);
            localStorage.setItem('lastScenario', content);
            localStorage.setItem('lastFilename', file.name);
        };
        reader.readAsText(file);
    });
});
```

## 📊 Comparaison des solutions

| Solution | Complexité | Use Case | Performance |
|----------|------------|----------|-------------|
| **Fetch puis setValue** | Facile | Fichier fixe | ⭐⭐⭐ Excellent |
| **Fetch avant create** | Facile | Fichier fixe | ⭐⭐ Bon |
| **Paramètre URL** | Facile | Fichiers multiples | ⭐⭐⭐ Excellent |
| **Liste de fichiers** | Moyen | Menu de démo | ⭐⭐ Bon |
| **LocalStorage** | Facile | Persistance session | ⭐⭐⭐ Excellent |

## 🎯 Recommandation pour NaVisu4D

### Cas 1 : Un seul fichier exemple
```javascript
require(['vs/editor/editor.main'], function() {
    const editor = monaco.editor.create(..., {
        value: '// Chargement...'
    });

    fetch('grammaire/exemple_scenario.txt')
        .then(r => r.text())
        .then(content => editor.setValue(content));
});
```

### Cas 2 : Plusieurs fichiers de démo
```javascript
const DEMOS = {
    'intro': 'scenarios/intro.txt',
    'bretagne': 'scenarios/bretagne.txt',
    'méditerranée': 'scenarios/med.txt'
};

// Charger selon ?demo=...
const demo = new URLSearchParams(location.search).get('demo') || 'intro';
fetch(DEMOS[demo]).then(r => r.text()).then(c => editor.setValue(c));
```

### Cas 3 : Combiner avec localStorage
```javascript
// Priorité : localStorage > fichier externe > defaultScenario
const savedContent = localStorage.getItem('lastScenario');

if (savedContent) {
    editor.setValue(savedContent);
} else {
    fetch('exemple_scenario.txt')
        .then(r => r.text())
        .then(c => editor.setValue(c));
}
```

## 🔧 Exemple complet : Fetch avec gestion d'erreur

```javascript
require(['vs/editor/editor.main'], function() {
    // Créer l'éditeur vide
    const editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: '',
        language: 'navisu4d',
        theme: 'navisu4d-dark',
        fontSize: 14,
        minimap: { enabled: true },
        automaticLayout: true,
        readOnly: true  // ← Lecture seule pendant le chargement
    });

    // Afficher un message de chargement
    const loadingMsg = '# Chargement du scénario exemple...\n# Veuillez patienter...';
    editor.setValue(loadingMsg);
    setStatus('parsing', 'Chargement...');

    // Charger le fichier
    fetch('grammaire/exemple_scenario.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Fichier introuvable (${response.status})`);
            }
            return response.text();
        })
        .then(content => {
            editor.setValue(content);
            editor.updateOptions({ readOnly: false });  // ← Autoriser l'édition
            log(`✓ Fichier chargé (${content.length} caractères)`, 'success');
            setStatus('ready', 'Ready');
            updateStats();
        })
        .catch(error => {
            const errorMsg = `# Erreur de chargement
# ${error.message}
#
# Vous pouvez :
# - Cliquer sur "Open" pour charger un fichier
# - Ou commencer à taper votre scénario ici

#comment,"Mon premier scénario"
#bbox,48,-5,49,2
#clearAll`;
            
            editor.setValue(errorMsg);
            editor.updateOptions({ readOnly: false });
            log(`✗ ${error.message}`, 'error');
            setStatus('error', 'Erreur de chargement');
        });

    // Setup des boutons...
});
```

## 📝 Checklist pour l'implémentation

- [ ] Décider quelle solution utiliser
- [ ] Ajouter la gestion d'erreur
- [ ] Afficher un feedback pendant le chargement
- [ ] Tester avec fichier existant
- [ ] Tester avec fichier manquant
- [ ] Tester avec fichier corrompu (UTF-8)
- [ ] Désactiver l'édition pendant le chargement (optionnel)
- [ ] Logger le succès/échec dans la console

## 🚀 Résumé

**Pour charger un fichier externe au lieu de `value: defaultScenario` :**

1. Créer l'éditeur avec `value: ''` ou `value: '// Chargement...'`
2. Utiliser `fetch()` pour charger le fichier
3. Utiliser `editor.setValue(content)` pour mettre à jour le contenu
4. Gérer les erreurs avec `.catch()`

C'est simple, propre et performant ! 🎉
