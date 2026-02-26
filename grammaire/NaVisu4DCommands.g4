/**
 * NaVisu4DCommands.g4
 *
 * Cette grammaire parse un scénario NaVisu4D complet (multi-lignes).
 * Chaque ligne peut contenir une ou plusieurs commandes enchaînées :
 *   #comment,"Texte"
 *   #bbox,48,-5,49,2
 *   #chart,vector,depare#move,flyTo,camera,-4.46,48.5,5000
 *
 * Avantages :
 *  - Texte libre dans #comment avec guillemets
 *  - Grammaire simple, sans ambiguïté
 *  - Insensible à la casse (fragments A-Z)
 *  - Support multi-lignes
 */
grammar NaVisu4DCommands;

// ══════════════════════════════════════════════════════
//  Point d'entrée : une ou plusieurs commandes
// ══════════════════════════════════════════════════════

commandLine
    : command+ EOF
    ;

command
    : HASH commandBody
    ;

commandBody
    : altymetryCmd
    | audioCmd
    | bathymetryCmd
    | bboxCmd
    | billboardCBCmd
    | billboardCmd
    | chartCmd
    | clearAllCmd
    | clearCmd
    | commentCmd
    | daynightCmd
    | fireworksCmd
    | image3DCmd
    | imageCmd
    | moveCmd
    | navigationCmd
    | oceanographyCmd
    | quizCmd
    | seabedCmd
    | simulationCmd
    | speechCmd
    | terrainCmd
    | textCmd
    | video3DCmd
    | videoCmd
    | webcamCmd
    ;

// ══════════════════════════════════════════════════════
//  Commentaire (texte libre)
// ══════════════════════════════════════════════════════

commentCmd
    : COMMENT COMMA freeText
    ;

// ══════════════════════════════════════════════════════
//  2.2  Zone d'affichage
// ══════════════════════════════════════════════════════

bboxCmd
    : BBOX COMMA num COMMA num COMMA num COMMA num
    ;

// ══════════════════════════════════════════════════════
//  2.3  Position de la caméra
// ══════════════════════════════════════════════════════

moveCmd
    : MOVE COMMA FLYTO COMMA CAMERA COMMA
    num COMMA num COMMA num (COMMA num COMMA num COMMA num)?
    ;

// ══════════════════════════════════════════════════════
//  3    Jour / nuit
// ══════════════════════════════════════════════════════

daynightCmd
    : DAYNIGHT COMMA boolVal
    ;

// ══════════════════════════════════════════════════════
//  4    Cartographie
// ══════════════════════════════════════════════════════

chartCmd
    : CHART COMMA chartType COMMA chartLayer
    ;

chartType
    : VECTOR | RASTER | MBTILES
    ;

chartLayer
    : WORD | INT   // buoyage, depare, 7311, openseaMap…
    ;

// ══════════════════════════════════════════════════════
//  5    Terrain / bâtiments
// ══════════════════════════════════════════════════════

terrainCmd
    : TERRAIN COMMA GOOGLE3D
    ;

// ══════════════════════════════════════════════════════
//  6 & 7   Couches (bathymétrie, altimétrie, océanographie)
// ══════════════════════════════════════════════════════

bathymetryCmd
    : BATHYMETRY COMMA WORD (COMMA SONAR)?
    ;

altymetryCmd
    : ALTIMETRY  COMMA LITTO3D COMMA WORD
    ;

oceanographyCmd
    : OCEANOGRAPHY COMMA oceanType
    ;

oceanType
    : TIDES    COMMA WORD
    | CURRENTS COMMA currentsDetail
    ;

currentsDetail
    : TIDAL_ATLAS COMMA WORD COMMA WORD (COMMA WORD)?
    | FORECAST    COMMA WORD
    ;

// ══════════════════════════════════════════════════════
//  8    Multimédia
// ══════════════════════════════════════════════════════

imageCmd
    : IMAGE COMMA WORD (COMMA freeText)? (COMMA num COMMA num)?
    ;

image3DCmd
    : IMAGE3D COMMA WORD
    ;

videoCmd
    : VIDEO COMMA urlVal COMMA freeText COMMA num COMMA num
    (COMMA num COMMA num)?
    ;

video3DCmd
    : VIDEO3D COMMA urlVal (COMMA boolVal)?
    ;

billboardCmd
    : BILLBOARD COMMA WORD COMMA freeText COMMA num COMMA num
    ;

billboardCBCmd
    : BILLBOARDCB COMMA WORD
    ;

fireworksCmd
    : FIREWORKS COMMA num COMMA num
    ;

textCmd
    : TEXT COMMA freeText (COMMA freeText)?
    ;

audioCmd
    : AUDIO COMMA WORD
    ;

speechCmd
    : SPEECH COMMA freeText
    ;

webcamCmd
    : WEBCAM
    ;

// ══════════════════════════════════════════════════════
//  9    Simulation
// ══════════════════════════════════════════════════════

simulationCmd
    : SIMULATION COMMA (JSON | NMEA) COMMA WORD
    (COMMA simParam)*
    ;

simParam
    : WORD | num | boolVal
    ;

