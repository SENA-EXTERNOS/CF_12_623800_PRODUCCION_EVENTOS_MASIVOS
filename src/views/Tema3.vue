<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Relaciones con proveedores
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Contar con buenos proveedores mejora tanto el servicio a los clientes como la eficiencia de la empresa. Una buena relación con un proveedor también puede proporcionar un apoyo empresarial muy necesario y aportar una nueva perspectiva. Al fin y al cabo, si un negocio crece, también lo hará el de los proveedores. Ninguna empresa funciona completamente sola, y si se deja a un proveedor clave fuera de juego, se encontrará varado muy rápidamente. A menudo, la relación con los proveedores se pasa por alto y no se le presta la atención que merece. 

    p(data-aos="fade-down") A la hora de seleccionar los proveedores se debe tener en cuenta su ética, sus valores, su posicionamiento y su reputación. Además, hay otros aspectos que también son muy importantes, como se ve en la Figura 5. 
    p(data-aos="fade-down").mb-5 Principios para la relación con proveedores 
    .titulo-sexto.color-primario.mb-3(data-aos="fade-right")
      h5 Figura 5
      span Relación con proveedores

    .row.justify-content-start.mb-5(data-aos="fade-left")
      .col-lg-9.position-relative
        .avatar
          img.img-t(src="@/assets/curso/temas/25.png", alt="alt")
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/26.png", alt="alt").img100
            .col
              h5 Elija proveedores que se alineen con sus valores
              p Es fundamental que los productos, materiales o servicios que les suministre tengan garantías o políticas de devolución que coincidan con las suyas.

              p Es un poco como las relaciones personales: es muy difícil mantener una relación con una persona que difiere en sus valores fundamentales.
        .crd.crd--avatarHorizontal.crd--med.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/27.png", alt="alt").img100
            .col
              h5 Sea un gran cliente
              p Piense en lo que le gusta de sus clientes y haga lo mismo con sus proveedores. Pague a tiempo y mantenga sus registros en orden para no tener que hacer perder tiempo a los proveedores haciéndoles reenviar cosas.
        .crd.crd--avatarHorizontal.crd--med1.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/28.png", alt="alt").img100
            .col
              h5 Proporcione información a tiempo
              p A pesar de la mejor preparación y planificación, pueden producirse errores y falta de comunicación. Es importante abordarlos con su proveedor rápidamente y de manera profesional. Dé siempre a su proveedor la oportunidad de participar en la solución.

              p En una buena relación con el proveedor, es esencial hablar cuando algo va mal.
        .crd.crd--avatarHorizontal.crd--med.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/29.png", alt="alt").img100
            .col
              h5 Comprende las necesidades de sus proveedores
              p ¿Qué es importante para ellos? ¿Necesitan que siga un proceso o complete el papeleo de una manera determinada?

              p Respete su forma de hacer las cosas y póngaselo fácil siguiendo sus procesos y plazos. Provea lo que necesitan cuando lo necesiten.  
        .crd.crd--avatarHorizontal.crd--med1.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/30.png", alt="alt").img100
            .col
              h5 Mantenga una comunicación regular
              p Mantenga el contacto con los proveedores  Reflexionen sobre lo que funciona bien y hablen de los aspectos a mejorar.

              p Tener la oportunidad de que ambas partes proporcionen información sobre lo que ha sido útil o difícil puede ser la chispa para desarrollar formas innovadoras de fortalecer aún más la relación.                                         
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/31.png", alt="alt").img100
            .col
              h5 Premie el buen servicio con la fidelidad
              p Muchas empresas se quejan de que los clientes no son muy fieles hoy en día y que siempre persiguen la mejor oferta. ¿Hace usted lo mismo con sus proveedores?

              p Si su proveedor ha hecho lo correcto con usted, recompénselo con su lealtad, tal y como a usted le gusta ser recompensado.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')     
      .col-lg-9.my-3 
        p(data-aos="fade-down") Las relaciones comerciales son un camino de ida y vuelta, una de las partes no tiene más poder que la otra: ambas deben tener compromiso y madurez. Comprender las perspectivas del otro y respetar las diferencias es clave, así como ser consciente de que juntos, proveedor y destinatario, deben verse beneficiados. Esto implica una comunicación abierta, honesta, y la capacidad de mantener conversaciones difíciles si es necesario. No obstante, una buena relación con los proveedores puede suponer una gran diferencia a la hora de atender a los clientes y reducir los niveles de estrés.

        p(data-aos="fade-down") A continuación, se destacan aspectos relevantes en la relación con los proveedores y su importancia. 

    h5(data-aos="fade-down").mb-5 Gestión de la relación con los proveedores y su importancia 

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-evenly.align-items-start.p-3
          .col-lg-4.mb-4.mb-md-0
            p La gestión de las relaciones con los proveedores (SRM, siglas en inglés de <i>Supplier Relationship Management</i>), es el enfoque sistemático para evaluar a los proveedores que suministran bienes, materiales y servicios a una organización, determinar la contribución de cada uno de ellos al éxito, y desarrollar estrategias para mejorar su rendimiento. 
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/33.png', alt='')     
        .row.justify-content-evenly.align-items-start.p-3
          .col-lg-4.mb-4.mb-md-0
            p La disciplina SRM ayuda a determinar el valor que aporta cada proveedor, y cuáles de esos valores son los más críticos para la continuidad y el rendimiento de la empresa. También permite a los directivos cultivar mejores relaciones con los proveedores en función de la importancia de cada uno de ellos. La gestión de las relaciones con los proveedores es utilizada por los profesionales de la cadena de suministro que tratan regularmente con estos, en áreas como las compras, la gestión de proyectos y las operaciones. 
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/34.png', alt='')   
        .row.justify-content-evenly.align-items-start.p-3
          .col-lg-4.mb-4.mb-md-0
            p A veces llamada ‘gestión de las relaciones con la cadena de suministro’, la SRM es una de las muchas disciplinas de la gestión de la cadena de suministro. Es similar a la gestión de proveedores y a los procesos de adquisición, pero hay diferencias clave: la gestión de proveedores suele centrarse en el establecimiento de costes y acuerdos de nivel de servicio entre la organización y sus proveedores, mientras que el aprovisionamiento se centra en la compra en sí (es decir, el pedido, la contratación, la facturación y el pago).
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/35.png', alt='')   
        .row.justify-content-evenly.align-items-start.p-3
          .col-lg-4.mb-4.mb-md-0
            p Los proveedores tienen un gran impacto en el éxito de una empresa; desempeñan un papel fundamental en el impulso de los ingresos, lo cual no debe ignorarse nunca. Trabajar con proveedores fiables y de alta calidad contribuye en el crecimiento a gran escala de una empresa. Los proveedores poco fiables pueden crear cuellos de botella en el flujo de trabajo y tener un impacto negativo en la impresión que los clientes tienen de la empresa. Hay varios tipos de proveedores con los que una empresa puede trabajar:
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/36.png', alt='')   
        .row.justify-content-evenly.align-items-start.p-3
          .col-lg-4.mb-4.mb-md-0
            h4.mb-4 Mayoristas y distribuidores
            p Los mayoristas compran grandes cantidades de productos a granel y luego los revenden en cantidades menores a un precio unitario más alto. Suelen ofrecer los precios más bajos porque venden en grandes cantidades y son reacios a trabajar con pedidos más pequeños.
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/37.png', alt='')   
        .row.justify-content-evenly.align-items-start.p-3
          .col-lg-4.mb-4.mb-md-0
            h4.mb-4 Fabricantes y vendedores
            p Se trata de proveedores que pueden trabajar con las mercancías de varias empresas diferentes. Los precios pueden ser más elevados que los de los mayoristas, pero manejan pequeños pedidos de una amplia gama de fabricantes en un periodo de tiempo relativamente corto. 
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/38.png', alt='')   
        .row.justify-content-evenly.align-items-start.p-3
          .col-lg-4.mb-4.mb-md-0
            h4.mb-4 Importadores
            p Los importadores nacionales pueden trabajar como los mayoristas nacionales y vender productos extranjeros a las empresas. 
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='')  

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3 
        .cajon.color-acento-contenido.p-4.mb-4.text-center(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Mantener relaciones duraderas y de confianza con proveedores dedicados, debe ser un objetivo primordial de cualquier empresa que se esfuerce por triunfar en el mercado, para lo cual se deben establecer ciertas estrategias.

    h5(data-aos="fade-down").mb-5 Entre dichas estrategias se encuentran:

    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5.text-center
      .bg4.p-4.brad.h-100
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/40.png' alt='')
        h4.mb-4 Tratar a los proveedores como socios:
        p.mb-0 Los proveedores son socios, y esta asociación debe basarse no solo en las transacciones financieras, sino también en la confianza y la lealtad mutuas.    
      .bg4.p-4.brad.h-100
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/41.png' alt='')
        h4.mb-4 Los pagos puntuales son cruciales:
        p.mb-0 Si no se quiere perder proveedores, el primer paso es asegurarse de pagarles a tiempo. El flujo de caja es importante para cualquier emprendimiento; una empresa cumplida en los pagos demuestra que es fiable y que es fácil trabajar con ella. 
      .bg4.p-4.brad.h-100
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/42.png' alt='')
        h4.mb-4 Priorice el valor sobre el precio:
        p.mb-0 El precio es lo que se paga, el valor es lo que se obtiene. No hay nada mejor para aumentar los beneficios que obtener un servicio o material de calidad a un precio adecuado. 
      .bg4.p-4.brad.h-100
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/43.png' alt='')
        h4.mb-4 Acuerdos detallados y justos con los proveedores:
        p.mb-0 Cuando se compra a un proveedor con regularidad, es imprescindible establecer acuerdos de relación con él con un sólido proceso de gestión de contratos. 
      .bg4.p-4.brad.h-100
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/44.png' alt='')
        h4.mb-4 Evaluar y controlar los riesgos:
        p.mb-0 Es importante evaluar siempre los riesgos de tratar con un proveedor, y en particular con un nuevo proveedor, especialmente si tiene una cadena de suministro compleja.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/74.png', alt='')     
      .col-lg-7.my-3 
        p(data-aos="fade-down") Aunque en la actualidad se ponen en práctica estrategias como las vistas anteriormente, en el pasado la satisfacción de los proveedores no fue un tema de gran interés dentro de la gestión de compras, ni desde el punto de vista profesional o académico. Sin embargo, es difícil gestionar con éxito las relaciones comprador-proveedor sin tener en cuenta la satisfacción del proveedor, por lo tanto, el análisis de la satisfacción del proveedor debe tener en cuenta los procesos de interacción dentro de las relaciones comprador-proveedor (por ejemplo, el intercambio de información), así como el ambiente dentro de estas relaciones (como la dependencia de poder).
        .cajon.color-acento-contenido.p-4.mb-4.text-center(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 El objetivo de este trabajo es explorar la satisfacción del proveedor como factor de la calidad de la relación comprador-proveedor. La satisfacción del proveedor se define como su sentimiento de equidad respecto a los incentivos del comprador, y sus contribuciones dentro de una relación industrial comprador - vendedor. La satisfacción del proveedor, como constructo complejo, se expresa mediante un índice, y sus determinantes se miden a través de una encuesta. 

    p(data-aos="fade-down").mb-5 A continuación, se presentan las medidas más útiles para definir la satisfacción del cliente de una empresa.

    TabsA.color-acento-botones.my-5(data-aos="fade-left")  
      .tarjeta.color-acento-botones--borde.p-4(titulo="Puntuación del <br>promotor neto")
        .row.justify-content-center.align-items-start
          .col-lg-4.my-3
            img.img-a.img-t(src='@/assets/curso/temas/15_1.png', alt='')
          .col-lg-8.my-3
            p Mide la fidelidad y es el método de pensamiento más reciente cuando se trata de medir la satisfacción. Tiene una escala de 1 a 10, siendo el 100 positivo la mejor puntuación posible. Los datos se recogen con una encuesta específica, con la pregunta, “¿Qué probabilidad hay de que recomiende nuestra empresa?”. Se pide una respuesta a esta pregunta entre 0 (nada probable) y 10 (extremadamente probable).  
      .tarjeta.color-acento-botones--borde.p-4(titulo="Puntuación de <br>la satisfacción")
        .row.justify-content-center.align-items-start
          .col-lg-4.my-3
            img.img-a.img-t(src='@/assets/curso/temas/15_2.png', alt='')
          .col-lg-8.my-3
            p Es una de las más utilizadas. Los datos se recopilan mediante una pregunta específica en una encuesta de opinión, por ejemplo: “¿Qué grado de satisfacción tiene con su experiencia?”. Los encuestados suelen responder a esta pregunta en una escala del 1 al 5. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Satisfacción del<br> servicio")
        .row.justify-content-center.align-items-start
          .col-lg-4.my-3
            img.img-a.img-t(src='@/assets/curso/temas/15_3.png', alt='')
          .col-lg-8.my-3
            p Mide el grado de satisfacción de los clientes con la asistencia prestada por el equipo de atención al proveedor. Se pueden recopilar estos datos a través de una encuesta de opinión, o más típicamente a través de un mensaje automatizado enviado directamente a un representante.

            p Para ver un ejemplo de esta encuesta, te invitamos a descargar el siguiente anexo:

            .row.justify-content-evenly.align-items-center
              .col.mb-3.mb-sm-0
                p #[b Anexo] - Encuesta de satisfacción 
              .col-sm-auto
                a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/Anexo_2_Encuesta_de_satisfaccion.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download            
                                           
</template>

<script>
export default {
  name: 'Tema3',
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
