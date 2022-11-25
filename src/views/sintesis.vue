<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.tarjeta--blanca-edit.p-4.p-md-5

    .d-flex.flex-wrap.align-items-stretch.mb-4
      img.mb-4.mb-md-0.position-relative.py-2(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 85px")
      p.tarjeta.col-md.mb-0.ps-md-5.bg-p El contenido de este componente formativo brinda los conocimientos básicos en la recepción y verificación del cacao y materias primas, así como cada uno de los procedimientos que se deben realizar para la obtención de los productos finales que salen al mercado.
    p.mb-5.col-lg-11.ms-lg-auto La producción agrícola por lo general está en constante evolución gracias a los avances tecnológicos que se presentan en las industrias, ya se da por la mejora de las condiciones de las materias primas o por la inclusión de maquinaria y equipos más sofisticados, por tal razón siempre es recomendable indagar sobre dichos avances para estar a la vanguardia del sistema productivo. A continuación, una síntesis de lo visto:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass" scope>
.tarjeta--blanca-edit::after
  display: none
.bg-p
  margin-left: -2rem
  background-color: #FFF6DF
  display: flex
  align-items: center
  @media (max-width: 768px)
    margin-left: 0
    padding: 1rem
</style>
