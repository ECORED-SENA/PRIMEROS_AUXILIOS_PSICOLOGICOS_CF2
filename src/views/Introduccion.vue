<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cp.mb-5
      .waves.d-none.d-lg-block
      .cp_title        
        p.mb-0 Le invitamos a revisar el siguiente video para lograr la comprensión de algunas indicaciones iniciales del proceso de aprendizaje y los elementos de abordaje acerca de la atención de primeros auxilios psicológicos:   
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-BtAzrVYx98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       
    

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
