<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Formatos de salida y exportación de productos audiovisuales
    .row.mb-5.justify-content-center
      .col-lg-8
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la postproducción la última etapa de la producción audiovisual se cumple una de las tareas más importantes, definir los parámetros de salida del producto audiovisual y preparar los medios para la exportación del mismo.
    p.mb-5 De manera previa, para el caso de los productos de animación y casi desde la etapa de preproducción se deben haber definido las características de salida, teniendo en cuenta: 
    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.tarjeta--gris.p-4
          PasosB.color-primario
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/2.jpg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Parámetros y características de salida
                p Los parámetros y características de salida son cruciales para la adecuada, pertinente y oportuna difusión del producto audiovisual.
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/3.jpg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Salida y medios de difusión
                p Las características de salida serán distintas, según el medio de difusión del contenido: televisión, Internet, video corporativo, película, etc.
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/4.jpg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Conceptos y elementos importantes
                p El códec, el formato contenedor y la resolución de pantalla son los conceptos que se deben tener claros previamente a la realización del proyecto y por supuesto, antes del render.
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/5.jpg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Claridad de conceptos y elementos
                p Aunque la mayoría de estos elementos hacen parte de la cotidianidad de un editor o animador su definición puede prestarse para relativas confusiones.
    Separador
    #t_1_1.titulo-segundo.color-secundario
      h2 1.1 Códec y tipos de códec 
    .contenedor-fondo.p-5
      .row.justify-content-center
        .col-lg-8: img(src='@/assets/curso/6.png').mb-5.mt-5
        p El término códec proviene de la simbiosis de dos palabras: <b>codificador y decodificador</b>. Para Javier Melenchón en su artículo Web códec y contenedor, un códec es una especificación sobre cómo codificar un tipo de información y luego poderla decodificar, por ejemplo, <b>un códec determina la manera en que se comprime y descomprime información de video y de audio.</b> 
    p.mb-5 El códec es un software o dispositivo de hardware que codifica o comprime los datos en el proceso de almacenamiento y los decodifica o descomprime en el momento de su reproducción.
    .row.mb-5.justify-content-center
      .col-lg-5.mb-3
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/7.jpg' alt='AvatarTop' style='width:505px')
          .tarjetas-up_card.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Funcionalidad
            p La funcionalidad o valor de códec se mide en función de la <b>mayor comprensión con la mínima pérdida de calidad de imagen.</b> La distribución y posterior visualización de las imágenes requieren un menor tamaño en los archivos originales para su procesamiento.
      .col-lg-5.mb-3
        .tarjetas-up
          img(src='@/assets/curso/8.jpg' alt='AvatarTop' style='width:505px')
          .tarjetas-up_card.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Compresión
            p Esta labor de compresión la realiza el códec, que básicamente descifra la información codificada en unos y ceros.
              br
              br
              |Para la compresión de video hay diferentes códec que se pueden clasificar en tres categorías: <b>códec de grabación, de postproducción y de difusión.</b>
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5
        h5 Códe de grabación
        p Entre los códec de grabación el más usado es el <b>H264</b>, ya que la mayoría de las cámaras (como las de la marca Canon), software de post y difusión, lo usan. <b>El H264M</b>, que también se llama <b>MPEG-4/AVC</b> tiene una alta calidad de procesamiento para aplicaciones de transmisión de video en tiempo real, dado que el tamaño del archivo logrado es tres veces más pequeño. 
      .col-lg-5: img(src='@/assets/curso/9.jpg')
    p.mb-5 Tenga en cuenta estas particularidades de los códec de grabación:
    TabsA.color-primario.mb-5
      .tarjeta.bg--2-claro.p-4(titulo="Fácil integración")
        .row.align-items-center.justify-content-center
          .col-lg-2
            img(src='@/assets/curso/10.svg')
          .col-lg-9  
            h4 Fácil integración
            p Es un códec fácil de integrar y cubre un amplio rango de formatos de video, ofreciendo una alta calidad a dispositivos tan distintos como teléfonos móviles con pocas prestaciones, y Blu-ray dotados de las máximas presentaciones, entre otros.
      .tarjeta.bg--2-claro.p-4(titulo="Edición")
        .row.align-items-center.justify-content-center
          .col-lg-2
            img(src='@/assets/curso/11.svg')
          .col-lg-9  
            h4 Edición
            p Otras cámaras realizan la captura en el códec de edición de <b>Apple ProResM</b> que requiere menos potencia de CPU para su lectura que el H264. Este códec forma parte del programa de edición <b><i>Final Cut</i></b> y <b><i>Final Cut Pro.</i></b>
      .tarjeta.bg--2-claro.p-4(titulo="Formato determinado")
        .row.align-items-center.justify-content-center
          .col-lg-2
            img(src='@/assets/curso/12.svg')
          .col-lg-9  
            h4 Formato determinado
            p Un archivo puede contener información codificada con diferentes <i>códec</i>, pero como cada marca de cámara utiliza uno determinado formato, no todos pueden formar parte de un formato, como en el caso del códec H264 que no es compatible con el formato .avi.
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5
        h5 Códec de edición
        p Una manera de hacer del proceso de edición algo más fluido es utilizar proxies o material off-line; se trata de archivos temporales que hacen las veces de codificador y que, una vez terminado el proyecto, pueden desecharse. Los proxies realizan una copia de los videos originales y la convierten en una versión de menor resolución, pero que se procesa de manera más rápida.
      .col-lg-5: img(src='@/assets/curso/13.jpg')
      
    p.mb-5 Algunos aspectos a tener en cuenta sobre los códec de edición son:
    TabsA.color-primario.mb-5
      .tarjeta.bg--2-claro.p-4(titulo="Conversión de video")
        .row.justify-content-center.align-items-center
          .col-lg-2
            img(src='@/assets/curso/14.svg')
          .col-lg-9  
            h4 Conversión de video
            p Ofrecen la posibilidad de convertir un video de un códec a otro. A esta acción se le llama transcodificar y de esta manera, se logra hacer más eficientes los archivos para el programa de edición.
      .tarjeta.bg--2-claro.p-4(titulo="Ejemplo de transcodificación")
        .row.justify-content-center.align-items-center
          .col-lg-2
            img(src='@/assets/curso/15.svg')
          .col-lg-9  
            h4 Ejemplo de transcodificación
            p Como ejemplo se puede mencionar que los archivos grabados originalmente usando el formato .MP4 no siempre funcionan correctamente con las aplicaciones de edición con el códec H264. La transcodificación de video convertiría estos archivos en otro códec que trabaje bien con los requerimientos de la edición.
      .tarjeta.bg--2-claro.p-4(titulo="Capacidad interna de transcodificación")
        .row.justify-content-center.align-items-center
          .col-lg-2
            img(src='@/assets/curso/16.svg')
          .col-lg-9  
            h4 Capacidad interna de transcodificación
            p La mayoría de los programas de edición de video como Avid Media Composer, Final Cut Pro y Adobe Premiere junto con Adobe Media Encoder, tienen la capacidad interna de transcodificación de video.
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5
        h5 Códec de difusión
        p Para esta parte final del proceso de edición los expertos coinciden en que, si se trata de exportar los videos y realizar transmisiones de video en tiempo real, el H264 es el mejor códec, ya que permite archivos más compatibles con reproductores Web y YouTube. Pero desde septiembre de 2020 se lanzó al mercado la última versión del H265, gracias a este es posible cargar en Internet videos de mejor calidad con resoluciones muy altas y con una transferencia de archivo inferior.
      .col-lg-5: img(src='@/assets/curso/17.jpg')
      
    .row.mb-5.justify-content-center
      .col-lg-9
        .cajon.color-acento-botones.bg--4-claro.p-4.mb-4
          p.mb-0 El HEVC/H265 (High Efficiency Video Coding) ofrece la misma calidad y compatibilidad, pero con un mayor grado de compresión como respuesta natural a la aparición de resoluciones en 4K y 8K, sin aumentar el ancho de banda necesario para las transmisiones en vivo o las plataformas de streaming.
    p.mb-5 Algunos códec que se han usado y aún conservan alguna vigencia son:
    .row.mb-2
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 DV:
        p el códec de captura de los videos desde cámara MiniDV mediante puerto Firewire. Este códec solo comprime el video, pero no el audio. Puede ser utilizado en formato AVI (.avi), Quicktime (.mov) y secuencia DV (.dv).
    .row.mb-2
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 HDV:
        p (basado en MPEG-2) consigue más compresión que el DV, en tamaños de frame mayores.
    .row.mb-2
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 MPEG:  (Moving Picture Experts Group)
        p es un estándar para compresión de video y de audio. Hay cuatro tipos:
        ul.lista-ul--color.vr
          li 
            i.fas.fa-circle
            p
              b MPEG-1  
              | estándar inicial de compresión de audio y video. Usado después como la norma para CD de video incluye el popular formato de compresión de audio capa 3 (MP3).
          li 
            i.fas.fa-circle
            p
              b MPEG-2: 
              | normas para audio y video para difusión en calidad de televisión. Utilizado para servicios de TV por satélite, señales de televisión digital por cable y (con ligeras modificaciones) para los discos de video DVD.
          li 
            i.fas.fa-circle
            p
              b MPEG-3: 
              | diseñado originalmente para HDTV (Televisión de Alta Definición), pero abandonado posteriormente en favor de MPEG-2.
          li 
            i.fas.fa-circle
            p
              b MPEG-4: 
              | expande MPEG-1 para soportar "objetos" audio/video, contenido 3D, codificación de baja velocidad binaria y soporte para gestión de derechos digitales (protección de copyright) actualmente se emplea como códec HDTV en detrimento de MPEG-2.
    .row.mb-2
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 Photo_JPG y M-JPG A y B:
        p son tres los códec basados en JPEG integrados en QuickTime. MJPEG significa "Motion JPEG" y es idéntico a Photo-JPEG, excepto los códec MJPEG con traductores integrados para soportar diferentes tarjetas de captura. Es recomendable utilizar este códec en formatos Quicktime DV y HD.
    .row.mb-2
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 Animación:
        p vinculado a Quicktime es rápido y sin pérdidas. Apple Computer lo crea para permitir la reproducción de video RGB en tiempo real, sin que sea necesario el uso de hardware costoso.
    .row.mb-2
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 XviD:
        p desarrollado como proyecto de software libre por programadores de todo el mundo después de que el proyecto OpenDivX terminará en 2001. Xvid está basado en el estándar MPEG-4 ASP.
    .row.mb-5
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 AV1:
        p el codificador AOMedia Video 1 llegó en 2017 como uno de los compresores de video que reducía el tamaño de los datos en un 30% en promedio, sin que la calidad resultara afectada.
    p.mb-5 Para ampliar la información se invita a leer <b>Formatos y medios de exportación y difusión</b>, enlace que se encuentra en el material complementario.
    .contenedor_amarillo.bg--4-claro.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-3
          .titulo-segundo.color-primario
            h3 Formatos y medios de exportación y difusión
          p.mb-3 Enlace que se encuentra en el material complementario.
        .col-lg-4
          a(href="https://www.youtube.com/watch?v=o-Xjedov3y8&ab_channel=U-tad" target="_blank")
            img(src="@/assets/curso/7.jpg")
      .col-lg-5: img(src='@/assets/curso/img.jpg')
    Seperador
    #t_1_2.titulo-segundo.color-secundario
      h2 1.2 Formatos de video
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
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
.slyder__btn
  &:hover
    background-color: $color-acento-contenido
  background-color: $color-secundario
  i
    color: $color-primario
