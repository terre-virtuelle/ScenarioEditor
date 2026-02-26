# Case-Insensitivity dans ANTLR4

## ❓ Pourquoi `JSON : J S O N` ?

C'est la technique standard pour rendre un lexer ANTLR4 **insensible à la casse** (case-insensitive).

---

## 🔴 Le problème

ANTLR4 est **sensible à la casse par défaut**. Si vous écrivez :

```antlr
JSON : 'json' ;
```

### Résultat :
- ✅ `json` → Accepté
- ❌ `JSON` → **Rejeté**
- ❌ `Json` → **Rejeté**
- ❌ `JsOn` → **Rejeté**

---

## ✅ La solution : fragments case-insensitive

```antlr
JSON : J S O N ;

fragment J : [jJ] ;
fragment S : [sS] ;
fragment O : [oO] ;
fragment N : [nN] ;
```

### Résultat :
- ✅ `json` → Accepté
- ✅ `JSON` → Accepté
- ✅ `Json` → Accepté
- ✅ `JsOn` → Accepté
- ✅ `jSoN` → Accepté

---

## 🔍 Comment ça marche ?

### 1. Fragments ne sont **pas** des tokens

Les `fragment` sont des **blocs de construction réutilisables**. Ils ne matchent **jamais directement** dans le flux de tokens.

```antlr
fragment J : [jJ] ;  // Accepte 'j' OU 'J'
```

### 2. Composition de tokens

```antlr
JSON : J S O N ;
```

Se lit : "Le token JSON est composé de J puis S puis O puis N"

Avec `J : [jJ]`, cela signifie :
- Premier caractère : `j` ou `J`
- Deuxième caractère : `s` ou `S`
- Troisième caractère : `o` ou `O`
- Quatrième caractère : `n` ou `N`

### 3. Combinaisons totales

Avec 4 lettres ayant chacune 2 variantes (minuscule/majuscule), on obtient :

```
2^4 = 16 variantes acceptées
```

Par exemple :
```
json, Json, jSon, jsoN, JSon, JsOn, JsoN, jSON,
JSOn, JSoN, JsON, jSON, JSON, etc.
```

---

## 🎯 Exemple complet

### Grammaire :

```antlr
grammar Example;

// Règle de parsing
command : BBOX | CHART ;

// Tokens case-insensitive
BBOX  : B B O X ;
CHART : C H A R T ;

// Fragments (réutilisables)
fragment A : [aA] ;
fragment B : [bB] ;
fragment C : [cC] ;
fragment H : [hH] ;
fragment O : [oO] ;
fragment R : [rR] ;
fragment T : [tT] ;
fragment X : [xX] ;
```

### Test :

```javascript
// Tous ces inputs sont valides :
"bbox"    // ✅
"BBOX"    // ✅
"BBox"    // ✅
"bBoX"    // ✅

"chart"   // ✅
"CHART"   // ✅
"Chart"   // ✅
"ChArT"   // ✅
```

---

## 🚫 Pourquoi pas `caseInsensitive = true` ?

ANTLR4 supporte une option `caseInsensitive` **MAIS** :

```antlr
options {
    caseInsensitive = true;  // ❌ Ne fonctionne PAS en JavaScript !
}
```

### Support par target :

| Target | Support |
|--------|---------|
| Java | ✅ (depuis ANTLR 4.11) |
| C# | ✅ (depuis ANTLR 4.11) |
| Python | ✅ (depuis ANTLR 4.11) |
| JavaScript | ❌ **NON SUPPORTÉ** |
| TypeScript | ❌ **NON SUPPORTÉ** |
| Go | ❌ **NON SUPPORTÉ** |
| C++ | ❌ **NON SUPPORTÉ** |

Puisque NaVisu4D utilise le **target JavaScript**, on **doit** utiliser les fragments.

---

## 🛠️ Simplification avec un générateur

Au lieu d'écrire manuellement tous les tokens, utilisez le générateur :

```bash
node generate-case-insensitive-tokens.js > tokens.g4
```

### Ajout d'un nouveau token :

```javascript
// Dans generate-case-insensitive-tokens.js
const keywords = [
    'COMMENT', 'BBOX', 'MOVE',
    'MONNOUVEAU',  // ← Ajouter ici
    // ...
];
```

Puis régénérer :

```bash
node generate-case-insensitive-tokens.js
```

Résultat automatique :

