<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Variables de proceso

    p En el proceso de elaboración de chocolate a partir de la transformación de los granos de cacao encontramos diferentes variables que indican la calidad del producto final, es por esta razón que se debe conocer muy bien el proceso para identificar alguna de estas variables.

    .bg-left-to-right.position-relative.pt-5.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 30%, rgba(252,192,45,1) 30%);")
       p.mb-5 A continuación, se enmarcan algunas de estas variaciones y el origen de esta:
       img.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/img-3.png" style="max-width: 127px; right: 0; top: 3rem; position: absolute;")
       SlyderA.tarjeta.p-4(
        tipo="b"
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/bg-slade5.png')})`}"
        style="background-repeat: no-repeat; background-size: cover;"
       )
        .row.col-xl-11.mx-auto.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2.order-md-1
            h4 Valoración inicial (aroma, forma y color)
            p La uniformidad de la muestra debe ser una constante, si no se presenta es debido a que en la selección y clasificación se cometieron inconsistencias. Los granos planos son señal de que el secado no fue el adecuado y puede presentar variaciones de amargura o acidez
              br
              br
              |El color debe ser uniforme parecido a la tierra colorada, las presencias de colores oscuros son indicador de que el beneficio no fue el adecuado. El grano debe romperse al apretarse, si esto no ocurre es indicador que el grano tiene humedad. El olor característico es el del chocolate, si presenta olores diferentes el grano no es el adecuado para el proceso
        
          .col-md-6.order-1.order-md-2.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-1.png' style="max-width: 465px")
        .row.col-xl-11.mx-auto.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2.order-md-1
            h4 Humedad del grano
            ul.lista-ul--color
              li 
                <svg style="max-width: 12px; width: 100%; margin-top: .4rem; margin-right: .5rem;" xmlns="http://www.w3.org/2000/svg" width="6.6" height="11.544" viewBox="0 0 6.6 11.544">
                  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.857,11.966,11.489,7.6a.821.821,0,0,1,0-1.165.832.832,0,0,1,1.169,0l4.949,4.946a.823.823,0,0,1,.024,1.138l-4.97,4.98a.825.825,0,0,1-1.169-1.165Z" transform="translate(-11.247 -6.196)" fill="#fd7f23"/>
                </svg>
                | El peso del agua evaporada es lo que se conoce como la humedad del grano de cacao.
              li 
                <svg style="max-width: 12px; width: 100%; margin-top: .4rem; margin-right: .5rem;" xmlns="http://www.w3.org/2000/svg" width="6.6" height="11.544" viewBox="0 0 6.6 11.544">
                  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.857,11.966,11.489,7.6a.821.821,0,0,1,0-1.165.832.832,0,0,1,1.169,0l4.949,4.946a.823.823,0,0,1,.024,1.138l-4.97,4.98a.825.825,0,0,1-1.169-1.165Z" transform="translate(-11.247 -6.196)" fill="#fd7f23"/>
                </svg>
                | El grano de cacao al término de la fermentación contiene cerca del 55 al 65% de humedad.
              li 
                <svg style="max-width: 12px; width: 100%; margin-top: .4rem; margin-right: .5rem;" xmlns="http://www.w3.org/2000/svg" width="6.6" height="11.544" viewBox="0 0 6.6 11.544">
                  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.857,11.966,11.489,7.6a.821.821,0,0,1,0-1.165.832.832,0,0,1,1.169,0l4.949,4.946a.823.823,0,0,1,.024,1.138l-4.97,4.98a.825.825,0,0,1-1.169-1.165Z" transform="translate(-11.247 -6.196)" fill="#fd7f23"/>
                </svg>
                | Un grano con un porcentaje de humedad mayor al 8% está expuesto a la acción de los microorganismos y hongos.
              li 
                <svg style="max-width: 12px; width: 100%; margin-top: .4rem; margin-right: .5rem;" xmlns="http://www.w3.org/2000/svg" width="6.6" height="11.544" viewBox="0 0 6.6 11.544">
                  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.857,11.966,11.489,7.6a.821.821,0,0,1,0-1.165.832.832,0,0,1,1.169,0l4.949,4.946a.823.823,0,0,1,.024,1.138l-4.97,4.98a.825.825,0,0,1-1.169-1.165Z" transform="translate(-11.247 -6.196)" fill="#fd7f23"/>
                </svg>
                | Para la exportación el grano no debe superar el 7% de humedad.
              li 
                <svg style="max-width: 12px; width: 100%; margin-top: .4rem; margin-right: .5rem;" xmlns="http://www.w3.org/2000/svg" width="6.6" height="11.544" viewBox="0 0 6.6 11.544">
                  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.857,11.966,11.489,7.6a.821.821,0,0,1,0-1.165.832.832,0,0,1,1.169,0l4.949,4.946a.823.823,0,0,1,.024,1.138l-4.97,4.98a.825.825,0,0,1-1.169-1.165Z" transform="translate(-11.247 -6.196)" fill="#fd7f23"/>
                </svg>
                | En las zonas húmedas se recomienda secar, limpiar clasificar y entregar al comprador lo más pronto posible para su transformación rápida.
              li 
                <svg style="max-width: 12px; width: 100%; margin-top: .4rem; margin-right: .5rem;" xmlns="http://www.w3.org/2000/svg" width="6.6" height="11.544" viewBox="0 0 6.6 11.544">
                  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.857,11.966,11.489,7.6a.821.821,0,0,1,0-1.165.832.832,0,0,1,1.169,0l4.949,4.946a.823.823,0,0,1,.024,1.138l-4.97,4.98a.825.825,0,0,1-1.169-1.165Z" transform="translate(-11.247 -6.196)" fill="#fd7f23"/>
                </svg>
                | La humedad se puede medir con una termobalanza o con un medidor de humedad para granos.
          .col-md-6.order-1.order-md-2.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-2.png' style="max-width: 465px")
        .row.col-xl-11.mx-auto.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2.order-md-1
            h4 Método de referencia
            p La eliminación del agua se logra secando una muestra de granos de cacao molido, en un horno ventilado, de preferencia con un ventilador, regulado a 103± 2 °C durante 16 horas ± 1 hora. Evite abrir el horno durante este proceso de secado.
              br
              |Con la ayuda de un mortero se muelen 10 g de cacao las partículas no deben exceder los 5 mm. Durante el proceso se debe evitar calentar la muestra ya que se puede convertir en una pasta. 
              br
              |Al terminar la molienda se debe colocar el cacao molido en un desecador ya que el cacao absorbe la humedad del ambiente para que el resultado sea significativo es necesario realizar al menos dos veces la determinación. Los equipos normalmente utilizados son el medidor de humedad de granos y la balanza térmica
        
          .col-md-6.order-1.order-md-2.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-3.png' style="max-width: 465px")
        .row.col-xl-11.mx-auto.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2.order-md-1
            h4 Prueba de corte
            p Este procedimiento tiene por objeto revisar el interior de los granos, para ello se puede usar una guillotina de corte que se comercializa para esta actividad, o con un cuchillo bien afilado realizar los cortes por la mitad uniformemente.
              br
              br
              |Lo que se busca en esta actividad es verificar que al interior del grano el color sea el adecuado y que no presente hongos o humedad. De acuerdo con el grado de fermentación del cacao se obtiene un buen sabor, si los granos en su interior son de color violeta o pizarra el sabor será más ácido o amargo.
        
          .col-md-6.order-1.order-md-2.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-4.png' style="max-width: 465px")
        .row.col-xl-11.mx-auto.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2.order-md-1
            h4 Peso promedio del grano
            p El tamaño del grano es importante en términos de rendimiento, ya que a mayor tamaño más materia prima y mayor rendimiento.
              br
              |Pero más importante que el tamaño es la uniformidad de la carga, ya que la variación de tamaño se ve reflejado en el sabor y aroma del chocolate.
        
          .col-md-6.order-1.order-md-2.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-5.png' style="max-width: 465px")
        .row.col-xl-11.mx-auto.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2.order-md-1
            h4 Contenido de impurezas
            p Las impurezas se presentan por residuos de la misma carga que al desintegrarse se convierten en partículas e impurezas. El mecanismo de desecho de dichas partículas consiste en la limpieza, selección y clasificación de los granos.
              br
              br
              |Para encontrar el porcentaje de impurezas basta con tomar una muestra significativa y pesarla, a esa muestra realizarle la selección, clasificación y limpieza, el resultado son las impurezas que las pueden pesar y así calcular el porcentaje 
              br
              br
              |% de impurezas = (Peso de impurezas/Peso de la muestra) *100
        
          .col-md-6.order-1.order-md-2.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-6.png' style="max-width: 465px")
        .row.col-xl-11.mx-auto.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2.order-md-1
            h4 Granos defectuosos y/o dañados
            p Los granos considerados defectuosos son aquellos que presentan formas planas, pequeñas, quebrados, gemelos, germinados, pasa y basura.
              br
              br
              |Para determinar el porcentaje de granos defectuosos se toma una muestra a la ser, se pesa y se procede a clasificar, por último, se pesan los granos defectuosos y se calcula el porcentaje.
              br
              br
              |% defectuosos = (Peso de granos defectuosos/peso de la muestra) *100
        
          .col-md-6.order-1.order-md-2.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-7.png' style="max-width: 465px")
        .row.col-xl-11.mx-auto.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2.order-md-1
            h4 Evaluación organoléptica
            p El proceso de evaluación organoléptica se realiza de acuerdo con el uso de los sentidos del laboratorista, más concretamente el gusto y el olfato, ya que se debe conocer los atributos de un cacao de buena calidad y comparar con el de la muestra. 
              br
              br
              |Esta evaluación es mucho más especializada, especialmente en dos aspectos: la intensiva capacitación de los catadores que serán el instrumento para realizar el protocolo de evaluación organoléptica y la preparación de las muestras.
              br
              br
              |Para las evaluaciones organolépticas es importante tomar en cuenta tres consideraciones previas: la capacitación a evaluadores, la preparación del licor de cacao y la implementación del protocolo de evaluación organoléptica.
        
          .col-md-6.order-1.order-md-2.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-8.png' style="max-width: 465px")
    
    .d-flex.align-items-center.mb-5.position-relative
      img(src="@/assets/curso/temas/tema1/dec-titulo.svg" style="max-width: 45px")
      h4.ps-2.mt-2.mb-0(style="color: #7D5F54") Tipos, unidades y conversiones
    
    .d-flex.flex-wrap.align-items-start.mb-5
      img.mx-auto.col-xl-5.mb-4.mb-xl-0(src="@/assets/curso/temas/tema5/img-9.png" style="max-width: 505px")
      .col-xl-7.ps-xl-4
        p En cada uno de los procesos de transformación delegaron de cacao en chocolate se realizan actividades que generan cambios físicos y químicos dependiendo del proceso y sistema al cual se somete, por ejemplo, en la tostón del grano se realizó una aplicación de calor al grano por medio de un combustible que calienta el recipiente que contiene el cacao, este proceso lo podemos medir en grados Celsius °C con los termómetros que viene incorporados en la máquina para el control digital  o manual de la temperatura. 
        p.p-3(style="background-color: #FFECDE;") En las #[b(style="color: #FD7F23;") pruebas de calidad se pueden establecer otro tipo de medidas como el peso, la humedad, el volumen y pruebas organolépticas] que van de acuerdo con el grado de percepción del colaborador que realiza dicha prueba. 
        p Se puede observar que los tipos de unidades varían de acuerdo con el proceso y objeto de la actividad, sin embargo, lo que realmente interesa de cada una de estas actividades es el registro de los datos para el análisis de estos, ya que estos resultados reflejan la calidad de los productos. 

    .d-flex.align-items-center.mb-5.position-relative
      img(src="@/assets/curso/temas/tema1/dec-titulo.svg" style="max-width: 45px")
      h4.ps-2.mt-2.mb-0(style="color: #7D5F54") Mediciones 

    .d-flex.flex-wrap.align-items-start.mb-5
      .col-xl-7.order-2.order-xl-1.pe-xl-4
        p Una evaluación de calidad se realiza con aproximadamente 2 kg de cacao seco, llamada muestra representativa. Para que esta cantidad represente el lote de cacao, existen procedimientos internacionales para su obtención que se describen a continuación. 
          br
          br
          |#[b(style="color: #FD7F23") El tamaño y método de obtención de la muestra es determinante para contar con información confiable y veraz.]
          br
          br
          |La metodología está estipulada en el Reglamento para el Proceso de Recepción, Entrega y Evaluación de Calidad del Cacao de 2014 cuya base son los estándares internacionales (Estándares ISO 2292:1973). La incorrecta obtención de esta muestra acarreará errores en la apreciación de la calidad.
          br
          br
          |Veamos a través del siguiente recurso, las clasificaciones de granos y las características de estas:
      img.mx-auto.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-0(src="@/assets/curso/temas/tema5/img-10.png" style="max-width: 505px")
    
    .d-flex.flex-wrap.align-items-start.mb-5
      img.mb-4.mb-xl-0.col-xl-5(src="@/assets/curso/temas/tema5/img-11.png" style="max-width: 505px")
      .col-xl-7
        AcordionA.acordeon-edit.w-100(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .p-0(titulo="Bien fermentado")
             ul.lista-ul--color
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Coloración marrón o marrón oscuro.
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Apariencia hinchada, no compacto.
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Estrías profundas, grietas o cavidades.
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Testa o cascarilla suelta.
          .p-0(titulo="Ligeramente Violeta")
            p.mb-0 Coloración marrón violeta indicativo de fermentación parcial.
          .p-0(titulo="Violeta")
            ul.lista-ul--color
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | No fermentado.
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Totalmente violeta.
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | No hinchados, compactos.
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Fuerte sabor amargo y sensación de astringencia.
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Ausencia de aroma.
          .p-0(titulo="Sobre fermentado")
            ul.lista-ul--color
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Coloración marrón oscuro.
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Sabor indeseable.
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Defecto serio.
          .p-0(titulo="Mohoso")
            ul.lista-ul--color
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Moho visible a simple vista (diversos colores). Sabor indeseable.
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | #[b Causa:] geminación, daño mecánico o por insectos almacenado con alta humedad y secado deficiente.
          .p-0(titulo="Pizarroso")
            ul.lista-ul--color
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Ningún efecto de fermentación.
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Color pizarra (gris).
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Compacto, sin agrietamiento.
              li 
                span(style="background-color: #FD7F23; width: 12px; height: 12px; min-width: 12px; padding-right: .5rem; border-radius: 50%; margin-top: .4rem;")
                | Defecto serio.
          .p-0(titulo="Daño por insectos y roedores")
            p.mb-0 Perforaciones o picados por insectos o roedores.
    
    .position-relative
      p.mb-5 Adaptado de: Manual para la evaluación de la calidad del grano de cacao (2016)
      img.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/img-3.png" style="max-width: 127px; right: -3rem; top: 0; position: absolute;")
    
    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 1
      span Pruebas de calidad del cacao
    img.col-12.col-lg-10.col-xl-6.mx-auto.mb-4(src="@/assets/curso/temas/tema5/img-12.svg")
    .col-12.col-xl-8.mx-auto.py-2.px-4(style="background-color: #E8E8E8")
      p.mb-0.text-center #[b Nota.] Adaptado de: Manual para la evaluación de la calidad del grano de cacao (2016)
    .position-relative
      img.d-none.d-lg-flex(src="@/assets/curso/temas/tema5/img-13.png" style="max-width: 106px; left: -3rem; bottom: 3rem; position: absolute;")
    

    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
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
