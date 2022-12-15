<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Clasificación de proveedores
    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10
        .tarjeta.position-relative.rounded-0.bg1(data-aos="flip-down")
          .row.justify-content-end.align-items-center
            .col-auto
              .imagen-absolute
                img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')
            .col-11
              .p-4.ps-5
                p(data-aos="fade-down").mb-0 La clasificación de los proveedores se basa en los resultados de la evaluación de su rendimiento y su importancia estratégica; estos son la base para el desarrollo de la cartera de proveedores de una empresa y la gestión de riesgos. Una clasificación objetiva de proveedores ayuda a desarrollar una cartera completa.  

    p(data-aos="fade-down").mb-5 Actualmente, existen muchas fuentes que permiten obtener información para crear la base de datos proveedores, como se ve en la Figura 1. 

    .titulo-sexto.color-primario.mb-3(data-aos="fade-right")
      h5 Figura 1
      span Fuentes para la selección de proveedores 

    ImagenInfografica.color-acento-botones.mb-5.text-center(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/3.svg', alt='')

      .tarjeta.color-primario.p-3(x="3.8%" y="47%" numero="1")
        p.mb-0 Internet  
      .tarjeta.color-primario.p-3(x="8.2%" y="74.7%" numero="2")
        p.mb-0 Páginas amarillas  
      .tarjeta.color-primario.p-3(x="17.5%" y="24%" numero="3")
        p.mb-0 Prensa de información general      
      .tarjeta.color-primario.p-3(x="26.6%" y="74.6%" numero="4")
        p.mb-0 Radio y televisión 
      .tarjeta.color-primario.p-3(x="36%" y="24%" numero="5")
        p.mb-0 Publicaciones especializadas en la actividad de la empresa  
      .tarjeta.color-primario.p-3(x="45.1%" y="74.6%" numero="6")
        p.mb-0 Publicaciones e informes de bancos y cajas de ahorro 
      .tarjeta.color-primario.p-3(x="54.5%" y="24%" numero="7")
        p.mb-0 Ferias y exposiciones comerciales especializadas en el sector 
      .tarjeta.color-primario.p-3(x="63.7%" y="74.6%" numero="8")
        p.mb-0 Asociaciones empresariales y profesionales  
      .tarjeta.color-primario.p-3(x="72.7%" y="24%" numero="9")
        p.mb-0 Cámaras de comercio 
      .tarjeta.color-primario.p-3(x="82%" y="74.6%" numero="10")
        p.mb-0 Bases de datos de organismos púbicos 
      .tarjeta.color-primario.p-3(x="91%" y="24%" numero="11")
        p.mb-0 Información de empresas especializadas en gestión de bases de datos
      .tarjeta.color-primario.p-3(x="95.6%" y="53%" numero="12")
        p.mb-0 Fuentes internas de la propia empresa     

    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.my-3 
        p(data-aos="fade-down") Una vez establecida la lista de potenciales proveedores, se establece contacto directo para solicitar la información de interés. Es necesario asegurarse de que respondan claramente a los aspectos específicos requeridos para la empresa.

        p(data-aos="fade-down") Los proveedores más eficaces son los que ofrecen productos o servicios que se ajustan —o superan— las necesidades de la empresa contratante. Por eso, al clasificar proveedores, es mejor estar seguro de las necesidades de la empresa y de lo que se quiere conseguir, en lugar de limitarse a pagar por lo que los proveedores quieran venderle.
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down") Por ejemplo, si se quiere reducir el tiempo de atención a los clientes, los proveedores que ofrezcan una entrega más rápida tendrán una mejor valoración que los que compiten solo por el precio. 

          p(data-aos="fade-down").mb-0 Otro punto que merece la pena examinar es cuántos proveedores se necesitan en realidad. Comprar a un grupo cuidadosamente seleccionado puede tener una serie de ventajas. 
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='') 

    p(data-aos="fade-down").mb-5 Dentro de esas ventajas se encuentra: 
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.mb-4.text-center
          .col-lg-4.my-3(data-aos="flip-down")
            .bg2.p-5.h-100
              img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='')
              p(data-aos="fade-down").mb-0 Mayor facilidad para controlar a los proveedores 
          .col-lg-4.my-3(data-aos="flip-down")
            .bg2.p-5.h-100
              img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')
              p(data-aos="fade-down").mb-0 El negocio será más importante para ellos 
          .col-lg-4.my-3(data-aos="flip-down")
            .bg2.p-5.h-100
              img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')
              p(data-aos="fade-down").mb-0 Podrá llegar a acuerdos que le proporcionen una ventaja competitiva adicional                     

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')     
      .col-lg-8.my-3 
        p(data-aos="fade-down") Sin embargo, es importante poder elegir entre varias fuentes. Comprar a un solo proveedor puede ser peligroso: ¿Dónde ir si falla, o incluso quiebra? Igualmente, aunque la exclusividad puede incitar a algunos proveedores a ofrecer un mejor servicio, otros pueden simplemente volverse complacientes y bajar sus estándares.

        .color-fondo-text.bg-color(data-aos="fade-down")
          .color-fondo-text__texto 
            p Es importante tener claro qué se busca en un proveedor. A continuación, se encuentran algunas características que pueden ayudar a definir los mejores aliados para una empresa o proyecto.  

    .row.justify-content-center.align-items-end
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center(titulo="Fiabilidad")
            .col-10
              p Recuerde, si el proveedor falla, la empresa puede fallarle a sus clientes.
          .row.justify-content-center(titulo="Calidad")
            .col-10
              p La calidad de sus suministros debe ser constante; los clientes asocian la mala calidad con la empresa, no con sus proveedores.
          .row.justify-content-center(titulo="Relación calidad-precio")
            .col-10
              p El precio más bajo no siempre es la mejor opción. Elegir proveedores fiables y de calidad implica decidir cuánto se está dispuesto a pagar por sus suministros y el equilibrio que se quiere alcanzar entre costo, fiabilidad, calidad y servicio.
          .row.justify-content-center(titulo="Servicio sólido y comunicación clara")
            .col-10
              p Es vital contar con proveedores honestos, que entreguen a tiempo y avisen con anticipación cualquier inconveniente que puedan tener con la entrega. Los mejores proveedores querrán hablar regularmente con la empresa para saber qué necesidades tiene y cómo pueden servirle mejor.
          .row.justify-content-center(titulo="Seguridad financiera")
            .col-10
              p Siempre merece la pena asegurarse de que el proveedor tiene suficiente liquidez para entregar el pedido a tiempo. Una comprobación de crédito ayudará a asegurarse de que él no quebrará cuando más lo necesite.
          .row.justify-content-center(titulo="Enfoque de colaboración")
            .col-10
              p Una relación sólida beneficiará a ambas partes. Todo empresario quiere que sus proveedores reconozcan lo importante que es la empresa para su negocio, de modo que se esfuercen por ofrecerle el mejor servicio posible. Sin embargo, es más probable que los proveedores respondan de esa manera, si el empresario les muestra lo importantes que son para su empresa.          
      .col-lg-5
        img.img-a.img-t.pb-3(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')                              


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
