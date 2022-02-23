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
          .bloque-texto-g__texto.p-5
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
                p El <i>códec</i>, el formato contenedor y la resolución de pantalla son los conceptos que se deben tener claros previamente a la realización del proyecto y por supuesto, antes del render.
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/5.jpg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Claridad de conceptos y elementos
                p Aunque la mayoría de estos elementos hacen parte de la cotidianidad de un editor o animador su definición puede prestarse para relativas confusiones.
    Separador
    #t_1_1.titulo-segundo.color-secundario
      h2 1.1 <i>Códec</i> y tipos de <i>códec</i> 
    .contenedor-fondo.p-5
      .row.justify-content-center
        .col-lg-8: img(src='@/assets/curso/6.png').mb-5.mt-5
        p El término <i>códec</i> proviene de la simbiosis de dos palabras: <b>codificador y decodificador</b>. Para Javier Melenchón en su artículo <i>Web códec</i> y contenedor, un <i>códec</i> es una especificación sobre cómo codificar un tipo de información y luego poderla decodificar, por ejemplo, <b>un <i>códec</i> determina la manera en que se comprime y descomprime información de video y de audio.</b> 
    p.mb-5 El <i>códec</i> es un software o dispositivo de hardware que codifica o comprime los datos en el proceso de almacenamiento y los decodifica o descomprime en el momento de su reproducción.
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
            p La funcionalidad o valor de <i>códec</i> se mide en función de la <b>mayor comprensión con la mínima pérdida de calidad de imagen.</b> La distribución y posterior visualización de las imágenes requieren un menor tamaño en los archivos originales para su procesamiento.
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
        h5 <i>Códec</i> de grabación
        p Entre los códec de grabación el más usado es el <b>H264</b>, ya que la mayoría de las cámaras (como las de la marca Canon), software de post y difusión, lo usan. <b>El H264</b>, que también se llama <b>MPEG-4/AVC</b> tiene una alta calidad de procesamiento para aplicaciones de transmisión de video en tiempo real, dado que el tamaño del archivo logrado es tres veces más pequeño. 
      .col-lg-5: img(src='@/assets/curso/9.jpg')
    p.mb-5 Tenga en cuenta estas particularidades de los <i>códec</i> de grabación:
    TabsA.color-primario.mb-5
      .tarjeta.bg--2-claro.p-4(titulo="Fácil integración")
        .row.align-items-center.justify-content-center
          .col-lg-2
            img(src='@/assets/curso/10.svg')
          .col-lg-9  
            h4 Fácil integración
            p Es un <i>códec</i> fácil de integrar y cubre un amplio rango de formatos de video, ofreciendo una alta calidad a dispositivos tan distintos como teléfonos móviles con pocas prestaciones, y Blu-ray dotados de las máximas presentaciones, entre otros.
      .tarjeta.bg--2-claro.p-4(titulo="Edición")
        .row.align-items-center.justify-content-center
          .col-lg-2
            img(src='@/assets/curso/11.svg')
          .col-lg-9  
            h4 Edición
            p Otras cámaras realizan la captura en el <i>códec</i> de edición de <b>Apple ProRes</b> que requiere menos potencia de CPU para su lectura que el H264. Este <i>códec</i> forma parte del programa de edición <b><i>Final Cut</i></b> y <b><i>Final Cut Pro.</i></b>
      .tarjeta.bg--2-claro.p-4(titulo="Formato determinado")
        .row.align-items-center.justify-content-center
          .col-lg-2
            img(src='@/assets/curso/12.svg')
          .col-lg-9  
            h4 Formato determinado
            p Un archivo puede contener información codificada con diferentes <i>códec</i>, pero como cada marca de cámara utiliza uno determinado formato, no todos pueden formar parte de un formato, como en el caso del <i>códec</i> H264 que no es compatible con el formato .avi.
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5
        h5 <i>Códec</i> de edición
        p Una manera de hacer del proceso de edición algo más fluido es utilizar proxies o material off-line; se trata de archivos temporales que hacen las veces de codificador y que, una vez terminado el proyecto, pueden desecharse. Los proxies realizan una copia de los videos originales y la convierten en una versión de menor resolución, pero que se procesa de manera más rápida.
      .col-lg-5: img(src='@/assets/curso/13.jpg')
      
    p.mb-5 Algunos aspectos a tener en cuenta sobre los <i>códec</i> de edición son:
    TabsA.color-primario.mb-5
      .tarjeta.bg--2-claro.p-4(titulo="Conversión de video")
        .row.justify-content-center.align-items-center
          .col-lg-2
            img(src='@/assets/curso/14.svg')
          .col-lg-9  
            h4 Conversión de video
            p Ofrecen la posibilidad de convertir un video de un <i>códec</i> a otro. A esta acción se le llama transcodificar y de esta manera, se logra hacer más eficientes los archivos para el programa de edición.
      .tarjeta.bg--2-claro.p-4(titulo="Ejemplo de transcodificación")
        .row.justify-content-center.align-items-center
          .col-lg-2
            img(src='@/assets/curso/15.svg')
          .col-lg-9  
            h4 Ejemplo de transcodificación
            p Como ejemplo se puede mencionar que los archivos grabados originalmente usando el formato .MP4 no siempre funcionan correctamente con las aplicaciones de edición con el <i>códec</i> H264. La transcodificación de video convertiría estos archivos en otro <i>códec</i> que trabaje bien con los requerimientos de la edición.
      .tarjeta.bg--2-claro.p-4(titulo="Capacidad interna de transcodificación")
        .row.justify-content-center.align-items-center
          .col-lg-2
            img(src='@/assets/curso/16.svg')
          .col-lg-9  
            h4 Capacidad interna de transcodificación
            p La mayoría de los programas de edición de video como <i>Avid Media Composer</i>, <i>Final Cut Pro y Adobe Premiere</i> junto con <i>Adobe Media Encoder</i>, tienen la capacidad interna de transcodificación de video.
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5
        h5 <i>Códec</i> de difusión
        p Para esta parte final del proceso de edición los expertos coinciden en que, si se trata de exportar los videos y realizar transmisiones de video en tiempo real, el <b>H264</b> es el mejor <i>códec</i>, ya que permite archivos más compatibles con reproductores <i>Web y YouTube</i>. Pero desde septiembre de 2020 se lanzó al mercado la última versión del <b>H265</b>, gracias a este es posible cargar en Internet videos de mejor calidad con resoluciones muy altas y con una transferencia de archivo inferior.
      .col-lg-5: img(src='@/assets/curso/17.jpg')
      
    .row.mb-5.justify-content-center
      .col-lg-9
        .cajon.color-acento-botones.bg--4-claro.p-4.mb-4
          p.mb-0 El <b>HEVC/H265</b> (<i>High Efficiency Video Coding</i>) ofrece la misma calidad y compatibilidad, pero con un mayor grado de compresión como respuesta natural a la aparición de resoluciones en <b>4K</b> y <b>8K</b>, sin aumentar el ancho de banda necesario para las transmisiones en vivo o las plataformas de streaming.
    p.mb-5 Algunos <i>códec</i> que se han usado y aún conservan alguna vigencia son:
    .row.mb-2
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 DV:
        p El <i>códec</i> de captura de los videos desde cámara MiniDV mediante puerto <i>Firewire</i>. Este <i>códec</i> solo comprime el video, pero no el audio. Puede ser utilizado en formato AVI (.avi), <i>Quicktime</i> (.mov) y secuencia DV (.dv).
    .row.mb-2
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 HDV:
        p (Basado en MPEG-2) consigue más compresión que el DV, en tamaños de <i>frame</i> mayores.
    .row.mb-2
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 MPEG:  (<i>Moving Picture Experts Group</i>)
        p Es un estándar para compresión de video y de audio. Hay cuatro tipos:
        ul.lista-ul--color.vr
          li 
            i.fas.fa-circle
            p
              b MPEG-1:
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
              | expande MPEG-1 para soportar "objetos" audio/video, contenido 3D, codificación de baja velocidad binaria y soporte para gestión de derechos digitales (protección de <i>copyright</i>) actualmente se emplea como <i>códec</i> HDTV en detrimento de MPEG-2.
    .row.mb-2
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 Photo_JPG y M-JPG A y B:
        p Son tres los <i>códec</i> basados en JPEG integrados en <i>QuickTime</i>. MJPEG significa "<i>Motion</i> JPEG" y es idéntico a <i>Photo</i>-JPEG, excepto los <i>códec</i> MJPEG con traductores integrados para soportar diferentes tarjetas de captura. Es recomendable utilizar este <i>códec</i> en formatos <i>Quicktime</i> DV y HD.
    .row.mb-2
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 Animación:
        p Vinculado a Quicktime es rápido y sin pérdidas. <i>pple Computer</i> lo crea para permitir la reproducción de video RGB en tiempo real, sin que sea necesario el uso de <i>hardware</i> costoso.
    .row.mb-2
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 XviD:
        p Desarrollado como proyecto de <i>software</i> libre por programadores de todo el mundo después de que el proyecto <i>OpenDivX</i> terminará en 2001. Xvid está basado en el estándar MPEG-4 ASP.
    .row.mb-5
      .col-md-1.col-sm-2
        .tarjeta.bg--2-claro3.p-2.rounded-3.img-color
          img(src='@/assets/curso/19.svg')
          img(src='@/assets/curso/18.svg')
      .col-md-11.col-sm-10
        h4 AV1:
        p El codificador AOMedia Video 1 llegó en 2017 como uno de los compresores de video que reducía el tamaño de los datos en un 30% en promedio, sin que la calidad resultara afectada.
    p.mb-5 Para ampliar la información se invita a leer <b>Formatos y medios de exportación y difusión</b>, enlace que se encuentra en el material complementario.
    .contenedor_amarillo.bg--4-claro.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-3
          .titulo-segundo.color-primario
            h3 Formatos y medios de exportación y difusión
          p.mb-3 Enlace que se encuentra en el material complementario.
        .col-lg-4
          a(href="https://www.youtube.com/watch?v=o-Xjedov3y8&ab_channel=U-tad" target="_blank")
            img(src="@/assets/curso/20.jpg")
    Seperador
    #t_1_2.titulo-segundo.color-secundario
      h2 1.2 Formatos de video
    .contenedor-fondo.p-5
      .row.justify-content-center
        .col-lg-8: img(src='@/assets/curso/6.png').mb-5.mt-5
        p Cuando se habla de formatos de video se está haciendo referencia básicamente a un archivo en bruto, es decir, un archivo tal y como se capturaron las imágenes digitales en movimiento, y que pasa a comprimirse y descomprimirse mediante un <i>códec</i>. Los metadatos, audios e información se agrupan gracias a un contenedor que les ordena y “da forma”, es decir, <i>códec</i> + contenedor = formato de video.
    p.mb-5 Hay diversidad de formatos que se pueden utilizar para exportar e importar imágenes y videos. Entre ellos se encuentran los siguientes:
    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.tarjeta--gris.p-4
          PasosB.color-primario
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/22.svg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Contenedor AVI
                p Formato de video posicionado y antiguo de Microsoft. Tiende a generar archivos grandes, pero soportados por gran variedad de <i>códec</i>, así como gran diversidad de configuraciones de archivo. No es útil para transmisión en línea; se ha ido reemplazando por el formato .mp4 que contiene el <i>códec</i> H264 y es compatible con la mayoría de dispositivos de reproducción, páginas web, Facebook, YouTube etc.
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/23.svg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Contenedor MP4
                p Conserva alta calidad y mantiene un tamaño reducido. Actualmente, es el más utilizado por la facilidad para compartir en línea y porque soporta datos adicionales como subtítulos e imágenes estáticas. Es combinado, generalmente, con H.264 y H.265. Casi todos los programas de reproducción multimedia tienen compatibilidad con él. 
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/24.svg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Contenedor MKV
                p Formato de video profesional, de código abierto, llamado Matroska, en el que se pueden almacenar, anexados al canal de audio, varios tipos de subtítulos y varias pistas de audio. Al igual que MP4, proporciona muy buena calidad de audio y vídeo en poco espacio.
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/25.svg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Contenedor FLV
                p De reducido uso, fue el formato más común en reproductores en línea, ya que se creó para el reproductor de videos de Flash de Adobe. Tenía un tamaño de archivo pequeño y una amplia gama de complementos de navegador y reproductores de video. El uso de estos formatos decayó por la pérdida de compatibilidad con dispositivos iOS. Ya no se recomienda trabajar en este formato, excepto que se trate de un proyecto heredado.
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/26.svg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Contenedor MOV
                p Creado por Apple para reproducir con Quicktime, lo que hace que conserve alta calidad, pero limitada compatibilidad, además de generar archivos muy grandes. Ideal para archivar videos de alta calidad en dispositivos Apple.
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/27.svg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Contenedor WMV
                p El Windows Media genera videos pequeños, ideales para ser enviados por correo, como muestra de avances. Pierde calidad significativamente al ser archivos pequeños, aunque se ha ido actualizando para soportar videos con más definición, pero su uso es limitado fuera de Microsoft. 
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/28.svg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Contenedor DIVX/XviD
                p Formato de video normal que aún circula, diseñado para tener calidad de video alta pero, a su vez, tamaños de archivos grandes. Usado frecuentemente para el almacenamiento y transporte en discos duros.
            .row(titulo="").px-4.justify-content-center
              .col-md-3
                figure
                  img(src='@/assets/curso/29.svg', alt='Texto que describa la imagen' style='border-radius: 30px')
              .col-md-7.mb-4.mb-md-0
                h4 Real Video
                p Formato muy utilizado para streaming, junto con su gemelo Real Audio; ambos necesitan reproducirse desde su propio reproductor el Real One.
    Separador
    #t_1_3.titulo-segundo.color-secundario
      h2 1.3 Formatos de imagen
    .contenedor-fondo.p-5
      .row.justify-content-center
        .col-lg-8: img(src='@/assets/curso/30.png').mb-5.mt-5
        p Este formato hace referencia a la forma en que se almacenarán los datos que hacen parte de una imagen. Existen dos tipos de imágenes: <b>los mapas de bits (bitmaps)</b> y los <b>vectores</b>.
      .row.mb-5.justify-content-center
        .col-lg-5.mb-3
          .tarjetas-up(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            img(src='@/assets/curso/31.jpg' alt='AvatarTop' style='width:505px')
            .tarjetas-up_card.p-4
              .title.d-flex.align-items-center.mb-4
                span.c--4
                  i.fas.fa-caret-up.fa-2x.color-primario.me-3
                  i.fas.fa-caret-down.fa-2x.color-primario.me-3
                h4.mb-0 Mapas de Bits
              p Los mapas de bits o imágenes rasterizadas, que están conformadas por un conjunto de puntos diminutos conocidos como píxeles, ordenados en una malla, a los cuales se les atribuye un color por medio de coordenadas; por lo que no se puede aumentar su tamaño sin que se disminuya su calidad.
        .col-lg-5.mb-3
          .tarjetas-up
            img(src='@/assets/curso/32.jpg' alt='AvatarTop' style='width:505px')
            .tarjetas-up_card.p-4
              .title.d-flex.align-items-center.mb-4
                span.c--4
                  i.fas.fa-caret-up.fa-2x.color-primario.me-3
                  i.fas.fa-caret-down.fa-2x.color-primario.me-3
                h4.mb-0 Vectores
              p Los vectores están formados por polígonos de puntos en vez de pixeles, por lo que se pueden redimensionar o escalar infinitamente, ya que no pierden su calidad.
    p.mb-5 Existen diferentes formatos en los cuales se pueden almacenar datos de imagen:
    .row.justify-content-center
      .col-lg-10 
        .carrousel-dots
          .carrousel-dots_dot.p-5(@click="modal1 = true")(@mouseover="mostrarIndicador = false")
            .indicador--click(v-if="mostrarIndicador")
            .imagenes.d-flex.align-items-center.justify-content-center.mb-3
              img(src='@/assets/curso/33.svg' style='width:142px')
              img(src='@/assets/curso/39.svg' style='width:142px')
            h5.text-center JPEG/JPG
          
          .carrousel-dots_dot.p-5(@click="modal2 = true")
            .imagenes.d-flex.align-items-center.justify-content-center.mb-3
              img(src='@/assets/curso/34.svg' style='width:142px')
              img(src='@/assets/curso/40.svg' style='width:142px')
            h5.text-center GIF
          .carrousel-dots_dot.p-5(@click="modal3 = true")
            .imagenes.d-flex.align-items-center.justify-content-center.mb-3
              img(src='@/assets/curso/35.svg' style='width:142px')
              img(src='@/assets/curso/41.svg' style='width:142px')
            h5.text-center PNG
          .carrousel-dots_dot.p-5(@click="modal4 = true")
            .imagenes.d-flex.align-items-center.justify-content-center.mb-3
              img(src='@/assets/curso/36.svg' style='width:142px')
              img(src='@/assets/curso/42.svg' style='width:142px')
            h5.text-center BMP
          .carrousel-dots_dot.p-5(@click="modal5 = true")
            .imagenes.d-flex.align-items-center.justify-content-center.mb-3
              img(src='@/assets/curso/37.svg' style='width:142px')
              img(src='@/assets/curso/43.svg' style='width:142px')
            h5.text-center TIF/TIFF
          .carrousel-dots_dot.p-5(@click="modal6 = true")
            .imagenes.d-flex.align-items-center.justify-content-center.mb-3
              img(src='@/assets/curso/38.svg' style='width:142px')
              img(src='@/assets/curso/44.svg' style='width:142px')
            h5.text-center RAW
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-lg-2
          img(src='@/assets/curso/39.svg' alt='AvatarTop' )
        .col-lg-10
          h4 JPEG/JPG
          p Formato muy común, usado en cámaras fotográficas digitales; comprime archivos manteniéndolos ligeros para que sean fácilmente visualizados, compartidos y publicados en red. Su principal inconveniente: cada vez que el archivo se edita y se vuelve a guardar, pierde calidad; no es apto para guardar texto, ilustraciones o gráficos simples.
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col-lg-2
          img(src='@/assets/curso/40.svg' alt='AvatarTop' )
        .col-lg-10
          h4 GIF
          p Formato de compresión sin pérdidas, manteniendo los archivos ligeros; altamente compatible, por lo que a menudo se usa para compartir gráficos web sencillos y animaciones cortas sin sonido (GIF animados).
    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .col-lg-2
          img(src='@/assets/curso/41.svg' alt='AvatarTop' )
        .col-lg-10
          h4 PNG
          p Formato de compresión diseñado para gráficos web, usado como mejora del GIF; tampoco presenta pérdidas de calidad al editarse, permitiendo archivos más grandes e imágenes más complejas con colores sólidos y líneas nítidas. A diferencia de los GIF, puede contener un grado de transparencia brindando mayor flexibilidad al editar o crear imágenes y gráficos en la web, aunque sin permitir la animación de los mismos. Sólo admite colores RGB y su compatibilidad es limitada.
    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center
        .col-lg-2
          img(src='@/assets/curso/42.svg' alt='AvatarTop' )
        .col-lg-10
          h4 BMP
          p Formato sin compresión (su tasa es demasiado baja). Registra cada pixel de la matriz que compone una imagen. Altamente compatible, anteriormente se utilizaba mucho en edición de imágenes. Su gran problema: el tamaño de los archivos es enorme y por lo tanto son muy pesados.
    ModalA(:abrir-modal.sync="modal5")
      .row.align-items-center
        .col-lg-2
          img(src='@/assets/curso/43.svg' alt='AvatarTop' )
        .col-lg-10
          h4 TIF/TIFF
          p Formato de compresión sin pérdidas, utilizado principalmente para datos de imagen sin procesar. Permite trabajar con imágenes de alta calidad y archivos de impresión, ya que mantiene la resolución y la calidad. Es altamente compatible con ordenadores, permitiendo guardar varias imágenes y páginas en un mismo archivo. Las imágenes que se trabajan con este formato son bastante grandes ya que contienen más detalles, más colores, mayor calidad y resolución. Aunque es un formato de compresión, los archivos quedan bastante pesados.
    ModalA(:abrir-modal.sync="modal6")
      .row.align-items-center
        .col-lg-2
          img(src='@/assets/curso/44.svg' alt='AvatarTop' )
        .col-lg-10
          h4 RAW
          p Formato muy usado por fotógrafos profesionales; aporta  grandes ventajas en la edición por la gran cantidad de información que almacena. Raw, sería como un “negativo digital” que genera la cámara, por lo que contiene todos los datos, permitiendo mayores márgenes en la edición de las fotos. Esta polivalencia provoca, a la vez, un archivo de mayor tamaño, lo que puede ser una desventaja. 
    Separador
    #t_1_4.titulo-segundo.color-secundario
      h2 1.4 Formatos de video para difusión en redes sociales
    .contenedor-fondo.p-5
      .row.justify-content-center
        .col-lg-8: img(src='@/assets/curso/45.png').mb-5.mt-5
        p Las preferencias para la carga de videos en redes sociales suelen cambiar año tras año, para 2021 las principales redes sociales presentan una configuración de medidas, tamaños y formatos que deben usarse al momento de publicar videos en ellas.
    p.mb-5 La siguiente tabla le muestra la configuración de videos para publicación en redes sociales del año 2021:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1 
      span Configuración de videos para publicación en redes sociales
    .tabla-a.color-primario.mb-5 
      table
        thead.bg-white
          tr
            th Red social
            th Formato
            th Resolución
            th.fst-italic Aspect ratio
        tbody
          tr
            td.text-center.fw-bold YouTube
            td 
              p <b>MPEG-2:</b> salida en codificación de audio: Dolby AC-3 o MPEG Layer II, bits de audio: 128 kbps o superior.
                br
                br
                |<b>Formato MPEG-4:</b> <i>Códec</i> de video: H.264, <i>códec</i> de audio: AAC, bits de audio: 128 kbps o superior. 
            td <b>Full HD</b> 1920x1080 para videos en venta o alquiler HD 1280x720 o mayor para videos gratis no hay restricción de resolución, pero lo ideal es que no sea menor.
            td 16:9
          tr
            td.text-center.fw-bold Instagram
            td.fw-bold.text-center .mp4  
            td 
              p <b>Cuadrada:</b> 1080 x 1080 px - Horizontal: 1080 x 566 px - Vertical: 1080 x 1350 px.

                br
                br
                |<b>Para stories:</b> 1080 x 1920 px
                br
                br
                |Para IG de Instagram la resolución mínima debe ser de 720 píxeles.
            td
              p <b>Ratio vertical</b> 9:16, ratio horizontal 16:9, ratio 1:1. 
                br
                br
                |<b>Instagram Ads:</b> 1:1 cuadrado, 1,91:1 horizontal, 4:5 vertical.
          tr
            td.text-center.fw-bold LinkedIn 
            td.fw-bold.text-center .mp4 
            td 1920 x 1920 píxeles para anuncios en video.
            td desde 1:1 hasta panorámicos de aspecto 2.4:1.
          tr
            td.text-center.fw-bold Pinterest
            td.fw-bold.text-center .mp4
            td 1000 x 1500 píxeles.
            td 2:3 recomendado.
          tr
            td.text-center.fw-bold TikTok
            td.fw-bold.text-center .mp4
            td 1080 x 1920 
            td 9:16 o 1:1
          tr
            td.text-center.fw-bold Facebook 
            td.fw-bold.text-center  .mp4 o .mov 
            td 
              p <b>Noticias:</b> 1920 x 1080 px
                br
                br
                |<b>Marketplace:</b> 1080 x 1080 
                br
                br
                |<b>Instream:</b> 864 x 1080 px 
                br
                br
                |<b>Stories:</b> 1080x1920 px
            td
              p <b>Noticias:</b> 16:9, ratio horizontal
                br
                br
                |<b>Marketplace:</b> 1:1 ratio cuadrado
                br
                br
                |<b>Instream:</b> 4:5 ratio vertical
                br
                br
                |<b>Stories:</b>  9:16
                
          tr
            td.text-center.fw-bold Twitter
            td.fw-bold.text-center  .mp4 o .mov para móvil
            td 1280 x 1024 px
            td de 1:3 a 3:1 
    Separador
    #t_1_5.titulo-segundo.color-secundario
      h2 1.5 Resoluciones de pantalla y <i>Aspect ratio</i>
    .contenedor-fondo.p-5
      .row.justify-content-center
        .col-lg-8: img(src='@/assets/curso/46.png').mb-5.mt-5
        p Se trata de dos aspectos importantes a tener en cuenta en el momento de elegir el formato de salida. La resolución de pantalla tiene que ver con el número total de píxeles que pueden ser mostrados en una pantalla, y que determina el tamaño de las imágenes en píxeles horizontales y verticales, mientras que la <b>relación de aspecto del píxel</b>, <i>Aspect</i> ratio indica si el píxel es cuadrado o más rectangular.
    p.mb-5 Profundice en los aspectos más relevantes de estas herramientas decisivas del proceso de animación, visualizando el recurso que se muestra a continuación:
    .bg-video.p-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/ZJvDfSu99U4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Y para el Aspect ratio, las proporciones que se manejan son las siguientes:
    .row.justify-content-center
      .col-lg-8
        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Relación aspecto 1:1") Altura y ancho son iguales, ello crea un cuadrado visualmente. Una de las resoluciones más comunes es 1080 x 1080: la típica imagen como foto de perfil de Instagram. También es muy común en el uso de impresión fotográfica, pantallas móviles, plataformas sociales. No recomendado para tv o formatos digitales.
          p.text-small(numero="2" titulo="Relación aspecto 3:2") Se trata del formato estándar, gracias a las cámaras filmadoras que utilizaban películas de 35 milímetros, representado en píxeles; su tamaño común es de 1080 x 720 px.
          p.text-small(numero="3" titulo="Relación aspecto 4:3 (1.33:1)") Fue uno de los formatos más comunes antiguamente para la televisión estándar y celulares; su tamaño en píxeles puede representarse con un tamaño de 1024 x 768 px. 
          p.text-small(numero="4" titulo="Relación aspecto 16:9 (1.77:1)") Es el formato de pantalla panorámica estándar utilizado por la televisión de alta definición y los dispositivos smartphone; su tamaño más común en pixeles es 1920 x 1080 px y 1280 x 720 px. 
          p.text-small(numero="5" titulo="Relación aspecto 21:9 ( 2.35:1)") Es el formato más usado en cine, con una dimensión en píxeles de 2560 x 1080 px o 3440 x 1440. Es un formato de tamaño mucho más apaisado (rectangular) que el de 16:9
          div.text-small(numero="6" titulo="Proporciones") 
            img(src='@/assets/curso/47.svg')


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
    background-color: rgba(255, 234, 203,0.85)
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
  background-color: #F8E8D5
.pasos-b.color-primario .pasos-b__header__item--active .pasos-b__header__item__dot
  border-spacing: 20px
  outline-offset: -8px
  outline: 4px white solid
  span
    color: #fff
.lista-ul--color li
  i
    color: $color-primario !important
.carrousel-dots
  width: 100%
  min-height: 400px
  position: relative
  display: flex
  justify-content: center
  align-items: center
  &_dot
    cursor: pointer
    box-shadow: 0 1px 7px 1px #CCCCCC
    position: absolute
    transition: all .3s ease-in-out
    img:nth-child(1)
      display: block
    img:nth-child(2)
      display: none
    width: 295px
    height: 295px
    border-radius: 50%
    background-color: #FFE799
    &:hover
      img:nth-child(1)
        display: none
      img:nth-child(2)
        display: block
      background-color: #FFC200
      z-index: 1
      transform: scale(1.2)
    &:nth-child(1)
      left: 0
    &:nth-child(2)
      left: 15%
    &:nth-child(3)
      left: 29%
    &:nth-child(4)
      left: 43%
    &:nth-child(5)
      left: 58%
    &:nth-child(6)
      left: 73%
@media (max-width: $bp-max-md)
  .carrousel-dots
    display: flex
    position: relative
    flex-wrap: wrap !important
    flex-direction: column !important
    &_dot
      position: relative
      &:nth-child(1)
      left: 0
      &:nth-child(2)
        left: 0
      &:nth-child(3)
        left: 0
      &:nth-child(4)
        left: 0
      &:nth-child(5)
        left: 0
      &:nth-child(6)
        left: 0
.bloque-texto-g__texto
  width: 75%
  background-color: rgba(255, 255, 255, 0.77)
.tabs-a.color-primario .tabs-a__tab:hover
  color: white
.tabla-a thead
  border-top: 17px solid
</style>
