/**
 * command-actions.js
 * 
 * Actions du Visitor pour extraire les commandes de l'AST ANTLR.
 * Ce fichier contient TOUTE la logique métier et n'est JAMAIS regénéré par ANTLR.
 * 
 * Architecture :
 *   NaVisu4DCommandsVisitor.js  ← Généré par ANTLR (ne pas modifier)
 *   ↓ extends
 *   CommandExtractor            ← Ce fichier (à modifier librement)
 */

import NaVisu4DCommandsVisitor from './NaVisu4DCommandsVisitor.js';

/**
 * Extrait les commandes NaVisu4D depuis un AST ANTLR.
 * 
 * Pour ajouter une nouvelle commande :
 * 1. Ajouter la règle dans NaVisu4DCommands.g4
 * 2. Régénérer avec ANTLR4
 * 3. Ajouter visitMaCommandeCmd() ci-dessous
 */
export class CommandExtractor extends NaVisu4DCommandsVisitor {
    constructor() {
        super();
        this.commands = [];
    }

    // ═══════════════════════════════════════════════════════════════════════════
    //  Helpers
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Extrait tous les nombres d'une règle
     * @example _nums(ctx) → [48.0, -5.0, 49.0, 2.0]
     */
    _nums(ctx) {
        return ctx.num().map(n => parseFloat(n.getText()));
    }

    /**
     * Extrait le texte d'un token
     */
    _str(token) {
        return token.getText();
    }

    /**
     * Extrait une chaîne entre guillemets (sans les guillemets)
     * @example "Test" → Test
     */
    _quoted(ctx) {
        const raw = ctx.QUOTED_STRING().getText();
        return raw.slice(1, -1);  // Enlever les guillemets
    }

    /**
     * Extrait du texte libre (freeText)
     */
    _freeText(ctx) {
        const ft = ctx.freeText();
        if (!ft) return '';
        return this._quoted(ft);
    }

    // ═══════════════════════════════════════════════════════════════════════════
    //  Commandes de base
    // ═══════════════════════════════════════════════════════════════════════════

    visitCommentCmd(ctx) {
        this.commands.push({
            type: 'comment',
            text: this._freeText(ctx)
        });
        return null;
    }

    visitBboxCmd(ctx) {
        const [south, west, north, east] = this._nums(ctx);
        this.commands.push({
            type: 'bbox',
            south, west, north, east
        });
        return null;
    }

    visitMoveCmd(ctx) {
        const n = this._nums(ctx);
        const cmd = {
            type:      'move',
            longitude: n[0],
            latitude:  n[1],
            height:    n[2],
            heading:   n[3] ?? 0,
            pitch:     n[4] ?? -45,
            roll:      n[5] ?? 0
        };
        this.commands.push(cmd);
        return null;
    }

