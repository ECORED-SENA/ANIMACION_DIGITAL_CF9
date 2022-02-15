<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.c--1
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El estudio de este componente afianzará al aprendiz en el proceso de postproducción de animaciones y productos audiovisuales, así mismo, le aportará elementos conceptuales y operativos del manejo y aplicación de herramientas técnicas: formatos de exportación, resolución de pantalla, aspect ratio, configuración de plataformas de distribución, renderizado, entre otras.
    .bg-video.p-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
