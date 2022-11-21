<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Titulo de primer nivel

    p.mb-5 Para el procesamiento de cacao se hace necesario el uso de diferentes equipos y herramientas que facilitan la transformación de las materias primas para obtener el producto final esperado. 

    .d-flex.flex-wrap.align-items-end.mb-5
      img.mx-auto.col-xl-5.mb-4.mb-xl-0(src="@/assets/curso/temas/tema3/img-1.png" style="max-width: 505px")
      p.col-xl-7.ps-xl-4 La maquinaria usada depende de la complejidad del producto y de la capacidad que tiene el productor de implementar tecnologías de vanguardia para mejorar su competitividad, sin embargo, existe la producción artesanal que pese a no contar con grandes tecnologías y maquinarias producen un chocolate de buena calidad capaz de competir con grandes marcas, sin embargo, la cantidad no es la misma que una empresa con maquinaria y equipos de grandes capacidades. 
        br
        br
        |Desde la planificación de la empresa se debe establecer qué tipo de maquinaria se debe adquirir de acuerdo con el alcance proyectado, ya que desde este instante se deben prever los posibles pros y contras de los equipos a adquirir ya sean para producción a baja escala o para producción industrial. 
        br
        br
        |El contacto previo con los proveedores de maquinaria es una necesidad debido a que ellos son los indicados para realizar el proceso de formación o capacitación de operación de la maquinaria con los colaboradores de la empresa. 
    
    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      img.mb-4.mb-md-0(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 85px")
      p.col-md.ps-md-4 Algo que se debe tener en cuenta es el servicio técnico que provee el fabricante, ya que al momento de tener alguna falla sea fácil de conseguir los repuestos o los artefactos necesarios para el cambio, así mismo pueden ofrecer el servicio de mantenimiento previo.
      img.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/img-3.png" style="max-width: 127px; right: -3rem; bottom: -170%; position: absolute;")
    
    .d-flex.align-items-center.mb-4
      img(src="@/assets/curso/temas/tema1/dec-titulo.svg" style="max-width: 45px")
      h4.ps-2.mt-2.mb-0(style="color: #7D5F54") Maquinaria Industrial
    
    .bg-left-to-right
      .d-flex.flex-wrap.align-items-start.mb-5
        .col-xl-7.order-2.order-xl-1.pe-xl-4
          p La primera máquina que debemos mencionar es la Tostadora la cual termina el secado natural del cacao para que no se produzcan posibles afectaciones a la materia prima, este proceso se realiza con la producción de fuego (no importa la fuente gas, energía, leña, carbón, etc.) el cual calienta el recipiente donde se encuentra el cacao y lo calienta hasta que toste.
          p.p-4(style="background-color: #FEE9B5") Este proceso debe concluir con el tostado de toda la que contiene el recipiente. 
            br
            br
            |Posterior a este proceso se realiza la molienda con la ayuda de un molino convencional, el cual para que el producto no sea alterado en sus composiciones organolépticas se deben retirar los discos de esmeril ya que en el proceso de molienda se genera calor el cual disminuye los nutrientes del cacao molido y genera plastificantes tóxicos, por ello en algunos molinos se construyen en acero inoxidable para evitar dicha situación. 
            br
            br
            |La descascaradora artesanal consiste en un molino de viento que gracias al peso menor de las cáscaras del cacao posterior a la molienda son separados de éste para su posterior retiro.
        img.mx-auto.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-0(src="@/assets/curso/temas/tema3/img-2.png" style="max-width: 505px")

      .d-flex.align-items-center.mb-4
        img(src="@/assets/curso/temas/tema1/dec-titulo.svg" style="max-width: 45px")
        h4.ps-2.mt-2.mb-0(style="color: #7D5F54") Maquinaria Industrial
      
      .tarjeta.d-flex.flex-wrap.mb-5(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/bg-tj.svg')})`}"
        style="overflow: hidden; box-shadow: 0px 8px 21px #00000020; background-repeat: no-repeat; background-size: cover"
      )
        p.p-4.mb-0.col-xl-8.order-2.order-xl-1 La maquinaria industrial tiene como objetivo principal mejorar los procedimientos y los tiempos de cada proceso, así como aumentar la capacidad de producción. 
          br
          br
          |La capacidad de cada maquinaria está estipulada por el alcance de la fábrica, ya que si se adquieren equipos de gran carga y la materia prima es escasa será una inversión a la cual no se le sacarán los frutos deseados. 
          br
          br
          |Por tal razón la planificación de la producción debe ir acompañada de estudios que verifiquen la oferta, demanda y capacidad de producción de la empresa. 
        img.d-flex.mx-auto.col-xl-4.order-1.order-xl-2.mb-4.mb-xl-0(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 254px")
      p.mb-5 Entre las maquinarias industriales que existen en el mercado encontramos las siguientes:

      SlyderBEdit.mb-5(:datos="datosSlyder")

      .position-relative
        img.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/img-6.png" style="max-width: 127px; left: -3rem; bottom: -30%; position: absolute;")
        .d-flex.flex-wrap.align-items-center.mb-5.position-relative(style="background-color: #3A1C12")
          .col-lg-5.mx-auto.p-4.p-xl-0.mb-4.mb-xl-0.position-relative
            img.d-none.d-lg-flex(src="@/assets/curso/temas/tema3/img-4-d.png" style="max-width: 75px; position: absolute; top: -1.5rem;")
            img.mx-auto.my-2(src="@/assets/curso/temas/tema3/img-4.svg" style="max-width: 316px")
          .col-lg-6.d-flex.flex-wrap.p-4.py-lg-5.position-relative
            h4(style="color: #FCC02D") Maquinaria Industrial
            p.col-lg-11.texto-blanco Ya conociendo las maquinarias que se utilizan en el proceso del procesamiento del grano, le invitamos a ver el siguiente video, donde podremos contextualizarnos como se transforma el grano de cacao en chocolate:
            .col-sm-auto
              a.boton.color-acento-botones.px-5(:href="'https://www.youtube.com/watch?v=gJbesu6kgD8'" target="_blank")
                span.fw-bold Ver video
            img.d-none.d-lg-flex(src="@/assets/curso/temas/tema3/img-5.png" style="max-width: 202px; position: absolute; bottom: -3rem; right: 0")
</template>

<script>
import SlyderBEdit from '@/views/SlyderBEdit.vue'
export default {
  name: 'Tema3',
  components: {
    SlyderBEdit,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Limpiador',
        texto:
          'Esta máquina realiza la extracción de piedras, tierra o sólidos que se pueden encontrar en el cacao que proviene de la cosecha.',
        imagen: require('@/assets/curso/temas/tema3/sl-1.png'),
      },
      {
        titulo: 'Tostador',
        texto:
          'Sobre estos aparatos, algunos funcionan con rayos infrarrojos y realizan el tostón del grano de forma homogénea, lo que a su vez permite la separación de la cascarilla de una manera más eficiente.',
        imagen: require('@/assets/curso/temas/tema3/sl-2.png'),
      },
      {
        titulo: 'Rompedor de cacao',
        texto:
          'En esta máquina se realiza el rompimiento del grano de cacao de manera que no sea pulverizado en el proceso. Lo que permite la optimización del proceso de producción y la pre-molienda.',
        imagen: require('@/assets/curso/temas/tema3/sl-3.png'),
      },
      {
        titulo: 'Pre-molienda',
        texto:
          'En estos equipos se transforma el cacao en la pasta del cacao y tiene capacidades desde los 40 kilogramos hasta 150 kilos por hora de trabajo.',
        imagen: require('@/assets/curso/temas/tema3/sl-4.png'),
      },
      {
        titulo: 'Tanques de fundición',
        texto:
          'En estos tanques de almacenamiento se derrite y se guarda el chocolate en estado líquido. Estos aparatos contienen un flujo circular de agua en una de sus capas, con el fin de mantener estable la temperatura para el chocolate.',
        imagen: require('@/assets/curso/temas/tema3/sl-5.png'),
      },
      {
        titulo: 'Conchado',
        texto:
          'Esta máquina realiza la extracción de la acidez presente en el chocolate o algún sabor que no sea deseado o agradable al paladar. Este equipo contiene un molino refinador que aporta en el proceso de eliminación.',
        imagen: require('@/assets/curso/temas/tema3/sl-6.png'),
      },
      {
        titulo: 'Refinadores de esferas',
        texto:
          'Como su nombre lo indica, con esta máquina se realiza el refinamiento del chocolate con un rango de grasa del 28 al 30%.',
        imagen: require('@/assets/curso/temas/tema3/sl-7.png'),
      },
      {
        titulo: 'Filtros para chocolate',
        texto:
          'Consta de tamices que obstaculizan el paso de partículas de metal o de otros materiales, así como los grumos que se producen en los procesos anteriores a la remolienda y molienda.',
        imagen: require('@/assets/curso/temas/tema3/sl-8.png'),
      },
      {
        titulo: 'Tanques de almacenamiento',
        texto:
          'Son estructuras que están diseñadas para el almacenamiento del chocolate en estado líquido, por lo cual debe estar a una temperatura acorde para evitar endurecimiento.',
        imagen: require('@/assets/curso/temas/tema3/sl-9.png'),
      },
      {
        titulo: 'Mezcladores de ingredientes',
        texto:
          'En estas mezcladoras se realiza la mezcla de diferentes materias primas para obtener los resultados finales de acuerdo con las recetas de preparación.',
        imagen: require('@/assets/curso/temas/tema3/sl-10.png'),
      },
    ],
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

<style lang="sass"></style>
