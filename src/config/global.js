export default {
  global: {
    componenteFormativo:
      'Alistamiento de equipos e instrumentos de transformación del grano',
    descripcionCurso:
      'En este componente formativo se profundiza en la legislación aplicable a la industria cacaotera, en la historia de la producción de cacao en el país y en las diferentes variaciones de producción que se practican de acuerdo con los subproductos esperados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/float-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/float-6.png'),
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
        titulo: 'Marco normativo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cacao',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Beneficio',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Criterios de calidad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Equipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Unidades de medida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Variables de proceso',
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
      tema: 'Marco normativo',
      referencia:
        'Benítez, N. <em>(2020). Normatividad en seguridad y salud en el trabajo Colombia</em> - Revista FSL. Seguridad Laboral.',
      tipo: 'Artículo',
      link:
        'https://www.seguridad-laboral.es/sl-latam/colombia/normatividad-en-seguridad-y-salud-en-el-trabajo-2019-2020-colombia_20200630.html',
    },
    {
      tema: 'Cacao',
      referencia:
        'Mejía, Castro, Carvajal et al., (2017) <em>Agroindustria del Cacao.</em> Sistema de Investigación, Desarrollo Tecnológico e Innovación. SENA.',
      tipo: 'Documento',
      link:
        'https://repositorio-sena-edu-co.bdigital.sena.edu.co/bitstream/handle/11404/5241/agroindustria_cacao.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Equipos',
      referencia:
        'IICA Guatemala. 2020. <em>Maquinaria de proceso de cacao a chocolate y subproductos.</em> Salón Cacao. Guatemala. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UQxeItWqwS8',
    },
    {
      tema: 'Variables del Proceso',
      referencia:
        'Ángel, J. (2021). <em>Como es la transformación de cacao orgánico en chocolate.</em> TvAgro. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BVMfwgXAcZs',
    },
    {
      tema: 'Mediciones',
      referencia:
        'Aguilar, Héctor. (2016). <em>Manual para la Evaluación de la Calidad del Grano de Cacao</em>',
      tipo: 'Documento',
      link:
        'http://www.fhia.org.hn/descargas/Proyecto_de_Cacao_SECO/Manual_para_la_Evaluacion_de_la_Calidad_del_Grano_de_Cacao.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Calidad de alimento',
      significado:
        'Conjunto de cualidades que son aceptadas o valoradas por el consumidor.',
    },
    {
      termino: 'Cochado',
      significado:
        'Es el proceso por el cual se extrae la acidez y los sabores indeseados al chocolate.',
    },
    {
      termino: 'Maquinaria artesanal',
      significado:
        'Es la empleada en la transformación del cacao a escala local.',
    },
    {
      termino: 'Maquinaria industrial',
      significado:
        'Es la maquinaria empleada en los procesos de transformación del cacao a una escala más industrial en la que se procesan grandes cantidades de materias primas.',
    },
    {
      termino: 'Premolienda',
      significado:
        'Es la actividad realizada para la obtención de la pasta de cacao con tamaños finales de aproximadamente 140 micras.',
    },
    {
      termino: 'Propiedades Organolépticas',
      significado:
        'Color, sabor, olor y textura. Estas son las cuatro propiedades organolépticas principales de los alimentos. Se trata de características que se perciben a través de los sentidos (gusto, vista, olfato y tacto) y que en algunos alimentos están mucho más presentes que en otros.',
    },
    {
      termino: 'Refinado de cacao',
      significado:
        'Proceso por medio del cual se refina el cacao para que se obtenga un contenido mínimo de grasa de 28 al 30% en la mezcla.',
    },
    {
      termino: 'Rompedor de cacao',
      significado:
        'Es una máquina empleada para romper el grano sin llegar a pulverizar.',
    },
    {
      termino: 'SST',
      significado: 'Seguridad y salud en el trabajo.',
    },
    {
      termino: 'Tostión',
      significado:
        'Es el proceso de secado a través de la adicción de calor por medio de una máquina industrial artesanal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, H. (2016). <em>Manual Para la Evaluación de la Calidad del Grano de Cacao.</em> Fundación Hondureña de Investigación Agrícola. Honduras.',
      link:
        'http://www.fhia.org.hn/descargas/Proyecto_de_Cacao_SECO/Manual_para_la_Evaluacion_de_la_Calidad_del_Grano_de_Cacao.pdf',
    },
    {
      referencia:
        'Agronet. (2022). <em>Precio de Referencia Semanal de Compra de Cacao</em> - Fuente Industria - FEDECACAO - Exportadores. Ministerio de Agricultura y Desarrollo Rural.',
      link:
        'https://www.agronet.gov.co/Noticias/Paginas/Precio-de-referencia-semanal-de-compra-de-cacao---Fuente-Industria.aspx',
    },
    {
      referencia:
        'Bayona, E. (2021). <em>Desarrollo de la Medición en el Ámbito del Cultivo del Cacao.</em> Universidad Santo Tomas. Ocaña - Norte de Santander.',
      link:
        'https://repository.usta.edu.co/bitstream/handle/11634/33509/2021ErmidesBayonaSalazar.pdf?sequence=2&isAllowed=y',
    },
    {
      referencia:
        'Campos, G. (2020). <em>Normatividad en Seguridad y Salud en el Trabajo, 2019- 2020.</em> Colombia.',
      link:
        'https://www.seguridad-laboral.es/sl-latam/colombia/normatividad-en-seguridad-y-salud-en-el-trabajo-2019-2020-colombia_20200630.html',
    },
    {
      referencia:
        'De La Cruz, j. (s.f.) <em>Cacao Operaciones Poscosecha.</em> Organización de las Naciones Unidas para la Alimentación y la Agricultura FAO. México.',
      link: 'https://www.fao.org/3/au995s/au995s.pdf',
    },
    {
      referencia:
        'Federación Nacional de Cacaoteros FEDECACAO. (2022). <em>Marco Jurídico.</em>',
      link: 'https://www.fedecacao.com.co/marcojuridico',
    },
    {
      referencia:
        'Rodríguez, J. (2018). Cacao, <em>La Historia Detrás del “Alimento de Dioses”. Viva El Cacao.</em> Venezuela.',
      link: 'https://vivaelcacao.com/historia-del-cacao/',
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
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Karly Julieth Cediel Martínez',
        cargo: 'Experta temática',
        centro:
          'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Zvi Daniel Grosman Landáez',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Diseño y desarrollo de recursos educativos',
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
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
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
