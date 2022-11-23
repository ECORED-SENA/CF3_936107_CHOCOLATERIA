<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Variables de proceso

    p En el proceso de elaboración de chocolate a partir de la transformación de los granos de cacao encontramos diferentes variables que indican la calidad del producto final, es por esta razón que se debe conocer muy bien el proceso para identificar alguna de estas variables.

    .bg-left-to-right.position-relative(style="background: linear-gradient(0deg, rgba(255,255,255,1) 17%, rgba(252,192,45,1) 18%);")
       p.mb-5 A continuación, se enmarcan algunas de estas variaciones y el origen de esta:
       img.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/img-3.png" style="max-width: 127px; right: -3rem; bottom: -320%; position: absolute;")

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
