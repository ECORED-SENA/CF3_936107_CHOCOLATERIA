(function(e){function a(a){for(var o,i,c=a[0],d=a[1],l=a[2],s=0,u=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=d(d.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return d.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"066fb5a9","chunk-0206bfa0":"a278e582","chunk-0c047e41":"9dab790d","chunk-13a6037e":"81eda5eb","chunk-18f95272":"7a57d180","chunk-25b302c8":"c0c96807","chunk-26fc7596":"72ac93ab","chunk-2c06842c":"fb99932f","chunk-2d0e96ec":"5df2f04d","chunk-2d208d90":"cd091006","chunk-2d21d0e2":"e3102ef0","chunk-2d22c123":"07fa3afa","chunk-2d2747e2":"830388c1","chunk-2e80bb9a":"16424b70","chunk-319206de":"612f074e","chunk-32334cb6":"440e7537","chunk-3c57cd7b":"415a152e","chunk-3d6834f6":"2b9abb85","chunk-4cdd78c0":"57da21f4","chunk-4f2d402a":"cce421b8","chunk-4fde0a08":"42f6160f","chunk-515a8379":"3dc189c9","chunk-53ccb27e":"2eb129e7","chunk-55d286b8":"761dc6b8","chunk-59974754":"10e91e45","chunk-6e1e538a":"b8da87ec","chunk-766a929b":"b7bdd6eb","chunk-c796899c":"fdb738a9","chunk-e8a7823a":"c1f222d4","chunk-f2df7d2c":"156dfe57","chunk-fde47172":"7234b9b3",comple:"6f5c51dd",creditos:"fd38ecaa",glosario:"aa78cbac",intro:"1a0d25b8",referencias:"83adec23",sintesis:"044d4564",tema1:"290d6fbe",tema2:"f6ecddc7",tema3:"33d43d67",tema4:"6a326a3e",tema5:"b9fb5db8"}[e]+".js"}function d(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var a=[],n={actividad:1,"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1,sintesis:1,tema1:1,tema2:1,tema3:1,tema4:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"b7c4b8c2","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"8b66f838","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"daffa119","chunk-6e1e538a":"126808df","chunk-766a929b":"0489e2dc","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"0c8bcd9d",creditos:"d5d79d17",glosario:"1a6847a0",intro:"31d6cfe0",referencias:"657d9316",sintesis:"4d31ee4b",tema1:"4353f4cc",tema2:"03fbb98d",tema3:"bbbe55fd",tema4:"0222b921",tema5:"31d6cfe0"}[e]+".css",t=d.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],s=l.getAttribute("data-href");if(s===o||s===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.src=c(e);var u=new Error;l=function(a){s.onerror=s.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(a)},d.m=e,d.c=o,d.d=function(e,a,n){d.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,a){if(1&a&&(e=d(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)d.d(n,o,function(a){return e[a]}.bind(null,o));return n},d.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(a,"a",a),a},d.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},d.p="",d.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"1e0a":function(e,a,n){e.exports=n.p+"img/float-2.f639b47b.png"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,d=n("2877"),l=Object(d["a"])(c,i,t,!1,null,null,null),s=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a77"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Alistamiento de equipos e instrumentos de transformación del grano",descripcionCurso:"En este componente formativo se profundiza en la legislación aplicable a la industria cacaotera, en la historia de la producción de cacao en el país y en las diferentes variaciones de producción que se practican de acuerdo con los subproductos esperados.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("c1d1")},{clases:["banner-principal-decorativo-2"],imagen:n("1e0a")},{clases:["banner-principal-decorativo-3","d-none","d-lg-block"],imagen:n("e047")},{clases:["banner-principal-decorativo-4"],imagen:n("9f19")},{clases:["banner-principal-decorativo-5","d-none","d-lg-block"],imagen:n("8315")},{clases:["banner-principal-decorativo-6"],imagen:n("9bf9")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Marco normativo",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Cacao",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Tipos",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Beneficio",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Criterios de calidad",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Equipos",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Unidades de medida",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Variables de proceso",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Marco normativo",referencia:"Benítez, N. <em>(2020). Normatividad en seguridad y salud en el trabajo Colombia</em> - Revista FSL. Seguridad Laboral.",tipo:"Artículo",link:"https://www.seguridad-laboral.es/sl-latam/colombia/normatividad-en-seguridad-y-salud-en-el-trabajo-2019-2020-colombia_20200630.html"},{tema:"Cacao",referencia:"Mejía, Castro, Carvajal et al., (2017) <em>Agroindustria del Cacao.</em> Sistema de Investigación, Desarrollo Tecnológico e Innovación. SENA.",tipo:"Documento",link:"https://repositorio-sena-edu-co.bdigital.sena.edu.co/bitstream/handle/11404/5241/agroindustria_cacao.pdf?sequence=1&isAllowed=y"},{tema:"Equipos",referencia:"IICA Guatemala. 2020. <em>Maquinaria de proceso de cacao a chocolate y subproductos.</em> Salón Cacao. Guatemala. [Video]. Youtube.",tipo:"Video",link:"https://www.youtube.com/watch?v=UQxeItWqwS8"},{tema:"Variables del Proceso",referencia:"Ángel, J. (2021). <em>Como es la transformación de cacao orgánico en chocolate.</em> TvAgro. [Video]. Youtube.",tipo:"Video",link:"https://www.youtube.com/watch?v=BVMfwgXAcZs"},{tema:"Mediciones",referencia:"Aguilar, Héctor. (2016). <em>Manual para la Evaluación de la Calidad del Grano de Cacao</em>",tipo:"Documento",link:"http://www.fhia.org.hn/descargas/Proyecto_de_Cacao_SECO/Manual_para_la_Evaluacion_de_la_Calidad_del_Grano_de_Cacao.pdf"}],glosario:[{termino:"Calidad de alimento",significado:"Conjunto de cualidades que son aceptadas o valoradas por el consumidor."},{termino:"Cochado",significado:"Es el proceso por el cual se extrae la acidez y los sabores indeseados al chocolate."},{termino:"Maquinaria artesanal",significado:"Es la empleada en la transformación del cacao a escala local."},{termino:"Maquinaria industrial",significado:"Es la maquinaria empleada en los procesos de transformación del cacao a una escala más industrial en la que se procesan grandes cantidades de materias primas."},{termino:"Premolienda",significado:"Es la actividad realizada para la obtención de la pasta de cacao con tamaños finales de aproximadamente 140 micras."},{termino:"Propiedades Organolépticas",significado:"Color, sabor, olor y textura. Estas son las cuatro propiedades organolépticas principales de los alimentos. Se trata de características que se perciben a través de los sentidos (gusto, vista, olfato y tacto) y que en algunos alimentos están mucho más presentes que en otros."},{termino:"Refinado de cacao",significado:"Proceso por medio del cual se refina el cacao para que se obtenga un contenido mínimo de grasa de 28 al 30% en la mezcla."},{termino:"Rompedor de cacao",significado:"Es una máquina empleada para romper el grano sin llegar a pulverizar."},{termino:"SST",significado:"Seguridad y salud en el trabajo."},{termino:"Tostión",significado:"Es el proceso de secado a través de la adicción de calor por medio de una máquina industrial artesanal."}],referencias:[{referencia:"Aguilar, H. (2016). <em>Manual Para la Evaluación de la Calidad del Grano de Cacao.</em> Fundación Hondureña de Investigación Agrícola. Honduras.",link:"http://www.fhia.org.hn/descargas/Proyecto_de_Cacao_SECO/Manual_para_la_Evaluacion_de_la_Calidad_del_Grano_de_Cacao.pdf"},{referencia:"Agronet. (2022). <em>Precio de Referencia Semanal de Compra de Cacao</em> - Fuente Industria - FEDECACAO - Exportadores. Ministerio de Agricultura y Desarrollo Rural.",link:"https://www.agronet.gov.co/Noticias/Paginas/Precio-de-referencia-semanal-de-compra-de-cacao---Fuente-Industria.aspx"},{referencia:"Bayona, E. (2021). <em>Desarrollo de la Medición en el Ámbito del Cultivo del Cacao.</em> Universidad Santo Tomas. Ocaña - Norte de Santander.",link:"https://repository.usta.edu.co/bitstream/handle/11634/33509/2021ErmidesBayonaSalazar.pdf?sequence=2&isAllowed=y"},{referencia:"Campos, G. (2020). <em>Normatividad en Seguridad y Salud en el Trabajo, 2019- 2020.</em> Colombia.",link:"https://www.seguridad-laboral.es/sl-latam/colombia/normatividad-en-seguridad-y-salud-en-el-trabajo-2019-2020-colombia_20200630.html"},{referencia:"De La Cruz, j. (s.f.) <em>Cacao Operaciones Poscosecha.</em> Organización de las Naciones Unidas para la Alimentación y la Agricultura FAO. México.",link:"https://www.fao.org/3/au995s/au995s.pdf"},{referencia:"Federación Nacional de Cacaoteros FEDECACAO. (2022). <em>Marco Jurídico.</em>",link:"https://www.fedecacao.com.co/marcojuridico"},{referencia:"Rodríguez, J. (2018). Cacao, <em>La Historia Detrás del “Alimento de Dioses”. Viva El Cacao.</em> Venezuela.",link:"https://vivaelcacao.com/historia-del-cacao/"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable del equipo de diseño instruccional",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Karly Julieth Cediel Martínez",cargo:"Experta temática",centro:"Centro de la industria, la empresa y los servicios - Regional Norte de Santander"},{nombre:"Zvi Daniel Grosman Landáez",cargo:"Diseñador Instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Silvia Milena Sequeda Cárdenas",cargo:"Asesor Metodológico",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Corrector de Estilo",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Validación audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Validación Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jhon Edinson Castañeda Oviedo",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Revisión de guion audiovisual",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Yenny Patricia Ulloa Villamizar",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del equipo de gestión de repositorio",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(s)}}).$mount("#app")},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.c4d94e81.png"},8315:function(e,a,n){e.exports=n.p+"img/float-5.0c7b1c7a.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9bf9":function(e,a,n){e.exports=n.p+"img/float-6.177df643.png"},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},"9f19":function(e,a,n){e.exports=n.p+"img/float-4.d8c95422.png"},a3a0:function(e,a,n){},c1d1:function(e,a,n){e.exports=n.p+"img/float-1.6181b303.png"},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.6429e004.png"},e047:function(e,a,n){e.exports=n.p+"img/float-3.1b3363fb.png"}});
//# sourceMappingURL=app.bc59873e.js.map