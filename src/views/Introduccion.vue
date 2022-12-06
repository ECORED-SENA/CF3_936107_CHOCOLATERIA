<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .d-flex.flex-wrap.align-items-center.mb-5
      p.col-xl-7.pe-xl-4.order-2.order-xl-1 Desde el descubrimiento del cacao por las antiguas civilizaciones, se ha realizado la transformación del fruto en diferentes subproductos, desde el consumo directo hasta grandes y finos chocolates producidos con los más altos estándares de calidad. Según la mitología Maya, El Dios Hunahpú les dio el cacao a los mayas después de que los seres humanos fueron creados, a partir del maíz por la abuela Ixmucané, diosa divina. 
        br
        br
        |Los mayas celebraban un festival anual para honrar a su dios del cacao, Ek Chuah, un evento que incluía el sacrificio de un animal con marcas de color a base de cacao, sacrificios adicionales de otros animales, ofrendas de cacao, plumas e incienso, y un intercambio de regalos. A continuación, le invitamos a ver el siguiente video:
      img.col-xl-5.mb-4.mb-xl-0.order-1.order-xl-2.mx-auto(src="@/assets/curso/temas/img-1.png" style="max-width: 505px")
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/RJ9U1trd4Xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    img.d-flex.ms-auto(src="@/assets/curso/temas/img-2.png" style="max-width: 127px; margin-right: -3rem")
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