// ══════════════════════════════════════════════════════
//  10   Navigation
// ══════════════════════════════════════════════════════

navigationCmd
    : NAVIGATION COMMA navType
    ;

navType
    : PILOTCHART COMMA NAC COMMA num
    | AVURNAV    COMMA WORD
    | GPX        COMMA WORD
    ;

// ══════════════════════════════════════════════════════
//  11   Fond marin
// ══════════════════════════════════════════════════════

seabedCmd
    : SEABED
    ;

// ══════════════════════════════════════════════════════
//  12   Quiz
// ══════════════════════════════════════════════════════

quizCmd
    : QUIZ COMMA WORD
    ;

// ══════════════════════════════════════════════════════
//  Nettoyage
// ══════════════════════════════════════════════════════

clearCmd
    : CLEAR COMMA WORD
    ;

clearAllCmd
    : CLEARALL
    ;

// ══════════════════════════════════════════════════════
//  Éléments communs
// ══════════════════════════════════════════════════════

num
    : FLOAT | INT
    ;

boolVal
    : TRUE | FALSE
    ;

// Texte libre : OBLIGATOIREMENT entre guillemets pour éviter les ambiguïtés
freeText
    : QUOTED_STRING
    ;

// URL (commence souvent par http)
urlVal
    : QUOTED_STRING
    | WORD
    ;

// ══════════════════════════════════════════════════════
//  Tokens — mots-clés (insensibles à la casse)
// ══════════════════════════════════════════════════════

HASH  : '#' ;
COMMA : ',' ;

// Commandes
COMMENT     : C O M M E N T ;
BBOX        : B B O X | B O X ;
MOVE        : M O V E ;
FLYTO       : F L Y T O | F L Y '_' T O ;
CAMERA      : C A M E R A ;
DAYNIGHT    : D A Y N I G H T ;
CHART       : C H A R T ;
TERRAIN     : T E R R A I N ;
LAYER       : L A Y E R ;
IMAGE3D     : I M A G E '3' D ;
IMAGE       : I M A G E ;
VIDEO3D     : V I D E O '3' D ;
VIDEO       : V I D E O ;
BILLBOARD   : B I L L B O A R D ;
BILLBOARDCB : B I L L B O A R D C B ;
FIREWORKS   : F I R E W O R K S ;
TEXT        : T E X T ;
AUDIO       : A U D I O ;
SPEECH      : S P E E C H ;
WEBCAM      : W E B C A M ;
SIMULATION  : S I M U L A T I O N ;
NAVIGATION  : N A V I G A T I O N ;
SEABED      : S E A B E D ;
QUIZ        : Q U I Z ;
CLEARALL    : C L E A R A L L ;
CLEAR       : C L E A R ;

// Types de cartes
VECTOR  : V E C T O R ;
RASTER  : R A S T E R ;
MBTILES : M B T I L E S ;

// Terrain
GOOGLE3D : G O O G L E '3' D ;

// Couches
BATHYMETRY   : B A T H Y M E T R Y ;
ALTIMETRY    : A L T I M E T R Y ;
OCEANOGRAPHY : O C E A N O G R A P H Y ;
LITTO3D      : L I T T O '3' D ;
SONAR        : S O N A R ;
TIDES        : T I D E S ;
CURRENTS     : C U R R E N T S ;
TIDAL_ATLAS  : T I D A L A T L A S | T I D A L '_' A T L A S ;
FORECAST     : F O R E C A S T ;

// Navigation
PILOTCHART : P I L O T C H A R T ;
NAC        : N A C ;
AVURNAV    : A V U R N A V ;
GPX        : G P X ;

// Simulation formats
JSON : J S O N ;
NMEA : N M E A ;

// Booléens
TRUE  : T R U E ;
FALSE : F A L S E ;

// Nombres
FLOAT : '-'? [0-9]+ '.' [0-9]+ ;
INT   : '-'? [0-9]+ ;

// Chaîne entre guillemets (obligatoire pour texte libre)
QUOTED_STRING : '"' (~["\r\n])* '"' | '\'' (~['\r\n])* '\'' ;

// Mot générique : lettres ASCII, chiffres, tiret, underscore, point
// (couvre noms de fichiers, identifiants, numéros de cartes…)
WORD : [a-zA-Z0-9._-]+ ;

// Espaces (gardés pour freeText, ignorés ailleurs)
WS : [ \t]+ ;

// Retours à la ligne (ignorés)
NEWLINE : [\r\n]+ -> skip ;

// Fragments insensibles à la casse
fragment A:[aA]; fragment B:[bB]; fragment C:[cC]; fragment D:[dD];
fragment E:[eE]; fragment F:[fF]; fragment G:[gG]; fragment H:[hH];
fragment I:[iI]; fragment J:[jJ]; fragment K:[kK]; fragment L:[lL];
fragment M:[mM]; fragment N:[nN]; fragment O:[oO]; fragment P:[pP];
fragment Q:[qQ]; fragment R:[rR]; fragment S:[sS]; fragment T:[tT];
fragment U:[uU]; fragment V:[vV]; fragment W:[wW]; fragment X:[xX];
fragment Y:[yY]; fragment Z:[zZ];
