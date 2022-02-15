<template lang="pug">
.banner-principal
  .container.tarjeta(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row
      .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        .contenedor-imagenes
          .animation-girl
          img(:src="globalData.imagenBannerPrincipal")
</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
.contenedor-imagenes
  position: relative
.imagen_flotante
  &_1
    animation: bounceLeft 1s ease-out infinite alternate
    position: absolute
    transform-origin: top
    @media (min-width: 996px)
      width: 81px
      top: 2px
      left: 10px
    @media (min-width: 1202px)
      width: 98px
      top: 2px
      left: 10px
    @media (min-width:1400px)
      width: 116px
      top: 2px
      left: 12px
  &_2
    transform-origin: top
    animation: bounceRight 1s ease-out 1s infinite alternate
    position: absolute
    @media (min-width: 996px)
      width: 81px
      top: 2px
      left: 262px
    @media (min-width: 1202px)
      width: 98px
      top: 2px
      left: 318px
    @media (min-width: 1400px)
      width: 116px
      top: 2px
      left: 374px

@keyframes rotate1
	-100%
		transform: rotate(0deg)

	25%
		transform: rotate(50deg)

	50%
		transform: rotate(0deg)
@keyframes rotate2
	45%
		transform: rotate(0deg)

	75%
		transform: rotate(-50deg)

	100%
		transform: rotate(0deg)
@keyframes bounceLeft
  0%
    transform: rotate(0deg);

  50%
    transform: rotate(0deg);

  100%
    transform: rotate(35deg);


@keyframes bounceRight
  0%
    transform: rotate(0deg);

  50%
    transform: rotate(0deg);

  100%
    transform: rotate(-35deg);
</style>
