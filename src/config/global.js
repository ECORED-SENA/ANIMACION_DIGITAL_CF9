export default {
  global: {
    componenteFormativo: 'Producto final',
    descripcionCurso:
      'El estudio de este componente afianzará al aprendiz en el proceso de postproducción de animaciones y productos audiovisuales, así mismo, le aportará elementos conceptuales y operativos del manejo y aplicación de herramientas técnicas: formatos de exportación, resolución de pantalla, aspect ratio, configuración de plataformas de distribución, renderizado, entre otras.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'La composición digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de composición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Reglas de la composición digital',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Técnicas de composición',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Software de composición',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Edición de audio y vídeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Edición de video',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Edición de audio',
            hash: 't_2_2',
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
        'Armenteros, M. (2011). <em>Composición digital</em>. EB Archivos.',
      link: '',
    },
    {
      referencia:
        'Cámara, S. (2006). <em>El dibujo animado.</em> Parramón Ediciones, S.A.',
      link: '',
    },
    {
      referencia:
        'Fernández, F. y Martínez, J. (1999). <em>Manual básico de lenguaje audiovisual y narrativa audiovisual</em>. Paidós.',
      link: '',
    },
    {
      referencia:
        'Flórez, H. M. (2019). <em>Narrativa visual: Layout y composición como un storytelling</em>. Universidad Mayor.',
      link: '',
    },
    {
      referencia: 'La Escala de Planos. (2010). Universitat de Valencia. ',
      link: 'https://www.uv.es/asamar4/exelearning/24_la_escala_de_planos.html',
    },
    {
      referencia:
        'Marqués, P. (1995). <em>Introducción al lenguaje audiovisual.</em>',
      link: 'http://peremarques.pangea.org/avmulti.htm#av',
    },
    {
      referencia:
        'Millerson, G. (1983). <em>Técnicas de Realización y Producción en televisión</em>. IORTV.',
      link: '',
    },
    {
      referencia:
        'Racionero, A. (2008). <em>El lenguaje cinematográfico</em>. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Sánchez, J. (2016). <em>>nálisis de la composición digital para la realización de efectos digitales en los casos de The Martian (2015) y Mad Max: Fury Road (2015.)</em> Universidad Politécnica de Valencia.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Composición',
      significado:
        'Creación de productos a partir de manipular y combinar elementos de diferentes fuentes o herramientas digitales, con el fin de generar piezas homogéneas que transmitan la sensación de unidad.',
    },
    {
      termino: 'Campo',
      significado:
        'Es el espacio definido por el ángulo de visión de la cámara y, por lo tanto, es el que contiene todos los elementos que comprende el encuadre. En el campo se identifica todo aquello que aparece en el cuadro, todo lo que vemos y escuchamos en pantalla.',
    },
    {
      termino: 'Diseño de sonido',
      significado:
        'Consiste en la creación de todo el ambiente sonoro para un medio audiovisual ya sea cine, tv, web-streaming.',
    },
    {
      termino: 'Encuadre ',
      significado:
        'Son todos los elementos capturados por el ángulo de visión del objetivo de la cámara y que, en consecuencia, son el contenido del campo. Está delimitado por sus cuatro lados; el fondo más el límite de la cámara. En otras palabras es el lienzo de trabajo.',
    },
    {
      termino: 'Narrativa audiovisual',
      significado:
        'Las imágenes en movimiento, asumen el espacio en dos dimensiones y componen la realidad mediante encuadres o planos fijos y puntos de vista o ángulos de visión.',
    },
    {
      termino: 'Reglas de la composición',
      significado:
        'Conjunto de directrices orientadas a conservar cierta perspectiva con la manera en que se produce la visión humana y que, aplicadas a la composición, producen mejores resultados',
    },
    {
      termino: '<em>Software</em> de composición por nodos',
      significado:
        'La distribución de los elementos del programa es parecida; existe un visor y un panel de propiedades, pero la línea de tiempos con nodos difiere bastante de la de las capas.',
    },
  ],
  complementario: [
    {
      texto: 'U-tad. (2021). ¿Sabes qué es la Composición Digital? ',
      tipo: 'Página Web',
      link: 'https://u-tad.com/sabes-la-composicion-digital/',
    },
    {
      texto:
        'Cortés, J. (2021). Rompiendo las reglas de la Composición. Notodoanimacion. ',
      tipo: 'Página web',
      link:
        'https://www.notodoanimacion.es/rompiendo-las-reglas-de-la-composicion/',
    },
    {
      texto:
        'La ciencia del cine (2020). Reglas de Composición Cinematográficas. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=t5MPOqnt60U',
    },
    {
      texto:
        'Ávila, L. (2017). Técnicas y principios de composición fotográfica en cine y series. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=I7sS54EIEAg',
    },
    {
      texto:
        'notodoanimacion (2020). Técnicas de Composición Digital para VFX ❤️ Masterclass ONLINE. [Video].',
      tipo: 'Video',
      link: 'https://youtu.be/-XlIcITJbOU',
    },
    {
      texto:
        'Pueyo, A. (2020). Webinar: Técnicas de Composición Digital. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SxDTwFLq7Fk',
    },
    {
      texto:
        'Cortés, J. (2021). Los 8 Mejores Programas de Composición Digital. [Web log post]. Notodoanimacion. ',
      tipo: 'Pagina web',
      link:
        'https://digitalsynopsis.com/design/cinema-palettes-famous-movie-colors/',
    },
    {
      texto:
        'Notodoanimacion. (2019). Tutoriales Digital Matte Painting – El Arte de Jaime Jasso. [Web log post]. ',
      tipo: 'Blog ',
      link:
        'https://www.notodoanimacion.es/tutoriales/tutoriales-de-matte-painting/',
    },
    {
      texto:
        'Hoy Grabo (2019). Diseño de sonido para audiovisuales: qué es y cómo se hace. [Video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CkiPtW8IZT0',
    },
    {
      texto: 'Treintaycinco. (s.f.). Talent Makers 35mm.',
      tipo: 'Página web',
      link: 'https://35mm.es/fases-etapas-postproduccion-audio/',
    },
    {
      texto:
        'Valerga, A. (2020). Los mejores programas de edición de audio. [Web log post]. Crehana.',
      tipo: 'Blog',
      link:
        'https://www.crehana.com/pe/blog/video/mejores-programas-edicion-audio/#grg-band',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Paulo César Hernández',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capita',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
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
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
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
