(function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],l=0,p=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c26ad":"773bb02c","chunk-3914e23a":"b3ce0536","chunk-433276a6":"6f6923ec","chunk-4a5c7f3e":"ee8b8a92","chunk-d9ca21d0":"06609df1"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";var r=n("2b0e"),o=n("2f62"),a=n("a18c"),u=n("04e1"),i=n.n(u);r["default"].use(o["a"]),t["a"]=new o["a"].Store({state:{token:"",usuarioDb:"",paginaProtegida:"clientes",nombreUsuario:""},mutations:{obtenerUsuario:function(e,t){e.token=t,""===t?e.usuarioDb="":(e.usuarioDb=i()(t),a["a"].push({name:e.paginaProtegida}))},pagina:function(e,t){e.paginaProtegida=t}},actions:{seleccionPagina:function(e,t){var n=e.commit;n("pagina",t)},guardarUsuario:function(e,t){var n=e.commit;localStorage.setItem("token",t),n("obtenerUsuario",t)},cerrarSesion:function(e,t){var n=e.commit;n("obtenerUsuario",""),localStorage.removeItem("token"),a["a"].push({name:"ingreso"})},leerToken:function(e){var t=e.commit,n=localStorage.getItem("token");t("obtenerUsuario",n||"")}},getters:{estaActivo:function(e){return!!e.token}}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=n("2877"),i={},c=Object(u["a"])(i,o,a,!1,null,null,null),s=c.exports,l=n("a18c"),f=n("4360"),p=n("5f5b"),d=n("b1e0"),m=(n("f9e3"),n("2dd8"),n("bc3a")),h=n.n(m),b=n("a7fe"),g=n.n(b);r["default"].use(p["a"]),r["default"].use(d["a"]),r["default"].use(g.a,h.a),h.a.defaults.baseURL="https://app-login-martin.herokuapp.com/",r["default"].config.productionTip=!1,new r["default"]({router:l["a"],store:f["a"],render:function(e){return e(s)}}).$mount("#app")},a18c:function(e,t,n){"use strict";n("45fc"),n("d3b7");var r=n("2b0e"),o=n("8c4f"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mt-5 text-center"},[n("h1",[e._v("Bienvenido")]),n("router-link",{staticClass:"btn btn-primary",attrs:{to:"/registro"}},[e._v("Registrarme")]),n("router-link",{staticClass:"ml-3 btn btn-primary",attrs:{to:"/ingreso"}},[e._v("Ingresar")])],1)},u=[],i={name:"Home"},c=i,s=n("2877"),l=Object(s["a"])(c,a,u,!1,null,null,null),f=l.exports,p=n("4360");r["default"].use(o["a"]);var d=[{path:"/",name:"Home",component:f},{path:"/registro",name:"registro",component:function(){return n.e("chunk-2d0c26ad").then(n.bind(null,"49e7"))}},{path:"/ingreso",name:"ingreso",component:function(){return n.e("chunk-3914e23a").then(n.bind(null,"e231"))}},{path:"/menu",name:"menu",component:function(){return n.e("chunk-d9ca21d0").then(n.bind(null,"f127"))},meta:{requireAuth:!0}},{path:"/clientes",name:"clientes",component:function(){return n.e("chunk-433276a6").then(n.bind(null,"039a"))},meta:{requireAuth:!0}},{path:"/productos",name:"productos",component:function(){return n.e("chunk-4a5c7f3e").then(n.bind(null,"f12f"))},meta:{requireAuth:!0}}],m=new o["a"]({mode:"history",base:"/",routes:d});m.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requireAuth}));r&&""===p["a"].state.token?n({name:"ingreso"}):n()}));t["a"]=m}});
//# sourceMappingURL=app.95cdafb1.js.map