```antlr
MONNOUVEAU  : M O N N O U V E A U ;
```

---

## 📊 Comparaison des approches

### Approche 1 : Sensible à la casse (par défaut)

```antlr
JSON : 'json' ;
```

**Avantages :**
- ✅ Simple à écrire
- ✅ Plus lisible

**Inconvénients :**
- ❌ Rejette `JSON`, `Json`, etc.
- ❌ Peu convivial pour l'utilisateur

### Approche 2 : Fragments case-insensitive

```antlr
JSON : J S O N ;
fragment J : [jJ] ;
```

**Avantages :**
- ✅ Accepte toutes les variantes de casse
- ✅ Fonctionne sur **tous les targets**
- ✅ Standard ANTLR4

**Inconvénients :**
- ❌ Verbeux (mais automatisable)
- ❌ Moins lisible à première vue

### Approche 3 : Option `caseInsensitive`

```antlr
options { caseInsensitive = true; }
JSON : 'json' ;
```

**Avantages :**
- ✅ Le plus simple
- ✅ Le plus lisible

**Inconvénients :**
- ❌ **Ne fonctionne PAS en JavaScript**
- ❌ Nécessite ANTLR 4.11+
- ❌ Incompatible avec votre projet

---

## 🎓 Exemples d'autres projets

### SQL (grammaire officielle ANTLR4)

```antlr
SELECT : S E L E C T ;
FROM   : F R O M ;
WHERE  : W H E R E ;

fragment S : [sS] ;
fragment E : [eE] ;
// ...
```

### Python (grammaire officielle)

Python est **sensible à la casse** par conception :
```antlr
IF   : 'if' ;      // Seul 'if' accepté
ELSE : 'else' ;    // 'Else' ou 'ELSE' rejetés
```

### Java (grammaire officielle)

Java est également sensible :
```antlr
CLASS  : 'class' ;
PUBLIC : 'public' ;
```

---

## 💡 Cas particuliers

### Tokens avec chiffres

```antlr
IMAGE3D : I M A G E '3' D ;
LITTO3D : L I T T O '3' D ;
```

Le chiffre `'3'` est **littéral** (pas de fragment).

### Tokens avec underscore

```antlr
TIDAL_ATLAS : T I D A L '_' A T L A S ;
```

L'underscore `'_'` est également littéral.

### Tokens avec plusieurs variantes

```antlr
BBOX : B B O X | B O X ;  // Accepte "bbox" OU "box"
FLYTO : F L Y T O | F L Y '_' T O ;  // "flyTo" OU "fly_to"
```

---

## 🔧 Maintenance

### Problème : Nouveau mot-clé à ajouter

**Avant :**
```antlr
// Ajouter manuellement :
NEWCMD : N E W C M D ;
```

**Après (avec générateur) :**
```javascript
// Ajouter dans le tableau :
const keywords = [
    // ...
    'NEWCMD'
];

// Régénérer automatiquement
node generate-case-insensitive-tokens.js
```

### Problème : Oubli d'un fragment

Sans générateur, vous pouvez oublier :

```antlr
NEWCMD : N E W C M D ;
// ❌ Oubli : fragment M pas défini !
```

Le générateur **garantit** que tous les fragments sont présents.

---

## 📚 Ressources

- [ANTLR4 Documentation](https://github.com/antlr/antlr4/blob/master/doc/index.md)
- [Lexer Rules](https://github.com/antlr/antlr4/blob/master/doc/lexer-rules.md)
- [Case Insensitivity (4.11+)](https://github.com/antlr/antlr4/blob/master/doc/case-insensitivity.md)
- [SQL Grammar Example](https://github.com/antlr/grammars-v4/tree/master/sql)

---

## ✅ Résumé

| Question | Réponse |
|----------|---------|
| Pourquoi `J S O N` ? | Rendre le token insensible à la casse |
| Pourquoi pas `'json'` ? | Rejette `JSON`, `Json`, etc. |
| Pourquoi pas `caseInsensitive = true` ? | Ne fonctionne pas en JavaScript |
| C'est obligatoire ? | Oui, pour accepter toutes les variantes de casse |
| Comment simplifier ? | Utiliser `generate-case-insensitive-tokens.js` |

**En une phrase :** `JSON : J S O N` est la seule façon d'accepter `json`, `JSON`, `Json`, etc. dans un lexer ANTLR4 JavaScript.
