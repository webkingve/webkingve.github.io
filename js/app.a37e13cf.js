(function(t){function e(e){for(var r,n,c=e[0],i=e[1],l=e[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o={app:0},s=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-0c8b0442":"1cafe13e","chunk-3c61411e":"b4716c29","chunk-6951bebf":"f7785ca2"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-0c8b0442":1,"chunk-3c61411e":1,"chunk-6951bebf":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-0c8b0442":"7775204f","chunk-3c61411e":"d32bb3c1","chunk-6951bebf":"8075699e"}[t]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[t],p.parentNode.removeChild(p),a(s)},p.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0077":function(t,e,a){t.exports=a.p+"img/logoking.beb2f812.png"},"04ff":function(t,e,a){t.exports=a.p+"img/slide1.9a0051c4.jpg"},"0b74":function(t,e,a){t.exports=a.p+"img/slide3.b08c380a.jpg"},"44a0":function(t,e,a){t.exports=a.p+"img/desarrollo.58ac82f2.jpg"},"4c18":function(t,e,a){t.exports=a.p+"img/seo.9136cdeb.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"white",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:a("0077"),transition:"scale-transition",width:"80"}})],1),r("v-spacer"),r("v-btn",{attrs:{to:"/",color:"goldking",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Inicio")])]),r("v-btn",{attrs:{to:"/acerca",color:"goldking",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Acerca")])]),r("v-btn",{attrs:{to:"/servicios",color:"goldking",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Servicios")])]),r("v-btn",{attrs:{to:"/contacto",color:"goldking",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Contacto")])])],1),r("v-main",[r("router-view")],1),r("v-footer",{attrs:{color:"goldking",padless:""}},[r("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(e){return r("v-btn",{key:e,staticClass:"my-2",attrs:{color:"white",text:"",rounded:""}},[t._v(" "+t._s(e)+" ")])})),r("v-col",{staticClass:"goldking darken-1 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Webkingve")])])],2)],1)],1)},o=[],s={name:"App",data:function(){return{links:["Facebook","Instagram","Telegram"]}}},c=s,i=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),p=a("40dc"),v=a("8336"),f=a("62ad"),m=a("553a"),g=a("adda"),h=a("f6c4"),b=a("0fd9"),x=a("2fa4"),y=Object(i["a"])(c,n,o,!1,null,null,null),w=y.exports;u()(y,{VApp:d["a"],VAppBar:p["a"],VBtn:v["a"],VCol:f["a"],VFooter:m["a"],VImg:g["a"],VMain:h["a"],VRow:b["a"],VSpacer:x["a"]});a("d3b7");var C=a("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("v-carousel",{attrs:{cycle:"",height:"500","hide-delimiter-background":"","show-arrows-on-hover":""}},[r("v-carousel-item",{attrs:{src:a("04ff")}}),r("v-carousel-item",{attrs:{src:a("0b74")}}),r("v-carousel-item",{attrs:{src:a("7570")}}),r("v-carousel-item",{attrs:{src:a("96ef")}})],1),t._m(0),r("br"),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"downer",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:a("44a0")}},[r("v-card-title",[t._v("Diseño web")])],1),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Diseña tu sitio de negocios")]),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v("Diseñamos tu sitio web partiendo de sus gustos y optimizandolos para visualizarlos desde un navegador movil.")])])],1)],1),r("v-col",{staticClass:"downer",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:a("9a7e")}},[r("v-card-title",[t._v("Marketing")])],1),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Gana muchos mas clientes!")]),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v("Con nuestras campañas de mercadeo te ayudamos a convertir tu empresa en una marca popular/reconocida, y a su vez atraer nuevos clientes.")])])],1)],1),r("v-col",{staticClass:"downer",attrs:{cols:"12",sm:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:a("4c18")}},[r("v-card-title",[t._v("SEO")])],1),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Posicionamos tu sitio Web")]),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v("Posicionamos tu sitio web para que este entre los primeros resultados de busqueda en buscadores como google. ")])])],1)],1)],1),r("br"),r("br")],1)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"colored",attrs:{align:"center"}},[a("br"),a("p",{staticStyle:{color:"black"}},[a("b",[t._v("Todo en diseño web, tiendas con carritos de compra, pasarelas de pago y mucho mas!")])])])}],j=(a("cccb"),a("b0af")),V=a("99d9"),S=a("5e66"),O=a("3e35"),E={},P=Object(i["a"])(E,k,_,!1,null,null,null),T=P.exports;u()(P,{VCard:j["a"],VCardSubtitle:V["a"],VCardText:V["b"],VCardTitle:V["c"],VCarousel:S["a"],VCarouselItem:O["a"],VCol:f["a"],VImg:g["a"],VRow:b["a"]}),r["a"].use(C["a"]);var A=[{path:"/",name:"Home",component:T},{path:"/acerca",name:"About",component:function(){return a.e("chunk-3c61411e").then(a.bind(null,"f820"))}},{path:"/contacto",name:"Contact",component:function(){return a.e("chunk-6951bebf").then(a.bind(null,"b8fa"))}},{path:"/servicios",name:"Servicio",component:function(){return a.e("chunk-0c8b0442").then(a.bind(null,"e2f8"))}}],D=new C["a"]({mode:"history",base:"/",routes:A}),I=D,L=(a("5363"),a("f309"));r["a"].use(L["a"]);var M=new L["a"]({icons:{iconfont:"mdiSvg"},theme:{themes:{light:{goldking:"#d1a552"}}}});r["a"].config.productionTip=!1,new r["a"]({router:I,vuetify:M,render:function(t){return t(w)}}).$mount("#app")},"5ced":function(t,e,a){},7570:function(t,e,a){t.exports=a.p+"img/slide4.0a9938db.jpg"},"96ef":function(t,e,a){t.exports=a.p+"img/slide2.4360c121.jpg"},"9a7e":function(t,e,a){t.exports=a.p+"img/marketing.2899e175.jpg"},cccb:function(t,e,a){"use strict";var r=a("5ced"),n=a.n(r);n.a}});
//# sourceMappingURL=app.a37e13cf.js.map