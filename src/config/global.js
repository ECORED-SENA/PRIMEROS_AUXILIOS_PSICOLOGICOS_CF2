export default {
  global: {
    componenteFormativo: 'Ruta de atención de primeros auxilios psicológicos',
    descripcionCurso:
      'Los primeros auxilios psicológicos son una herramienta práctica y científica y su validez depende de la correcta aplicación, seguimiento del paso a paso y disposición de quien los aplica, por esto es importante saber cómo abordar la herramienta y los protocolos existentes para desarrollar las habilidades y adoptar estrategias en la intervención necesaria y prestar ayuda pertinente y responsable.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Valoración y activación de ruta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Protocolo de ACERCARSE',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Etapas',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estrategias de manejo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Adversidad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Afrontamiento',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Técnicas de respiración',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Psicoeducación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Aspectos clave para la orientación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Abordaje y metodologías',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Familia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de familia',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Factores de riesgo',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Factores protectores',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Violencia intrafamiliar',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Activación de rutas de atención',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'PAP en familias',
            hash: 't_4_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Erausquin, C., Denegri, A., y Michele J. (2014). Estrategias y modalidades de intervención psicoeducativa: historia y perspectivas en el análisis y construcción de prácticas y discursos. Material Didáctico Sistematizado. Aacademica.org',
      link: 'https://www.aacademica.org/cristina.erausquin/195.pdf',
    },
    {
      referencia:
        'Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja. (2003). Apoyo psicológico basado en la comunidad. Hhri.org',
      link:
        'https://www.hhri.org/wp-content/uploads/2020/12/Apoyo-psicolo%CC%81gico-basado-en-la-comunidad.pdf',
    },
    {
      referencia:
        'García, P., T., Ruiz, V., D., Salinero, M., J., y Vicario, M., A. (2019). Valoración de la condición física e intervención en accidentes. Grupo Aran. ',
      link:
        'https://ediciones.grupoaran.com/upload/books/muestras/libros/LIBTRAS013.pdf',
    },
    {
      referencia:
        'Hernández, M., I. E., y Gutiérrez L., L. P. (2014). Manual de primeros auxilios psicológicos. Universidad de Guadalajara - Centro Universitarios de Ciencias de la Salud. ',
      link:
        'https://www.cucs.udg.mx/sites/default/files/adjuntos/manual_primeros_auxilios_psicologicos_2017.pdf',
    },
    {
      referencia:
        'Leal, C., S. M. (2021). Respiración tipo agua. [Video]. YouTube.',
      link: 'https://youtu.be/vCT32vJJTL0',
    },
    {
      referencia:
        'Leal, C., S. M. (2021). Respiración tipo whisky. [Video]. YouTube.',
      link: 'https://youtu.be/CgEOn_o-FsY',
    },
    {
      referencia:
        'Llavona, L. M., y Méndez, C., F. X. (2015). Manual del psicólogo de familia. Ediciones Pirámide. ',
      link:
        'http://www.biblioteca.cij.gob.mx/Archivos/Materiales_de_consulta/Drogas_de_Abuso/Articulos/LIBROManualdelPsic%C3%B3logodeFamilia.pdf',
    },
    {
      referencia:
        'Macías, M. A., Madariaga Orozco, C., Valle, M., y Zambrano, J. (2013). Estrategias de afrontamiento individual y familiar frente a situaciones de estrés psicológico. Psicología desde el Caribe, 30(1), 123-145. Redalyc.',
      link: 'https://www.redalyc.org/pdf/213/21328600007.pdf',
    },
    {
      referencia:
        'Vázquez, V., M., y Crespo, L., J. M. (2018). Estrategias de afrontamiento. Psicosocial.net.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Afrontamiento',
      significado:
        'en psicología, el afrontamiento ha sido definido como un conjunto de estrategias cognitivas y conductuales que la persona utiliza para gestionar demandas internas o externas que sean percibidas como excesivas para los recursos del individuo Se puede considerar como una respuesta adaptativa, de cada uno, para reducir el estrés que deriva de una situación vista como difícil de afrontar.',
    },
    {
      termino: 'Emergencia',
      significado:
        'cualquier suceso capaz de afectar el funcionamiento cotidiano de una comunidad, pudiendo generar víctimas o daños materiales, afectando la estructura social y económica de la comunidad involucrada y que puede ser atendido eficazmente con los recursos propios de los organismos de atención primaria o de emergencias de la localidad.',
    },
    {
      termino: 'Familia',
      significado:
        'grupo de personas unidas por el parentesco. Esta unión se puede conformar por vínculos consanguíneos o por un vínculo constituido y reconocido legal y socialmente, como es el matrimonio o la adopción.',
    },
    {
      termino: 'Inteligencia emocional',
      significado:
        'constructo que ayuda a entender de qué manera podemos influir de un modo adaptativo e inteligente tanto sobre nuestras emociones como en nuestra interpretación de los estados emocionales de los demás.',
    },
    {
      termino: 'Pánico',
      significado:
        'miedo exagerado, que escapa de lo racional y que paraliza a la persona.',
    },
    {
      termino: 'Violencia de género',
      significado:
        'cualquier acción o conducta que se desarrolle a partir de las relaciones de ​poder asimétricas basadas en el género, que sobrevaloran lo relacionado con lo masculino y subvaloran lo relacionado con lo femenino.',
    },
  ],
  complementario: [
    {
      texto:
        'Espinoza, A., J. S., y Toro, V., M. P. (2019). Primeros auxilios psicológicos para la intervención en víctimas de desastres naturales. Base de datos EBSCO Sena.',
      tipo: 'Artículo',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=fap&AN=140758663&lang=es&site=ehost-live',
    },
    {
      texto:
        'García, C., J., Petkova, S., E., y Prieto, P., L. (2015). Manual básico de primeros auxilios. Base de datos eLibro Sena. ',
      tipo: 'Ebook',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/100536?page=132',
    },
    {
      texto:
        'Macías, M. A., Madariaga Orozco, C., Valle, M., y Zambrano, J. (2013). Estrategias de afrontamiento individual y familiar frente a situaciones de estrés psicológico.Psicología desde el Caribe, 30(1), 123-145. Redalyc.',
      tipo: 'PDF',
      descarga: 'downloads/Estrategia_afrontamiento_individual.pdf',
    },
    {
      texto:
        'Mariano, C., M. (2017). Técnicas para el control de la activación: relajación y respiración. Facultad de Psicología Universidad de Valencia. ',
      tipo: 'Página web',
      descarga: ['/downloads/RelajacionRespiracion.pdf'],
    },
    {
      texto:
        'Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja. (2003). Apoyo psicológico basado en la comunidad. Hhri.org.',
      tipo: 'PDF',
      descarga: 'downloads/Apoyo-psicoloogico-basado-en-la-comunidad.pdf',
    },
    {
      texto:
        'Llavona, U., L. M., y Méndez, C., F. X. (2012). Manual del psicólogo de familia. Ediciones Pirámide.',
      tipo: 'PDF',
      link:
        'http://www.biblioteca.cij.gob.mx/Archivos/Materiales_de_consulta/Drogas_de_Abuso/Articulos/LIBROManualdelPsic%C3%B3logodeFamilia.pdf',
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
      {
        nombre: 'Sonia Margarita Leal Cruz',
        cargo: 'Experta técnica',
        centro:
          'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital',
      },
      {
        nombre: 'Giovanna Andrea Escobar Ospina',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuly Marcela Gómez Tarazona',
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
