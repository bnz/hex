(this.webpackJsonphex=this.webpackJsonphex||[]).push([[0],[,,,,,,,,,,,function(t,e,n){t.exports={button:"Button_button__3tE03",withIcon:"Button_withIcon__3mxLj",buttonContained:"Button_buttonContained__1_qjk",main:"Button_main__xrucu Button_button__3tE03 Button_buttonContained__1_qjk",text:"Button_text__1-Elw Button_button__3tE03",restart:"Button_restart__18J1J Button_button__3tE03 Button_buttonContained__1_qjk Button_withIcon__3mxLj",rotate:"Button_rotate__36yKG Button_button__3tE03 Button_buttonContained__1_qjk Button_withIcon__3mxLj"}},function(t,e,n){t.exports={root:"Dialog_root__NRShG",backdrop:"Dialog_backdrop__1sYxI",header:"Dialog_header__1azbN",content:"Dialog_content__2meVV",closeButton:"Dialog_closeButton__1r6o3 Button_button__3tE03",footer:"Dialog_footer__YAeCI"}},,,function(t,e,n){t.exports={drawer:"Drawer_drawer__1HalH",hidden:"Drawer_hidden__2OHcw",backdrop:"Drawer_backdrop__gWGnm",content:"Drawer_content__1bryE",box:"Drawer_box__3GC_l",actions:"Drawer_actions__BAzI9 Drawer_box__3GC_l"}},function(t,e,n){t.exports={root:"GamesSwitcher_root__2TNDL",heading:"GamesSwitcher_heading__3SrOO",list:"GamesSwitcher_list__3Qw2k",visible:"GamesSwitcher_visible__YBiVK",selected:"GamesSwitcher_selected__1NZF7"}},,,function(t,e,n){t.exports={wrapper:"ThemeSwitcher_wrapper__3sSiZ Drawer_box__3GC_l",radio:"ThemeSwitcher_radio__3y2yU",selected:"ThemeSwitcher_selected__2r8Ri",light:"ThemeSwitcher_light__9R655 ThemeSwitcher_radio__3y2yU",dark:"ThemeSwitcher_dark__BaMnY ThemeSwitcher_radio__3y2yU",system:"ThemeSwitcher_system__3Z_ku ThemeSwitcher_radio__3y2yU"}},function(t,e,n){t.exports={wrap:"RotateLayout_wrap__3_K_f Drawer_box__3GC_l",button:"RotateLayout_button__22b1Q",flat:"RotateLayout_flat__2_vBD RotateLayout_button__22b1Q",pointy:"RotateLayout_pointy__wCgqC RotateLayout_button__22b1Q"}},,function(t,e,n){t.exports={root:"MenuButton_root__2p-DT",openMenu:"MenuButton_openMenu__2T0Q7 MenuButton_root__2p-DT",closeMenu:"MenuButton_closeMenu__1zqK3 MenuButton_root__2p-DT"}},function(t,e,n){t.exports={wrap:"EndGame_wrap__1Lt1a",h3:"EndGame_h3__igm8l",hex:"EndGame_hex__1bbJD"}},function(t,e,n){t.exports={footer:"Footer_footer__1_tAb"}},function(t,e,n){t.exports={root:"LanguageSwitcher_root__3Mev9 Drawer_box__3GC_l"}},function(t,e,n){t.exports={root:"KeyMapHints_root__2qiqW"}},,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r,a,i=n(1),o=n(13),s=n(8),c=n(4),u=n(7),l=n(2),h=n(6),d=function(){function t(e){Object(c.a)(this,t),this.storageName=e}return Object(u.a)(t,[{key:"get",value:function(t,e){var n=localStorage.getItem(this.storageName);if(null!==n){var r=JSON.parse(n);return void 0===r[t]?e||null:r[t]}return e||null}},{key:"getOrApply",value:function(t,e){if(null!==this.get(t))return this.get(t);var n=e();return this.set(t,n),n}},{key:"set",value:function(t,e){var n=localStorage.getItem(this.storageName);if(null===n)localStorage.setItem(this.storageName,JSON.stringify(Object(h.a)({},t,e)));else{var r=JSON.parse(n);r[t]=e,localStorage.setItem(this.storageName,JSON.stringify(r))}}},{key:"destroy",value:function(){console.log("destroy",this.storageName),localStorage.removeItem(this.storageName)}}]),t}();!function(t){t[t.PRE_GAME=0]="PRE_GAME",t[t.GAME=1]="GAME"}(r||(r={})),function(t){t[t.emptyCell=0]="emptyCell",t[t.p1=1]="p1",t[t.p2=2]="p2",t[t.border=3]="border"}(a||(a={}));var b=function(){function t(e){var n=this;Object(c.a)(this,t),this.storeDispose=e,this.defaultDrawerState=!1,this.defaultLanguage="rus",this.html=document.getElementsByTagName("html")[0],this.storage=new d("hex-ui"),this._drawer=this.storage.getOrApply("drawer",(function(){return n.defaultDrawerState})),this.toggleDrawer=function(){n.drawer=!n.drawer},this.drawerReaction=function(t){n.html.style.overflow=t?"hidden":"visible"},this._language=this.storage.getOrApply("language",(function(){return n.defaultLanguage})),this.setLanguage=function(t){return function(){n.language=t,window.location=window.location}},this.matchMediaListener=function(e){n.theme=t.toggleTheme(e)},this._theme=this.storage.getOrApply("theme",(function(){return t.toggleTheme(t.matchMedia)})),this.changeTheme=function(t){return function(){Object(l.p)((function(){n.theme=t}))}},this.themeReaction=function(t){var e;(e=n.html.classList).remove.apply(e,Object(s.a)(n.html.classList)),"system"!==t&&("dark"===t?n.html.classList.add("theme-dark"):n.html.classList.add("theme-light"))},this._phase=this.storage.getOrApply("phase",(function(){return r.PRE_GAME})),this.startGame=function(){n.phase=r.GAME},this.restartGame=function(){n.phase=r.PRE_GAME,n.storage.destroy(),n.storeDispose(),n.drawer=!1},Object(l.l)(this),this.themeReaction(this.theme),Object(l.o)((function(){return n.theme}),this.themeReaction),t.matchMedia.addEventListener("change",this.matchMediaListener,!0),Object(l.o)((function(){return n.drawer}),this.drawerReaction)}return Object(u.a)(t,[{key:"drawer",get:function(){return this._drawer},set:function(t){this._drawer=t,this.storage.set("drawer",this.drawer)}},{key:"language",get:function(){return this._language},set:function(t){this._language=t,this.storage.set("language",this.language)}},{key:"theme",get:function(){return this._theme},set:function(t){this.storage.set("theme",t),this._theme=t}},{key:"dispose",value:function(){t.matchMedia.removeEventListener("change",this.matchMediaListener)}},{key:"phase",get:function(){return this._phase},set:function(t){this._phase=t,this.storage.set("phase",this._phase)}}],[{key:"matchMedia",get:function(){return window.matchMedia("(prefers-color-scheme: dark)")}},{key:"toggleTheme",value:function(t){return t.matches?"dark":"light"}}]),t}(),f=n(0),j=Object(i.createContext)(null),_=function(t){var e=t.children,n=t.store;return Object(i.useEffect)((function(){return n.dispose}),[]),Object(f.jsx)(j.Provider,{value:n,children:e})},m=function(){var t=Object(i.useContext)(j);if(!t)throw new Error("hook must be used within a Provider");return t},p=function t(e,n,r,a,i,o,s,u,l){Object(c.a)(this,t),this.f0=e,this.f1=n,this.f2=r,this.f3=a,this.b0=i,this.b1=o,this.b2=s,this.b3=u,this.start_angle=l},g=function t(e,n){Object(c.a)(this,t),this.x=e,this.y=n},y=function(){function t(e,n,r){if(Object(c.a)(this,t),this.q=e,this.r=n,this.s=r,0!==Math.round(e+n+r))throw new Error("q + r + s must be 0")}return Object(u.a)(t,[{key:"id",get:function(){return"".concat(this.q,",").concat(this.r)}},{key:"add",value:function(e){return new t(this.q+e.q,this.r+e.r,this.s+e.s)}},{key:"subtract",value:function(e){return new t(this.q-e.q,this.r-e.r,this.s-e.s)}},{key:"scale",value:function(e){return new t(this.q*e,this.r*e,this.s*e)}},{key:"rotateLeft",value:function(){return new t(-this.s,-this.q,-this.r)}},{key:"rotateRight",value:function(){return new t(-this.r,-this.s,-this.q)}},{key:"neighbor",value:function(e){return this.add(t.direction(e))}},{key:"diagonalNeighbor",value:function(e){return this.add(t.diagonals[e])}},{key:"len",value:function(){return(Math.abs(this.q)+Math.abs(this.r)+Math.abs(this.s))/2}},{key:"distance",value:function(t){return this.subtract(t).len()}},{key:"round",value:function(){var e=Math.round(this.q),n=Math.round(this.r),r=Math.round(this.s),a=Math.abs(e-this.q),i=Math.abs(n-this.r),o=Math.abs(r-this.s);return a>i&&a>o?e=-n-r:i>o?n=-e-r:r=-e-n,new t(e,n,r)}},{key:"lerp",value:function(e,n){return new t(this.q*(1-n)+e.q*n,this.r*(1-n)+e.r*n,this.s*(1-n)+e.s*n)}},{key:"linedraw",value:function(e){for(var n=this.distance(e),r=new t(this.q+1e-6,this.r+1e-6,this.s-2e-6),a=new t(e.q+1e-6,e.r+1e-6,e.s-2e-6),i=[],o=1/Math.max(n,1),s=0;s<=n;s++)i.push(r.lerp(a,o*s).round());return i}}],[{key:"direction",value:function(e){return t.directions[e]}}]),t}();y.directions=[new y(1,0,-1),new y(1,-1,0),new y(0,-1,1),new y(-1,0,1),new y(-1,1,0),new y(0,1,-1)],y.diagonals=[new y(2,-1,-1),new y(1,-2,1),new y(-1,-1,2),new y(-2,1,1),new y(-1,2,-1),new y(1,1,-2)];var O=function(){function t(e,n,r){Object(c.a)(this,t),this.orientation=e,this.size=n,this.origin=r}return Object(u.a)(t,[{key:"hexToPixel",value:function(t){var e=this.orientation,n=this.size,r=this.origin,a=(e.f0*t.q+e.f1*t.r)*n.x,i=(e.f2*t.q+e.f3*t.r)*n.y;return new g(a+r.x,i+r.y)}},{key:"pixelToHex",value:function(t){var e=this.orientation,n=this.size,r=this.origin,a=new g((t.x-r.x)/n.x,(t.y-r.y)/n.y),i=e.b0*a.x+e.b1*a.y,o=e.b2*a.x+e.b3*a.y;return new y(i,o,-i-o)}},{key:"hexCornerOffset",value:function(t){var e=this.orientation,n=this.size,r=2*Math.PI*(e.start_angle-t)/6;return new g(n.x*Math.cos(r),n.y*Math.sin(r))}},{key:"polygonCorners",value:function(t){for(var e=[],n=this.hexToPixel(t),r=0;r<6;r++){var a=this.hexCornerOffset(r);e.push(new g(n.x+a.x,n.y+a.y))}return e}}]),t}();O.pointy=new p(Math.sqrt(3),Math.sqrt(3)/2,0,1.5,Math.sqrt(3)/3,-1/3,0,2/3,.5),O.flat=new p(1.5,0,Math.sqrt(3)/2,Math.sqrt(3),2/3,0,-1/3,Math.sqrt(3)/3,0);for(var v=Object.keys,w={"-6,0":["center-1-1","center-1-2"],"6,0":["center-2-1","center-2-2"],"6,-11":"player-2-4","-6,11":"player-2-3","5,-11":"player-1-3","-5,11":"player-1-4"},x=-5,k=-1;x<=4;x++,k--)w["".concat(x,",").concat(k)]="player-1-start",w["".concat(-1*x,",").concat(-1*k)]="player-1-end";for(var M=1;M<=10;M++)w["-6,".concat(M)]="player-2-start",w["6,".concat(-1*M)]="player-2-end";var E=v(w),S=[[a.p1,new Set,new Set],[a.p2,new Set,new Set]];v(w).forEach((function(t){switch(w[t]){case"player-1-start":S[0][1].add(t);break;case"player-1-end":S[0][2].add(t);break;case"player-2-start":S[1][1].add(t);break;case"player-2-end":S[1][2].add(t)}}));var N=n(5),C=function(t){var e={};return Object.values(t).forEach((function(t){var n,r,a=t.hex,i=t.type,o=(n=a.q,r=a.r,new y(n,r,-1*(n+r)));e[o.id]={hex:o,type:i}})),e},G=function(t){t.orientation=O[t.storage.getOrApply("orientation",(function(){return"flat"}))],t.playerMove=t.storage.getOrApply("playerMove",(function(){return a.p1})),t.tiles=C(t.storage.getOrApply("tiles",(function(){return function(t){var e={};return t.forEach((function(t){var n=t.join(",");e[n]={hex:{q:t[0],r:t[1]},type:E.includes(n)?a.border:a.emptyCell}})),e}(function(t){for(var e=t+2,n=[],r=(e-1)/2,a=0,i=-1*r;i<=r;i++){for(var o=a;o<=e-1+a;o++)n.push([i,o]);a--}var c=n.map((function(t){return Object(N.a)(t,1)[0]})),u=n.map((function(t){return Object(N.a)(t,2)[1]})),l=[Math.max.apply(Math,Object(s.a)(c)),Math.min.apply(Math,Object(s.a)(u))].join(","),h=[Math.min.apply(Math,Object(s.a)(c)),Math.max.apply(Math,Object(s.a)(u))].join(",");return n.filter((function(t){var e=t.join(",");return e!==l&&e!==h}))}(t.size))})))},q=function(t){var e=t.isPointy,n=e?t.smallSide:t.largeSide,r=e?t.largeSide:t.smallSide;Object(l.p)((function(){t.R=Math.min(t.width/n,t.height/(2*r)),t.layout=new O(t.orientation,new g(t.R,t.R),new g(t.width/2,t.R*r))}))},D=function(t){return function(){var e=Object(N.a)(t.elSizes,2),n=e[0],r=e[1];t.width===n&&t.height===r||(Object(l.p)((function(){t.width=n,t.height=r})),q(t))}},R=n(18),L=function(){function t(e,n){Object(c.a)(this,t),this.tiles=e,this.endGameAction=n,this.allDirections=Object(s.a)(Array(6).keys()),this.cache=new Set;var r,a=Object(R.a)(S);try{for(a.s();!(r=a.n()).done;){var i,o=Object(N.a)(r.value,3),u=o[0],l=o[1],h=o[2],d=Object(R.a)(l);try{for(d.s();!(i=d.n()).done;){var b=i.value;this.run(b,h,u)}}catch(f){d.e(f)}finally{d.f()}}}catch(f){a.e(f)}finally{a.f()}}return Object(u.a)(t,[{key:"run",value:function(t,e,n){var r,i=Object(R.a)(this.allDirections);try{for(i.s();!(r=i.n()).done;){var o=r.value,s=this.tiles[this.tiles[t].hex.neighbor(o).id];if(s){var c=s.hex.id;if(s.type===a.border&&e.has(c)){this.endGameAction(n);break}s.type!==n||this.cache.has(c)||(this.cache.add(c),this.run(c,e,n))}}}catch(u){i.e(u)}finally{i.f()}}}]),t}(),B=function(t){return function(e){Object(l.p)((function(){t.endGame={name:e}}))}},T=function(){function t(){var e=this;Object(c.a)(this,t),this.ratio=.8660254,this.largeSide=18,this.smallSide=18*this.ratio,this.size=11,this.width=0,this.height=0,this.R=0,this.preSit=!1,this.hoveredId=null,this.endGame=null,this.storage=new d("hex-game"),this._tiles={},this.layout=new O(this.orientation,new g(0,0),new g(0,0)),this._playerMove=a.p1,this.dispose=function(){try{window.removeEventListener("resize",e.debounce),e.storage.destroy(),G(e),window.location.reload()}catch(t){console.warn("%cTODO","font-size:50px;",t)}},this._arenaElement=null,this.debounce=function(t,e){var n;return function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=this,s=function(){n=null,t.apply(o,a)};clearTimeout(n),n=setTimeout(s,e)}}(D(this),400),this._orientation=O.flat,G(this),Object(l.l)(this,{ratio:!1,largeSide:!1,smallSide:!1,storage:!1}),setTimeout((function(){new L(e.tiles,B(e))}),0)}return Object(u.a)(t,[{key:"tiles",get:function(){return this._tiles},set:function(t){this._tiles=t,this.storage.set("tiles",this.tiles)}},{key:"playerMove",get:function(){return this._playerMove},set:function(t){this._playerMove=t,this.storage.set("playerMove",this.playerMove)}},{key:"arenaElement",get:function(){return this._arenaElement},set:function(t){this._arenaElement=t,D(this)(),window.addEventListener("resize",this.debounce,!1)}},{key:"elSizes",get:function(){var t=this.arenaElement;return t?[t.offsetWidth,t.offsetHeight]:[0,0]}},{key:"orientation",get:function(){return this._orientation},set:function(t){this._orientation=t,this.storage.set("orientation",this.orientationType)}},{key:"orientationType",get:function(){return this.isPointy?"pointy":"flat"}},{key:"isPointy",get:function(){return.5===this.orientation.start_angle}}]),t}(),A=Object(i.createContext)(null),I=function(t){var e=t.children,n=t.store;return Object(i.useEffect)((function(){return n.dispose}),[]),Object(f.jsx)(A.Provider,{value:n,children:e})},P=function(){var t=Object(i.useContext)(A);if(!t)throw new Error("hook must be used within a Provider");return t},z=n(3),F=n(22),J=n.n(F),H=Object(z.a)((function(){var t=m();return Object(f.jsx)("button",{className:t.drawer?J.a.closeMenu:J.a.openMenu,onClick:t.toggleDrawer})})),K=n(9),W=n.n(K),Y=n(15),Q=n.n(Y),U=n(24),V=n.n(U),Z=function(){return Object(f.jsxs)("footer",{className:V.a.footer,children:["bonez \xa9 2020 - ",(new Date).getFullYear()]})},X=n(16),$=n.n(X),tt=JSON.parse(localStorage.getItem("ui")||JSON.stringify({language:"rus"})).language||"rus",et={rus:{yacht:"\u042f\u0445\u0442\u0430",indigo:"\u0418\u043d\u0434\u0438\u0433\u043e",hex:"\u0413\u0435\u043a\u0441",systemTheme:"\u0418\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b","button.startNewGame":"\u041d\u0430\u0447\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0438\u0433\u0440\u0443","button.restartGame":"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e","button.startGame":"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443","button.cancel":"\u041e\u0442\u043c\u0435\u043d\u0430","button.addPlayer":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430","button.restart":"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e","button.rotate":"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c","button.light":"\u0421\u0432\u0435\u0442\u043b\u0430\u044f","button.dark":"\u0422\u0435\u043c\u043d\u0430\u044f","button.system":"\u041a\u0430\u043a \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435","button.apply":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c",currentGameWillBeLost:"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0438\u0433\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0442\u0435\u0440\u044f\u043d\u0430.","text.placeChip":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0444\u0438\u0448\u043a\u0443","text.rotateField":"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u043e\u043b\u0435","text.showDrawer":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0435\u043d\u044e","text.wins":"\u0412\u044b\u0438\u0433\u0440\u0430\u043b!","text.gameOver":"\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430"},eng:{yacht:"Yacht",indigo:"Indigo",hex:"Hex",systemTheme:"System theme","button.startNewGame":"Start new game","button.restartGame":"Restart game","button.cancel":"Cancel","button.startGame":"Start game","button.addPlayer":"Add player","button.restart":"Restart","button.rotate":"Rotate","button.light":"Light","button.dark":"Dark","button.system":"System","button.apply":"Apply",currentGameWillBeLost:"Current game will be lost.","text.placeChip":"Place chip","text.rotateField":"Rotate field","text.showDrawer":"Show drawer","text.wins":"Wins!","text.gameOver":"Game Over"}},nt=function(t){var e=et[tt][t];return void 0===e?"~".concat(t,"~"):e},rt=function(){var t=Object(i.useState)(!1),e=Object(N.a)(t,2),n=e[0],r=e[1],a=Object(i.useCallback)((function(){r(!0)}),[]),o=Object(i.useCallback)((function(){r(!1)}),[]);return Object(i.useEffect)((function(){n?document.addEventListener("click",o):document.removeEventListener("click",o)}),[n,o]),Object(f.jsxs)("div",{className:$.a.root,children:[Object(f.jsx)("h1",{className:$.a.heading,onClick:a,children:nt("hex")}),Object(f.jsxs)("ul",{className:W()($.a.list,Object(h.a)({},$.a.visible,n)),children:[Object(f.jsx)("li",{className:$.a.selected,children:nt("hex")}),Object(f.jsx)("li",{onClick:function(){window.location="https://bnz.github.io/indigo/"},children:nt("indigo")}),Object(f.jsx)("li",{onClick:function(){window.location="https://bnz.github.io/yacht/"},children:nt("yacht")})]})]})},at=n(25),it=n.n(at),ot=Object(z.a)((function(){var t=m(),e=t.language;return Object(f.jsxs)("div",{className:it.a.root,children:[Object(f.jsx)("button",{disabled:"rus"===e,onClick:t.setLanguage("rus"),children:"\u0440\u0443\u0441"}),Object(f.jsx)("button",{disabled:"eng"===e,onClick:t.setLanguage("eng"),children:"eng"})]})})),st=n(19),ct=n.n(st),ut=Object(z.a)((function(){var t=m(),e=t.theme,n=function(t){return W()(ct.a[t],Object(h.a)({},ct.a.selected,e===t))};return Object(f.jsxs)("div",{className:ct.a.wrapper,children:[Object(f.jsx)("input",{type:"radio",className:n("light"),onClick:t.changeTheme("light")}),Object(f.jsx)("input",{type:"radio",className:n("dark"),onClick:t.changeTheme("dark")}),Object(f.jsx)("input",{type:"radio",className:n("system"),onClick:t.changeTheme("system")})]})})),lt=n(11),ht=n.n(lt),dt=n(12),bt=n.n(dt),ft=document.getElementById("root"),jt=function(t){var e=t.children,n=Object(i.useRef)(document.createElement("div"));return Object(i.useEffect)((function(){var t=n.current;return null===ft||void 0===ft||ft.appendChild(t),function(){null===ft||void 0===ft||ft.removeChild(t)}}),[]),Object(o.createPortal)(e,n.current)},_t=function(t){var e=t.actions;return Object(i.useEffect)((function(){var t=function(t){var n;null===(n=e[t.code])||void 0===n||n.call(e)};return window.addEventListener("keyup",t,!0),function(){window.removeEventListener("keyup",t,!0)}}),[]),null},mt=function(t){var e=t.heading,n=t.close,r=t.children,a=t.footer;return Object(f.jsxs)(jt,{children:[Object(f.jsx)(_t,{actions:{Escape:n}}),Object(f.jsx)("div",{className:bt.a.backdrop,onClick:n}),Object(f.jsxs)("div",{className:bt.a.root,children:[void 0!==e&&Object(f.jsxs)("h2",{className:bt.a.header,children:[e,n&&Object(f.jsx)("button",{className:bt.a.closeButton,onClick:n})]}),Object(f.jsx)("section",{className:bt.a.content,children:r}),void 0!==a&&Object(f.jsx)("footer",{className:bt.a.footer,children:a})]})]})},pt=Object(z.a)((function(){return Object(f.jsx)("button",{className:ht.a.main,onClick:m().restartGame,children:nt("button.restart")})})),gt=function(){var t=Object(i.useState)(!1),e=Object(N.a)(t,2),n=e[0],r=e[1],a=Object(i.useCallback)((function(){r(!1)}),[]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{className:ht.a.restart,onClick:function(){r(!0)},children:nt("button.restart")}),n&&Object(f.jsx)(mt,{heading:"".concat(nt("button.restartGame"),"?"),close:a,footer:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{className:ht.a.text,onClick:a,children:nt("button.cancel")}),Object(f.jsx)(pt,{})]}),children:Object(f.jsx)("div",{style:{textAlign:"center"},children:nt("currentGameWillBeLost")})})]})},yt=n(20),Ot=n.n(yt),vt=function(t,e){return function(){Object(l.p)((function(){t.orientation="flat"===e?O.flat:O.pointy;var n=Object(N.a)(t.elSizes,2),r=n[0],a=n[1];t.width=r,t.height=a,q(t)}))}},wt=Object(z.a)((function(){var t=P(),e=t.isPointy;return Object(f.jsxs)("div",{className:Ot.a.wrap,children:[Object(f.jsx)("button",{disabled:!e,className:Ot.a.flat,onClick:vt(t,"flat")}),Object(f.jsx)("button",{disabled:e,className:Ot.a.pointy,onClick:vt(t,"pointy")})]})})),xt=n(26),kt=n.n(xt),Mt={Enter:"text.placeChip",R:"text.rotateField",D:"text.showDrawer"},Et=function(){return Object(f.jsx)("ul",{className:kt.a.root,children:v(Mt).map((function(t){return Object(f.jsxs)("li",{children:[Object(f.jsx)("code",{children:t})," - ",nt(Mt[t])]},t)}))})},St=Object(z.a)((function(){var t=m();return Object(f.jsxs)("div",{className:W()(Object(h.a)({},Q.a.hidden,!t.drawer)),children:[Object(f.jsx)("div",{className:Q.a.backdrop,onClick:t.toggleDrawer}),Object(f.jsxs)("div",{className:Q.a.drawer,children:[Object(f.jsx)(rt,{}),Object(f.jsxs)("div",{className:Q.a.content,children:[Object(f.jsx)(ot,{}),Object(f.jsx)(ut,{}),t.phase===r.GAME&&Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:Q.a.actions,children:[Object(f.jsx)(gt,{}),Object(f.jsx)(wt,{}),Object(f.jsx)(Et,{})]})})]}),Object(f.jsx)(Z,{})]})]})})),Nt=function(){return Object(f.jsx)("button",{className:ht.a.main,onClick:m().startGame,children:nt("button.startNewGame")})},Ct=n(10),Gt=function(t){return function(e){if(!t.preSit&&!t.endGame){var n=e.currentTarget.getBoundingClientRect(),r=t.layout.pixelToHex({x:e.pageX-n.x,y:e.pageY-n.y}).round();Object(l.p)((function(){t.tiles[r.id]&&t.tiles[r.id].type===a.emptyCell?t.hoveredId=r.id:t.hoveredId=null}))}}},qt=function(t){return function(){Object(l.p)((function(){null===t.hoveredId||t.tiles[t.hoveredId].type===t.playerMove||t.endGame||(t.tiles[t.hoveredId].type=t.playerMove,t.storage.set("tiles",t.tiles),t.playerMove=t.playerMove===a.p1?a.p2:a.p1,new L(t.tiles,B(t)))}))}},Dt=(n(33),Object(z.a)((function(t){var e=t.children,n=P(),r=Object(i.useRef)(null);return Object(i.useEffect)((function(){n.arenaElement=r.current}),[n.arenaElement]),Object(f.jsx)("div",Object(Ct.a)({ref:r,className:n.orientationType},Object(i.useMemo)((function(){return null===n.arenaElement?{}:{style:Object(h.a)({},"--R","".concat(n.R,"px")),onClick:qt(n),onMouseMove:Gt(n),children:e}}),[n.arenaElement,n.R])))}))),Rt=Object(z.a)((function(t){var e=t.data;return Object(f.jsx)("div",Object(Ct.a)(Object(Ct.a)({"data-qr":e.qr},e.p?{className:"p".concat(e.p)}:{}),e.border?{"data-b":""}:{}))})),Lt=(n(34),n(35),function(){return Object(f.jsx)(f.Fragment,{children:Object.entries(P().tiles).map((function(t,e){return Object(f.jsx)(Rt,{data:Object(l.l)({get qr(){return[t[1].hex.q,t[1].hex.r].join(",")},get border(){return t[1].type===a.border},get p(){switch(t[1].type){case a.p1:return a.p1;case a.p2:return a.p2;default:return}}})},e)}))})}),Bt=Object(z.a)((function(){var t=P(),e=t.hoveredId,n=function(t){var e=Object(i.useRef)();return Object(i.useEffect)((function(){e.current=t}),[t]),e.current}(e),r=t.playerMove;return Object(f.jsx)("div",Object(Ct.a)(Object(Ct.a)({},Object(h.a)({},"data-hovered-player-".concat(r),"")),{},{"data-qr":null===e?n:e}))})),Tt=function(t){return function(){vt(t,t.isPointy?"flat":"pointy")()}},At=function(){var t=P(),e=m().toggleDrawer;return Object(f.jsx)(_t,{actions:{KeyR:Tt(t),KeyD:e,Enter:qt(t)}})},It=n(23),Pt=n.n(It),zt=Object(z.a)((function(){var t=P(),e=Object(i.useState)(!0),n=Object(N.a)(e,2),r=n[0],a=n[1];return null!==t.endGame&&r?Object(f.jsxs)(mt,{heading:nt("text.gameOver"),footer:Object(f.jsx)(pt,{}),close:function(){return a(!1)},children:[Object(f.jsx)("h3",{className:Pt.a.h3,children:nt("text.wins").replace("###","".concat(t.endGame.name))}),Object(f.jsx)("div",{"data-qr":!0,className:W()("p".concat(t.endGame.name),Pt.a.hex)})]}):null})),Ft=function(){return Object(f.jsxs)(Dt,{children:[Object(f.jsx)(At,{}),Object(f.jsx)(Lt,{}),Object(f.jsx)(Bt,{}),Object(f.jsx)(zt,{})]})},Jt=Object(z.a)((function(){switch(m().phase){case r.PRE_GAME:return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{style:{padding:"calc(var(--spacing) * 10)",textAlign:"center"},children:Object(f.jsx)(Nt,{})})});case r.GAME:return Object(f.jsx)(Ft,{});default:return null}})),Ht=(n(36),n(37),n(38),n(39),new T);Object(o.render)(Object(f.jsx)(i.StrictMode,{children:Object(f.jsx)(_,{store:new b(Ht.dispose),children:Object(f.jsxs)(I,{store:Ht,children:[Object(f.jsx)(Jt,{}),Object(f.jsx)(St,{}),Object(f.jsx)(H,{})]})})}),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.a9d1b397.chunk.js.map