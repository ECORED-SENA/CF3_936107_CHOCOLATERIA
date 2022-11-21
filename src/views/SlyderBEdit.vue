<template lang="pug">
.slyder-b
  ScrollHorizontal(v-if="datos.length" :selectedId="selected" item-full-width)
    .slyder-b__slyde(
      v-for="(item,index) in datos" 
      :key="'key-'+getId(index)"
      :id="getId(index)"
    )
      .d-flex.flex-wrap.alig.items-start(style="background-color: #FFF6DF")
        .col-lg-6.order-lg-2.mb-4.mb-lg-0.mx-auto
          figure.slyder-b__img
            img(:src='item.imagen', :alt='item.leyendaImagen')
            figcaption(v-if="item.leyendaImagen" v-html="item.leyendaImagen")

        .col-lg-6.order-lg-1.p-4.p-lg-5.position-relative
          h3(v-if="item.hasOwnProperty('titulo')" v-html="item.titulo")
          p.mb-3(v-html="item.texto")
          .slyder__action.w-100
            .slyder__pagination {{index+1}}/{{datos.length}}
            a.slyder__btn(v-if="index -1 >= 0" @click="selected = getId(index -1)")
              i.fas.fa-angle-left
            a.slyder__btn(
              v-if="index != datos.length -1"
              @click="selected = getId(index +1)"
              @mouseover="mostrarIndicador = false"
            )
              i.fas.fa-angle-right
              .indicador__container(v-if="mostrarIndicador && index === 0")
                .indicador--click.indicador--sm
          img.d-none.d-xl-block.position-absolute(src="@/assets/curso/temas/tema3/decorador-sl.svg" style="max-width: 270px; bottom: -2rem; left: 0")
</template>

<script>
import slyderMixins from '../mixins/slyderMixins'
import ScrollHorizontal from './plantilla/ScrollHorizontal.vue'
export default {
  name: 'SlyderB',
  components: { ScrollHorizontal },
  mixins: [slyderMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.selected = this.getId(0)
  },
}
</script>

<style lang="sass">
.slyder-b
  .horizontal-scroll__wrapper
    .horizontal-scroll
      .slyder__action
        .slyder__btn
          background-color: #FEDFC7
          &:hover
            background-color: #FD7F23
</style>
