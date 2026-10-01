'use strict';
const test=require('node:test'),assert=require('node:assert/strict');const {buildFilter}=require('../lib/visual-system');const {normalizeSettings}=require('../lib/editor-store');
test('builds watermark overlay with ratio coordinates',()=>{const x=normalizeSettings({watermark:{enabled:true,assetId:'wm',x:.7,y:.8}}),f=buildFilter(x,true);assert.match(f.filter,/overlay=x=\(W-w\)\*0.7/);});
for(const type of ['solid','gradient','glow','progress','polaroid'])test(`builds ${type} frame`,()=>{const s=normalizeSettings({frame:{enabled:true,type}});assert.ok(buildFilter(s,false).filter.length>5);});
