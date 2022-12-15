export default {
  global: {
    componenteFormativo: 'Contratación y revaluación de proveedores',
    descripcionCurso:
      'La contratación y revaluación de proveedores es el proceso de valoración y aprobación que se realiza para garantizar que solo se trabaja con los mejores proveedores disponibles. El mismo proceso puede aplicarse también a los proveedores actuales para medir y supervisar su rendimiento, con el fin de reducir los costos, mitigar el riesgo e impulsar la mejora continua.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Clasificación de proveedores',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Negociación y acuerdos comerciales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Relaciones con proveedores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Contratos comerciales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Gestión de la calidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Niveles de servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Revaluación del proveedor',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Clasificación de proveedores',
      referencia: 'Selección de proveedores (s. f.).',
      tipo: 'Artículo',
      link:
        'https://webquery.ujmd.edu.sv/siab/bvirtual/Fulltext/ADPS0000636/C3.pdf.',
    },
    {
      tema: 'Negociación y acuerdos comerciales',
      referencia:
        'Acuña, G. y Díaz, E. (2019). <i>Módulo estrategias de negociación</i>. Ediciones Usta.',
      tipo: 'Módulo',
      link:
        'https://repository.usta.edu.co/bitstream/handle/11634/18471/ModuloEstrategiasdeNegociaci%C3%B3n%20DIAGRAMACI%C3%93N.pdf?sequence=1.',
    },
    {
      tema: 'Gestión de la calidad',
      referencia:
        'Normas ISO (s. f.). <i>ISO 9001</i>. Sistemas de gestión de la calidad. Recuperado el 12 septiembre 2022.',
      tipo: 'Norma',
      link: 'https://www.normas-iso.com/iso-9001/.',
    },
    {
      tema: 'Niveles de servicio',
      referencia:
        'Delmonte, P. (2020). <i>Acuerdos de nivel de servicio. Un enfoque práctico. Independently Published</i>.',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books?id=pABgzQEACAAJ&dq=acuerdo+niveles+de+servicio&hl=es-419&sa=X&redir_esc=y',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo',
      significado:
        'Manifestación de asentimiento mutuo entre dos o más personas.',
    },
    {
      termino: 'Análisis de datos',
      significado:
        'Proceso de recopilación, modelización y análisis de datos para extraer información que sirva de apoyo a la toma de decisiones.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Almacén de datos diseñado de forma organizada, que facilita la búsqueda de la información que se necesita. Es una colección organizada de información estructurada, o datos, que suele almacenarse electrónicamente en un sistema informático.',
    },
    {
      termino: 'Contrato',
      significado:
        'Acuerdo entre personas privadas, naturales o jurídicas, que crea obligaciones mutuas exigibles por ley.',
    },
    {
      termino: 'Indemnización',
      significado:
        'Forma de seguro de compensación por daños y perjuicios. Cuando el término “indemnización” se utiliza en sentido jurídico, también puede referirse a una exención de responsabilidad por daños.',
    },
    {
      termino: '<i>KPI</i>',
      significado:
        'Indicador de gestión, expresión cuantitativa del comportamiento y desempeño de un proceso, cuya magnitud, al ser comparada con algún nivel de referencia, puede señalar una desviación sobre la cual se toman acciones correctivas o preventivas según el caso.',
    },
    {
      termino: 'Proveedor',
      significado:
        'Persona, empresa u organización que vende o suministra algo, como bienes o equipos, a los clientes.',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'Aquel en el que se informa, resuelve cualquier duda, o se facilita información al cliente que lo requiere.',
    },
    {
      termino: '<i>SLA</i>',
      significado:
        'Acuerdo que define el nivel de servicio que se espera de un proveedor. Define cómo medir el servicio, así como las soluciones o sanciones en caso de que no se alcancen los niveles de calidad acordados.',
    },
    {
      termino: 'Revaluación',
      significado:
        'Proceso o acto de juzgar o calcular la calidad, la importancia, la cantidad o el valor de algo, luego de haber efectuado una primera evaluación, bien sea por la empresa o por un tercero.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anaya, J. (2019). <i>Logística integral: la gestión operativa de la empresa</i>. ESIC Editorial.',
    },
    {
      referencia:
        'Claret, O. y Arciniegas, J. (2015). <i>Sistemas de gestión de calidad</i>. Ecoe Ediciones.',
      link: 'https://bit.ly/3eBfvPd.',
    },
    {
      referencia:
        'Delmonte, P (2020). <i>Acuerdos de nivel de servicio. Un enfoque práctico</i>. Independently Published.',
    },
    {
      referencia:
        'Juran, J., Gryna, F. y Bingham, R. (2021). <i>Manual de control de calidad</i>. McGraw Hill.',
    },
    {
      referencia:
        'Presidencia de la República (1971, 27 de marzo). <i>Decreto 410 de 1971, “por el cual se expide el Código de Comercio”</i> (última actualización, 31 de agosto de 2022). D. O. 52143.',
      link: 'https://bit.ly/3T8grcP.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
