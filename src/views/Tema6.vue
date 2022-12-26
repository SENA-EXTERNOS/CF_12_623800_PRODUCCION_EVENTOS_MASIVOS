<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Niveles de servicio
    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10
        .tarjeta.position-relative.rounded-0.bg7(data-aos="flip-down")
          .row.justify-content-end.align-items-center
            .col-auto
              .imagen-absolute1
                img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/61.svg', alt='')
            .col-11
              .p-4.ps-5
                p(data-aos="fade-down") Los niveles de servicio son acuerdos formales entre clientes (tanto internos como externos) para garantizar la adecuada prestación de un servicio.

                p(data-aos="fade-down").mb-0 Un acuerdo de nivel de servicio (SLA por sus siglas en inglés) define el nivel de servicio que se espera de un proveedor, establece los indicadores para medir el servicio, así como las soluciones o sanciones en caso de que no se alcancen los niveles acordados. Es un componente fundamental de cualquier contrato con un proveedor de tecnología.

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/62.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El acuerdo de nivel de servicio debe incluir no solo una descripción de los servicios que se van a prestar y los niveles esperados, sino también cómo se medirán los servicios, los deberes y responsabilidades de cada parte, las soluciones o sanciones por incumplimiento y un protocolo para añadir y eliminar mediciones. 
          | Las mediciones deben diseñarse de manera que no se recompense el mal comportamiento de ninguna de las partes. Por ejemplo, si se incumple un nivel de servicio porque el cliente no ha facilitado la información a tiempo, el proveedor no debe ser penalizado.   

    p(data-aos="fade-down").mb-5 Los componentes clave de un acuerdo de nivel de servicio son dos:   

    TabsC.color-acento-botones(data-aos="fade-right").mb-5
      .py-3.py-md-4(titulo="Elementos del servicio")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0 
            img.img-a.img-t(src='@/assets/curso/temas/63.png', alt='') 
          .col-md-5
            p Incluyen los detalles de los servicios prestados (y lo que se excluye, si hay lugar a dudas), las condiciones de disponibilidad del servicio, las normas como la ventana de tiempo para cada nivel de servicio (el horario de máxima audiencia y el de menor audiencia pueden tener diferentes niveles de servicio, por ejemplo), las responsabilidades de cada parte, los procedimientos de escalada y las compensaciones entre costes y servicios. 
      .py-3.py-md-4(titulo="Elementos de gestión")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0 
            img.img-a.img-t(src='@/assets/curso/temas/64.png', alt='') 
          .col-md-5
            p Deben incluir definiciones de las normas y métodos de medición, procesos de información, contenido y frecuencia, un proceso de resolución de conflictos, una cláusula de indemnización que proteja al cliente de los litigios de terceros resultantes de los incumplimientos de los niveles de servicio (no obstante, esto ya debería estar contemplado en el contrato), y un mecanismo para actualizar el acuerdo según sea necesario.         

    p(data-aos="fade-down") ¿Qué hay que supervisar? Depende de los servicios que se presten. Hay muchos elementos que pueden supervisarse como parte de un acuerdo de nivel de servicio, pero el esquema debe ser lo más sencillo posible para evitar confusiones y costes excesivos por ambas partes. A la hora de elegir los índices de calidad, se debe examinar la operación y decidir qué es lo más importante. Cuanto más complejo sea el esquema de monitorización (y la solución asociada), tendrá menos probabilidades de ser eficaz, ya que nadie tendrá tiempo para analizar adecuadamente los datos. En caso de duda, lo mejor es optar por la facilidad de recogida de datos, por ejemplo, los sistemas automatizados, ya que es poco probable que la costosa recogida manual de estos sea fiable.
    p(data-aos="fade-down").mb-5 Dependiendo del servicio, lo que hay que supervisar puede ser:  

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")
      .row.justify-content-center.align-items-start(titulo="Disponibilidad del servicio")
        .col-lg-7.my-3
          p La cantidad de tiempo que el servicio está disponible para su uso. Se puede medir por franja horaria, por ejemplo: se requiere un 99,5 % de disponibilidad entre las 8 de la mañana y las 6 de la tarde, y se especifica una mayor o menor disponibilidad durante otras horas. Las operaciones de comercio electrónico suelen tener acuerdos para niveles de servicio extremadamente altos en todo momento; un 99,999 % del tiempo de actividad es un requisito frecuente para un sitio que produce millones de pesos por hora. 
        .col-lg-4.my-3
          img.img-a.img-t(src='@/assets/curso/temas/65.png', alt='')
      .row.justify-content-center.align-items-start(titulo="Índice defectos")
        .col-lg-7.my-3
          p Recuentos o porcentajes de errores en los principales entregables. Los fallos de producción, como las copias de seguridad y las restauraciones incompletas, los errores de codificación/revisión y el incumplimiento de los plazos pueden incluirse en esta categoría. 
        .col-lg-4.my-3
          img.img-a.img-t(src='@/assets/curso/temas/66.png', alt='')   
      .row.justify-content-center.align-items-start(titulo="Calidad técnica")
        .col-lg-7.my-3
          p En el desarrollo de aplicaciones subcontratadas, medición de la calidad técnica mediante herramientas comerciales de análisis que examinan factores como el tamaño del programa y los defectos de codificación. 
        .col-lg-4.my-3
          img.img-a.img-t(src='@/assets/curso/temas/67.png', alt='')   
      .row.justify-content-center.align-items-start(titulo="Seguridad")
        .col-lg-7.my-3
          p En estos tiempos, las violaciones a la seguridad de las aplicaciones y a la red pueden ser costosas. Disponer de medidas de seguridad controlables, como las actualizaciones de antivirus y los parches, es clave para demostrar que se han tomado todas las precauciones razonables en caso de incidente. 
        .col-lg-4.my-3
          img.img-a.img-t(src='@/assets/curso/temas/68.png', alt='') 
      .row.justify-content-center.align-items-start(titulo="Resultados empresariales")
        .col-lg-7.my-3
          p Cada vez más, los clientes de tecnologías de la información desean incorporar mediciones de procesos empresariales a sus acuerdos de nivel de servicio. Utilizar los indicadores clave de rendimiento existentes suele ser el mejor enfoque, siempre que se pueda calcular la contribución del proveedor a esos indicadores de gestión o de calidad. 
        .col-lg-4.my-3
          img.img-a.img-t(src='@/assets/curso/temas/69.png', alt='')             

</template>

<script>
export default {
  name: 'Tema6',
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
