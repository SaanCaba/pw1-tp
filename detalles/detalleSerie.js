const contenido = [
  {
    nombre: "Cobra Kai",
    temporadas: 5,
    capitulosPorTemporada: {
      1: 10,
      2: 10,
      3: 10,
      4: 10,
      5: 10,
    },
    genero: "Comedia",
    critica: "Excelente",
    actores: [
      {
        nombre: "Ralph Macchio, ",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Ralph_Macchio",
      },
      {
        nombre: "William Zabka",
        wikipediaUrl: "https://es.wikipedia.org/wiki/William_Zabka",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/E1oFbI8Ic08",
    resumen: `Electrizante continuación de Karate Kid, explorando rivalidades renovadas
              entre Daniel LaRusso y Johnny Lawrence,
              fusionando acción, nostalgia y redención.`,
  },
  {
    nombre: "Halo",
    temporadas: 2,
    capitulosPorTemporada: {
      1: 9,
      2: 8,
    },
    genero: "Ciencia ficción",
    critica: "Excelente",
    actores: [
      {
        nombre: "Pablo Schreiber.",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Pablo_Schreiber",
      },
    ],
    youtubeVideo: "https://youtu.be/5mcO5WiBmxM?si=fFqtyh1mrOvxsEM3",
    resumen: `Una de las franquicias más populares del mundo de los videojuegos. La historia se centra en un
              conflicto interestelar entre los humanos y alienígenas guiados por profetas obsesionados con una antigua
              especie conocida como los Forerunners.`,
  },
  {
    nombre: "Stranger Things",
    temporadas: 4,
    genero: "Ficción",
    capitulosPorTemporada: {
      1: 8,
      2: 9,
      3: 8,
      4: 9,
    },
    critica: "Excelente",
    actores: [
      {
        nombre: "Millie Bobby Brown",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Millie_Bobby_Brown",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/x7Yq9MJUqjY",
    resumen: `Emocionante serie sobre un grupo de amigos en los años 80 que enfrenta
              fenómenos sobrenaturales mientras buscan a un
              amigo desaparecido, tejiendo nostalgia, misterio y amistad.`,
  },
  {
    nombre: "Vikingos",
    temporadas: 6,
    capitulosPorTemporada: {
      1: 9,
      2: 10,
      3: 10,
      4: 20,
      5: 20,
      6: 20,
    },
    genero: "Histórica/Drama",
    critica: "Excelente",
    actores: [
      {
        nombre: "Travis Fimmel",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Travis_Fimmel",
      },
      {
        nombre: "Katheryn Winnick",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Katheryn_Winnick",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/uwA2BhtMz9M",
    resumen:
      "Vikingos sigue la vida de Ragnar Lothbrok, un legendario héroe nórdico. La serie combina hechos históricos con mitología nórdica, mostrando las incursiones, batallas y la cultura vikinga.",
  },
  {
    nombre: "Breaking Bad",
    temporadas: 5,
    capitulosPorTemporada: {
      1: 7,
      2: 13,
      3: 13,
      4: 13,
      5: 16,
    },
    genero: "Crimen/Drama",
    critica: "Excelente",
    actores: [
      {
        nombre: "Bryan Cranston",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Bryan_Cranston",
      },
      {
        nombre: "Aaron Paul",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Aaron_Paul",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/HhesaQXLuRY",
    resumen:
      "Breaking Bad cuenta la historia de Walter White, un profesor de química que se convierte en un fabricante de metanfetaminas tras ser diagnosticado con cáncer. La serie explora la transformación de Walter y las consecuencias de sus decisiones.",
  },
  {
    nombre: "Amor y muerte",
    temporadas: 1,
    capitulosPorTemporada: {
      1: 7,
    },
    genero: "Drama",
    critica: "Buena",
    actores: [
      {
        nombre: "Elizabeth Olsen",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Elizabeth_Olsen",
      },
      {
        nombre: "Jesse Plemons",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Jesse_Plemons",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/0NjTSRpIRlw",
    resumen:
      "Amor y muerte es una miniserie basada en hechos reales que sigue la historia de Candy Montgomery, una ama de casa que se ve envuelta en un asesinato en su comunidad tranquila. La serie explora las complejidades del crimen y las relaciones humanas.",
  },
  {
    nombre: "Outlander",
    temporadas: 6,
    capitulosPorTemporada: {
      1: 16,
      2: 13,
      3: 13,
      4: 13,
      5: 12,
      6: 8,
    },
    genero: "Drama/Fantasía",
    critica: "Excelente",
    actores: [
      {
        nombre: "Caitriona Balfe",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Caitriona_Balfe",
      },
      {
        nombre: "Sam Heughan",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Sam_Heughan",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/hlj2vW7js54",
    resumen:
      "Outlander sigue a Claire Randall, una enfermera de combate de la Segunda Guerra Mundial, que es misteriosamente transportada al año 1743. La serie combina historia, romance y fantasía mientras Claire navega su nueva vida en el pasado.",
  },
  {
    nombre: "El caso Asunta",
    temporadas: 1,
    capitulosPorTemporada: {
      1: 3,
    },
    genero: "Documental/Crimen",
    critica: "Buena",
    actores: [
      {
        nombre: "Narrador",
        wikipediaUrl: "",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/_6-ZAtSknNc",
    resumen:
      "El caso Asunta es una miniserie documental que examina el asesinato de Asunta Basterra Porto, una niña adoptada en España. La serie presenta entrevistas, recreaciones y análisis detallados del caso, explorando el impacto en la sociedad.",
  },
  {
    nombre: "El desorden que dejas",
    temporadas: 1,
    capitulosPorTemporada: {
      1: 8,
    },
    genero: "Drama/Thriller",
    critica: "Buena",
    actores: [
      {
        nombre: "Inma Cuesta",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Inma_Cuesta",
      },
      {
        nombre: "Bárbara Lennie",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Bárbara_Lennie",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/_7v9kp_FItk",
    resumen:
      "El desorden que dejas sigue a Raquel, una profesora que comienza a trabajar en un instituto gallego, solo para descubrir que su predecesora murió en circunstancias misteriosas. La serie explora secretos, mentiras y la lucha de Raquel por descubrir la verdad.",
  },
  {
    nombre: "Machos alfa",
    temporadas: 1,
    capitulosPorTemporada: {
      1: 10,
    },
    genero: "Comedia",
    critica: "Buena",
    actores: [
      {
        nombre: "Gorka Otxoa",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Gorka_Otxoa",
      },
      {
        nombre: "Fele Martínez",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Fele_Martínez",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/C7MDxqJ0F2I",
    resumen:
      "Machos alfa es una comedia que sigue a un grupo de amigos en su lucha por adaptarse a un mundo en el que las mujeres están ganando más poder e independencia. La serie explora las inseguridades y la evolución de los roles de género con humor.",
  },
  {
    nombre: "Ozark",
    temporadas: 4,
    capitulosPorTemporada: {
      1: 10,
      2: 10,
      3: 10,
      4: 14,
    },
    genero: "Crimen/Drama",
    critica: "Excelente",
    actores: [
      {
        nombre: "Jason Bateman",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Jason_Bateman",
      },
      {
        nombre: "Laura Linney",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Laura_Linney",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/5hAXVqrljbs",
    resumen:
      "Ozark sigue a Marty Byrde, un asesor financiero que se ve obligado a trasladar a su familia a los Ozarks tras un fallo en un esquema de lavado de dinero. La serie explora los desafíos y peligros a los que se enfrentan mientras intentan sobrevivir en un mundo criminal.",
  },
  {
    nombre: "Los Simpson",
    temporadas: 34,
    capitulosPorTemporada: {
      22: 22,
      23: 22,
      24: 22,
      25: 22,
      26: 22,
      27: 22,
      28: 22,
      29: 21,
      30: 23,
      31: 22,
      32: 22,
      33: 22,
      34: 22,
    },
    genero: "Animación/Comedia",
    critica: "Excelente",
    actores: [
      {
        nombre: "Dan Castellaneta",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Dan_Castellaneta",
      },
      {
        nombre: "Nancy Cartwright",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Nancy_Cartwright",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/lCMAx6lQ3Ac",
    resumen:
      "Los Simpson es una serie animada que sigue las aventuras y desventuras de la familia Simpson en la ciudad de Springfield. Con su sátira social y humor ingenioso, la serie ha sido un pilar de la televisión durante más de tres décadas.",
  },
  {
    nombre: "Qué le pasó a lunes",
    temporadas: 1,
    capitulosPorTemporada: {
      1: 1,
    },
    genero: "Ciencia ficción/Thriller",
    critica: "Buena",
    actores: [
      {
        nombre: "Noomi Rapace",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Noomi_Rapace",
      },
      {
        nombre: "Glenn Close",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Glenn_Close",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/YjOVtZXEU9g",
    resumen:
      "En un futuro distópico con políticas de un solo hijo, siete hermanas idénticas deben evitar ser descubiertas mientras buscan a su hermana desaparecida. Una intensa exploración de la identidad y la supervivencia.",
  },
  {
    nombre: "The Walking Dead",
    temporadas: 11,
    capitulosPorTemporada: {
      1: 6,
      2: 13,
      3: 16,
      4: 16,
      5: 16,
      6: 16,
      7: 16,
      8: 16,
      9: 16,
      10: 22,
      11: 24,
    },
    genero: "Drama/Terror",
    critica: "Buena",
    actores: [
      {
        nombre: "Andrew Lincoln",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Andrew_Lincoln",
      },
      {
        nombre: "Norman Reedus",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Norman_Reedus",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/R1v0uFms68U",
    resumen:
      "The Walking Dead sigue a un grupo de supervivientes en un mundo post-apocalíptico plagado de zombis. La serie explora las luchas humanas, la moralidad y la supervivencia en circunstancias extremas.",
  },
  {
    nombre: "Todo el dinero",
    temporadas: 1,
    capitulosPorTemporada: {
      1: 1,
    },
    genero: "Drama",
    critica: "Buena",
    actores: [
      {
        nombre: "Michelle Williams",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Michelle_Williams",
      },
      {
        nombre: "Christopher Plummer",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Christopher_Plummer",
      },
    ],
    youtubeVideo: "",
    resumen:
      "Todo el dinero es una película que relata el secuestro del nieto de un magnate del petróleo y el intento desesperado de su madre por asegurar su liberación. La historia destaca la codicia y las relaciones familiares complejas.",
  },
  {
    nombre: "Suits",
    temporadas: 9,
    capitulosPorTemporada: {
      1: 12,
      2: 16,
      3: 16,
      4: 16,
      5: 16,
      6: 16,
      7: 16,
      8: 16,
      9: 10,
    },
    genero: "Drama/Legal",
    critica: "Excelente",
    actores: [
      {
        nombre: "Gabriel Macht",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Gabriel_Macht",
      },
      {
        nombre: "Patrick J. Adams",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Patrick_J._Adams",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/85z53bAebsI",
    resumen:
      "Suits sigue la historia de un talentoso joven sin título de abogado que se convierte en el asociado de uno de los mejores abogados de Manhattan. La serie mezcla drama legal con intriga personal y profesional.",
  },
  {
    nombre: "Dexter",
    temporadas: 8,
    capitulosPorTemporada: {
      1: 12,
      2: 12,
      3: 12,
      4: 12,
      5: 12,
      6: 12,
      7: 12,
      8: 12,
    },
    genero: "Crimen/Drama",
    critica: "Excelente",
    actores: [
      {
        nombre: "Michael C. Hall",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Michael_C._Hall",
      },
      {
        nombre: "Jennifer Carpenter",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Jennifer_Carpenter",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/YQeUmSD1c3g",
    resumen:
      "Dexter sigue la vida de Dexter Morgan, un forense especializado en análisis de salpicaduras de sangre que lleva una doble vida como asesino en serie. La serie explora temas de justicia, moralidad y la doble naturaleza del protagonista.",
  },
  {
    nombre: "Los protectores",
    temporadas: 1,
    capitulosPorTemporada: {
      1: 8,
    },
    genero: "Drama/Acción",
    critica: "Buena",
    actores: [
      {
        nombre: "Adrián Suar",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Adrián_Suar",
      },
      {
        nombre: "Gustavo Bermúdez",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Gustavo_Bermúdez",
      },
    ],
    youtubeVideo: "",
    resumen:
      "Los protectores es una serie que sigue a un grupo de guardaespaldas que deben proteger a sus clientes mientras enfrentan sus propios conflictos personales y profesionales. La serie combina drama y acción con toques de humor.",
  },
  {
    nombre: "Dark",
    temporadas: 3,
    capitulosPorTemporada: {
      1: 10,
      2: 8,
      3: 8,
    },
    genero: "Ciencia ficción/Thriller",
    critica: "Excelente",
    actores: [
      {
        nombre: "Louis Hofmann",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Louis_Hofmann",
      },
      {
        nombre: "Lisa Vicari",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Lisa_Vicari",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/rrwycJ08PSA",
    resumen:
      "Dark es una serie de ciencia ficción que sigue a cuatro familias en una pequeña ciudad alemana mientras desentrañan un enigma que abarca tres generaciones. La serie explora el tiempo, los secretos y las consecuencias de las acciones humanas.",
  },
  {
    nombre: "Modern Family",
    temporadas: 11,
    capitulosPorTemporada: {
      1: 24,
      2: 24,
      3: 24,
      4: 24,
      5: 24,
      6: 24,
      7: 22,
      8: 22,
      9: 22,
      10: 22,
      11: 18,
    },
    genero: "Comedia",
    critica: "Excelente",
    actores: [
      {
        nombre: "Ed O'Neill",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Ed_O%27Neill",
      },
      {
        nombre: "Sofía Vergara",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Sofía_Vergara",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/X6FGeM6h-EA",
    resumen:
      "Modern Family es una comedia que sigue la vida de tres familias interconectadas mientras navegan los desafíos y alegrías de la vida moderna. Con un formato de falso documental, la serie ofrece una mirada humorística y sincera a la familia.",
  },
  {
    nombre: "Un cuento perfecto",
    temporadas: 1,
    capitulosPorTemporada: {
      1: 5,
    },
    genero: "Romance/Drama",
    critica: "Buena",
    actores: [
      {
        nombre: "Anna Castillo",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Anna_Castillo",
      },
      {
        nombre: "Álvaro Mel",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Álvaro_Mel",
      },
    ],
    youtubeVideo: "",
    resumen:
      "Un cuento perfecto es una miniserie romántica que sigue la historia de dos personas de mundos diferentes que se encuentran y se ayudan mutuamente a descubrir el verdadero significado del amor y la felicidad.",
  },
  {
    nombre: "Death Note",
    temporadas: 1,
    capitulosPorTemporada: {
      1: 37,
    },
    genero: "Thriller psicológico",
    critica: "Excelente",
    actores: [
      {
        nombre: "Mamoru Miyano",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Mamoru_Miyano",
      },
      {
        nombre: "Kappei Yamaguchi",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Kappei_Yamaguchi",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/0R6VTQesQTQ",
    resumen:
      "Death Note sigue la historia de Light Yagami, un estudiante prodigio que encuentra un cuaderno sobrenatural llamado Death Note. El cuaderno le permite matar a cualquier persona cuyo nombre escriba en él, lo que desencadena una serie de eventos donde Light intenta limpiar el mundo de criminales, mientras es perseguido por un brillante detective conocido como L.",
  },
  {
    nombre: "Hacks",
    temporadas: 2,
    capitulosPorTemporada: {
      1: 10,
      2: 8,
    },
    genero: "Comedia",
    critica: "Excelente",
    actores: [
      {
        nombre: "Jean Smart",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Jean_Smart",
      },
      {
        nombre: "Hannah Einbinder",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Hannah_Einbinder",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/1-y78RVn7Xw",
    resumen:
      "Hacks explora la compleja relación profesional entre una legendaria comediante de Las Vegas y una joven escritora en apuros. La serie ofrece una mirada incisiva y humorística a la industria del entretenimiento.",
  },
  {
    nombre: "Orange Is the New Black",
    temporadas: 7,
    capitulosPorTemporada: {
      1: 13,
      2: 13,
      3: 13,
      4: 13,
      5: 13,
      6: 13,
      7: 13,
    },
    genero: "Drama",
    critica: "Excelente",
    actores: [
      {
        nombre: "Taylor Schilling",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Taylor_Schilling",
      },
      {
        nombre: "Laura Prepon",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Laura_Prepon",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/vY0qzXi5oJg",
    resumen:
      "Orange Is the New Black sigue la vida de Piper Chapman y otras reclusas en una prisión federal de mujeres. La serie aborda temas de justicia, identidad y resiliencia con una mezcla de drama y humor.",
  },
  {
    nombre: "Friends",
    temporadas: 10,
    capitulosPorTemporada: {
      1: 24,
      2: 24,
      3: 25,
      4: 24,
      5: 24,
      6: 25,
      7: 24,
      8: 24,
      9: 24,
      10: 18,
    },
    genero: "Comedia",
    critica: "Excelente",
    actores: [
      {
        nombre: "Jennifer Aniston",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Jennifer_Aniston",
      },
      {
        nombre: "Courteney Cox",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Courteney_Cox",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/hDNNmeeJs1Q",
    resumen:
      "Friends sigue las vidas y las relaciones de seis amigos que viven en Nueva York. La serie, con su humor icónico y personajes entrañables, se ha convertido en un clásico de la televisión.",
  },
  {
    nombre: "Another",
    temporadas: 1,
    capitulosPorTemporada: {
      1: 12,
    },
    genero: "Animación/Terror",
    critica: "Buena",
    actores: [
      {
        nombre: "Atsushi Abe",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Atsushi_Abe",
      },
      {
        nombre: "Natsumi Takamori",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Natsumi_Takamori",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/AK7Y8hTge5A",
    resumen:
      "Another es una serie de terror que sigue a un estudiante transferido que descubre un oscuro secreto sobre su nueva clase. La serie combina elementos de misterio y horror psicológico.",
  },
  {
    nombre: "Futurama",
    temporadas: 7,
    capitulosPorTemporada: {
      1: 9,
      2: 20,
      3: 15,
      4: 12,
      5: 16,
      6: 26,
      7: 26,
    },
    genero: "Animación/Comedia",
    critica: "Excelente",
    actores: [
      {
        nombre: "Billy West",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Billy_West",
      },
      {
        nombre: "Katey Sagal",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Katey_Sagal",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/-3X4_p3yAC8",
    resumen:
      "Futurama sigue las aventuras de un repartidor de pizza congelado criogénicamente que se despierta mil años en el futuro. La serie ofrece una mezcla de comedia, ciencia ficción y sátira social.",
  },
  {
    nombre: "Bridgerton",
    temporadas: 2,
    capitulosPorTemporada: {
      1: 8,
      2: 8,
    },
    genero: "Drama/Romance",
    critica: "Excelente",
    actores: [
      {
        nombre: "Phoebe Dynevor",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Phoebe_Dynevor",
      },
      {
        nombre: "Regé-Jean Page",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Regé-Jean_Page",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/gpv7ayf_tyE",
    resumen:
      "Bridgerton sigue a la influyente familia Bridgerton en la alta sociedad londinense durante la Regencia. La serie mezcla romance, escándalo y la lucha por el estatus social.",
  },
  {
    nombre: "Shadowhunters",
    temporadas: 3,
    capitulosPorTemporada: {
      1: 13,
      2: 20,
      3: 22,
    },
    genero: "Fantasía/Drama",
    critica: "Buena",
    actores: [
      {
        nombre: "Katherine McNamara",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Katherine_McNamara",
      },
      {
        nombre: "Dominic Sherwood",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Dominic_Sherwood",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/PF8CPQiY-Jc",
    resumen:
      "Shadowhunters sigue la vida de Clary Fray, una joven que descubre que es una cazadora de sombras, seres humanos nacidos con sangre de ángel que protegen al mundo de los demonios.",
  },
  {
    nombre: "Dr. House",
    temporadas: 8,
    capitulosPorTemporada: {
      1: 22,
      2: 24,
      3: 24,
      4: 16,
      5: 24,
      6: 21,
      7: 23,
      8: 22,
    },
    genero: "Drama/Médico",
    critica: "Excelente",
    actores: [
      {
        nombre: "Hugh Laurie",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Hugh_Laurie",
      },
      {
        nombre: "Lisa Edelstein",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Lisa_Edelstein",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/V8g6N6k2oLQ",
    resumen:
      "Dr. House sigue la vida del brillante pero irascible Dr. Gregory House, un médico especializado en diagnósticos complejos. La serie combina drama médico con elementos de misterio y caracterización profunda.",
  },
  {
    nombre: "King the Land",
    temporadas: 1,
    capitulosPorTemporada: {
      1: 16,
    },
    genero: "Romance/Comedia",
    critica: "Buena",
    actores: [
      {
        nombre: "Lee Jun-ho",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Lee_Jun-ho",
      },
      {
        nombre: "Im Yoon-ah",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Im_Yoon-ah",
      },
    ],
    youtubeVideo: "",
    resumen:
      "King the Land es una serie de comedia romántica que sigue a un heredero de un conglomerado hotelero y una empleada que trabaja en el mismo hotel. La serie explora su relación mientras navegan las complejidades de la vida profesional y personal.",
  },
];

const contenidoSimilar = [
  {
    href: "?name=Cobra Kai",
    imgSrc: "../fotos-peliculas/cobra-kai.jpg",
    alt: "Cobra kai",
  },
  {
    href: "?name=Halo",
    imgSrc:
      "https://img.asmedia.epimg.net/resizer/v2/6PXBCBWCGRO2HI7NANOQVLNXA4.jpg?auth=528802000750e1c6bc05a5ce80b4c17f52e3018e2c7a4ca0213ca0b1479f67c6&width=1472&height=828&smart=true",
    alt: "halo",
  },
  {
    href: "?name=Stranger Things",
    imgSrc: "../fotos-peliculas/Stranger_Things.png",
    alt: "Stranger Things",
  },
  {
    href: "?name=Vikings",
    imgSrc: "../fotos-peliculas/vikings.webp",
    alt: "Vikings",
  },
  {
    href: "?name=Breaking Bad",
    imgSrc: "../fotos-peliculas/breaking_bad.jpg",
    alt: "Breaking Bad",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  var query = window.location.search;
  var urlParams = new URLSearchParams(query);
  var peliNombre = urlParams.get("name");

  mostrarDetalle(peliNombre);
  mostrarContenidoSimilar();
  completarTemporadas(peliNombre);
});

const miBotonL = document.getElementById("left-btn");
const miBotonR = document.getElementById("right-btn");

miBotonL.addEventListener("click", function () {
  const ulSimContent = document.getElementById("similar-content");

  ulSimContent.style.transform = `translateX(${0}%)`;
});

miBotonR.addEventListener("click", function () {
  // alert('¡Has hecho clic en el botón!');
  const ulSimContent = document.getElementById("similar-content");

  ulSimContent.style.transform = `translateX(-${50}%)`;
});

const optionTemporadas = document.getElementById("option-temporadas");

function mostrarDetalle(name) {
  for (let i = 0; i < contenido.length; i++) {
    if (name === contenido[i].nombre) {
      const iframe = document.getElementById("iframe-trailer");
      const titulo = document.getElementById("titulo");
      // const temporadas = document.getElementById("temporadas")
      const genero = document.getElementById("genero");
      const critica = document.getElementById("critica");
      const resumen = document.getElementById("resumen");
      const actoresDiv = document.getElementById("actores");
      iframe.src = contenido[i].youtubeVideo;
      titulo.textContent = "Titulo: " + contenido[i].nombre;
      // temporadas.textContent = "Temporadas: " + contenido[i].temporadas
      genero.textContent = "Género: " + contenido[i].genero;
      critica.textContent = "Crítica: " + contenido[i].critica;
      resumen.textContent = contenido[i].resumen;

      const h3Actores = document.createElement("h3");

      h3Actores.innerHTML = "Actores";

      actoresDiv.appendChild(h3Actores);

      for (let j = 0; j < contenido[i].actores.length; j++) {
        const aWikiActor = document.createElement("a");
        aWikiActor.href = contenido[i].actores[j].wikipediaUrl;
        aWikiActor.textContent = contenido[i].actores[j].nombre;
        aWikiActor.target = "_blank";
        actoresDiv.appendChild(aWikiActor);
      }

      const aYoutubeTrailer = document.createElement("a");
      aYoutubeTrailer.href = contenido[i].youtubeVideo;
      aYoutubeTrailer.target = "_blank";
      const aButton = document.createElement("button");
      aButton.textContent = "Comenzar";
      aButton.classList.add("button-start");
      aYoutubeTrailer.appendChild(aButton);

      const sectionInfo = document.getElementById("section-info");
      sectionInfo.appendChild(aYoutubeTrailer);
    }
  }
}

function mostrarContenidoSimilar() {
  const contenidoSimilarUl = document.getElementById("similar-content");

  for (let i = 0; i < contenidoSimilar.length; i++) {
    const li = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.href = contenidoSimilar[i].href;
    const img = document.createElement("img");
    img.src = contenidoSimilar[i].imgSrc;
    img.alt = contenidoSimilar[i].alt;

    aTag.appendChild(img);
    li.appendChild(aTag);

    contenidoSimilarUl.appendChild(li);
  }
}

function completarTemporadas(nombrePeli) {
  let serie;
  for (let i = 0; i < contenido.length; i++) {
    if (contenido[i].nombre === nombrePeli) {
      serie = contenido[i];
    }
  }
  const selectTemporadas = document.getElementById("selectTemporadas");
  let i = 1;
  while (serie.temporadas >= i) {
    const option = document.createElement("option");
    option.textContent = i;
    option.id = "option-temporadas";
    selectTemporadas.appendChild(option);
    // option.addEventListener('click', function(){
    // console.log("123")
    // })
    i++;
  }

  selectTemporadas.addEventListener("change", function () {
    const temporadaSeleccionada = selectTemporadas.value;
    console.log(`Seleccionaste la temporada ${temporadaSeleccionada}`);
    completarCapitulos(serie, temporadaSeleccionada);
    // Aquí puedes hacer lo que necesites con la temporada seleccionada
  });
}

function completarCapitulos(serie, temporada) {
  const selectCapitulos = document.getElementById("selectCapitulos");
  selectCapitulos.innerHTML = "";
  let i = 1;
  const capitulos = serie.capitulosPorTemporada[temporada];
  while (capitulos >= i) {
    const option = document.createElement("option");
    option.textContent = i;
    option.id = "option-capitulos";
    selectCapitulos.appendChild(option);
    i++;
  }
}
