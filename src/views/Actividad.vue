<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/emparejamiento.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Verdadero o falso
        p.mb-4 Apreciado participante, a continuación, encontrará unos enunciados relacionados con la experiencia de aprendizaje del presente componente de formación. Con la intención de identificar los conocimientos abordados se sugiere que indique si la frase es Verdadera o Falsa.
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Fijar en el aprendiz los conceptos relacionados con la composición y edición.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece


</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
