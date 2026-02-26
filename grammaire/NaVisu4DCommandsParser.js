// Generated from NaVisu4DCommands.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import NaVisu4DCommandsListener from './NaVisu4DCommandsListener.js';
import NaVisu4DCommandsVisitor from './NaVisu4DCommandsVisitor.js';

const serializedATN = [4,1,55,340,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,0,4,0,80,8,0,11,0,12,0,81,1,
0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,115,8,2,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,149,8,5,1,6,1,6,1,6,1,
6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,
1,11,1,11,1,11,3,11,174,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,
1,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,192,8,14,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,3,15,201,8,15,1,15,1,15,1,15,3,15,206,8,15,1,16,1,16,1,16,1,16,
1,16,3,16,213,8,16,1,16,1,16,1,16,1,16,1,16,3,16,220,8,16,1,17,1,17,1,17,
1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,3,18,240,8,18,1,19,1,19,1,19,1,19,1,19,3,19,247,8,19,1,20,1,20,1,20,1,
20,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,
1,22,1,22,1,23,1,23,1,23,1,23,1,23,3,23,274,8,23,1,24,1,24,1,24,1,24,1,25,
1,25,1,25,1,25,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,5,27,293,8,27,
10,27,12,27,296,9,27,1,28,1,28,1,28,3,28,301,8,28,1,29,1,29,1,29,1,29,1,
30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,318,8,30,1,31,
1,31,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,
36,1,37,1,37,1,38,1,38,1,38,0,0,39,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
76,0,6,1,0,29,31,2,0,51,51,53,53,1,0,46,47,1,0,50,51,1,0,48,49,1,0,52,53,
341,0,79,1,0,0,0,2,85,1,0,0,0,4,114,1,0,0,0,6,116,1,0,0,0,8,120,1,0,0,0,
10,130,1,0,0,0,12,150,1,0,0,0,14,154,1,0,0,0,16,160,1,0,0,0,18,162,1,0,0,
0,20,164,1,0,0,0,22,168,1,0,0,0,24,175,1,0,0,0,26,181,1,0,0,0,28,191,1,0,
0,0,30,205,1,0,0,0,32,207,1,0,0,0,34,221,1,0,0,0,36,225,1,0,0,0,38,241,1,
0,0,0,40,248,1,0,0,0,42,258,1,0,0,0,44,262,1,0,0,0,46,268,1,0,0,0,48,275,
1,0,0,0,50,279,1,0,0,0,52,283,1,0,0,0,54,285,1,0,0,0,56,300,1,0,0,0,58,302,
1,0,0,0,60,317,1,0,0,0,62,319,1,0,0,0,64,321,1,0,0,0,66,325,1,0,0,0,68,329,
1,0,0,0,70,331,1,0,0,0,72,333,1,0,0,0,74,335,1,0,0,0,76,337,1,0,0,0,78,80,
3,2,1,0,79,78,1,0,0,0,80,81,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,83,1,
0,0,0,83,84,5,0,0,1,84,1,1,0,0,0,85,86,5,1,0,0,86,87,3,4,2,0,87,3,1,0,0,
0,88,115,3,24,12,0,89,115,3,48,24,0,90,115,3,22,11,0,91,115,3,8,4,0,92,115,
3,42,21,0,93,115,3,40,20,0,94,115,3,14,7,0,95,115,3,68,34,0,96,115,3,66,
33,0,97,115,3,6,3,0,98,115,3,12,6,0,99,115,3,44,22,0,100,115,3,34,17,0,101,
115,3,32,16,0,102,115,3,10,5,0,103,115,3,58,29,0,104,115,3,26,13,0,105,115,
3,64,32,0,106,115,3,62,31,0,107,115,3,54,27,0,108,115,3,50,25,0,109,115,
3,20,10,0,110,115,3,46,23,0,111,115,3,38,19,0,112,115,3,36,18,0,113,115,
3,52,26,0,114,88,1,0,0,0,114,89,1,0,0,0,114,90,1,0,0,0,114,91,1,0,0,0,114,
92,1,0,0,0,114,93,1,0,0,0,114,94,1,0,0,0,114,95,1,0,0,0,114,96,1,0,0,0,114,
97,1,0,0,0,114,98,1,0,0,0,114,99,1,0,0,0,114,100,1,0,0,0,114,101,1,0,0,0,
114,102,1,0,0,0,114,103,1,0,0,0,114,104,1,0,0,0,114,105,1,0,0,0,114,106,
1,0,0,0,114,107,1,0,0,0,114,108,1,0,0,0,114,109,1,0,0,0,114,110,1,0,0,0,
114,111,1,0,0,0,114,112,1,0,0,0,114,113,1,0,0,0,115,5,1,0,0,0,116,117,5,
3,0,0,117,118,5,2,0,0,118,119,3,74,37,0,119,7,1,0,0,0,120,121,5,4,0,0,121,
122,5,2,0,0,122,123,3,70,35,0,123,124,5,2,0,0,124,125,3,70,35,0,125,126,
5,2,0,0,126,127,3,70,35,0,127,128,5,2,0,0,128,129,3,70,35,0,129,9,1,0,0,
0,130,131,5,5,0,0,131,132,5,2,0,0,132,133,5,6,0,0,133,134,5,2,0,0,134,135,
5,7,0,0,135,136,5,2,0,0,136,137,3,70,35,0,137,138,5,2,0,0,138,139,3,70,35,
0,139,140,5,2,0,0,140,148,3,70,35,0,141,142,5,2,0,0,142,143,3,70,35,0,143,
144,5,2,0,0,144,145,3,70,35,0,145,146,5,2,0,0,146,147,3,70,35,0,147,149,
1,0,0,0,148,141,1,0,0,0,148,149,1,0,0,0,149,11,1,0,0,0,150,151,5,8,0,0,151,
152,5,2,0,0,152,153,3,72,36,0,153,13,1,0,0,0,154,155,5,9,0,0,155,156,5,2,
0,0,156,157,3,16,8,0,157,158,5,2,0,0,158,159,3,18,9,0,159,15,1,0,0,0,160,
161,7,0,0,0,161,17,1,0,0,0,162,163,7,1,0,0,163,19,1,0,0,0,164,165,5,10,0,
0,165,166,5,2,0,0,166,167,5,32,0,0,167,21,1,0,0,0,168,169,5,33,0,0,169,170,
5,2,0,0,170,173,5,53,0,0,171,172,5,2,0,0,172,174,5,37,0,0,173,171,1,0,0,
0,173,174,1,0,0,0,174,23,1,0,0,0,175,176,5,34,0,0,176,177,5,2,0,0,177,178,
5,36,0,0,178,179,5,2,0,0,179,180,5,53,0,0,180,25,1,0,0,0,181,182,5,35,0,
0,182,183,5,2,0,0,183,184,3,28,14,0,184,27,1,0,0,0,185,186,5,38,0,0,186,
187,5,2,0,0,187,192,5,53,0,0,188,189,5,39,0,0,189,190,5,2,0,0,190,192,3,
30,15,0,191,185,1,0,0,0,191,188,1,0,0,0,192,29,1,0,0,0,193,194,5,40,0,0,
194,195,5,2,0,0,195,196,5,53,0,0,196,197,5,2,0,0,197,200,5,53,0,0,198,199,
5,2,0,0,199,201,5,53,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,206,1,0,0,0,
202,203,5,41,0,0,203,204,5,2,0,0,204,206,5,53,0,0,205,193,1,0,0,0,205,202,
1,0,0,0,206,31,1,0,0,0,207,208,5,13,0,0,208,209,5,2,0,0,209,212,5,53,0,0,
210,211,5,2,0,0,211,213,3,74,37,0,212,210,1,0,0,0,212,213,1,0,0,0,213,219,
1,0,0,0,214,215,5,2,0,0,215,216,3,70,35,0,216,217,5,2,0,0,217,218,3,70,35,
0,218,220,1,0,0,0,219,214,1,0,0,0,219,220,1,0,0,0,220,33,1,0,0,0,221,222,
5,12,0,0,222,223,5,2,0,0,223,224,5,53,0,0,224,35,1,0,0,0,225,226,5,15,0,
0,226,227,5,2,0,0,227,228,3,76,38,0,228,229,5,2,0,0,229,230,3,74,37,0,230,
231,5,2,0,0,231,232,3,70,35,0,232,233,5,2,0,0,233,239,3,70,35,0,234,235,
5,2,0,0,235,236,3,70,35,0,236,237,5,2,0,0,237,238,3,70,35,0,238,240,1,0,
0,0,239,234,1,0,0,0,239,240,1,0,0,0,240,37,1,0,0,0,241,242,5,14,0,0,242,
243,5,2,0,0,243,246,3,76,38,0,244,245,5,2,0,0,245,247,3,72,36,0,246,244,
1,0,0,0,246,247,1,0,0,0,247,39,1,0,0,0,248,249,5,16,0,0,249,250,5,2,0,0,
250,251,5,53,0,0,251,252,5,2,0,0,252,253,3,74,37,0,253,254,5,2,0,0,254,255,
3,70,35,0,255,256,5,2,0,0,256,257,3,70,35,0,257,41,1,0,0,0,258,259,5,17,
0,0,259,260,5,2,0,0,260,261,5,53,0,0,261,43,1,0,0,0,262,263,5,18,0,0,263,
264,5,2,0,0,264,265,3,70,35,0,265,266,5,2,0,0,266,267,3,70,35,0,267,45,1,
0,0,0,268,269,5,19,0,0,269,270,5,2,0,0,270,273,3,74,37,0,271,272,5,2,0,0,
272,274,3,74,37,0,273,271,1,0,0,0,273,274,1,0,0,0,274,47,1,0,0,0,275,276,
5,20,0,0,276,277,5,2,0,0,277,278,5,53,0,0,278,49,1,0,0,0,279,280,5,21,0,
0,280,281,5,2,0,0,281,282,3,74,37,0,282,51,1,0,0,0,283,284,5,22,0,0,284,
53,1,0,0,0,285,286,5,23,0,0,286,287,5,2,0,0,287,288,7,2,0,0,288,289,5,2,
0,0,289,294,5,53,0,0,290,291,5,2,0,0,291,293,3,56,28,0,292,290,1,0,0,0,293,
296,1,0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,55,1,0,0,0,296,294,1,0,0,
0,297,301,5,53,0,0,298,301,3,70,35,0,299,301,3,72,36,0,300,297,1,0,0,0,300,
298,1,0,0,0,300,299,1,0,0,0,301,57,1,0,0,0,302,303,5,24,0,0,303,304,5,2,
0,0,304,305,3,60,30,0,305,59,1,0,0,0,306,307,5,42,0,0,307,308,5,2,0,0,308,
309,5,43,0,0,309,310,5,2,0,0,310,318,3,70,35,0,311,312,5,44,0,0,312,313,
5,2,0,0,313,318,5,53,0,0,314,315,5,45,0,0,315,316,5,2,0,0,316,318,5,53,0,
0,317,306,1,0,0,0,317,311,1,0,0,0,317,314,1,0,0,0,318,61,1,0,0,0,319,320,
5,25,0,0,320,63,1,0,0,0,321,322,5,26,0,0,322,323,5,2,0,0,323,324,5,53,0,
0,324,65,1,0,0,0,325,326,5,28,0,0,326,327,5,2,0,0,327,328,5,53,0,0,328,67,
1,0,0,0,329,330,5,27,0,0,330,69,1,0,0,0,331,332,7,3,0,0,332,71,1,0,0,0,333,
334,7,4,0,0,334,73,1,0,0,0,335,336,5,52,0,0,336,75,1,0,0,0,337,338,7,5,0,
0,338,77,1,0,0,0,15,81,114,148,173,191,200,205,212,219,239,246,273,294,300,
317];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class NaVisu4DCommandsParser extends antlr4.Parser {

    static grammarFileName = "NaVisu4DCommands.g4";
    static literalNames = [ null, "'#'", "','" ];
    static symbolicNames = [ null, "HASH", "COMMA", "COMMENT", "BBOX", "MOVE", 
                             "FLYTO", "CAMERA", "DAYNIGHT", "CHART", "TERRAIN", 
                             "LAYER", "IMAGE3D", "IMAGE", "VIDEO3D", "VIDEO", 
                             "BILLBOARD", "BILLBOARDCB", "FIREWORKS", "TEXT", 
                             "AUDIO", "SPEECH", "WEBCAM", "SIMULATION", 
                             "NAVIGATION", "SEABED", "QUIZ", "CLEARALL", 
                             "CLEAR", "VECTOR", "RASTER", "MBTILES", "GOOGLE3D", 
                             "BATHYMETRY", "ALTIMETRY", "OCEANOGRAPHY", 
                             "LITTO3D", "SONAR", "TIDES", "CURRENTS", "TIDAL_ATLAS", 
                             "FORECAST", "PILOTCHART", "NAC", "AVURNAV", 
                             "GPX", "JSON", "NMEA", "TRUE", "FALSE", "FLOAT", 
                             "INT", "QUOTED_STRING", "WORD", "WS", "NEWLINE" ];
    static ruleNames = [ "commandLine", "command", "commandBody", "commentCmd", 
                         "bboxCmd", "moveCmd", "daynightCmd", "chartCmd", 
                         "chartType", "chartLayer", "terrainCmd", "bathymetryCmd", 
                         "altymetryCmd", "oceanographyCmd", "oceanType", 
                         "currentsDetail", "imageCmd", "image3DCmd", "videoCmd", 
                         "video3DCmd", "billboardCmd", "billboardCBCmd", 
                         "fireworksCmd", "textCmd", "audioCmd", "speechCmd", 
                         "webcamCmd", "simulationCmd", "simParam", "navigationCmd", 
                         "navType", "seabedCmd", "quizCmd", "clearCmd", 
                         "clearAllCmd", "num", "boolVal", "freeText", "urlVal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = NaVisu4DCommandsParser.ruleNames;
        this.literalNames = NaVisu4DCommandsParser.literalNames;
        this.symbolicNames = NaVisu4DCommandsParser.symbolicNames;
    }



	commandLine() {
	    let localctx = new CommandLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, NaVisu4DCommandsParser.RULE_commandLine);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 78;
	            this.command();
	            this.state = 81; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 83;
	        this.match(NaVisu4DCommandsParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, NaVisu4DCommandsParser.RULE_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(NaVisu4DCommandsParser.HASH);
	        this.state = 86;
	        this.commandBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commandBody() {
	    let localctx = new CommandBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, NaVisu4DCommandsParser.RULE_commandBody);
	    try {
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.altymetryCmd();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 89;
	            this.audioCmd();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 90;
	            this.bathymetryCmd();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 91;
	            this.bboxCmd();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 92;
	            this.billboardCBCmd();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 93;
	            this.billboardCmd();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 94;
	            this.chartCmd();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 95;
	            this.clearAllCmd();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 96;
	            this.clearCmd();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 97;
	            this.commentCmd();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 98;
	            this.daynightCmd();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 99;
	            this.fireworksCmd();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 100;
	            this.image3DCmd();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 101;
	            this.imageCmd();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 102;
	            this.moveCmd();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 103;
	            this.navigationCmd();
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 104;
	            this.oceanographyCmd();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 105;
	            this.quizCmd();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 106;
	            this.seabedCmd();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 107;
	            this.simulationCmd();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 108;
	            this.speechCmd();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 109;
	            this.terrainCmd();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 110;
	            this.textCmd();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 111;
	            this.video3DCmd();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 112;
	            this.videoCmd();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 113;
	            this.webcamCmd();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commentCmd() {
	    let localctx = new CommentCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, NaVisu4DCommandsParser.RULE_commentCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(NaVisu4DCommandsParser.COMMENT);
	        this.state = 117;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 118;
	        this.freeText();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bboxCmd() {
	    let localctx = new BboxCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, NaVisu4DCommandsParser.RULE_bboxCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(NaVisu4DCommandsParser.BBOX);
	        this.state = 121;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 122;
	        this.num();
	        this.state = 123;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 124;
	        this.num();
	        this.state = 125;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 126;
	        this.num();
	        this.state = 127;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 128;
	        this.num();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	moveCmd() {
	    let localctx = new MoveCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, NaVisu4DCommandsParser.RULE_moveCmd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(NaVisu4DCommandsParser.MOVE);
	        this.state = 131;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 132;
	        this.match(NaVisu4DCommandsParser.FLYTO);
	        this.state = 133;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 134;
	        this.match(NaVisu4DCommandsParser.CAMERA);
	        this.state = 135;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 136;
	        this.num();
	        this.state = 137;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 138;
	        this.num();
	        this.state = 139;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 140;
	        this.num();
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 141;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 142;
	            this.num();
	            this.state = 143;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 144;
	            this.num();
	            this.state = 145;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 146;
	            this.num();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	daynightCmd() {
	    let localctx = new DaynightCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, NaVisu4DCommandsParser.RULE_daynightCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(NaVisu4DCommandsParser.DAYNIGHT);
	        this.state = 151;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 152;
	        this.boolVal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chartCmd() {
	    let localctx = new ChartCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, NaVisu4DCommandsParser.RULE_chartCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(NaVisu4DCommandsParser.CHART);
	        this.state = 155;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 156;
	        this.chartType();
	        this.state = 157;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 158;
	        this.chartLayer();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chartType() {
	    let localctx = new ChartTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, NaVisu4DCommandsParser.RULE_chartType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758096384) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chartLayer() {
	    let localctx = new ChartLayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, NaVisu4DCommandsParser.RULE_chartLayer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        _la = this._input.LA(1);
	        if(!(_la===51 || _la===53)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terrainCmd() {
	    let localctx = new TerrainCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, NaVisu4DCommandsParser.RULE_terrainCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(NaVisu4DCommandsParser.TERRAIN);
	        this.state = 165;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 166;
	        this.match(NaVisu4DCommandsParser.GOOGLE3D);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bathymetryCmd() {
	    let localctx = new BathymetryCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, NaVisu4DCommandsParser.RULE_bathymetryCmd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(NaVisu4DCommandsParser.BATHYMETRY);
	        this.state = 169;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 170;
	        this.match(NaVisu4DCommandsParser.WORD);
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 171;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 172;
	            this.match(NaVisu4DCommandsParser.SONAR);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	altymetryCmd() {
	    let localctx = new AltymetryCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, NaVisu4DCommandsParser.RULE_altymetryCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(NaVisu4DCommandsParser.ALTIMETRY);
	        this.state = 176;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 177;
	        this.match(NaVisu4DCommandsParser.LITTO3D);
	        this.state = 178;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 179;
	        this.match(NaVisu4DCommandsParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	oceanographyCmd() {
	    let localctx = new OceanographyCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, NaVisu4DCommandsParser.RULE_oceanographyCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.match(NaVisu4DCommandsParser.OCEANOGRAPHY);
	        this.state = 182;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 183;
	        this.oceanType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	oceanType() {
	    let localctx = new OceanTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, NaVisu4DCommandsParser.RULE_oceanType);
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 38:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 185;
	            this.match(NaVisu4DCommandsParser.TIDES);
	            this.state = 186;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 187;
	            this.match(NaVisu4DCommandsParser.WORD);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 188;
	            this.match(NaVisu4DCommandsParser.CURRENTS);
	            this.state = 189;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 190;
	            this.currentsDetail();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	currentsDetail() {
	    let localctx = new CurrentsDetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, NaVisu4DCommandsParser.RULE_currentsDetail);
	    var _la = 0;
	    try {
	        this.state = 205;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            this.match(NaVisu4DCommandsParser.TIDAL_ATLAS);
	            this.state = 194;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 195;
	            this.match(NaVisu4DCommandsParser.WORD);
	            this.state = 196;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 197;
	            this.match(NaVisu4DCommandsParser.WORD);
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 198;
	                this.match(NaVisu4DCommandsParser.COMMA);
	                this.state = 199;
	                this.match(NaVisu4DCommandsParser.WORD);
	            }

	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 202;
	            this.match(NaVisu4DCommandsParser.FORECAST);
	            this.state = 203;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 204;
	            this.match(NaVisu4DCommandsParser.WORD);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imageCmd() {
	    let localctx = new ImageCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, NaVisu4DCommandsParser.RULE_imageCmd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(NaVisu4DCommandsParser.IMAGE);
	        this.state = 208;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 209;
	        this.match(NaVisu4DCommandsParser.WORD);
	        this.state = 212;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 210;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 211;
	            this.freeText();

	        }
	        this.state = 219;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 214;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 215;
	            this.num();
	            this.state = 216;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 217;
	            this.num();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	image3DCmd() {
	    let localctx = new Image3DCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, NaVisu4DCommandsParser.RULE_image3DCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(NaVisu4DCommandsParser.IMAGE3D);
	        this.state = 222;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 223;
	        this.match(NaVisu4DCommandsParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	videoCmd() {
	    let localctx = new VideoCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, NaVisu4DCommandsParser.RULE_videoCmd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.match(NaVisu4DCommandsParser.VIDEO);
	        this.state = 226;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 227;
	        this.urlVal();
	        this.state = 228;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 229;
	        this.freeText();
	        this.state = 230;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 231;
	        this.num();
	        this.state = 232;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 233;
	        this.num();
	        this.state = 239;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 234;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 235;
	            this.num();
	            this.state = 236;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 237;
	            this.num();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	video3DCmd() {
	    let localctx = new Video3DCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, NaVisu4DCommandsParser.RULE_video3DCmd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(NaVisu4DCommandsParser.VIDEO3D);
	        this.state = 242;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 243;
	        this.urlVal();
	        this.state = 246;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 244;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 245;
	            this.boolVal();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	billboardCmd() {
	    let localctx = new BillboardCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, NaVisu4DCommandsParser.RULE_billboardCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(NaVisu4DCommandsParser.BILLBOARD);
	        this.state = 249;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 250;
	        this.match(NaVisu4DCommandsParser.WORD);
	        this.state = 251;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 252;
	        this.freeText();
	        this.state = 253;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 254;
	        this.num();
	        this.state = 255;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 256;
	        this.num();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	billboardCBCmd() {
	    let localctx = new BillboardCBCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, NaVisu4DCommandsParser.RULE_billboardCBCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(NaVisu4DCommandsParser.BILLBOARDCB);
	        this.state = 259;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 260;
	        this.match(NaVisu4DCommandsParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fireworksCmd() {
	    let localctx = new FireworksCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, NaVisu4DCommandsParser.RULE_fireworksCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(NaVisu4DCommandsParser.FIREWORKS);
	        this.state = 263;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 264;
	        this.num();
	        this.state = 265;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 266;
	        this.num();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	textCmd() {
	    let localctx = new TextCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, NaVisu4DCommandsParser.RULE_textCmd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(NaVisu4DCommandsParser.TEXT);
	        this.state = 269;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 270;
	        this.freeText();
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 271;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 272;
	            this.freeText();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	audioCmd() {
	    let localctx = new AudioCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, NaVisu4DCommandsParser.RULE_audioCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        this.match(NaVisu4DCommandsParser.AUDIO);
	        this.state = 276;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 277;
	        this.match(NaVisu4DCommandsParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	speechCmd() {
	    let localctx = new SpeechCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, NaVisu4DCommandsParser.RULE_speechCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.match(NaVisu4DCommandsParser.SPEECH);
	        this.state = 280;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 281;
	        this.freeText();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	webcamCmd() {
	    let localctx = new WebcamCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, NaVisu4DCommandsParser.RULE_webcamCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(NaVisu4DCommandsParser.WEBCAM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simulationCmd() {
	    let localctx = new SimulationCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, NaVisu4DCommandsParser.RULE_simulationCmd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.match(NaVisu4DCommandsParser.SIMULATION);
	        this.state = 286;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 287;
	        _la = this._input.LA(1);
	        if(!(_la===46 || _la===47)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 288;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 289;
	        this.match(NaVisu4DCommandsParser.WORD);
	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 290;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 291;
	            this.simParam();
	            this.state = 296;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simParam() {
	    let localctx = new SimParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, NaVisu4DCommandsParser.RULE_simParam);
	    try {
	        this.state = 300;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 297;
	            this.match(NaVisu4DCommandsParser.WORD);
	            break;
	        case 50:
	        case 51:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 298;
	            this.num();
	            break;
	        case 48:
	        case 49:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 299;
	            this.boolVal();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	navigationCmd() {
	    let localctx = new NavigationCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, NaVisu4DCommandsParser.RULE_navigationCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(NaVisu4DCommandsParser.NAVIGATION);
	        this.state = 303;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 304;
	        this.navType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	navType() {
	    let localctx = new NavTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, NaVisu4DCommandsParser.RULE_navType);
	    try {
	        this.state = 317;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 306;
	            this.match(NaVisu4DCommandsParser.PILOTCHART);
	            this.state = 307;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 308;
	            this.match(NaVisu4DCommandsParser.NAC);
	            this.state = 309;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 310;
	            this.num();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 311;
	            this.match(NaVisu4DCommandsParser.AVURNAV);
	            this.state = 312;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 313;
	            this.match(NaVisu4DCommandsParser.WORD);
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 314;
	            this.match(NaVisu4DCommandsParser.GPX);
	            this.state = 315;
	            this.match(NaVisu4DCommandsParser.COMMA);
	            this.state = 316;
	            this.match(NaVisu4DCommandsParser.WORD);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seabedCmd() {
	    let localctx = new SeabedCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, NaVisu4DCommandsParser.RULE_seabedCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this.match(NaVisu4DCommandsParser.SEABED);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quizCmd() {
	    let localctx = new QuizCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, NaVisu4DCommandsParser.RULE_quizCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.match(NaVisu4DCommandsParser.QUIZ);
	        this.state = 322;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 323;
	        this.match(NaVisu4DCommandsParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	clearCmd() {
	    let localctx = new ClearCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, NaVisu4DCommandsParser.RULE_clearCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        this.match(NaVisu4DCommandsParser.CLEAR);
	        this.state = 326;
	        this.match(NaVisu4DCommandsParser.COMMA);
	        this.state = 327;
	        this.match(NaVisu4DCommandsParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	clearAllCmd() {
	    let localctx = new ClearAllCmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, NaVisu4DCommandsParser.RULE_clearAllCmd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 329;
	        this.match(NaVisu4DCommandsParser.CLEARALL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	num() {
	    let localctx = new NumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, NaVisu4DCommandsParser.RULE_num);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        _la = this._input.LA(1);
	        if(!(_la===50 || _la===51)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	boolVal() {
	    let localctx = new BoolValContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, NaVisu4DCommandsParser.RULE_boolVal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        _la = this._input.LA(1);
	        if(!(_la===48 || _la===49)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	freeText() {
	    let localctx = new FreeTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, NaVisu4DCommandsParser.RULE_freeText);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(NaVisu4DCommandsParser.QUOTED_STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	urlVal() {
	    let localctx = new UrlValContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, NaVisu4DCommandsParser.RULE_urlVal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        _la = this._input.LA(1);
	        if(!(_la===52 || _la===53)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

NaVisu4DCommandsParser.EOF = antlr4.Token.EOF;
NaVisu4DCommandsParser.HASH = 1;
NaVisu4DCommandsParser.COMMA = 2;
NaVisu4DCommandsParser.COMMENT = 3;
NaVisu4DCommandsParser.BBOX = 4;
NaVisu4DCommandsParser.MOVE = 5;
NaVisu4DCommandsParser.FLYTO = 6;
NaVisu4DCommandsParser.CAMERA = 7;
NaVisu4DCommandsParser.DAYNIGHT = 8;
NaVisu4DCommandsParser.CHART = 9;
NaVisu4DCommandsParser.TERRAIN = 10;
NaVisu4DCommandsParser.LAYER = 11;
NaVisu4DCommandsParser.IMAGE3D = 12;
NaVisu4DCommandsParser.IMAGE = 13;
NaVisu4DCommandsParser.VIDEO3D = 14;
NaVisu4DCommandsParser.VIDEO = 15;
NaVisu4DCommandsParser.BILLBOARD = 16;
NaVisu4DCommandsParser.BILLBOARDCB = 17;
NaVisu4DCommandsParser.FIREWORKS = 18;
NaVisu4DCommandsParser.TEXT = 19;
NaVisu4DCommandsParser.AUDIO = 20;
NaVisu4DCommandsParser.SPEECH = 21;
NaVisu4DCommandsParser.WEBCAM = 22;
NaVisu4DCommandsParser.SIMULATION = 23;
NaVisu4DCommandsParser.NAVIGATION = 24;
NaVisu4DCommandsParser.SEABED = 25;
NaVisu4DCommandsParser.QUIZ = 26;
NaVisu4DCommandsParser.CLEARALL = 27;
NaVisu4DCommandsParser.CLEAR = 28;
NaVisu4DCommandsParser.VECTOR = 29;
NaVisu4DCommandsParser.RASTER = 30;
NaVisu4DCommandsParser.MBTILES = 31;
NaVisu4DCommandsParser.GOOGLE3D = 32;
NaVisu4DCommandsParser.BATHYMETRY = 33;
NaVisu4DCommandsParser.ALTIMETRY = 34;
NaVisu4DCommandsParser.OCEANOGRAPHY = 35;
NaVisu4DCommandsParser.LITTO3D = 36;
NaVisu4DCommandsParser.SONAR = 37;
NaVisu4DCommandsParser.TIDES = 38;
NaVisu4DCommandsParser.CURRENTS = 39;
NaVisu4DCommandsParser.TIDAL_ATLAS = 40;
NaVisu4DCommandsParser.FORECAST = 41;
NaVisu4DCommandsParser.PILOTCHART = 42;
NaVisu4DCommandsParser.NAC = 43;
NaVisu4DCommandsParser.AVURNAV = 44;
NaVisu4DCommandsParser.GPX = 45;
NaVisu4DCommandsParser.JSON = 46;
NaVisu4DCommandsParser.NMEA = 47;
NaVisu4DCommandsParser.TRUE = 48;
NaVisu4DCommandsParser.FALSE = 49;
NaVisu4DCommandsParser.FLOAT = 50;
NaVisu4DCommandsParser.INT = 51;
NaVisu4DCommandsParser.QUOTED_STRING = 52;
NaVisu4DCommandsParser.WORD = 53;
NaVisu4DCommandsParser.WS = 54;
NaVisu4DCommandsParser.NEWLINE = 55;

NaVisu4DCommandsParser.RULE_commandLine = 0;
NaVisu4DCommandsParser.RULE_command = 1;
NaVisu4DCommandsParser.RULE_commandBody = 2;
NaVisu4DCommandsParser.RULE_commentCmd = 3;
NaVisu4DCommandsParser.RULE_bboxCmd = 4;
NaVisu4DCommandsParser.RULE_moveCmd = 5;
NaVisu4DCommandsParser.RULE_daynightCmd = 6;
NaVisu4DCommandsParser.RULE_chartCmd = 7;
NaVisu4DCommandsParser.RULE_chartType = 8;
NaVisu4DCommandsParser.RULE_chartLayer = 9;
NaVisu4DCommandsParser.RULE_terrainCmd = 10;
NaVisu4DCommandsParser.RULE_bathymetryCmd = 11;
NaVisu4DCommandsParser.RULE_altymetryCmd = 12;
NaVisu4DCommandsParser.RULE_oceanographyCmd = 13;
NaVisu4DCommandsParser.RULE_oceanType = 14;
NaVisu4DCommandsParser.RULE_currentsDetail = 15;
NaVisu4DCommandsParser.RULE_imageCmd = 16;
NaVisu4DCommandsParser.RULE_image3DCmd = 17;
NaVisu4DCommandsParser.RULE_videoCmd = 18;
NaVisu4DCommandsParser.RULE_video3DCmd = 19;
NaVisu4DCommandsParser.RULE_billboardCmd = 20;
NaVisu4DCommandsParser.RULE_billboardCBCmd = 21;
NaVisu4DCommandsParser.RULE_fireworksCmd = 22;
NaVisu4DCommandsParser.RULE_textCmd = 23;
NaVisu4DCommandsParser.RULE_audioCmd = 24;
NaVisu4DCommandsParser.RULE_speechCmd = 25;
NaVisu4DCommandsParser.RULE_webcamCmd = 26;
NaVisu4DCommandsParser.RULE_simulationCmd = 27;
NaVisu4DCommandsParser.RULE_simParam = 28;
NaVisu4DCommandsParser.RULE_navigationCmd = 29;
NaVisu4DCommandsParser.RULE_navType = 30;
NaVisu4DCommandsParser.RULE_seabedCmd = 31;
NaVisu4DCommandsParser.RULE_quizCmd = 32;
NaVisu4DCommandsParser.RULE_clearCmd = 33;
NaVisu4DCommandsParser.RULE_clearAllCmd = 34;
NaVisu4DCommandsParser.RULE_num = 35;
NaVisu4DCommandsParser.RULE_boolVal = 36;
NaVisu4DCommandsParser.RULE_freeText = 37;
NaVisu4DCommandsParser.RULE_urlVal = 38;

class CommandLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_commandLine;
    }

	EOF() {
	    return this.getToken(NaVisu4DCommandsParser.EOF, 0);
	};

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterCommandLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitCommandLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitCommandLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_command;
    }

	HASH() {
	    return this.getToken(NaVisu4DCommandsParser.HASH, 0);
	};

	commandBody() {
	    return this.getTypedRuleContext(CommandBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitCommand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_commandBody;
    }

	altymetryCmd() {
	    return this.getTypedRuleContext(AltymetryCmdContext,0);
	};

	audioCmd() {
	    return this.getTypedRuleContext(AudioCmdContext,0);
	};

	bathymetryCmd() {
	    return this.getTypedRuleContext(BathymetryCmdContext,0);
	};

	bboxCmd() {
	    return this.getTypedRuleContext(BboxCmdContext,0);
	};

	billboardCBCmd() {
	    return this.getTypedRuleContext(BillboardCBCmdContext,0);
	};

	billboardCmd() {
	    return this.getTypedRuleContext(BillboardCmdContext,0);
	};

	chartCmd() {
	    return this.getTypedRuleContext(ChartCmdContext,0);
	};

	clearAllCmd() {
	    return this.getTypedRuleContext(ClearAllCmdContext,0);
	};

	clearCmd() {
	    return this.getTypedRuleContext(ClearCmdContext,0);
	};

	commentCmd() {
	    return this.getTypedRuleContext(CommentCmdContext,0);
	};

	daynightCmd() {
	    return this.getTypedRuleContext(DaynightCmdContext,0);
	};

	fireworksCmd() {
	    return this.getTypedRuleContext(FireworksCmdContext,0);
	};

	image3DCmd() {
	    return this.getTypedRuleContext(Image3DCmdContext,0);
	};

	imageCmd() {
	    return this.getTypedRuleContext(ImageCmdContext,0);
	};

	moveCmd() {
	    return this.getTypedRuleContext(MoveCmdContext,0);
	};

	navigationCmd() {
	    return this.getTypedRuleContext(NavigationCmdContext,0);
	};

	oceanographyCmd() {
	    return this.getTypedRuleContext(OceanographyCmdContext,0);
	};

	quizCmd() {
	    return this.getTypedRuleContext(QuizCmdContext,0);
	};

	seabedCmd() {
	    return this.getTypedRuleContext(SeabedCmdContext,0);
	};

	simulationCmd() {
	    return this.getTypedRuleContext(SimulationCmdContext,0);
	};

	speechCmd() {
	    return this.getTypedRuleContext(SpeechCmdContext,0);
	};

	terrainCmd() {
	    return this.getTypedRuleContext(TerrainCmdContext,0);
	};

	textCmd() {
	    return this.getTypedRuleContext(TextCmdContext,0);
	};

	video3DCmd() {
	    return this.getTypedRuleContext(Video3DCmdContext,0);
	};

	videoCmd() {
	    return this.getTypedRuleContext(VideoCmdContext,0);
	};

	webcamCmd() {
	    return this.getTypedRuleContext(WebcamCmdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterCommandBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitCommandBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitCommandBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommentCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_commentCmd;
    }

	COMMENT() {
	    return this.getToken(NaVisu4DCommandsParser.COMMENT, 0);
	};

	COMMA() {
	    return this.getToken(NaVisu4DCommandsParser.COMMA, 0);
	};

	freeText() {
	    return this.getTypedRuleContext(FreeTextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterCommentCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitCommentCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitCommentCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BboxCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_bboxCmd;
    }

	BBOX() {
	    return this.getToken(NaVisu4DCommandsParser.BBOX, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	num = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumContext);
	    } else {
	        return this.getTypedRuleContext(NumContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterBboxCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitBboxCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitBboxCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MoveCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_moveCmd;
    }

	MOVE() {
	    return this.getToken(NaVisu4DCommandsParser.MOVE, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	FLYTO() {
	    return this.getToken(NaVisu4DCommandsParser.FLYTO, 0);
	};

	CAMERA() {
	    return this.getToken(NaVisu4DCommandsParser.CAMERA, 0);
	};

	num = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumContext);
	    } else {
	        return this.getTypedRuleContext(NumContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterMoveCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitMoveCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitMoveCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DaynightCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_daynightCmd;
    }

	DAYNIGHT() {
	    return this.getToken(NaVisu4DCommandsParser.DAYNIGHT, 0);
	};

	COMMA() {
	    return this.getToken(NaVisu4DCommandsParser.COMMA, 0);
	};

	boolVal() {
	    return this.getTypedRuleContext(BoolValContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterDaynightCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitDaynightCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitDaynightCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ChartCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_chartCmd;
    }

	CHART() {
	    return this.getToken(NaVisu4DCommandsParser.CHART, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	chartType() {
	    return this.getTypedRuleContext(ChartTypeContext,0);
	};

	chartLayer() {
	    return this.getTypedRuleContext(ChartLayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterChartCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitChartCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitChartCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ChartTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_chartType;
    }

	VECTOR() {
	    return this.getToken(NaVisu4DCommandsParser.VECTOR, 0);
	};

	RASTER() {
	    return this.getToken(NaVisu4DCommandsParser.RASTER, 0);
	};

	MBTILES() {
	    return this.getToken(NaVisu4DCommandsParser.MBTILES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterChartType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitChartType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitChartType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ChartLayerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_chartLayer;
    }

	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	INT() {
	    return this.getToken(NaVisu4DCommandsParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterChartLayer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitChartLayer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitChartLayer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerrainCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_terrainCmd;
    }

	TERRAIN() {
	    return this.getToken(NaVisu4DCommandsParser.TERRAIN, 0);
	};

	COMMA() {
	    return this.getToken(NaVisu4DCommandsParser.COMMA, 0);
	};

	GOOGLE3D() {
	    return this.getToken(NaVisu4DCommandsParser.GOOGLE3D, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterTerrainCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitTerrainCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitTerrainCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BathymetryCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_bathymetryCmd;
    }

	BATHYMETRY() {
	    return this.getToken(NaVisu4DCommandsParser.BATHYMETRY, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	SONAR() {
	    return this.getToken(NaVisu4DCommandsParser.SONAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterBathymetryCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitBathymetryCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitBathymetryCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AltymetryCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_altymetryCmd;
    }

	ALTIMETRY() {
	    return this.getToken(NaVisu4DCommandsParser.ALTIMETRY, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	LITTO3D() {
	    return this.getToken(NaVisu4DCommandsParser.LITTO3D, 0);
	};

	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterAltymetryCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitAltymetryCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitAltymetryCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OceanographyCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_oceanographyCmd;
    }

	OCEANOGRAPHY() {
	    return this.getToken(NaVisu4DCommandsParser.OCEANOGRAPHY, 0);
	};

	COMMA() {
	    return this.getToken(NaVisu4DCommandsParser.COMMA, 0);
	};

	oceanType() {
	    return this.getTypedRuleContext(OceanTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterOceanographyCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitOceanographyCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitOceanographyCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OceanTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_oceanType;
    }

	TIDES() {
	    return this.getToken(NaVisu4DCommandsParser.TIDES, 0);
	};

	COMMA() {
	    return this.getToken(NaVisu4DCommandsParser.COMMA, 0);
	};

	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	CURRENTS() {
	    return this.getToken(NaVisu4DCommandsParser.CURRENTS, 0);
	};

	currentsDetail() {
	    return this.getTypedRuleContext(CurrentsDetailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterOceanType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitOceanType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitOceanType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CurrentsDetailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_currentsDetail;
    }

	TIDAL_ATLAS() {
	    return this.getToken(NaVisu4DCommandsParser.TIDAL_ATLAS, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.WORD);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.WORD, i);
	    }
	};


	FORECAST() {
	    return this.getToken(NaVisu4DCommandsParser.FORECAST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterCurrentsDetail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitCurrentsDetail(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitCurrentsDetail(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImageCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_imageCmd;
    }

	IMAGE() {
	    return this.getToken(NaVisu4DCommandsParser.IMAGE, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	freeText() {
	    return this.getTypedRuleContext(FreeTextContext,0);
	};

	num = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumContext);
	    } else {
	        return this.getTypedRuleContext(NumContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterImageCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitImageCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitImageCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Image3DCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_image3DCmd;
    }

	IMAGE3D() {
	    return this.getToken(NaVisu4DCommandsParser.IMAGE3D, 0);
	};

	COMMA() {
	    return this.getToken(NaVisu4DCommandsParser.COMMA, 0);
	};

	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterImage3DCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitImage3DCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitImage3DCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VideoCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_videoCmd;
    }

	VIDEO() {
	    return this.getToken(NaVisu4DCommandsParser.VIDEO, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	urlVal() {
	    return this.getTypedRuleContext(UrlValContext,0);
	};

	freeText() {
	    return this.getTypedRuleContext(FreeTextContext,0);
	};

	num = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumContext);
	    } else {
	        return this.getTypedRuleContext(NumContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterVideoCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitVideoCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitVideoCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Video3DCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_video3DCmd;
    }

	VIDEO3D() {
	    return this.getToken(NaVisu4DCommandsParser.VIDEO3D, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	urlVal() {
	    return this.getTypedRuleContext(UrlValContext,0);
	};

	boolVal() {
	    return this.getTypedRuleContext(BoolValContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterVideo3DCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitVideo3DCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitVideo3DCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BillboardCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_billboardCmd;
    }

	BILLBOARD() {
	    return this.getToken(NaVisu4DCommandsParser.BILLBOARD, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	freeText() {
	    return this.getTypedRuleContext(FreeTextContext,0);
	};

	num = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumContext);
	    } else {
	        return this.getTypedRuleContext(NumContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterBillboardCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitBillboardCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitBillboardCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BillboardCBCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_billboardCBCmd;
    }

	BILLBOARDCB() {
	    return this.getToken(NaVisu4DCommandsParser.BILLBOARDCB, 0);
	};

	COMMA() {
	    return this.getToken(NaVisu4DCommandsParser.COMMA, 0);
	};

	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterBillboardCBCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitBillboardCBCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitBillboardCBCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FireworksCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_fireworksCmd;
    }

	FIREWORKS() {
	    return this.getToken(NaVisu4DCommandsParser.FIREWORKS, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	num = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumContext);
	    } else {
	        return this.getTypedRuleContext(NumContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterFireworksCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitFireworksCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitFireworksCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_textCmd;
    }

	TEXT() {
	    return this.getToken(NaVisu4DCommandsParser.TEXT, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	freeText = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FreeTextContext);
	    } else {
	        return this.getTypedRuleContext(FreeTextContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterTextCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitTextCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitTextCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AudioCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_audioCmd;
    }

	AUDIO() {
	    return this.getToken(NaVisu4DCommandsParser.AUDIO, 0);
	};

	COMMA() {
	    return this.getToken(NaVisu4DCommandsParser.COMMA, 0);
	};

	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterAudioCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitAudioCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitAudioCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SpeechCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_speechCmd;
    }

	SPEECH() {
	    return this.getToken(NaVisu4DCommandsParser.SPEECH, 0);
	};

	COMMA() {
	    return this.getToken(NaVisu4DCommandsParser.COMMA, 0);
	};

	freeText() {
	    return this.getTypedRuleContext(FreeTextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterSpeechCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitSpeechCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitSpeechCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WebcamCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_webcamCmd;
    }

	WEBCAM() {
	    return this.getToken(NaVisu4DCommandsParser.WEBCAM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterWebcamCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitWebcamCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitWebcamCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimulationCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_simulationCmd;
    }

	SIMULATION() {
	    return this.getToken(NaVisu4DCommandsParser.SIMULATION, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	JSON() {
	    return this.getToken(NaVisu4DCommandsParser.JSON, 0);
	};

	NMEA() {
	    return this.getToken(NaVisu4DCommandsParser.NMEA, 0);
	};

	simParam = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimParamContext);
	    } else {
	        return this.getTypedRuleContext(SimParamContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterSimulationCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitSimulationCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitSimulationCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_simParam;
    }

	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	boolVal() {
	    return this.getTypedRuleContext(BoolValContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterSimParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitSimParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitSimParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NavigationCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_navigationCmd;
    }

	NAVIGATION() {
	    return this.getToken(NaVisu4DCommandsParser.NAVIGATION, 0);
	};

	COMMA() {
	    return this.getToken(NaVisu4DCommandsParser.COMMA, 0);
	};

	navType() {
	    return this.getTypedRuleContext(NavTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterNavigationCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitNavigationCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitNavigationCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NavTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_navType;
    }

	PILOTCHART() {
	    return this.getToken(NaVisu4DCommandsParser.PILOTCHART, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaVisu4DCommandsParser.COMMA);
	    } else {
	        return this.getToken(NaVisu4DCommandsParser.COMMA, i);
	    }
	};


	NAC() {
	    return this.getToken(NaVisu4DCommandsParser.NAC, 0);
	};

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	AVURNAV() {
	    return this.getToken(NaVisu4DCommandsParser.AVURNAV, 0);
	};

	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	GPX() {
	    return this.getToken(NaVisu4DCommandsParser.GPX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterNavType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitNavType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitNavType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeabedCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_seabedCmd;
    }

	SEABED() {
	    return this.getToken(NaVisu4DCommandsParser.SEABED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterSeabedCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitSeabedCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitSeabedCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuizCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_quizCmd;
    }

	QUIZ() {
	    return this.getToken(NaVisu4DCommandsParser.QUIZ, 0);
	};

	COMMA() {
	    return this.getToken(NaVisu4DCommandsParser.COMMA, 0);
	};

	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterQuizCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitQuizCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitQuizCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClearCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_clearCmd;
    }

	CLEAR() {
	    return this.getToken(NaVisu4DCommandsParser.CLEAR, 0);
	};

	COMMA() {
	    return this.getToken(NaVisu4DCommandsParser.COMMA, 0);
	};

	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterClearCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitClearCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitClearCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClearAllCmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_clearAllCmd;
    }

	CLEARALL() {
	    return this.getToken(NaVisu4DCommandsParser.CLEARALL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterClearAllCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitClearAllCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitClearAllCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_num;
    }

	FLOAT() {
	    return this.getToken(NaVisu4DCommandsParser.FLOAT, 0);
	};

	INT() {
	    return this.getToken(NaVisu4DCommandsParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BoolValContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_boolVal;
    }

	TRUE() {
	    return this.getToken(NaVisu4DCommandsParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(NaVisu4DCommandsParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterBoolVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitBoolVal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitBoolVal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FreeTextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_freeText;
    }

	QUOTED_STRING() {
	    return this.getToken(NaVisu4DCommandsParser.QUOTED_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterFreeText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitFreeText(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitFreeText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UrlValContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaVisu4DCommandsParser.RULE_urlVal;
    }

	QUOTED_STRING() {
	    return this.getToken(NaVisu4DCommandsParser.QUOTED_STRING, 0);
	};

	WORD() {
	    return this.getToken(NaVisu4DCommandsParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.enterUrlVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaVisu4DCommandsListener ) {
	        listener.exitUrlVal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaVisu4DCommandsVisitor ) {
	        return visitor.visitUrlVal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




NaVisu4DCommandsParser.CommandLineContext = CommandLineContext; 
NaVisu4DCommandsParser.CommandContext = CommandContext; 
NaVisu4DCommandsParser.CommandBodyContext = CommandBodyContext; 
NaVisu4DCommandsParser.CommentCmdContext = CommentCmdContext; 
NaVisu4DCommandsParser.BboxCmdContext = BboxCmdContext; 
NaVisu4DCommandsParser.MoveCmdContext = MoveCmdContext; 
NaVisu4DCommandsParser.DaynightCmdContext = DaynightCmdContext; 
NaVisu4DCommandsParser.ChartCmdContext = ChartCmdContext; 
NaVisu4DCommandsParser.ChartTypeContext = ChartTypeContext; 
NaVisu4DCommandsParser.ChartLayerContext = ChartLayerContext; 
NaVisu4DCommandsParser.TerrainCmdContext = TerrainCmdContext; 
NaVisu4DCommandsParser.BathymetryCmdContext = BathymetryCmdContext; 
NaVisu4DCommandsParser.AltymetryCmdContext = AltymetryCmdContext; 
NaVisu4DCommandsParser.OceanographyCmdContext = OceanographyCmdContext; 
NaVisu4DCommandsParser.OceanTypeContext = OceanTypeContext; 
NaVisu4DCommandsParser.CurrentsDetailContext = CurrentsDetailContext; 
NaVisu4DCommandsParser.ImageCmdContext = ImageCmdContext; 
NaVisu4DCommandsParser.Image3DCmdContext = Image3DCmdContext; 
NaVisu4DCommandsParser.VideoCmdContext = VideoCmdContext; 
NaVisu4DCommandsParser.Video3DCmdContext = Video3DCmdContext; 
NaVisu4DCommandsParser.BillboardCmdContext = BillboardCmdContext; 
NaVisu4DCommandsParser.BillboardCBCmdContext = BillboardCBCmdContext; 
NaVisu4DCommandsParser.FireworksCmdContext = FireworksCmdContext; 
NaVisu4DCommandsParser.TextCmdContext = TextCmdContext; 
NaVisu4DCommandsParser.AudioCmdContext = AudioCmdContext; 
NaVisu4DCommandsParser.SpeechCmdContext = SpeechCmdContext; 
NaVisu4DCommandsParser.WebcamCmdContext = WebcamCmdContext; 
NaVisu4DCommandsParser.SimulationCmdContext = SimulationCmdContext; 
NaVisu4DCommandsParser.SimParamContext = SimParamContext; 
NaVisu4DCommandsParser.NavigationCmdContext = NavigationCmdContext; 
NaVisu4DCommandsParser.NavTypeContext = NavTypeContext; 
NaVisu4DCommandsParser.SeabedCmdContext = SeabedCmdContext; 
NaVisu4DCommandsParser.QuizCmdContext = QuizCmdContext; 
NaVisu4DCommandsParser.ClearCmdContext = ClearCmdContext; 
NaVisu4DCommandsParser.ClearAllCmdContext = ClearAllCmdContext; 
NaVisu4DCommandsParser.NumContext = NumContext; 
NaVisu4DCommandsParser.BoolValContext = BoolValContext; 
NaVisu4DCommandsParser.FreeTextContext = FreeTextContext; 
NaVisu4DCommandsParser.UrlValContext = UrlValContext; 
