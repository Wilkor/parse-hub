(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{90:function(t,n,r){"use strict";r.r(n),r.d(n,"scopeCss",(function(){return L}));var e=function(t,n,r){if(r||2===arguments.length)for(var e,o=0,c=n.length;o<c;o++)!e&&o in n||(e||(e=Array.prototype.slice.call(n,0,o)),e[o]=n[o]);return t.concat(e||Array.prototype.slice.call(n))},o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),s=new RegExp("(-shadowcsscontext"+o,"gim"),a=new RegExp("(-shadowcssslotted"+o,"gim"),i=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],l=/-shadowcsshost/gim,h=/:host/gim,p=/::slotted/gim,f=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,w=/(^.*?[^\\])??((:+)(.*)|$)/,x=function(t,n){var r=_(t),e=0;return r.escapedString.replace(m,(function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var c=t[2],s="",a=t[4],i="";a&&a.startsWith("{%BLOCK%")&&(s=r.blocks[e++],a=a.substring("%BLOCK%".length+1),i="{");var u={selector:c,content:s},l=n(u);return"".concat(t[1]).concat(l.selector).concat(t[3]).concat(i).concat(l.content).concat(a)}))},_=function(t){for(var n=t.split(v),r=[],e=[],o=0,c=[],s=0;s<n.length;s++){var a=n[s];"}"===a&&o--,o>0?c.push(a):(c.length>0&&(e.push(c.join("")),r.push("%BLOCK%"),c=[]),r.push(a)),"{"===a&&o++}return c.length>0&&(e.push(c.join("")),r.push("%BLOCK%")),{escapedString:r.join(""),blocks:e}},b=function(t,n,r){return t.replace(n,(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(t[2]){for(var e=t[2].split(","),o=[],c=0;c<e.length;c++){var s=e[c].trim();if(!s)break;o.push(r("-shadowcsshost-no-combinator",s,t[3]))}return o.join(",")}return"-shadowcsshost-no-combinator"+t[3]}))},O=function(t,n,r){return t+n.replace("-shadowcsshost","")+r},S=function(t,n,r){return n.indexOf("-shadowcsshost")>-1?O(t,n,r):t+n+r+", "+n+" "+t+r},W=function(t,n){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(n).test(t)},j=function(t,n){return t.replace(w,(function(t,r,e,o,c){return void 0===r&&(r=""),void 0===o&&(o=""),void 0===c&&(c=""),r+n+o+c}))},k=function(t,n,r){for(var e,o="."+(n=n.replace(/\[is=([^\]]*)\]/g,(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return n[0]}))),c=function(t){var e=t.trim();if(!e)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)e=function(t,n,r){if(l.lastIndex=0,l.test(t)){var e=".".concat(r);return t.replace(i,(function(t,n){return j(n,e)})).replace(l,e+" ")}return n+" "+t}(t,n,r);else{var c=t.replace(l,"");c.length>0&&(e=j(c,o))}return e},s=function(t){var n=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,e){var o="__ph-".concat(r,"__");return n.push(e),r++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,e,o){var c="__ph-".concat(r,"__");return n.push(o),r++,e+c})),placeholders:n}}(t),a="",u=0,h=/( |>|\+|~(?!=))\s*/g,p=!((t=s.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(e=h.exec(t));){var f=e[1],d=t.slice(u,e.index).trim(),g=(p=p||d.indexOf("-shadowcsshost-no-combinator")>-1)?c(d):d;a+="".concat(g," ").concat(f," "),u=h.lastIndex}var m=t.substring(u);return a+=(p=p||m.indexOf("-shadowcsshost-no-combinator")>-1)?c(m):m,function(t,n){return n.replace(/__ph-(\d+)__/g,(function(n,r){return t[+r]}))}(s.placeholders,a)},C=function(t,n,r,e,o){return x(t,(function(t){var o=t.selector,c=t.content;return"@"!==t.selector[0]?o=function(t,n,r,e){return t.split(",").map((function(t){return e&&t.indexOf("."+e)>-1?t.trim():W(t,n)?k(t,n,r).trim():t.trim()})).join(", ")}(t.selector,n,r,e):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(c=C(t.content,n,r,e)),{selector:o.replace(/\s{2,}/g," ").trim(),content:c}}))},E=function(t,n,r,e,o){var i=function(t,n){var r="."+n+" > ",e=[];return t=t.replace(a,(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(t[2]){for(var o=t[2].trim(),c=t[3],s=r+o+c,a="",i=t[4]-1;i>=0;i--){var u=t[5][i];if("}"===u||","===u)break;a=u+a}var l=a+s,h="".concat(a.trimRight()).concat(s.trim());if(l.trim()!==h.trim()){var p="".concat(h,", ").concat(l);e.push({orgSelector:l,updatedSelector:p})}return s}return"-shadowcsshost-no-combinator"+t[3]})),{selectors:e,cssText:t}}(t=function(t){return b(t,s,S)}(t=function(t){return b(t,c,O)}(t=function(t){return t=t.replace(f,"-shadowcsscontext").replace(h,"-shadowcsshost").replace(p,"-shadowcssslotted")}(t))),e);return t=function(t){return u.reduce((function(t,n){return t.replace(n," ")}),t)}(t=i.cssText),n&&(t=C(t,n,r,e)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(r))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:i.selectors}},L=function(t,n,r){var o=n+"-h",c=n+"-s",s=function(t){return t.match(g)||[]}(t);t=function(t){return t.replace(d,"")}(t);var a=[];if(r){var i=function(t){var n="/*!@___".concat(a.length,"___*/"),r="/*!@".concat(t.selector,"*/");return a.push({placeholder:n,comment:r}),t.selector=n+t.selector,t};t=x(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=x(t.content,i),t):t}))}var u=E(t,n,o,c);return t=e([u.cssText],s,!0).join("\n"),r&&a.forEach((function(n){var r=n.placeholder,e=n.comment;t=t.replace(r,e)})),u.slottedSelectors.forEach((function(n){t=t.replace(n.orgSelector,n.updatedSelector)})),t};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */}}]);
//# sourceMappingURL=3.91fbaca1.chunk.js.map