.contenedor-fondo
  background-image: url('../assets/curso/bg-1.png')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.tarjetas-up

  overflow: hidden
  border-radius: 10px
  position: relative
  &_card
    transition: bottom .3s ease-in-out
    position: absolute
    border-radius: 10px
    width: 100%
    height: 100%
    left: 0
    bottom: -80%
    background-color: #FFEACB
    background-opacity: .1 !important
    i:last-child
      display: none
  &:hover
    .tarjetas-up_card
      bottom: -40%
    i:first-child
      display: none
    i:last-child
      display: block
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content__title, .linea-tiempo-d__item__content__slot
  background-color: #f8e8d5


.linea-tiempo-d__item__number.tarjeta.tarjeta--gris
  background-color: $color-primario
  span
    color: white
.pointer
  transition: background-color .3s ease-in-out
  &:hover
    cursor: pointer
    background-color: #ffda66 !important
.modal-a__content
  background-image: url('../assets/curso/bg-3.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.pasos-b.color-primario .pasos-b__header__item--active .pasos-b__header__item__dot
  border-spacing: 20px
  outline-offset: -8px
  outline: 4px white solid
  span
    color: #fff
.bg-carrousel
  position: relative
  background-image: url('../assets/curso/SQ.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  width: 100%
  min-height: 207px
  overflow: hidden
  &:hover
    .bg-carrousel_content
      left: 0
  &_content
    width: 100%
    background-color: #ffe799
    transition: left .3s ease-in-out
    position: absolute
    height: 100%
    left: 150%
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
.lista-ul--color li
  i
    color: $color-primario !important
</style>
