<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Equipos

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
      h4.ps-2.mt-2.mb-0(style="color: #7D5F54") Maquinaria artesanal
    
    .bg-left-to-right.pb-5(style="background: linear-gradient(180deg, rgba(255,255,255,1) 11%, rgba(246,246,246,1) 11%, rgba(246,246,246,1) 35%, rgba(252,192,45,1) 35%, rgba(252,192,45,1) 67%, rgba(255,255,255,1) 67%);")
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

    .d-flex.align-items-center.mb-5
      img(src="@/assets/curso/temas/tema1/dec-titulo.svg" style="max-width: 45px")
      h4.ps-2.mt-2.mb-0(style="color: #7D5F54") Función, limpieza, calibración, fallas, operación, intervención, manuales
    
    .d-flex.flex-wrap.align-items-end.mb-3
      img.mx-auto.col-xl-5.mb-4.mb-xl-0(src="@/assets/curso/temas/tema3/img-6.png" style="max-width: 505px")
      p.col-xl-7.ps-xl-4 Entre las actividades que se programan para la producción, se deben incluir las actividades de limpieza, mantenimiento, control preventivo, reparación y demás que sean necesarias para el cuidado de la maquinaria empleada en cada proceso, ya que esta al ser de componentes metálicos (en la mayoría de los casos) se desgastan y al no ser cambiadas o reparadas a tiempo pueden ocasionar un daño grave hasta total de la máquina, aumentando gastos por reparación o cambio definitivo.
    
    .d-flex.flex-wrap.align-items-center.mb-5
      .bg-edit-t3.col-xl-7.order-2.order-xl-1
        p.mb-0 Es importante que, al momento de realizar las compras de maquinaria y equipos necesarios para la empresa, estos se compren en establecimientos legales y que cuenten con garantía, de esta manera se asegura que la inversión se realiza con materiales de buena calidad y a la cual se puede acudir en caso de alguna falla o daño ajeno a la manipulación de esta. 
          br
          br
          |Posterior a cada jornada de trabajo es importante que el operador realice la limpieza de la máquina que operó o si existe una brigada de limpieza para dicha actividad, ya que los residuos que quedan en los compartimientos de la máquina pueden afectar las propiedades organolépticas de las futuras producciones, disminuyendo la calidad de los productos. Para la limpieza se deben tener en cuenta las recomendaciones del fabricante en los manuales de operación. 
        img(src="@/assets/curso/temas/tema3/img-bg-edit-t3.png" class="img-1" style="max-width: 45px")
        img(src="@/assets/curso/temas/tema3/img-bg-edit-t3.png" class="img-2" style="max-width: 45px")
      img.mx-auto.col-xl-5.mb-4.mb-xl-0.order-1.order-xl-2(src="@/assets/curso/temas/tema3/img-7.png" style="max-width: 505px")
    
    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      img.mb-4.mb-md-0(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 85px")
      p.col-md.ps-md-4 Los fabricantes de maquinaria industrial generalmente realizan una capacitación sobre el manejo de sus equipos, es primordial que esta capacitación sea recibida por alguien de la planta que tenga conocimientos previos sobre su funcionamiento o dado el caso bases para comprender el funcionamiento e identificar las alertas en caso de falla de la máquina. Así mismo el capacitado debe transmitir la información a otros colaboradores para que existan varios con la capacidad de operación.
    
    p.mb-5 En caso de que el proveedor no realice la capacitación de manejo de sus equipos es obligación del operador conocer el manual de operación de la maquinaria a usar, de esta manera se reducen los riesgos de daño o afectación por mal manejo.

    .bg-left-to-right(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/bg-last-div.svg')})`}"
      style="background-repeat: no-repeat; background-position-y: 95%; margin-bottom: -4rem; padding-bottom: 4rem;"
    )
      .d-flex.flex-wrap.align-items-center.position-relative.mb-4(style="overflow: hidden")
        img.position-relative.mx-auto.ms-xl-0.col-xl-5.mb-4.mb-xl-0(src="@/assets/curso/temas/tema3/img-8.png" style="max-width: 471px; z-index: 2")
        p.col-xl-7.p-4.bg-text-100 Los equipos #[b(style="background-color: #FED2B2; padding-top: .2rem") deben estar calibrados en cada momento de operación,] para esto el operador o jefe de máquinas deberá realizar revisiones periódicas al funcionamiento de esta para garantizar su eficiencia y así disminuir las pérdidas o posibles daños en los equipos. 
      .d-flex.flex-wrap.align-items-end.mb-3
        img.mx-auto.col-xl-5.mb-4.mb-xl-0(src="@/assets/curso/temas/tema3/img-9.png" style="max-width: 505px")
        p.col-xl-7.ps-xl-4 Las recomendaciones del fabricante deben ser tenidas en cuenta para alargar la vida útil de la maquinaria, así como el correcto funcionamiento. 
          br
          br
          |El propósito que persigue un manual de operaciones es introducir a cualquier persona interesada en conocer cómo se desempeña una máquina en particular, así como los elementos que la componen como: su contexto, la estructura, los puestos, los procesos y procedimientos, las actividades, las políticas y reglas establecidas, entre otra información relevante relacionada a su operación.
          br
          br
          |También contempla aquellas condiciones alternas o excepcionales que ocurren, a la ejecución normalmente esperada de la secuencia de actividades para conseguir un objetivo o resultado.
      
      p Usualmente las empresas tienen sus manuales de operaciones en documentos físicos o impresos, pero también hay aquellas que los implementan de forma digital en herramientas o plataformas de software en línea para facilitar su disponibilidad y acceso.
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

<style lang="sass">
.bg-edit-t3
  position: relative
  margin-left: -3rem
  padding: 2rem
  padding-left: 3rem
  background-color: #FEE9B5
  .img-1
    position: absolute
    top: -15px
    left: 1rem
  .img-2
    position: absolute
    top: 41%
    right: -10px
  @media (max-width: 1200px)
    margin-left: 0
    padding-left: 2rem
.bg-text-100
  position: relative
  z-index: 1
  &::after
    content: ''
    position: absolute
    z-index: -1
    left: -72%
    top: 0
    background-color: #FFECDE
    width: 172%
    height: 100%
</style>
