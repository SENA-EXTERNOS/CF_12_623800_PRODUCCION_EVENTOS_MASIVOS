<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Contratos comerciales
    .color-fondo-text3.bg-color(data-aos="fade-down")
      .color-fondo-text3__texto 
        p Los contratos comerciales definen y regulan las relaciones comerciales, ya sea un acuerdo laboral estándar u otros más complejos como las fusiones y adquisiciones. El entorno actual, cada vez más litigioso, exige comprender y dominar los principios que rigen los contratos comerciales, saber cómo proteger los intereses y minimizar los pleitos comerciales.

    p(data-aos="fade-down").my-5 Para entender mejor su concepto, la figura a continuación expone algunos de los aspectos del contrato:
    .titulo-sexto.color-primario.mb-4(data-aos="fade-right")
      h5 Figura 1
      p.mb-0 #[i El contrato]
    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/49.svg', alt='') 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.my-3 
        p(data-aos="fade-down") Según el artículo 864 del Código del Comercio (Decreto 410 de 1971):

        p(data-aos="fade-down") El contrato es un acuerdo de dos o más partes para constituir, regular o extinguir entre ellas una relación jurídica patrimonial, y salvo estipulación en contrario, se entenderá celebrado en el lugar de residencia del proponente y en el momento en que este reciba la aceptación de la propuesta.

        p(data-aos="fade-down") En pocas palabras, un contrato comercial es un convenio que regulan las relaciones comerciales entre particulares o empresas, en el cual ambas partes se comprometen a realizar unas acciones o abstenerse de ellas. Los contratos comerciales suelen ser escritos, pero también pueden ser verbales. Un contrato comercial escrito es más fácil de hacer y proporciona a las partes una orientación sobre cómo cumplir sus obligaciones en la transacción.

        .cajon.color-acento-botones.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Independientemente del tamaño de la empresa, su éxito depende en gran medida de la capacidad que tenga para garantizar que sus contratos comerciales reflejen con precisión sus acuerdos contractuales, protejan adecuadamente sus intereses y limiten su responsabilidad. 
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/50.png', alt='')  

    p(data-aos="fade-down").mb-5 Dentro de las funciones de un contrato comercial se encuentran:

    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/51.svg', alt='')  

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3 
        .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down") Los contratos comerciales escritos sirven para documentar exactamente cuáles serán las responsabilidades y obligaciones legales entre las partes involucradas, y lo más importante, relacionan la forma como las partes asignan los riesgos y las recompensas, ya sean financieras o de otro tipo. 

          p(data-aos="fade-down").mb-0 Negociar un contrato inadecuadamente, no documentarlo o firmar uno mal redactado puede acarrear serias consecuencias.     
    p(data-aos="fade-down").mb-5 Entre las consecuencias de un contrato mal diligenciado se encuentran: 

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/53.png', alt='')                         
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-primario
          p(numero="1" titulo="Paso 1") Exposición al riesgo, incluida una responsabilidad potencialmente ilimitada.
          p(numero="2" titulo="Paso 2") Imposibilidad de hacer cumplir las obligaciones de la otra parte.
          p(numero="3" titulo="Paso 3") Arriesgarse a sufrir el incumplimiento de las obligaciones legales o reglamentarias (antisoborno, derecho de la competencia, protección de datos), disputas y litigios.

    p(data-aos="fade-down").mb-5 Un contrato puede referirse a cualquier tema sobre el que dos o más partes deban ponerse de acuerdo. A continuación, se indican algunos de los tipos de contratos comerciales de acuerdo con el Código de Comercio:

    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/521.png', alt='') 

    p(data-aos="fade-down").mb-5 Cuando se elabora un contrato, independientemente de su tipo, se establecen unas cláusulas que definen de forma clara ciertas condiciones. Te invitamos a ver el siguiente video para conocer algunas de ellas.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    //p(data-aos="fade-down").mb-5 Para ver algunos ejemplos, te invitamos a descargar y revisar el 
      span.pur Anexo 1_ Ejemplos contratos.  
    
    //.row.justify-content-around.align-items-center.mt-4
      .col-lg-10
        .tarjeta.color-acento-botones.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/54.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-0 Anexo 1
                  p.mt-0 Ejemplos contratos
                .col-sm-auto
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/Anexo_1_Ejemplos_contratos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download    

                                     
</template>

<script>
export default {
  name: 'Tema4',
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
