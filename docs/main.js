(()=>{"use strict";var n={700:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".game-over-view {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.205);\n  display: grid;\n  place-items: center;\n  width: 100vw;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n.game-over-wrapper {\n  padding: 2em;\n  color: white;\n  background: rgb(51, 49, 49);\n  border-radius: 10px;\n}\n\n.message {\n  margin-bottom: 1em;\n  font-size: 2rem;\n}\n\n.play-again {\n  margin: 0 auto;\n  padding: 0.5em 1em;\n  display: block;\n  border: none;\n  border-radius: 5px;\n}\n\n.play-again:hover {\n  background: rgb(206, 200, 200);\n  cursor: pointer;\n}\n","",{version:3,sources:["webpack://./src/css/game-over.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,gCAAgC;EAChC,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;AACjB",sourcesContent:[".game-over-view {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.205);\n  display: grid;\n  place-items: center;\n  width: 100vw;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n.game-over-wrapper {\n  padding: 2em;\n  color: white;\n  background: rgb(51, 49, 49);\n  border-radius: 10px;\n}\n\n.message {\n  margin-bottom: 1em;\n  font-size: 2rem;\n}\n\n.play-again {\n  margin: 0 auto;\n  padding: 0.5em 1em;\n  display: block;\n  border: none;\n  border-radius: 5px;\n}\n\n.play-again:hover {\n  background: rgb(206, 200, 200);\n  cursor: pointer;\n}\n"],sourceRoot:""}]);const A=i},110:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".game-view {\n  display: flex;\n  gap: 2em;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 100vw;\n  min-height: 100vh;\n  margin-top: 5em;\n  background-color: black;\n  margin-top: 0;\n  padding-top: 2em;\n\n  justify-content: center;\n}\n\n.game-view-cell {\n  width: calc(min(85vh, 45vw) / 10);\n  height: calc(min(85vh, 45vw) / 10);\n  background: var(--white);\n}\n\n.game-view-board {\n  width: max-content;\n  margin: 0 auto;\n  height: max-content;\n}\n\n@media screen and (min-width: 768px) {\n  .game-view-cell {\n    width: calc(min(45vh, 45vw) / 10);\n    height: calc(min(45vh, 45vw) / 10);\n    background: var(--white);\n  }\n\n  .game-view {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n","",{version:3,sources:["webpack://./src/css/game-view.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,QAAQ;EACR,sBAAsB;EACtB,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,gBAAgB;;EAEhB,uBAAuB;AACzB;;AAEA;EACE,iCAAiC;EACjC,kCAAkC;EAClC,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE;IACE,iCAAiC;IACjC,kCAAkC;IAClC,wBAAwB;EAC1B;;EAEA;IACE,mBAAmB;IACnB,mBAAmB;EACrB;AACF",sourcesContent:[".game-view {\n  display: flex;\n  gap: 2em;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 100vw;\n  min-height: 100vh;\n  margin-top: 5em;\n  background-color: black;\n  margin-top: 0;\n  padding-top: 2em;\n\n  justify-content: center;\n}\n\n.game-view-cell {\n  width: calc(min(85vh, 45vw) / 10);\n  height: calc(min(85vh, 45vw) / 10);\n  background: var(--white);\n}\n\n.game-view-board {\n  width: max-content;\n  margin: 0 auto;\n  height: max-content;\n}\n\n@media screen and (min-width: 768px) {\n  .game-view-cell {\n    width: calc(min(45vh, 45vw) / 10);\n    height: calc(min(45vh, 45vw) / 10);\n    background: var(--white);\n  }\n\n  .game-view {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n"],sourceRoot:""}]);const A=i},198:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".place-carrier-view {\n  background: var(--black);\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n  color: var(--white);\n}\n\n.place-carrier-wrapper {\n  width: 90vw;\n  margin: 0 auto;\n  text-align: center;\n  background: var(--gray);\n  margin-top: 5em;\n  padding: 1em;\n  text-transform: uppercase;\n  border-radius: 5px;\n  margin-bottom: 2em;\n}\n\n.welcome-to-game {\n  font-size: 1rem;\n  color: var(--yellow);\n}\n\n.place-carrier {\n  margin-bottom: 0.5em;\n}\n\n.flip-btn {\n  color: var(--blue);\n  padding: 0.3em 0.7em;\n  transition:\n    background-color 200ms ease-in,\n    color 200ms ease-in;\n  width: max-content;\n  margin: 0 auto;\n  border-radius: 5px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin-bottom: 2em;\n}\n\n.flip-btn:hover {\n  color: var(--white);\n  background: var(--blue);\n  cursor: pointer;\n}\n\n.starting-board {\n  width: max-content;\n  margin: 0 auto;\n  margin-bottom: 2em;\n}\n\n.placing-cell {\n  width: calc(min(85vh, 45vw) / 10);\n  height: calc(min(85vh, 45vw) / 10);\n  background: var(--white);\n}\n\n@media screen and (min-width: 768px) {\n  .placing-cell {\n    width: calc(min(45vh, 45vw) / 10);\n    height: calc(min(45vh, 45vw) / 10);\n    background: var(--white);\n  }\n}\n","",{version:3,sources:["webpack://./src/css/placing-view.css"],names:[],mappings:"AAAA;EACE,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB;;uBAEqB;EACrB,kBAAkB;EAClB,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC,kCAAkC;EAClC,wBAAwB;AAC1B;;AAEA;EACE;IACE,iCAAiC;IACjC,kCAAkC;IAClC,wBAAwB;EAC1B;AACF",sourcesContent:[".place-carrier-view {\n  background: var(--black);\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n  color: var(--white);\n}\n\n.place-carrier-wrapper {\n  width: 90vw;\n  margin: 0 auto;\n  text-align: center;\n  background: var(--gray);\n  margin-top: 5em;\n  padding: 1em;\n  text-transform: uppercase;\n  border-radius: 5px;\n  margin-bottom: 2em;\n}\n\n.welcome-to-game {\n  font-size: 1rem;\n  color: var(--yellow);\n}\n\n.place-carrier {\n  margin-bottom: 0.5em;\n}\n\n.flip-btn {\n  color: var(--blue);\n  padding: 0.3em 0.7em;\n  transition:\n    background-color 200ms ease-in,\n    color 200ms ease-in;\n  width: max-content;\n  margin: 0 auto;\n  border-radius: 5px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin-bottom: 2em;\n}\n\n.flip-btn:hover {\n  color: var(--white);\n  background: var(--blue);\n  cursor: pointer;\n}\n\n.starting-board {\n  width: max-content;\n  margin: 0 auto;\n  margin-bottom: 2em;\n}\n\n.placing-cell {\n  width: calc(min(85vh, 45vw) / 10);\n  height: calc(min(85vh, 45vw) / 10);\n  background: var(--white);\n}\n\n@media screen and (min-width: 768px) {\n  .placing-cell {\n    width: calc(min(45vh, 45vw) / 10);\n    height: calc(min(45vh, 45vw) / 10);\n    background: var(--white);\n  }\n}\n"],sourceRoot:""}]);const A=i},806:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,'.start-view {\n  background: var(--black);\n  width: 100vw;\n  height: 100vh;\n  color: var(--white);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n}\n\n.sub-heading {\n  margin-top: 12em;\n  color: var(--yellow);\n  font-size: 1.07rem;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.heading {\n  margin-top: 0.2em;\n  display: block;\n  text-align: center;\n  color: var(--white);\n  font-family: "Rubik Mono One", sans-serif;\n  font-size: 2rem;\n  margin-bottom: 0.8em;\n}\n\n.start-btn {\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 1px;\n  color: var(--blue);\n  padding: 0.3em 0.5em;\n  transition:\n    backround-color 200ms ease-in,\n    color 200ms ease-in;\n  border-radius: 5px;\n}\n\n.start-btn:hover {\n  background: var(--blue);\n  color: var(--white);\n  cursor: pointer;\n}\n\n@media screen and (min-width: 768px) {\n  .sub-heading {\n    font-size: 2rem;\n  }\n\n  .heading {\n    font-size: 4rem;\n  }\n\n  .start-btn {\n    font-size: 2rem;\n  }\n}\n',"",{version:3,sources:["webpack://./src/css/start-view.css"],names:[],mappings:"AAAA;EACE,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,yCAAyC;EACzC,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;EACpB;;uBAEqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF",sourcesContent:['.start-view {\n  background: var(--black);\n  width: 100vw;\n  height: 100vh;\n  color: var(--white);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n}\n\n.sub-heading {\n  margin-top: 12em;\n  color: var(--yellow);\n  font-size: 1.07rem;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.heading {\n  margin-top: 0.2em;\n  display: block;\n  text-align: center;\n  color: var(--white);\n  font-family: "Rubik Mono One", sans-serif;\n  font-size: 2rem;\n  margin-bottom: 0.8em;\n}\n\n.start-btn {\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 1px;\n  color: var(--blue);\n  padding: 0.3em 0.5em;\n  transition:\n    backround-color 200ms ease-in,\n    color 200ms ease-in;\n  border-radius: 5px;\n}\n\n.start-btn:hover {\n  background: var(--blue);\n  color: var(--white);\n  cursor: pointer;\n}\n\n@media screen and (min-width: 768px) {\n  .sub-heading {\n    font-size: 2rem;\n  }\n\n  .heading {\n    font-size: 4rem;\n  }\n\n  .start-btn {\n    font-size: 2rem;\n  }\n}\n'],sourceRoot:""}]);const A=i},402:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(537),a=t.n(r),o=t(645),i=t.n(o),A=t(806),s=t(198),c=t(110),l=t(700),d=t(553),m=i()(a());m.i(A.Z),m.i(s.Z),m.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Rubik+Mono+One&display=swap);"]),m.i(c.Z),m.i(l.Z),m.i(d.Z),m.push([n.id,':root {\n  --black: #000;\n  --yellow: #faec00;\n  --white: #fff;\n  --blue: #0cabe8;\n  --gray: #9d9d9d33;\n}\n\nhtml {\n  font-family: "Open Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  border-radius: 0;\n}\n\n.board {\n  display: grid;\n  gap: 1px;\n  grid-template-columns: repeat(10, 1fr);\n}\n',"",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAOA;EACE,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,eAAe;EACf,gBAAgB;AAClB;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,sCAAsC;AACxC",sourcesContent:['@import "start-view.css";\n\n@import "placing-view";\n@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Rubik+Mono+One&display=swap");\n@import "game-view";\n@import "game-over";\n@import "utility.css";\n:root {\n  --black: #000;\n  --yellow: #faec00;\n  --white: #fff;\n  --blue: #0cabe8;\n  --gray: #9d9d9d33;\n}\n\nhtml {\n  font-family: "Open Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  border-radius: 0;\n}\n\n.board {\n  display: grid;\n  gap: 1px;\n  grid-template-columns: repeat(10, 1fr);\n}\n'],sourceRoot:""}]);const u=m},553:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".hidden {\n  display: none;\n}\n","",{version:3,sources:["webpack://./src/css/utility.css"],names:[],mappings:"AAAA;EACE,aAAa;AACf",sourcesContent:[".hidden {\n  display: none;\n}\n"],sourceRoot:""}]);const A=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],l=o[c]||0,d="".concat(c," ").concat(l);o[c]=l+1;var m=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var p=a(u,r);r.byIndex=A,e.splice(A,0,{identifier:d,updater:p,references:1})}i.push(d)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var A=t(o[i]);e[A].references--}for(var s=r(n,a),c=0;c<o.length;c++){var l=t(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),A=t(565),s=t.n(A),c=t(216),l=t.n(c),d=t(589),m=t.n(d),u=t(402),p={};p.styleTagTransform=m(),p.setAttributes=s(),p.insert=i().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=l(),e()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals;class h{constructor(n,e){this.name=n,this.length=e,this.hits=0,this.sunk=!1}hit(){return this.hits++,this.hits}isSunk(){return this.hits>=this.length}}class g{constructor(){this.board=this.buildBoard(10),this.ships={}}buildBoard(n){let e=[];for(let t=0;t<n;t++){e.push([]);for(let r=0;r<n;r++)e[t].push("Free")}return e}placeShip(n){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2?arguments[2]:void 0,[r,a]=n;try{if(e)for(let n=0;n<t.length;n++)this.board[r][a]=t.name,a++;else for(let n=0;n<t.length;n++)this.board[r][a]=t.name,r++;return this.ships[t.name]=t,this.board}catch(r){console.log(r),console.log(n[0],t.length,e)}}placeShipsRandomly(n){for(let[e,t]of n){const n=Math.floor(2*Math.random())+1===1,r=new h(e,t);let a=!0,o=null;for(;a;)o=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],a=!F(o,this.board,r.length,n)[0];this.placeShip(o,n,r)}}receiveAttack(n,e){return n>=0&&n<this.board.length&&e>=0&&e<this.board.length?"Free"===this.board[n][e]?(this.board[n][e]="Missed","Miss"):(this.ships[this.board[n][e]].hit(),"Hit"):"No such position"}allShipsSunk(){for(let n of Object.values(this.ships))if(n.length>n.hits)return!1;return!0}}class C{constructor(n){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.name=n,this.ai=e,e){this.available=[];for(let n=0;n<10;n++)for(let e=0;e<10;e++)this.available.push([n,e])}}makeMove(n,e){let t=[];if(this.ai){const e=Math.floor(Math.random()*this.available.length);t[0]=n.receiveAttack(this.available[e][0],this.available[e][1]),t[1]=this.available[e][0],t[2]=this.available[e][1],this.available.splice(e,1)}else t[0]=n.receiveAttack(e[0],e[1]);return t}}const v=document.querySelector(".starting-board"),B=document.querySelector(".place-carrier"),E=document.querySelector(".place-carrier-view"),f=document.querySelector(".player1-board"),b=document.querySelector(".player2-board"),w=document.querySelector(".game-view"),k=document.querySelector(".flip-btn"),y=document.querySelector(".game-over-view"),x=document.querySelector(".message"),S=document.querySelector(".play-again");let M=!0,j=!0,Z=0;const I=[["Carrier",5],["Battleship",4],["Cruiser",3],["Submarine",3],["Destroyer",2]];let z=new g,L=new g,R=new C("Jake"),Y=new C("AI",!0);function O(n,e){for(let t=0;t<10;t++)for(let r=0;r<10;r++){const a=document.createElement("div");a.className=`cell ${e}`,a.dataset.pos=t+","+r,n.appendChild(a)}}function q(){v.innerHTML="",O(v,"placing-cell")}function T(){const n=document.querySelectorAll(".placing-cell");n.forEach(((e,t)=>{e.addEventListener("mouseover",(e=>{j&&function(n,e,t,r){const[a,o]=F(N(n),z.board,e);H(n,o,a,t,r)}(e.target,I[Z][1],t,n)})),e.addEventListener("mouseout",(e=>{j&&function(n,e,t,r,a){for(let o=0;o<e;o++){const[e,i]=N(n);if(M){if("Free"===a[e][i]&&(n.style.backgroundColor="white"),n=n.nextElementSibling,t+o===99)return}else{if("Free"===a[e][i]&&(n.style.backgroundColor="white"),t+10>99)return;n=r[t+10],t+=10}}}(e.target,I[Z][1]+1,t,n,z.board)})),e.addEventListener("click",(e=>{!function(n,e,t,r,a){const[o,i]=F(N(n),t.board,I[Z][1]);if(!o)return;const A=new h(I[Z][0],I[Z][1]);if(t.placeShip(e,M,A),Z++,5===Z)return j=!1,E.classList.add("hidden"),w.classList.remove("hidden"),L.placeShipsRandomly(I),f.innerHTML="",b.innerHTML="",function(n,e,t){for(let e=0;e<10;e++)for(let r=0;r<10;r++){const a=document.createElement("div");a.className="cell game-view-cell",a.dataset.pos=e+","+r,"Free"!==t[e][r]&&(a.style.backgroundColor="green"),n.appendChild(a)}}(f,0,z.board),O(b,"game-view-cell"),f.querySelectorAll(".cell"),void b.querySelectorAll(".cell").forEach((n=>{n.addEventListener("click",(n=>{!function(n,e,t){P(R.makeMove(n,e)[0],t)}(L,N(n.target),n.target),function(n){const e=Y.makeMove(n),t=f.querySelector(`[data-pos="${e[1]},${e[2]}"]`);P(e[0],t)}(z),L.allShipsSunk()&&U(R.name),z.allShipsSunk()&&U(Y.name)}))}));H(n,i,o,r,a),B.textContent=`PLACE YOUR ${I[Z][0]}`}(e.target,N(e.target),z,t,n)}))}))}function F(n,e,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:M;const[a,o]=n;let i=0;if(r)for(let n=o;n<e[a].length&&"Free"===e[a][n];n++)i++;else for(let n=a;n<e.length&&"Free"===e[n][o];n++)i++;return i<t?[!1,i]:[!0,t]}function N(n){return n.dataset.pos.split(",").map((n=>parseInt(n)))}function H(n,e,t,r,a){for(let o=0;o<e;o++){const e=t?"green":"red";if(M)n.style.backgroundColor=e,n=n?.nextElementSibling;else{if(n.style.backgroundColor=e,r+10>99)return;n=a[r+10],r+=10}}}function U(n){n===R.name?x.textContent="You won":x.textContent="You lose",y.classList.remove("hidden")}function P(n,e){"Miss"===n?e.style.backgroundColor="purple":"Hit"===n&&(e.style.backgroundColor="red")}S.addEventListener("click",(n=>{z=new g,L=new g,R=new C("Jake"),Y=new C("AI",!0),M=!0,j=!0,Z=0,q(),T(),E.classList.remove("hidden"),w.classList.add("hidden"),y.classList.add("hidden")})),k.addEventListener("click",(()=>{M=!M})),q(),T()})()})();
//# sourceMappingURL=main.js.map