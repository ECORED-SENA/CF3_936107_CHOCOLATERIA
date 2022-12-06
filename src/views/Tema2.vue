<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cacao

    .d-flex.flex-wrap.align-items-center.mb-5.mb-xl-0
      p.col-xl-7.order-2.order-xl-1.pe-xl-4 El cacao es un árbol procedente de América que produce un fruto del mismo nombre que se puede utilizar como ingrediente para alimentos entre los que destaca el chocolate. Su uso se remonta a la época de los mayas, aztecas e incas, y desde entonces se ha usado tanto para fines nutricionales como médicos.
        br
        br
        |Del cacao, no se tiene una referencia desde cuando las antiguas tribus de centro américa lo hacían parte de su dieta, pero si se tiene referencia del descubrimiento por parte de los españoles al llegar a lo que hoy se conoce como Honduras, donde los nativos recibieron con ofrendas a los conquistadores, entre ellas el fruto del cacao. 
      img.mx-auto.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-0(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 505px")
    
    .d-flex.flex-wrap.align-items-end.mb-5
      img.mx-auto.col-xl-5.mb-4.mb-xl-0(src="@/assets/curso/temas/tema2/img-2.png" style="max-width: 505px")
      p.col-xl-7.pe-xl-4 El cacao cuenta con un alto índice de grasas (principalmente saturadas, y en menor medida, monoinsaturadas y poliinsaturadas) hidratos de carbono y proteínas, pero también contiene magnesio, fósforo, potasio, teobromina, cafeína, antioxidantes y agua, entre otros.
        br
        br
        |El cacao además destaca por tener un elevado aporte de energía, por lo que suele indicarse para aquellas personas que realicen actividades deportivas o ejercicio físico de manera intensa.

    .position-relative
      p.position-relative(style="z-index: 1;") El cacao por su antigüedad y su importancia alimenticia a través del tiempo posee una historia extensa e interesante, a continuación, te presentamos un poco de su historia y teorías alrededor del origen de este a través del siguiente video:
      img.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/img-3.png" style="max-width: 127px; right: -3rem; bottom: -130%; position: absolute;")
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/wTj6Bi-00aM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1  Tipos
    
    p.mb-5 Los tipos de cacao se clasifican en tres grupos principales: criollo, forastero y trinitario, como vemos a continuación:

    ImagenInfografica.color-acento-contenido.mb-5.col-xl-10.mx-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img-4.png')

      .tarjeta.tj-1.p-3(x="18.1%" y="12.1%" numero="+" style="background-color: #FFECDE")
        .h5.mb-2 Cacao Criollo
        p Desarrollado en América del Sur y Central, son de finas paredes, rojos o amarillos. Sus semillas son grandes, redondas, de color blanco o púrpura, no astringente, y son los que producen el chocolate más alta calidad. Son de bajo rendimiento y susceptibles a muchas enfermedades, siendo raramente cultivados.
      .tarjeta.tj-2.p-3(x="50%" y="88%" numero="+" style="background-color: #FFECDE")
        .h5.mb-2 Cacao Forastero
        p Son de la cuenca del Amazonas, y tienen una pared gruesa, fruta suave, generalmente de color amarillo. Las semillas son aplanadas y de color púrpura. El tipo de cacao forastero es muy productivo y es el que domina la producción de cacao en el mundo.
      .tarjeta.tj-3.p-3(x="81.9%" y="12.1%" numero="+" style="background-color: #FFECDE")
        .h5.mb-2 Cacao Trinitario
        p El tipo de cacao trinitario surgió en Trinidad, como un híbrido de los tipos criollo y forastero. Son muy variables, y se consideran de alta calidad para la producción de chocolate.
    .pb-xl-5
    .bg-left-to-right(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-last-div.svg')})`}"
      style="background-repeat: no-repeat"
    )
      .d-flex.flex-wrap.align-items-center.mb-5
        img.mx-auto.col-xl-5.mb-4.mb-xl-0(src="@/assets/curso/temas/tema2/img-5.png" style="max-width: 505px")
        .col-xl-7.ps-xl-4
          p Hay miles de clones de cacao en los bancos genéticos de diferentes áreas del mundo. 
            br
            br
            |Algunas de las colecciones más grandes se encuentran en el Instituto de Investigación del Cacao de Tafo en Ghana, la Organización Internacional del Cacao con los bancos de germoplasma en Trinidad, el CEPLAC en Brasil y la estación de Investigación de Agricultura Tropical en Mayagüez, Puerto Rico.
          .p-4.position-relative.px-xl-5(style="background-color: #FEE9B5")
            p #[b(style="color: #FD7F23;") Existen aproximadamente 22 especies de Theobroma, y cerca de 15 son utilizados por su pulpa comestible o semillas.] El cacao es una de las especies más importantes. 
              br
              br
              |#[em Theobroma grandiflorum] (cupuaçu), #[em Theobroma gileri] (cacao de montaña), T. bicolor (Macambo) y subincanum T. (cacao silvestre) son otras especies utilizadas por su pulpa dulce, comestibles y semillas comestibles
            img(src="@/assets/curso/temas/tema2/d-1.svg" style="max-width: 111px; position: absolute; top: -2.6rem; right: -2.6rem;")

      .position-relative
        img.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/img-6.png" style="max-width: 127px; left: -3rem; top: -120%; position: absolute;")
        .tarjeta.color-primario.p-3.mb-5.col-lg-10.mx-auto
          .row.justify-content-around.align-items-center
            img(src="@/assets/curso/temas/tema1/img-4.svg" style="withd: 100%;max-width: 85px")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.fw-bold Para profundizar la información aquí tratada le invitamos a leer:
                    br
                    |Mejía, Castro, Carvajal et al., (2017) #[em Agroindustria del Cacao.] Sistema de Investigación, Desarrollo Tecnológico e Innovación. SENA.
                .col-sm-auto
                  a.boton.color-acento-botones.fw-bold(:href="'https://repositorio-sena-edu-co.bdigital.sena.edu.co/bitstream/handle/11404/5241/agroindustria_cacao.pdf?sequence=1&isAllowed=y'" target="_blank")
                    span.pe-4 Enlace web
                    <svg style="width: 26px" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                      <g id="Grupo_176308" data-name="Grupo 176308" transform="translate(-1221 -2969)">
                        <rect id="Rectángulo_35625" data-name="Rectángulo 35625" width="26" height="26" transform="translate(1221 2969)" fill="#12263f"/>
                        <g id="Icon_feather-link-2" data-name="Icon feather-link-2" transform="translate(1225.869 2984.305) rotate(-45)">
                          <path id="Trazado_1842" data-name="Trazado 1842" d="M10.173,0h2.18a3.633,3.633,0,1,1,0,7.266h-2.18m-4.36,0H3.633A3.633,3.633,0,1,1,3.633,0h2.18" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                          <path id="Trazado_1843" data-name="Trazado 1843" d="M0,0H5.813" transform="translate(5.086 3.633)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </g>
                      </g>
                    </svg>
      Separador
      .titulo-segundo.color-acento-contenido
        h2#t_2_2 2.2  Beneficio
      
      .d-flex.flex-wrap.align-items-center.mb-5
        .col-xl-7.order-2.order-xl-1.pe-xl-4.position-relative
          p El cacao es muy rico en antioxidantes, superando al té verde y vino tinto, debido a su alto contenido en vitamina C, fibra y serotonina, que lo convierte en un excelente aliado para prevenir enfermedades cardiovasculares, cerebrovasculares, cáncer hepático, gástrico y de colon.
            br
            br
            |Además, el cacao contiene feniletilamina, que produce un efecto placentero a nivel cerebral, y anandamida, que causa relajación y sensación de bienestar.
            br
            br
            |La mejor manera de consumirlo es en forma líquida, es decir, disolver el polvo en leche descremada o agua caliente. Se recomienda tomar de 1 a 2 tazas, 2 - 3 veces por semana.
          .tarjeta.p-4.px-xl-5.position-relative(style="background-color: #FEE9B5; z-index: 1")
            p.mb-0 El consumo de chocolate negro con 70% de cacao y bajo nivel de azúcar ayuda a reducir los niveles de colesterol LDL (malo) y a aumentar los niveles del colesterol HDL (bueno). #[b Porción: 30 g diarios]
            img(src="@/assets/curso/temas/tema2/d-1.svg" style="max-width: 111px; position: absolute; bottom: -2.6rem; right: -1rem; transform: rotate(90deg)")
          img.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/img-6.png" style="max-width: 127px; left: -3rem; bottom: -3rem; position: absolute;")
        img.mx-auto.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-0(src="@/assets/curso/temas/tema2/img-7.png" style="max-width: 505px")
      .position-relative
    p.mb-5 Es fundamental que, tanto el cacao en polvo como el chocolate negro, contengan pocos azúcares añadidos y se consuma en raciones moderadas, siempre combinándolo con una dieta saludable y actividad física.

    .d-flex.align-items-center.mb-4
      img(src="@/assets/curso/temas/tema1/dec-titulo.svg" style="max-width: 45px")
      h4.ps-2.mt-2.mb-0(style="color: #7D5F54") Uso medicinal
    
    p.mb-5 El cacao y el chocolate han sido aclamados por varios años por sus posibles beneficios medicinales a la salud, pero es sólo que recientemente algunos de estos atributos están siendo más claramente identificados y estudiados.

    .d-flex.flex-wrap.align-items-end.mb-5
      img.mx-auto.col-xl-5.mb-4.mb-xl-0(src="@/assets/curso/temas/tema2/img-8.png" style="max-width: 505px")
      p.col-xl-7.ps-xl-4 Recientes estudios epidemiológicos y clínicos han demostrado que la suplementación dietética con cacao el cual es rico en flavonoides y el chocolate pueden ejercer efectos supresores sobre las lipoproteínas de baja densidad (LDL) oxidación y el desarrollo del aterosclerosis asociada con implicaciones cardioprotector debido a su injerencia en muchos mecanismos fisiopatológicos. 
        br
        br
        |Algunos de los efectos benéficos identificados incluyen propiedades antioxidantes, la presión arterial a través de la inducción de óxido nítrico (NO) vasodilatación dependiendo de cada individuo, la mejora en la función endotelial, el aumento de sensibilidad a la insulina, disminución de la activación plaquetaria y la función, así como la modulación de la función inmune y la inflamación.
        br
        br
        |A continuación, resumimos algunos de todos los beneficios que nos aporta el cacao:
    
    .bg-left-to-right.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 43%, rgba(252,192,45,1) 43%, rgba(252,192,45,1) 95%, rgba(255,255,255,1) 95%);")
      .position-relative.d-none.d-lg-block.mb-5
        img.w-100(src="@/assets/curso/temas/tema2/img-9.png")
        .tarjeta-img(style="top: 25.4%; left: 25%;")
          p.mb-0 Antiestrés
        .tarjeta-img(style="top: 39%; left: 11%;")
          p.mb-0 Promueve la sensación <br> de bienestar
        .tarjeta-img(style="top: 57%; left: 16%;")
          p.mb-0 Anticancerígeno
        .tarjeta-img(style="top: 71%; left: 35%; transform: translateX(-100%)")
          p.mb-0 Mejora la función cerebral
        .tarjeta-img(style="top: 87%; left: 37%; transform: translateX(-100%)")
          p.mb-0 Protege el corazón
        .tarjeta-img(style="top: 96%; left: 52%; transform: translateX(-50%)")
          p.mb-0 Regula presión arterial
        .tarjeta-img(style="top: 96%; left: 65%;")
          p.mb-0 Mitiga el dolor menstrual
        .tarjeta-img(style="top: 80%; left: 70%;")
          p.mb-0 Afrodisiaco
        .tarjeta-img(style="top: 60%; left: 76%; min-width: 251px;")
          p.mb-0 Disminuye el colesterol malo y aumenta el bueno
        .tarjeta-img(style="top: 39%; left: 67%;")
          p.mb-0 Reduce el riesgo de padecer diabetes
        .tarjeta-img(style="top: 20%; left: 61%;")
          p.mb-0 Estimulante
      p.py-1.px-4.d-none.d-lg-block(style="background-color: #E8E8E8") #[b Nota:] Tengamos en cuenta que es el cacao el que tiene estas propiedades y no propiamente el chocolate comercial.
    .d-block.d-lg-none
      img.mx-auto(src="@/assets/curso/temas/tema2/img-9-movil.png" style="max-width: 521px")
      p.mb-2.pb-2(style="border-bottom: 2px solid #707070") Antiestrés
      p.mb-2.pb-2(style="border-bottom: 2px solid #707070") Promueve la sensación de bienestar
      p.mb-2.pb-2(style="border-bottom: 2px solid #707070") Anticancerígeno
      p.mb-2.pb-2(style="border-bottom: 2px solid #707070") Mejora la función cerebral
      p.mb-2.pb-2(style="border-bottom: 2px solid #707070") Protege el corazón
      p.mb-2.pb-2(style="border-bottom: 2px solid #707070") Regula presión arterial
      p.mb-2.pb-2(style="border-bottom: 2px solid #707070") Mitiga el dolor menstrual
      p.mb-2.pb-2(style="border-bottom: 2px solid #707070") Afrodisiaco
      p.mb-2.pb-2(style="border-bottom: 2px solid #707070") Disminuye el colesterol malo y aumenta el bueno
      p.mb-2.pb-2(style="border-bottom: 2px solid #707070") Reduce el riesgo de padecer diabetes
      p.mb-2.pb-2(style="border-bottom: 2px solid #707070") Estimulante
    
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3  Criterios de calidad 
    
    .d-flex.flex-wrap.align-items-center.mb-5.mb-xl-0
      .col-xl-7.order-2.order-xl-1.pe-xl-4
        p Dentro de los criterios de calidad lo principal es su clasificación, la cual se realiza a través de una selección mecánica que utiliza una graduación de hojas de malla de diferentes tamaños en torno a un tambor cilíndrico con rotación helicoidal en el interior para transportar los granos.
        p.p-3(style="background-color: #FED2B2") Durante la clasificación, en primer lugar, las piezas rotas de los granos y fragmentos de conchas se retiran, por un costado se obtienen granos de cacao, pequeños, posteriormente los granos de tamaño medio y finalmente los granos grandes de mayor calidad. 
        p Hay tres grados o categorías de cacao establecidas por el Consejo de la Industria del cacao y el café:
        img.mx-auto(src="@/assets/curso/temas/tema2/img-10.svg" style="max-width: 521px")
      img.mx-auto.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-0(src="@/assets/curso/temas/tema2/img-11.png" style="max-width: 505px")
    
    p.mb-5 #[b Grado I tiene un recuento de grano de 85/100g, y menos del 1% de defectos comerciales] (es decir, en orden de importancia, granos con moho, dañados por fermentación, ahumado, en apariencia fermentada o con insectos). 
      br
      br
      |#[b Cacao de Grado II con tan sólo el 5%] de la producción total de cacao y sus especificaciones son el tener una cuenta de 85/100g con menos de 4% de defectos comerciales o un recuento de grano de 100/100g #[b con menos de 1% de defectos comerciales.]
    
    .bg-left-to-right.position-relative.py-5.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-last-div.svg')})`}"
      style="background-repeat: no-repeat; background-position: top; background-size: cover;"
    )
      p Pero veamos ahora dentro de la clasificación de los granos, cómo podemos hacer tomas de pruebas de calidad a través de la toma de muestras:

      .tarjeta.p-4.mb-4(style="background-color: white;")
        SlyderA(tipo="b")
          .row.col-xl-11.mx-auto.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-md-1
              h4 Muestra representativa del lote
              p Este es un conjunto de granos extraídos al azar, que serán utilizados para obtener información sobre la calidad de un lote. Donde el lote es una cantidad de cacao homogéneo, de un mismo ciclo, procedente de fincas en una misma etapa de certificación y ha sido beneficiado bajo un mismo método. Un ejemplo tenemos, si un embarque tiene cacao orgánico y cacao convencional, cada uno de ellos es un lote diferente y se deberá realizar una muestra de cada uno de estos.
          
            .col-md-6.order-1.order-md-2.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/curso/temas/tema2/i-1.png' style="max-width: 465px")
          
          .row.col-xl-11.mx-auto.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-md-1
              h4 Toma de muestra primaria
              p La obtención de la muestra se realiza extrayendo granos al azar con un calador de sacos que penetre a la mitad de la profundidad de este. Cada saco de 60 a 65 Kg se muestra en tres puntos para obtener 100 gramos en cada uno, lo que equivale a aproximadamente 300 granos por saco.
          
            .col-md-6.order-1.order-md-2.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/curso/temas/tema2/i-2.png' style="max-width: 465px")
          
          .row.col-xl-11.mx-auto.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-md-1
              h4 Muestra compuesta
              p Una vez obtenida la muestra primaria de cada saco, estas muestras se vierten en un recipiente limpio y seco para conformar la muestra compuesta. Es necesario homogeneizar la muestra mezclando los granos durante al menos 3 minutos.
          
            .col-md-6.order-1.order-md-2.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/curso/temas/tema2/i-3.png' style="max-width: 465px")
          
          .row.col-xl-11.mx-auto.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-md-1
              h4 Reducción de muestra
              p Generalmente es suficiente una muestra de 2 Kg de granos de cacao para hacer los análisis de calidad. Sin embargo, el tamaño de la muestra puede variar de acuerdo con el cliente y a las pruebas a realizar (Pruebas de corte, pruebas organolépticas, contenido de cadmio y pruebas de análisis químicos para verificar residuos de agroquímicos, entre otras). Una parte de esta muestra es para el vendedor, otra para el comprador y otra para un tercero, un ejemplo un laboratorio de calidad del cacao o algún organismo de certificación acreditado.
          
            .col-md-6.order-1.order-md-2.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/curso/temas/tema2/i-4.png' style="max-width: 465px")
          
          .row.col-xl-11.mx-auto.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-md-1
              h4 Empaque, etiquetado y envío de muestra
              p La muestras reducidas y las muestras representativas para evaluación en el laboratorio, se almacenan en envases o empaque limpios, secos, de material que no afecte el olor, sabor o composición del grano, como tejidos tupidos, papel fuerte, cartón, metal, plástico, vidrio u otro. En el caso de medir el contenido de humedad, este envase o empaque debe estar lleno por completo y herméticamente cerrado para obtener resultados confiables.
                br
                br
                |Al recibir la muestra, el laboratorio debe llenar un registro con información básica del lugar de procedencia del grano e incluir el número de la muestra recibida, que será usada para identificar la muestra en cada una de las evaluaciones a realizarse. El empaque de esta debe ser identificado con el número de muestra correspondiente con una etiqueta durable y adhesiva.
          
            .col-md-6.order-1.order-md-2.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/curso/temas/tema2/i-5.png' style="max-width: 465px")
      img.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/img-3.png" style="max-width: 127px; right: 0; bottom: -12rem; position: absolute;")
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.img-infografica
  .img-infografica__content
    .img-infografica__item
      &:nth-child(1)
        .img-infografica__item__numero
          color: black !important
        .img-infografica__item__dot
          &::before
            background-color: #ffc194 !important
          &::after
            background-color: #ffc194 !important
      &:nth-child(3)
        .img-infografica__item__numero
          color: black !important
        .img-infografica__item__dot
          &::before
            background-color: #fbe1a1 !important
          &::after
            background-color: #fbe1a1 !important
.tarjeta-img
  display: flex
  position: absolute
  p
    font-weight: bold
    background-color: #3A1C12
    color: #FCC02D
    text-align: center
    padding: .4rem 1rem
    border-radius: 26px
  &:hover
    p
      background-color: #FD7F23
      color: #3A1C12
</style>
