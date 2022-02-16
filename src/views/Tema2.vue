<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El producto final renderizado
    .row.mb-5.align-items-center
      .col-lg-6
        p La postproducción, etapa final de la animación digital persigue el objetivo de mejorar todo lo que se ha hecho previamente en el proceso, para lo cual se revisan cada uno de los aspectos y elementos que componen la animación: duración de cada escena, comportamiento de la luz, movimiento, etc. Para que la historia que se cuenta y el mensaje que se transmite pueda llegar al usuario que lo visualiza todos estos elementos deben estar aplicados correctamente y adecuados a las necesidades de la animación. 
      .col-lg-6: img(src='@/assets/curso/48.png')
    p.mb-5 Para la postproducción audiovisual se deberá seguir una serie de pasos o fases que se muestran a continuación:
    SlyderB.mb-5(:datos="datosSlyder")
    .row.mb-5.justify-content-center
      .col-lg-5.mb-3
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/57.jpg' alt='AvatarTop' style='width:505px')
          .tarjetas-up_card.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Renderizado gratuito de videos
            p Principales programas gratuitos para renderizar videos:
            .row
              .col-7
                ol.lista-ol--cuadro
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span A
                    | Blender
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span B
                    | Lightworks
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span C
                    | Online Video Maker
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span D
                    | Shotcut
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span E
                    | VSDC Free Video Editor
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span F
                    | Machete Video Editor Lite
              .col-5
                ol.lista-ol--cuadro
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span G
                    | Avidemux
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span H
                    | HitFilm Express
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span I
                    | DaVinci Resolve
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span J
                    | Openshot
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span K
                    | iMovie
      .col-lg-5.mb-3
        .tarjetas-up
          img(src='@/assets/curso/58.jpg' alt='AvatarTop' style='width:505px')
          .tarjetas-up_card.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Renderizado gratuito de animaciones
            p Principales programas gratuitos para renderizar animación:
            .row
              .col-6
                ol.lista-ol--cuadro
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span A
                    | Blender
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span B
                    | Clara.io
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span C
                    | Daz3D
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span D
                    | Houdini Apprentice
              .col-6
                ol.lista-ol--cuadro
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span E
                    | Boats Animator
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span F
                    | Character Animator
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span G
                    | K-3D
                  li.mb-1 
                    .lista-ol--cuadro__vineta
                      span H
                    | Keyshot
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
        titulo: 'Comprobación de imponderabilidad',
        texto:
          'Cuando se comprueba que todo está correcto, como se deseaba o se pensó, se inicia el renderizado, proceso en el que se genera la pieza final con el formato o los formatos que se necesiten.',
        imagen: require('@/assets/curso/49.jpg'),
      },
      {
        titulo: 'Conclusión de la edición',
        texto:
          'El renderizado es un proceso técnico que se realiza a través de software específico como por ejemplo Blender, y que permite concluir la edición y posterior exportación de los productos audiovisuales a un medio previamente definido.',
        imagen: require('@/assets/curso/50.jpg'),
      },
      {
        titulo: 'Modificaciones o inclusiones al parámetro inicial',
        texto:
          'Este proceso genera una imagen u objeto a partir de una información ya existente sobre la que se realizarán modificaciones, cambios o inclusiones en los parámetros iniciales; estos son permitidos gracias a los programas de edición y postproducción. ',
        imagen: require('@/assets/curso/51.jpg'),
      },
      {
        titulo: 'Renderizado',
        texto:
          'En el momento en que estos cambios se quieren convertir en una imagen definitiva, se realiza el renderizado.',
        imagen: require('@/assets/curso/52.jpg'),
      },
      {
        titulo: 'Animación definitiva',
        texto:
          'Este proceso genera la animación final basada en parámetros dados a las diferentes capas y modos de fusión entre ellas, así mismo, los parámetros establecidos asignados; para que el clip de video resultante pueda ser visto con todos los elementos integrados fluidamente y ser llevado a diferentes plataformas, teniendo en cuenta, también, parámetros de salida asignados al momento de renderizar.',
        imagen: require('@/assets/curso/53.jpg'),
      },
      {
        titulo: 'Necesidad del renderizado',
        texto:
          'Solo hasta realizar el render, podrá decirse que el producto está completo; de no hacerlo, cabe el riesgo de realizar la exportación con errores gráficos y de audios. La renderización de vídeos es fundamental para compartir productos en redes sociales, esto permite cambios y adaptar medidas y peso requeridos por cada site. ',
        imagen: require('@/assets/curso/54.jpg'),
      },
      {
        titulo: 'Proceso esforzado',
        texto:
          'En la mayoría de programas de edición y postproducción de video, se trata de un proceso que puede durar horas, sobre todo si se trata de productos audiovisuales de gran peso como largometrajes, aunque el proceso también adapta el producto a un formato más comprimido de peso, según el medio de difusión, para que se pueda visualizar correctamente.',
        imagen: require('@/assets/curso/55.jpg'),
      },
      {
        titulo: 'Renderizado de animación 2D y 3D',
        texto:
          'Además de los videos, las animaciones 2D y 3D requieren ser renderizadas, ya que el proceso permite el trabajo por capas, que crea modelos animados más realistas posibilitando incluir texturas, sombras o cualquier otro efecto a las distintas capas. Renderizar un vídeo animado es un proceso habitual y que todo técnico de edición de vídeo debe conocer.',
        imagen: require('@/assets/curso/56.jpg'),
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
  i:last-child
      display: none
  &:hover
    .tarjetas-up_card
      bottom: -30%
    i:first-child
      display: none
    i:last-child
      display: block
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
.lista-ol--cuadro__vineta
  background-color: $color-primario
  color: white
  border-radius: 4px
  font-weight: bold
</style>
