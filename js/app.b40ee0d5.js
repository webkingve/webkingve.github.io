(function(t){function e(e){for(var r,n,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-09eb0c0c":"e9c3fcb2","chunk-2d22d746":"262a7c0a","chunk-79746658":"4616cf1a"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-09eb0c0c":1,"chunk-79746658":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-09eb0c0c":"d4205f10","chunk-2d22d746":"31d6cfe0","chunk-79746658":"58e7b3ae"}[t]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[t],p.parentNode.removeChild(p),a(s)},p.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0077":function(t,e,a){t.exports=a.p+"img/logoking.beb2f812.png"},"04ff":function(t,e,a){t.exports=a.p+"img/slide1.9a0051c4.jpg"},"0b74":function(t,e,a){t.exports=a.p+"img/slide3.b08c380a.jpg"},"44a0":function(t,e,a){t.exports=a.p+"img/desarrollo.58ac82f2.jpg"},"4c18":function(t,e,a){t.exports=a.p+"img/seo.9136cdeb.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"white",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:a("0077"),transition:"scale-transition",width:"70"}})],1),r("v-spacer"),r("div",{staticClass:"d-none d-sm-flex"},[r("v-btn",{attrs:{to:"/",color:"goldking",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Inicio")])]),r("v-btn",{attrs:{to:"/acerca",color:"goldking",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Acerca")])]),r("v-btn",{attrs:{to:"/servicios",color:"goldking",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Servicios")])]),r("v-btn",{attrs:{to:"/contacto",color:"goldking",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Contacto")])])],1),r("div",{staticClass:"d-flex d-sm-none"},[r("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:"",color:"goldking"}},"v-btn",n,!1),a),[r("v-app-bar-nav-icon",{attrs:{color:"goldking"}})],1)]}}])},[r("v-list",[r("v-list-item",[r("v-list-item-title",[r("v-btn",{attrs:{to:"/",color:"goldking",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Inicio")])])],1)],1),r("v-list-item",[r("v-list-item-title",[r("v-btn",{attrs:{to:"/acerca",color:"goldking",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Acerca")])])],1)],1),r("v-list-item",[r("v-list-item-title",[r("v-btn",{attrs:{to:"/servicios",color:"goldking",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Servicios")])])],1)],1),r("v-list-item",[r("v-list-item-title",[r("v-btn",{attrs:{to:"/contacto",color:"goldking",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Contacto")])])],1)],1)],1)],1)],1)],1),r("v-main",[r("router-view")],1),r("v-footer",{attrs:{color:"goldking",padless:""}},[r("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(e){return r("v-btn",{key:e,staticClass:"my-2",attrs:{color:"white",text:"",rounded:""}},[t._v(" "+t._s(e)+" ")])})),r("v-col",{staticClass:"goldking darken-1 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Webkingve")])])],2)],1)],1)},o=[],s={name:"App",data:function(){return{links:["Facebook","Instagram","Telegram"]}}},i=s,c=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),p=a("40dc"),v=a("5bc1"),m=a("8336"),f=a("62ad"),g=a("553a"),b=a("adda"),h=a("8860"),x=a("da13"),C=a("5d23"),k=a("f6c4"),y=a("e449"),w=a("0fd9"),_=a("2fa4"),V=Object(c["a"])(i,n,o,!1,null,null,null),j=V.exports;u()(V,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:v["a"],VBtn:m["a"],VCol:f["a"],VFooter:g["a"],VImg:b["a"],VList:h["a"],VListItem:x["a"],VListItemTitle:C["b"],VMain:k["a"],VMenu:y["a"],VRow:w["a"],VSpacer:_["a"]});a("d3b7");var S=a("8c4f"),O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("v-carousel",{attrs:{cycle:"",height:"500","hide-delimiter-background":"","show-arrows-on-hover":""}},[r("v-carousel-item",{attrs:{src:a("04ff")}}),r("v-carousel-item",{attrs:{src:a("0b74")}}),r("v-carousel-item",{attrs:{src:a("7570")}}),r("v-carousel-item",{attrs:{src:a("96ef")}})],1),t._m(0),r("br"),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"downer",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:a("44a0")}},[r("v-card-title",[t._v("Diseño web")])],1),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Diseña tu sitio de negocios")]),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v("Diseñamos tu sitio web partiendo de sus gustos y optimizandolos para visualizarlos desde un navegador movil.")])])],1)],1),r("v-col",{staticClass:"downer",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:a("9a7e")}},[r("v-card-title",[t._v("Marketing")])],1),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Gana muchos mas clientes!")]),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v("Con nuestras campañas de mercadeo te ayudamos a convertir tu empresa en una marca popular/reconocida, y a su vez atraer nuevos clientes.")])])],1)],1),r("v-col",{staticClass:"downer",attrs:{cols:"12",sm:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:a("4c18")}},[r("v-card-title",[t._v("SEO")])],1),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Posicionamos tu sitio Web")]),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v("Posicionamos tu sitio web para que este entre los primeros resultados de busqueda en buscadores como google. ")])])],1)],1)],1),r("br"),r("br")],1)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"colored",attrs:{align:"center"}},[a("br"),a("p",{staticStyle:{color:"black"}},[a("b",[t._v("Todo en diseño web, tiendas con carritos de compra, pasarelas de pago y mucho mas!")])])])}],E=(a("cccb"),a("b0af")),T=a("99d9"),P=a("5e66"),I=a("3e35"),L={},M=Object(c["a"])(L,O,A,!1,null,null,null),B=M.exports;u()(M,{VCard:E["a"],VCardSubtitle:T["a"],VCardText:T["b"],VCardTitle:T["c"],VCarousel:P["a"],VCarouselItem:I["a"],VCol:f["a"],VImg:b["a"],VRow:w["a"]}),r["a"].use(S["a"]);var D=[{path:"/",name:"Home",component:B},{path:"/acerca",name:"About",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/contacto",name:"Contact",component:function(){return a.e("chunk-79746658").then(a.bind(null,"b8fa"))}},{path:"/servicios",name:"Servicio",component:function(){return a.e("chunk-09eb0c0c").then(a.bind(null,"e2f8"))}}],N=new S["a"]({base:"/",routes:D}),q=N,F=(a("5363"),a("f309"));r["a"].use(F["a"]);var $=new F["a"]({icons:{iconfont:"mdiSvg"},theme:{themes:{light:{goldking:"#d1a552"}}}});a("5aea");r["a"].config.productionTip=!1,new r["a"]({router:q,vuetify:$,render:function(t){return t(j)}}).$mount("#app")},"5aea":function(t,e,a){},"5ced":function(t,e,a){},7570:function(t,e,a){t.exports=a.p+"img/slide4.0a9938db.jpg"},"96ef":function(t,e,a){t.exports=a.p+"img/slide2.4360c121.jpg"},"9a7e":function(t,e,a){t.exports=a.p+"img/marketing.2899e175.jpg"},cccb:function(t,e,a){"use strict";var r=a("5ced"),n=a.n(r);n.a}});
//# sourceMappingURL=app.b40ee0d5.js.map