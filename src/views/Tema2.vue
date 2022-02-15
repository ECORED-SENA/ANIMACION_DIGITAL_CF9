<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El producto final renderizado



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    mostrarIndicador: true,
    datosSlyder: [
      {
        titulo: 'El diseño de sonido',
        texto:
          'El diseño de sonido, que consiste en la creación de todo el ambiente sonoro para un medio audiovisual, ya sea cine, tv, web-streaming, etc.',
        imagen: require('@/assets/curso/84.jpg'),
      },
      {
        titulo: 'Interacción entre audio y video',
        texto:
          'Junto a los elementos visuales, una de las áreas más importantes es la interacción entre audio y video, que tiene por fin que el espectador logre involucrarse por completo en la situación y/o experiencia que se quiere proporcionar.',
        imagen: require('@/assets/curso/85.jpg'),
      },
      {
        titulo: 'Diseño sonoro',
        texto:
          'En el diseño sonoro se tienen en cuenta cuatro aspectos principales: diálogo, efectos, música y ambiente; estos son conocidos, técnicamente, como planos sonoros y aportan realismo a la imagen.',
        imagen: require('@/assets/curso/86.jpg'),
      },
      {
        titulo: 'Edición de sonido y mezcla',
        texto:
          'El diseño sonoro trabaja con la edición de sonido y la mezcla. Con el paso del tiempo, las tareas de un editor y un mezclador se han ido fusionando y existe una zona en la que ambas labores se mezclan.',
        imagen: require('@/assets/curso/87.jpg'),
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
.contenedor-fondo2
  background-image: url('../assets/curso/bg-2.png')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.bg-ac
  background-color: #fdf7ef


.tarjetas-up
  justify-content: center
  display: flex
  flex-wrap: wrap
  &__content
    position: relative
    overflow: hidden
    width: 295px
    height: 295px
    margin: 5px
    border-radius: 10px
    background-color: #F6DCDB
    &:hover
      .tarjetas-up__content__image
        top: 0
    &__image
      position: absolute
      width: 100%
      height: 100%
      left: 0
      top: -100%
      transition: top 0.3s ease-in-out
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content__title, .linea-tiempo-d__item__content__slot
  background-color: #f8e8d5
.linea-tiempo-d__item__number.tarjeta.tarjeta--gris
  background-color: $color-primario
  span
    color: white


.tarjetas-up

  overflow: hidden
  border-radius: 10px
  position: relative
  &_card
    transition: bottom .3s ease-in-out
    position: absolute
    border-radius: 0
    width: 100%
    height: 100%
    left: 0
    bottom: -85%
    background-color: rgba(255, 234, 203,0.85)

      transition: opacity .3s ease-in-out
  &:hover
    .tarjetas-up_card
      bottom: -35%
.vr
  i
    color: #D44F4A !important

.modal-a__content
  background-image: url('../assets/curso/bg-3.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center


.vertical-align-initial
  tr,td
    vertical-align: initial !important

.tarjetas-a
  background-color: #F6DCDB
  transition: background-color .3s ease-in-out
  img:first-child
    display: block
  img:last-child
    display: none
  &:hover
    img:first-child
      display: none
    img:last-child
      display: block
    background-color: #E59592

.bg-carrousel2
  position: relative
  background-image: url('../assets/curso/IM.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  width: 100%
  min-height: 207px
  overflow: hidden
  &:hover
    .bg-carrousel2_content
      left: 0
  &_content
    width: 100%
    background-color: #ffe799
    transition: left .3s ease-in-out
    position: absolute
    height: 100%
    left: 150%
.tabs-a.color-primario .tabs-a__tab__selected
  color: white !important
.tabs-a__tab
  background-color: #F4DCC0
</style>
