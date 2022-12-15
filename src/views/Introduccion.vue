<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.my-3 
        p(data-aos="fade-down") Estimado aprendiz, en este componente de formación se abordarán los conceptos para tramitar la contratación de proveedores y practicar su revaluación, teniendo en cuenta la aplicación de parámetros técnicos y procedimientos de calidad. Para esto es necesario estudiar la clasificación y las relaciones de las personas o empresas que nos suministran productos o servicios, así como los acuerdos, los términos de negociación y los contratos establecidos con ellos. Además de lo anterior, es importante que las empresas cuenten con la implementación de un sistema de gestión de calidad.

        p(data-aos="fade-down") Le invitamos a ver el siguiente video, con la intención de que tenga una visión completa de lo que será esta experiencia de aprendizaje, y le deseamos éxitos en su desarrollo.   
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
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
