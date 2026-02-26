# 🔧 Guide de maintenance : Ajouter une nouvelle commande

Ce guide explique comment ajouter une nouvelle commande NaVisu4D sans perdre votre travail lors de la régénération ANTLR.

## 📁 Architecture des fichiers

```
NaVisu4DCommands.g4          ← Grammaire ANTLR (source)
    ↓ [java -jar antlr4.jar]
NaVisu4DCommandsLexer.js     ← Généré (ne PAS modifier)
NaVisu4DCommandsParser.js    ← Généré (ne PAS modifier)
NaVisu4DCommandsVisitor.js   ← Généré (ne PAS modifier)
    ↓ [extends]
command-actions.js           ← VOS actions (à modifier librement)
    ↓ [import]
parser.js                    ← Fonctions de haut niveau
```

## ✅ Règle d'or

**Ne JAMAIS modifier les fichiers générés par ANTLR**

- ❌ `NaVisu4DCommandsLexer.js`
- ❌ `NaVisu4DCommandsParser.js`
- ❌ `NaVisu4DCommandsVisitor.js`

**Toujours modifier `command-actions.js`**

- ✅ `command-actions.js` ← Vos actions de parsing

## 🚀 Ajouter une nouvelle commande

### Exemple : Ajouter `#alert,message,level`

#### 1️⃣ Modifier la grammaire

Ouvrir `NaVisu4DCommands.g4` et ajouter :

```antlr
// Dans commandBody (ligne ~32)
commandBody
    : commentCmd
    | bboxCmd
    | alertCmd       // ← Ajouter ici
    // ...
    ;

// Nouvelle règle (n'importe où, par ex. ligne ~70)
alertCmd
    : ALERT COMMA freeText COMMA WORD
    ;

// Dans les tokens (ligne ~270)
ALERT : A L E R T ;
```

#### 2️⃣ Régénérer le parser

```bash
java -jar antlr4.jar -Dlanguage=JavaScript -visitor NaVisu4DCommands.g4
```

Cela régénère :
- `NaVisu4DCommandsLexer.js` (avec le token ALERT)
- `NaVisu4DCommandsParser.js` (avec la règle alertCmd)
- `NaVisu4DCommandsVisitor.js` (avec visitAlertCmd vide)

#### 3️⃣ Ajouter l'action dans command-actions.js

Ouvrir `command-actions.js` et ajouter :

```javascript
visitAlertCmd(ctx) {
    this.commands.push({
        type:    'alert',
        message: this._freeText(ctx),
        level:   ctx.WORD().getText().toLowerCase()
    });
    return null;
}
```

**C'est tout !** Vos actions sont préservées.

#### 4️⃣ Tester

```bash
echo '#alert,"Test d'alerte",warning' > test.txt
node cli.js parse test.txt
```

Sortie attendue :
```
✓ 1 commande(s)
  1. alert         message=Test d'alerte  level=warning
```

## 🔄 Workflow complet

```
1. Modifier NaVisu4DCommands.g4
   ↓
2. Régénérer : java -jar antlr4.jar ...
   ↓
3. Ajouter visitMaCommandeCmd() dans command-actions.js
   ↓
4. Tester : node cli.js parse test.txt
   ↓
5. Commit : git add NaVisu4DCommands.g4 command-actions.js
```

## 🛠️ Helpers disponibles

Dans `command-actions.js`, utilisez les helpers :

```javascript
// Extraire tous les nombres
const [lon, lat, height] = this._nums(ctx);

// Extraire un texte entre guillemets
const text = this._freeText(ctx);

// Extraire une chaîne directement
const name = ctx.WORD().getText();

// Extraire un booléen
const enabled = ctx.boolVal().getText().toLowerCase() === 'true';
```

## 📝 Template pour nouvelle commande

```javascript
visitMaCommandeCmd(ctx) {
    // 1. Extraire les paramètres du contexte
    const param1 = ctx.WORD().getText();
    const nums = this._nums(ctx);
    const text = this._freeText(ctx);
    
    // 2. Construire l'objet commande
    this.commands.push({
        type: 'maCommande',
        param1,
        value: nums[0],
        text
    });
    
    // 3. Retourner null (standard ANTLR)
    return null;
}
```

## ⚠️ Erreurs courantes

### Erreur : "visitMaCmd is not a function"
→ Vous avez oublié d'ajouter la méthode dans `command-actions.js`

### Erreur : "Cannot read properties of undefined"
→ Vous essayez d'accéder à un token qui n'existe pas dans le contexte
→ Vérifiez que la règle grammaire correspond à l'extraction

### Erreur : "MACMD is not defined"
→ Vous avez oublié d'ajouter le token dans la grammaire
→ Ou vous n'avez pas régénéré avec ANTLR

## 🔍 Débugger une commande

```javascript
visitMaCommandeCmd(ctx) {
    // Afficher le contexte pour voir ce qui est disponible
    console.log('Context:', ctx);
    console.log('Children:', ctx.children);
    console.log('Text:', ctx.getText());
    
    // Vérifier qu'un token existe avant de l'accéder
    if (ctx.WORD && ctx.WORD()) {
        const word = ctx.WORD().getText();
        console.log('WORD:', word);
    }
    
    // ...
}
```

## 📦 Organisation du code

Organisez vos actions par catégorie dans `command-actions.js` :

```javascript
// ═══════════════════════════════════════════════
//  Commandes de base
// ═══════════════════════════════════════════════
visitCommentCmd(ctx) { ... }
visitBboxCmd(ctx) { ... }

// ═══════════════════════════════════════════════
//  Cartographie
// ═══════════════════════════════════════════════
visitChartCmd(ctx) { ... }
visitTerrainCmd(ctx) { ... }

// ═══════════════════════════════════════════════
//  MES NOUVELLES COMMANDES
// ═══════════════════════════════════════════════
visitMaCommandeCmd(ctx) { ... }
```

## 🎯 Avantages de cette architecture

1. ✅ **Séparation claire** : grammaire vs logique métier
2. ✅ **Régénération sans risque** : ANTLR ne touche jamais vos actions
3. ✅ **Maintenance facile** : toutes les actions au même endroit
4. ✅ **Testable** : vous pouvez tester les actions isolément
5. ✅ **Versionnable** : git diff clair sur command-actions.js

## 🔗 Fichiers à versionner

```bash
git add NaVisu4DCommands.g4        # Source de vérité
git add command-actions.js          # Vos actions (important!)
git add parser.js                   # Fonctions de haut niveau

# NE PAS versionner les fichiers générés (ou .gitignore)
echo "*Lexer.js" >> .gitignore
echo "*Parser.js" >> .gitignore
echo "*Visitor.js" >> .gitignore
echo "*.tokens" >> .gitignore
```

## 📚 Ressources

- [ANTLR4 Visitor Pattern](https://github.com/antlr/antlr4/blob/master/doc/listeners.md)
- Grammaire : `NaVisu4DCommands.g4`
- Actions : `command-actions.js`
- Tests : `node cli.js parse <fichier>`
- Diagnostic : `node diagnostic.js <fichier>`

---

**En résumé** : Modifiez la grammaire `.g4`, régénérez, puis ajoutez juste la méthode `visitMaCommandeCmd()` dans `command-actions.js`. Vos actions ne seront jamais écrasées ! 🎉
