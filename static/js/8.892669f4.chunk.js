(window.webpackJsonp=window.webpackJsonp||[]).push([[8,71],{137:function(t,n,e){"use strict";e.r(n),e.d(n,"bds_menu",(function(){return u}));var o=e(16),i=e(94),r=function(t,n,e,o){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function u(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){t.done?e(t.value):i(t.value).then(s,u)}l((o=o.apply(t,n||[])).next())}))},s=function(t,n){var e,o,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function u(t){return function(n){return l([t,n])}}function l(r){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,o=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=n.call(t,s)}catch(t){r=[6,t],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},u=function(){function t(t){var n=this;Object(o.r)(this,t),this.bdsToggle=Object(o.c)(this,"bdsToggle",7),this.refMenuElement=function(t){n.menuElement=t},this.onClickCloseButtom=function(t){n.open=!1,t.stopPropagation()},this.refElement=null,this.intoView=null,this.menupositionTop=0,this.menupositionLeft=0,this.menu=null,this.position="right",this.open=!1}return t.prototype.componentWillLoad=function(){this.refElement=document.getElementById(this.menu),this.intoView=Object(i.g)(this.refElement)},t.prototype.toggle=function(){return r(this,void 0,void 0,(function(){return s(this,(function(t){return this.open=!this.open,[2]}))}))},t.prototype.openMenu=function(){if(this.bdsToggle.emit({value:this.open}),this.open){var t=Object(i.p)({actionElement:this.refElement,changedElement:this.menuElement,intoView:this.intoView});this.menupositionTop=t.top,this.menupositionLeft=t.left}},t.prototype.render=function(){var t,n=this,e={top:"".concat(this.menupositionTop,"px"),left:"".concat(this.menupositionLeft,"px")};return Object(o.h)(o.H,null,Object(o.h)("div",{ref:this.refMenuElement,class:(t={menu:!0},t["menu__".concat(this.position)]=!0,t.menu__open=this.open,t),style:e},Object(o.h)("slot",null)),this.open&&Object(o.h)("div",{class:{outzone:!0},onClick:function(t){return n.onClickCloseButtom(t)}}))},Object.defineProperty(t,"watchers",{get:function(){return{open:["openMenu"]}},enumerable:!1,configurable:!0}),t}();u.style=".menu{position:fixed;pointer-events:none;top:0;left:0;padding:16px 2px;background-color:#ffffff;border-radius:8px;-webkit-box-shadow:0px 10px 16px rgba(7, 71, 166, 0.12);box-shadow:0px 10px 16px rgba(7, 71, 166, 0.12);min-width:224px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s;z-index:80000}.menu__open{pointer-events:auto;opacity:1}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh}"},94:function(t,n,e){"use strict";e.r(n),e.d(n,"g",(function(){return o})),e.d(n,"p",(function(){return i}));var o=function(t){return null===t?null:t.classList.contains("element_scrolled")||"BODY"==(null==t?void 0:t.tagName)?t:o(t.offsetParent)};function i(t){var n=t.actionElement,e=t.changedElement,o=t.intoView,i=o.offsetParent,r=!!o.classList.contains("element_scrolled"),s=r?n.offsetTop-o.scrollTop+i.offsetTop:n.offsetTop-window.scrollY,u=r?n.offsetLeft+i.offsetLeft:n.offsetLeft,l=(null==e?void 0:e.offsetHeight)>window.innerHeight-s?s-(null==e?void 0:e.offsetHeight)-16:s+(null==n?void 0:n.offsetHeight)+16,f=(null==e?void 0:e.offsetWidth)>window.innerWidth-u?u+(null==n?void 0:n.offsetWidth)-(null==e?void 0:e.offsetWidth):u,c=window.innerHeight-(null==e?void 0:e.offsetHeight),p=window.innerWidth-(null==e?void 0:e.offsetWidth);return{top:l<8?8:l>c?c-8:l,left:f<0?0:f>p?p:f}}}}]);
//# sourceMappingURL=8.892669f4.chunk.js.map