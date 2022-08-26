(()=>{"use strict";var e,n,t,r,o,a,c,i,s,d,l,u,p,f,m={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,".hello {\n    color: red;\n  }\n\n  .page-wrap {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  .header {\n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n  }\n\n  \n  .content {\n    grid-column: 2 / 4;\n    grid-row: 2 / 4;\n  }\n  \n  .footer {\n    grid-column: 1 / 4;\n    grid-row: 4 / 5;\n  }\n  \n  #border {\n    border: 2px dotted red;\n  }\n  \n  \n  /* ----------------------side panel---------------- */\n  \n  .sidepanel {\n    grid-column: 1 / 2;\n    grid-row: 2 / 4\n  }\n\n  .block {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n  }\n\n  .project_name {\n    color: purple;\n    font-weight: 900;\n    font-size: 30px;\n  }\n\n  .addProject {\n    width: 40px;\n    height: 20px;\n    background-color: blueviolet;\n    color: white;\n\n  }",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},v={};function h(e){var n=v[e];if(void 0!==n)return n.exports;var t=v[e]={id:e,exports:{}};return m[e](t,t.exports,h),t.exports}h.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return h.d(n,{a:n}),n},h.d=(e,n)=>{for(var t in n)h.o(n,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},h.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),h.nc=void 0,e=h(379),n=h.n(e),t=h(795),r=h.n(t),o=h(569),a=h.n(o),c=h(565),i=h.n(c),s=h(216),d=h.n(s),l=h(589),u=h.n(l),p=h(426),(f={}).styleTagTransform=u(),f.setAttributes=i(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,(()=>{const e=document.querySelector(".sidepanel"),n=document.createElement("button"),t=document.createElement("p"),r=document.createElement("div");r.className="block",t.className="project_name",t.textContent="Project",n.className="addProject",n.textContent="+",e.appendChild(r),r.appendChild(n),r.appendChild(t)})(),(()=>{const e=document.querySelector(".content"),n=document.createElement("button"),t=document.createElement("input"),r=document.createElement("div"),o=document.createElement("div");o.className="taskList",o.textContent="Task 1",r.className="block",t.className="project_name",t.textContent="Project",n.className="addProject",n.textContent="+",e.appendChild(r),r.appendChild(n),r.appendChild(o),r.appendChild(t)})()})();