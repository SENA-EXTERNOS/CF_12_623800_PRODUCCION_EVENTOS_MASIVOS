<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 7
      h1 Revaluación del proveedor
    p(data-aos="fade-down") Una vez más, si se tienen muchos proveedores y se toma la opción de separarlos en niveles, la revaluación debería ser mucho más fácil. Por ejemplo, decidir revaluar mensualmente a los proveedores críticos del nivel 1, basándose en los siguientes criterios: 
    ul.lista-ul.ps-3(data-aos="fade-down")
      li 
        i.fas.fa-angle-right
        p.mb-0 Acciones correctivas del proveedor
      li 
        i.fas.fa-angle-right
        p.mb-0 Devoluciones
      li 
        i.fas.fa-angle-right
        p.mb-0 Entrega a tiempo
      li 
        i.fas.fa-angle-right
        p.mb-0 Reclamación del cliente, relacionada con el proveedor

    p(data-aos="fade-down").mb-5 Los proveedores del nivel 2 se revaluarán una vez al año en función de las acciones correctivas del proveedor, mientras que los de nivel 3 se revaluarán cada dos años en función de las devoluciones. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/70.png', alt='')      
      .col-lg-6.my-3 
        p(data-aos="fade-down") Aunque los criterios mencionados en el ejemplo anterior no son una encuesta, la mayoría de las organizaciones desarrollarán una que, de nuevo, puede combinar varios criterios y medir al proveedor en diferentes dimensiones. Sin embargo, una encuesta no es la única forma de evaluar a los proveedores y, en muchos casos, ni siquiera es la óptima. La información obtenida en la revaluación podría muy bien ayudarle con la necesidad de analizar los datos.

        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Así que, tanto si separa al proveedor como si no, se deben decidir los criterios de evaluación. Si una empresa no tiene muchos proveedores, quizá baste con la misma evaluación para todos ellos. La idea es que esta se beneficie de la revaluación de proveedores, de modo que pueda controlar su rendimiento y decidir cuándo elogiarlos y cuándo emitir una bandera roja. Al final, un mal proveedor proporcionará productos y servicios mediocres y, en última instancia, causará problemas con los clientes.
   

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-12
        .tarjeta.position-relative.rounded-0.bg7_1(data-aos="flip-down")
          .row.justify-content-start.align-items-center
            .col-11
              .p-4.pe-5
                p(data-aos="fade-down").mb-0 El requisito establecido en la cláusula 8.4 de la norma ISO 9001 exige analizar los datos de los proveedores. La intención de la norma es mostrar que la empresa conoce el rendimiento de los proveedores y que, si no están funcionando bien, tiene la oportunidad de hacer algo al respecto. Si no se analizan los datos, no se tiene visibilidad y, por tanto, de qué sirve rellenar un montón de formularios en papel para los proveedores, apilarlos o archivarlos y no mirarlos nunca. Sí, es posible que la empresa haga las evaluaciones según lo previsto, pero si no mira los resultados, ese ejercicio no tiene ningún valor. Por eso existe este requisito, para asegurarse de que se analizan los datos de los proveedores con el fin de saber lo que ocurre con ellos.           
            .col-auto
              .imagen-absolute2
                img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/71.svg', alt='')
   
    .titulo-sexto.color-primario.mb-3(data-aos="fade-right")
      h5 Figura 9
      span Indicadores para analizar
    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/72.svg', alt='')  

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/73.png', alt='')      
      .col-lg-7.my-3 
        p(data-aos="fade-down") Como recomendación, es importante pensar en el análisis de datos al decidir los métodos de revaluación de proveedores. Si la revaluación es capaz de producir algún tipo de datos que puedan ser analizados, entonces cumplirá estos requisitos simultáneamente. De lo contrario, si se decide revaluar a los proveedores mediante una encuesta, hay que idear una forma diferente de analizar los datos de los proveedores, a menos que se puedan sopesar las respuestas de la encuesta y, de alguna manera, ser capaz de saber cómo se desempeñan los proveedores con respecto a un objetivo definido. Si se puede decir que el proveedor A rinde un 90 %, el proveedor B rinde un 80 % y el objetivo para todos los proveedores es el 95 % —en la dimensión que decida—, entonces son datos que se pueden comparar fácilmente y actuar en consecuencia.

        p(data-aos="fade-down") Con una información clara, la toma de decisiones sobre los proveedores será una ventaja para la empresa. Se podrá, entonces, dejar de lado a un proveedor por su bajo rendimiento, ponerlo a prueba o darle más trabajo por su excelente rendimiento.  

    .row.justify-content-center.align-items-center
      .col-lg-10.my-3 
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Para un estudio completo del tema, recuerda explorar todos los recursos disponibles en este componente formativo, y que encuentras en el menú principal, tales como material complementario, actividad didáctica y glosario, entre otros.                  
</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
