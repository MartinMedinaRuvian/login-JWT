(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9ca21d0"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),c=r("9112");for(var a in o){var f=n[a],s=f&&f.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(u){s.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),c=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),c=r("ae40"),a=i("filter"),f=c("filter");n({target:"Array",proto:!0,forced:!a||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},8064:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-5"},[r("b-navbar",{staticClass:"navbar navbar-light bg-light fixed-top",attrs:{toggleable:"md"}},[r("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),r("b-navbar-brand",[r("b",[r("b-icon",{attrs:{variant:"info",icon:"person-fill"}}),t._v(" "+t._s(t.usuarioDb.nombre)+" "),t.estaActivo?r("b-button",{staticClass:"ml-2",attrs:{size:"sm",variant:"info"},on:{click:function(e){return t.cerrarSesion()}}},[t._v(" Salir "),r("b-icon",{attrs:{icon:"x-circle"}})],1):t._e()],1)]),r("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/clientes"}},[t._v("Clientes")]),r("b-nav-item",{attrs:{to:"/productos"}},[t._v("Productos")])],1)],1)],1)],1)},o=[],i=r("5530"),c=r("2f62"),a={name:"Navegacion",methods:Object(i["a"])({},Object(c["b"])(["cerrarSesion","leerToken"])),computed:Object(i["a"])({},Object(c["d"])(["usuarioDb"]),{},Object(c["c"])(["estaActivo"])),created:function(){this.leerToken()}},f=a,s=r("2877"),u=Object(s["a"])(f,n,o,!1,null,null,null);e["a"]=u.exports},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),f=r("4930"),s=r("fdbf"),u=r("d039"),l=r("5135"),b=r("e8b5"),d=r("861d"),v=r("825a"),p=r("7b0b"),g=r("fc6a"),h=r("c04e"),y=r("5c6c"),m=r("7c73"),O=r("df75"),S=r("241c"),w=r("057f"),j=r("7418"),L=r("06cf"),P=r("9bf2"),E=r("d1e7"),T=r("9112"),x=r("6eeb"),D=r("5692"),_=r("f772"),k=r("d012"),C=r("90e3"),N=r("b622"),M=r("e538"),A=r("746f"),V=r("d44e"),G=r("69f3"),F=r("b727").forEach,H=_("hidden"),J="Symbol",R="prototype",B=N("toPrimitive"),$=G.set,I=G.getterFor(J),q=Object[R],z=o.Symbol,Q=i("JSON","stringify"),W=L.f,K=P.f,U=w.f,X=E.f,Y=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),rt=D("wks"),nt=o.QObject,ot=!nt||!nt[R]||!nt[R].findChild,it=a&&u((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(q,e);n&&delete q[e],K(t,e,r),n&&t!==q&&K(q,e,n)}:K,ct=function(t,e){var r=Y[t]=m(z[R]);return $(r,{type:J,tag:t,description:e}),a||(r.description=e),r},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ft=function(t,e,r){t===q&&ft(Z,e,r),v(t);var n=h(e,!0);return v(r),l(Y,n)?(r.enumerable?(l(t,H)&&t[H][n]&&(t[H][n]=!1),r=m(r,{enumerable:y(0,!1)})):(l(t,H)||K(t,H,y(1,{})),t[H][n]=!0),it(t,n,r)):K(t,n,r)},st=function(t,e){v(t);var r=g(e),n=O(r).concat(vt(r));return F(n,(function(e){a&&!lt.call(r,e)||ft(t,e,r[e])})),t},ut=function(t,e){return void 0===e?m(t):st(m(t),e)},lt=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,H)&&this[H][e])||r)},bt=function(t,e){var r=g(t),n=h(e,!0);if(r!==q||!l(Y,n)||l(Z,n)){var o=W(r,n);return!o||!l(Y,n)||l(r,H)&&r[H][n]||(o.enumerable=!0),o}},dt=function(t){var e=U(g(t)),r=[];return F(e,(function(t){l(Y,t)||l(k,t)||r.push(t)})),r},vt=function(t){var e=t===q,r=U(e?Z:g(t)),n=[];return F(r,(function(t){!l(Y,t)||e&&!l(q,t)||n.push(Y[t])})),n};if(f||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=C(t),r=function(t){this===q&&r.call(Z,t),l(this,H)&&l(this[H],e)&&(this[H][e]=!1),it(this,e,y(1,t))};return a&&ot&&it(q,e,{configurable:!0,set:r}),ct(e,t)},x(z[R],"toString",(function(){return I(this).tag})),x(z,"withoutSetter",(function(t){return ct(C(t),t)})),E.f=lt,P.f=ft,L.f=bt,S.f=w.f=dt,j.f=vt,M.f=function(t){return ct(N(t),t)},a&&(K(z[R],"description",{configurable:!0,get:function(){return I(this).description}}),c||x(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:z}),F(O(rt),(function(t){A(t)})),n({target:J,stat:!0,forced:!f},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=z(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!a},{create:ut,defineProperty:ft,defineProperties:st,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:dt,getOwnPropertySymbols:vt}),n({target:"Object",stat:!0,forced:u((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(p(t))}}),Q){var pt=!f||u((function(){var t=z();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!at(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,Q.apply(null,o)}})}z[R][B]||T(z[R],B,z[R].valueOf),V(z,J),k[H]=!0},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),c=r("d039"),a=c((function(){i(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return i(o(t))}})},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),c=r("fc6a"),a=r("06cf"),f=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=a.f,s=i(n),u={},l=0;while(s.length>l)r=o(n,e=s[l++]),void 0!==r&&f(u,e,r);return u}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),c=r("06cf").f,a=r("83ab"),f=o((function(){c(1)})),s=!a||f;n({target:"Object",stat:!0,forced:s,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},f127:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navegacion"),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-5 text center"},[r("h3",[t._v("Bienvenido este es el menu")])])}],i=r("8064"),c={components:{Navegacion:i["a"]}},a=c,f=r("2877"),s=Object(f["a"])(a,n,o,!1,null,null,null);e["default"]=s.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-d9ca21d0.06609df1.js.map