    visitDaynightCmd(ctx) {
        const bool = ctx.boolVal().getText().toLowerCase();
        this.commands.push({
            type:    'daynight',
            enabled: bool === 'true'
        });
        return null;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    //  Cartographie
    // ═══════════════════════════════════════════════════════════════════════════

    visitChartCmd(ctx) {
        const chartType = ctx.chartType().getText().toLowerCase();
        const layerCtx  = ctx.chartLayer();
        
        let layer;
        if (layerCtx.INT && layerCtx.INT()) {
            layer = layerCtx.INT().getText();
        } else if (layerCtx.WORD && layerCtx.WORD()) {
            layer = layerCtx.WORD().getText().toLowerCase();
        } else {
            layer = layerCtx.getText().toLowerCase();
        }
        
        this.commands.push({
            type: 'chart',
            chartType,
            layer
        });
        return null;
    }

    visitTerrainCmd(ctx) {
        this.commands.push({
            type:   'terrain',
            source: ctx.terrainSource().getText().toLowerCase()
        });
        return null;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    //  Couches de données
    // ═══════════════════════════════════════════════════════════════════════════

    visitLayerCmd(ctx) {
        const lt  = ctx.layerType();
        const cmd = { type: 'layer' };

        const getWord = (w, index = 0) => {
            if (!w) return '';
            if (Array.isArray(w)) return w[index] ? w[index].getText().toLowerCase() : '';
            return w.getText().toLowerCase();
        };

        if (lt.BATHYMETRY && lt.BATHYMETRY()) {
            cmd.subtype = 'bathymetry';
            cmd.source  = getWord(lt.WORD ? lt.WORD() : null, 0);
            if (lt.SONAR && lt.SONAR()) cmd.sonar = true;
            
        } else if (lt.ALTIMETRY && lt.ALTIMETRY()) {
            cmd.subtype = 'altimetry';
            cmd.source  = 'litto3d';
            const words = lt.WORD ? lt.WORD() : [];
            cmd.region  = getWord(words, Array.isArray(words) ? words.length - 1 : 0);
            
        } else if (lt.OCEANOGRAPHY && lt.OCEANOGRAPHY()) {
            cmd.subtype = 'oceanography';
            const ot = lt.oceanType ? lt.oceanType() : null;
            if (ot) {
                if (ot.TIDES && ot.TIDES()) {
                    cmd.ocean    = 'tides';
                    cmd.tideType = getWord(ot.WORD ? ot.WORD() : null);
                } else if (ot.CURRENTS && ot.CURRENTS()) {
                    cmd.ocean = 'currents';
                    const cd = ot.currentsDetail ? ot.currentsDetail() : null;
                    if (cd) {
                        if (cd.TIDAL_ATLAS && cd.TIDAL_ATLAS()) {
                            const words = cd.WORD ? cd.WORD() : [];
                            cmd.currents = 'tidalAtlas';
                            cmd.dim      = getWord(words, 0);
                            cmd.region   = getWord(words, 1);
                            cmd.depth    = getWord(words, 2);
                        } else if (cd.FORECAST && cd.FORECAST()) {
                            cmd.currents = 'forecast';
                            cmd.mode     = getWord(cd.WORD ? cd.WORD() : null);
                        }
                    }
                }
            }
        } else {
            cmd.subtype = 'unknown';
            cmd.raw     = lt.getText().toLowerCase();
        }
        
        this.commands.push(cmd);
        return null;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    //  Multimédia
    // ═══════════════════════════════════════════════════════════════════════════

    visitImageCmd(ctx) {
        const cmd = { type: 'image' };
        
        const words = ctx.WORD ? ctx.WORD() : null;
        cmd.filename = words ? (Array.isArray(words) ? words[0].getText() : words.getText()) : '';
        
        const ft = ctx.freeText ? ctx.freeText() : null;
        if (ft) {
            const fts = Array.isArray(ft) ? ft : [ft];
            if (fts.length > 0 && fts[0].QUOTED_STRING && fts[0].QUOTED_STRING()) {
                cmd.title = this._quoted(fts[0]);
            }
        }
        
        const nums = ctx.num ? ctx.num() : [];
        if (nums.length >= 2) {
            cmd.x = parseFloat(nums[0].getText());
            cmd.y = parseFloat(nums[1].getText());
        }
        
        this.commands.push(cmd);
        return null;
    }

    visitImage3DCmd(ctx) {
        this.commands.push({
            type:     'image3D',
            filename: ctx.WORD().getText()
        });
        return null;
    }

    visitVideoCmd(ctx) {
        const n = this._nums(ctx);
        let title = '';
        const ft = ctx.freeText ? ctx.freeText() : null;
        if (ft && ft.QUOTED_STRING && ft.QUOTED_STRING()) {
            title = this._quoted(ft);
        }
        this.commands.push({
            type: 'video',
            url:  ctx.urlVal().getText(),
            title,
            width: n[0],
            height: n[1]
        });
        return null;
    }

    visitVideo3DCmd(ctx) {
        const bool = ctx.boolVal ? ctx.boolVal() : null;
        this.commands.push({
            type:     'video3D',
            url:      ctx.urlVal().getText(),
            autoplay: bool ? bool.getText().toLowerCase() === 'true' : false
        });
        return null;
    }

    visitBillboardCmd(ctx) {
        const n = this._nums(ctx);
        let title = '';
        const ft = ctx.freeText ? ctx.freeText() : null;
        if (ft && ft.QUOTED_STRING && ft.QUOTED_STRING()) {
            title = this._quoted(ft);
        }
        this.commands.push({
            type:      'billboard',
            filename:  ctx.WORD().getText(),
            title,
            longitude: n[0],
            latitude:  n[1]
        });
        return null;
    }

    visitBillboardCBCmd(ctx) {
        this.commands.push({
            type:     'billboardCB',
            filename: ctx.WORD().getText()
        });
        return null;
    }

    visitFireworksCmd(ctx) {
        const n = this._nums(ctx);
        this.commands.push({
            type:      'fireworks',
            longitude: n[0],
            latitude:  n[1],
            height:    n[2]
        });
        return null;
    }

    visitTextCmd(ctx) {
        const fts = ctx.freeText ? ctx.freeText() : [];
        const items = Array.isArray(fts) ? fts : [fts];
        
        this.commands.push({
            type:    'text',
            content: items.length > 0 ? this._quoted(items[0]) : '',
            title:   items.length > 1 ? this._quoted(items[1]) : ''
        });
        return null;
    }

    visitAudioCmd(ctx) {
        this.commands.push({
            type:     'audio',
            filename: ctx.WORD().getText()
        });
        return null;
    }

    visitSpeechCmd(ctx) {
        this.commands.push({
            type: 'speech',
            text: this._freeText(ctx)
        });
        return null;
    }

    visitWebcamCmd(ctx) {
        this.commands.push({ type: 'webcam' });
        return null;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    //  Simulation & Navigation
    // ═══════════════════════════════════════════════════════════════════════════

    visitSimulationCmd(ctx) {
        const format = ctx.JSON ? ctx.JSON().getText().toLowerCase() 
                                : ctx.NMEA().getText().toLowerCase();
        const words = ctx.WORD ? ctx.WORD() : [];
        const filename = Array.isArray(words) ? words[0].getText() : words.getText();
        
        const params = ctx.simParam ? ctx.simParam().map(p => p.getText()) : [];
        
        this.commands.push({
            type: 'simulation',
            format,
            filename,
            params
        });
        return null;
    }

    visitNavigationCmd(ctx) {
        const nt  = ctx.navType();
        const cmd = { type: 'navigation' };

        if (nt.PILOTCHART && nt.PILOTCHART()) {
            cmd.nav   = 'pilotchart';
            cmd.month = parseInt(nt.num().getText());
        } else if (nt.AVURNAV && nt.AVURNAV()) {
            cmd.nav    = 'avurnav';
            cmd.region = nt.WORD().getText().toLowerCase();
        } else if (nt.GPX && nt.GPX()) {
            cmd.nav      = 'gpx';
            cmd.filename = nt.WORD().getText();
        }

        this.commands.push(cmd);
        return null;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    //  Autres
    // ═══════════════════════════════════════════════════════════════════════════

    visitSeabedCmd(ctx) {
        this.commands.push({ type: 'seabed' });
        return null;
    }

    visitQuizCmd(ctx) {
        this.commands.push({
            type:     'quiz',
            filename: ctx.WORD().getText()
        });
        return null;
    }

    visitClearCmd(ctx) {
        this.commands.push({
            type:  'clear',
            layer: ctx.WORD().getText().toLowerCase()
        });
        return null;
    }

    visitClearAllCmd(ctx) {
        this.commands.push({ type: 'clearAll' });
        return null;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    //  EXEMPLE : Comment ajouter une nouvelle commande
    // ═══════════════════════════════════════════════════════════════════════════

    /*
    visitMaNouvelleCmd(ctx) {
        // 1. Extraire les paramètres
        const param1 = ctx.WORD().getText();
        const nums = this._nums(ctx);
        
        // 2. Construire l'objet commande
        this.commands.push({
            type: 'maNouvelle',
            param1,
            value: nums[0]
        });
        
        return null;
    }
    */
}
