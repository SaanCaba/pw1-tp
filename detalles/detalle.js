const contenido = [
  {
    nombre: "Planeta de los simios",
    duracion: "1 Horas 57 minutos",
    genero: "Drama",
    critica: "Excelente",
    actores: [
      {
        nombre: "Andy Serkis",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Andy_Serkis",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/raYE6Ild7a4",
    resumen:
      "Sumérgete en la épica saga de El Planeta de los Simios. Explora la luchaentre humanos y simios por el dominio del planeta. Vuelve a la página de inicio para más contenido sobre esta emocionante historia.",
  },
  {
    nombre: "Shrek",
    duracion: "2 Horas 5 minutos",
    genero: "Animada",
    critica: "Excelente",
    actores: [
      {
        nombre: "Hayden Christensen",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Hayden_Christensen",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/CwXOrWvPBPk",
    resumen: `"Shrek" es una película animada que sigue las aventuras de un ogro solitario
              que se embarca
              en una misión para rescatar
              su pantano de criaturas de cuento de hadas. Con su humor irreverente y su mensaje sobre la
              aceptación de uno mismo,
              "Shrek" se convirtió en un clásico moderno de la animación.`,
  },
  {
    nombre: "Star Wars",
    duracion: "3 Horas 25 minutos",
    genero: "Ficción",
    critica: "Excelente",
    actores: [
      {
        nombre: "Hayden Christensen, ",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Hayden_Christensen",
      },
      {
        nombre: "Natalie Portman",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Natalie_Portman",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/sGbxmsDFVnE",
    resumen: `Explora el universo de Star Wars. Descubre más sobre la saga galáctica más
              famosa. Dirígete a la página de la película
              para sumergirte aún más`,
  },
  {
    nombre: "Titanic",
    duracion: "2 Horas 25 minutos",
    genero: "Ficción",
    critica: "Excelente",
    actores: [
      {
        nombre: "Leonardo DiCaprio, ",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Hayden_Christensen",
      },
      {
        nombre: "Kate Winslet",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Kate_Winslet",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/tA_qMdzvCvk",
    resumen: `"Titanic" es un épico drama romántico que narra el trágico hundimiento del
              famoso transatlántico. Ambientada en 1912, la
              película entrelaza una emotiva historia de amor con la tragedia histórica, ofreciendo una
              experiencia cinematográfica
              inolvidable.`,
  },
  {
    nombre: "Toy Story",
    duracion: "1 Horas 57 minutos",
    genero: "Animada",
    critica: "Excelente",
    actores: [
      {
        nombre: "Tom Hanks",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Tom_Hanks",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/v-PjgYDrg70",
    resumen:
      "Toy Story es una película infantil de animación por computadora dirigida por John Lasseter, estrenada en 1995 y producida por Pixar. Fue el primer largometraje de Pixar, además de la primera cinta animada completamente con efectos digitales en la historia del cine.",
  },
  {
    nombre: "Nerve",
    duracion: "1 Hora 36 minutos",
    genero: "Thriller",
    critica: "Buena",
    actores: [
      {
        nombre: "Emma Roberts",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Emma_Roberts",
      },
      {
        nombre: "Dave Franco",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Dave_Franco",
      },
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=2PR9MOPTI7g",
    resumen:
      "Nerve es un thriller sobre un juego en línea de verdad o reto en el que los participantes se ven empujados a realizar tareas cada vez más peligrosas. La película explora los peligros de la tecnología y la presión social.",
  },
  {
    nombre: "Joe Bell",
    duracion: "1 Hora 34 minutos",
    genero: "Drama",
    critica: "Inspiradora",
    actores: [
      {
        nombre: "Mark Wahlberg",
        wikipediaUrl: "https://www.youtube.com/watch?v=3e3_iOsIRfY",
      },
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=2PR9MOPTI7g",
    resumen:
      "Joe Bell cuenta la historia real de un padre que decide recorrer a pie los Estados Unidos en honor a su hijo, quien fue víctima de bullying. Es una emotiva historia sobre amor, pérdida y la lucha contra la intolerancia.",
  },
  {
    nombre: "Patos",
    duracion: "1 Hora 20 minutos",
    genero: "Animada",
    critica: "Divertida",
    actores: [
      {
        nombre: "Billy Eichner",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Billy_Eichner",
      },
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=z1lfO2kQ0F4",
    resumen:
      "Patos es una encantadora película animada sobre un grupo de patos que se embarcan en una aventura para salvar su hogar de la destrucción. Llena de humor y lecciones de vida, es una historia para toda la familia.",
  },
  {
    nombre: "Alicia en el país de las maravillas",
    duracion: "1 Hora 48 minutos",
    genero: "Fantasía",
    critica: "Fascinante",
    actores: [
      {
        nombre: "Mia Wasikowska",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Mia_Wasikowska",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/9POCgSRVvf0",
    resumen:
      "Alicia en el país de las maravillas es una adaptación del clásico cuento de Lewis Carroll. Sigue a Alicia mientras cae en un mundo de fantasía lleno de criaturas extraordinarias y aventuras surrealistas.",
  },
  {
    nombre: "El diario de la princesa",
    duracion: "1 Hora 55 minutos",
    genero: "Comedia/Romance",
    critica: "Encantadora",
    actores: [
      {
        nombre: "Anne Hathaway",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Anne_Hathaway",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/7sep3CUIKPA",
    resumen:
      "El diario de la princesa sigue la historia de una adolescente que descubre que es la heredera al trono de un pequeño país europeo. Con la ayuda de su abuela, aprende a ser una princesa mientras navega por la vida adolescente.",
  },
  {
    nombre: "El precio del mañana",
    duracion: "1 Hora 49 minutos",
    genero: "Sci-Fi",
    critica: "Intrigante",
    actores: [
      {
        nombre: "Justin Timberlake",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Justin_Timberlake",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/YRSBiTF3Qo8",
    resumen:
      "El precio del mañana es una película de ciencia ficción en la que el tiempo es la moneda de cambio. Los ricos viven eternamente mientras los pobres luchan por cada segundo. Es una crítica a la desigualdad social y económica.",
  },
  {
    nombre: "El proyecto Adam",
    duracion: "1 Hora 46 minutos",
    genero: "Sci-Fi/Acción",
    critica: "Emocionante",
    actores: [
      {
        nombre: "Ryan Reynolds",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Ryan_Reynolds",
      },
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=ZnJxmnko64o",
    resumen:
      "El proyecto Adam sigue a un piloto que viaja en el tiempo para unirse a su yo más joven y su padre fallecido con el fin de reconciliar su pasado y salvar el futuro. Es una aventura emocionante con toques de humor y drama.",
  },
  {
    nombre: "El diablo viste a la moda",
    duracion: "1 Hora 49 minutos",
    genero: "Comedia/Drama",
    critica: "Excelente",
    actores: [
      {
        nombre: "Meryl Streep",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Meryl_Streep",
      },
      {
        nombre: "Anne Hathaway",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Anne_Hathaway",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/XTDSwAxlNhc",
    resumen:
      "El diablo viste a la moda sigue la vida de una joven asistente que trabaja para una poderosa editora de moda. La película ofrece una mirada fascinante y divertida al mundo de la moda y la alta presión que lo acompaña.",
  },
  {
    nombre: "Código 8",
    duracion: "1 Hora 38 minutos",
    genero: "Sci-Fi/Acción",
    critica: "Buena",
    actores: [
      {
        nombre: "Robbie Amell",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Robbie_Amell",
      },
      {
        nombre: "Stephen Amell",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Stephen_Amell",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/xDAsABdkWSc",
    resumen:
      "Código 8 está ambientada en un mundo donde el 4% de la población tiene habilidades sobrenaturales. La historia sigue a un joven con poderes que lucha por encontrar una forma de ayudar a su familia en una sociedad que lo persigue.",
  },
  {
    nombre: "Oblivion",
    duracion: "2 Horas 4 minutos",
    genero: "Sci-Fi",
    critica: "Intrigante",
    actores: [
      {
        nombre: "Tom Cruise",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Tom_Cruise",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/XmIIgE7eSak",
    resumen:
      "Oblivion es una película de ciencia ficción que sigue a un técnico que repara drones en una Tierra post-apocalíptica. Mientras cumple su misión, descubre una serie de secretos que lo llevan a cuestionar todo lo que sabe sobre su mundo.",
  },
  {
    nombre: "La gran apuesta",
    duracion: "2 Horas 10 minutos",
    genero: "Drama/Comedia",
    critica: "Excelente",
    actores: [
      {
        nombre: "Christian Bale",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Christian_Bale",
      },
      {
        nombre: "Steve Carell",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Steve_Carell",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/vgqG3ITMv1Q",
    resumen:
      "La gran apuesta sigue a un grupo de inversores que predijeron la crisis financiera de 2008 y apostaron contra el mercado inmobiliario. Es una sátira mordaz sobre la avaricia y la corrupción en el sector financiero.",
  },
  {
    nombre: "Jung_e",
    duracion: "1 Hora 38 minutos",
    genero: "Sci-Fi",
    critica: "Buena",
    actores: [
      {
        nombre: "Kang Soo-youn",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Kang_Soo-youn",
      },
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=laGNC_QvYRc",
    resumen:
      "Jung_e está ambientada en un futuro donde la humanidad vive en colonias espaciales debido al cambio climático. La historia sigue a una científica que trata de salvar a la humanidad clonando el cerebro de su madre, una heroína de guerra.",
  },
  {
    nombre: "Casi muerta",
    duracion: "1 Hora 42 minutos",
    genero: "Comedia",
    critica: "Divertida",
    actores: [
      {
        nombre: "Maite Lanata",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Maite_Lanata",
      },
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=OEPENC7PZ0g",
    resumen:
      "Casi muerta es una comedia argentina que sigue a María y su grupo de amigos en una serie de eventos desafortunados que llevan a situaciones hilarantes y llenas de enredos, mientras enfrentan la vida con un sentido del humor único.",
  },
  {
    nombre: "El diario de la princesa 2",
    duracion: "1 Hora 53 minutos",
    genero: "Comedia/Romance",
    critica: "Encantadora",
    actores: [
      {
        nombre: "Anne Hathaway",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Anne_Hathaway",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/koE9edjEDci",
    resumen:
      "El diario de la princesa 2 continúa la historia de Mia Thermopolis, ahora princesa de Genovia, mientras navega por su nueva vida real y enfrenta desafíos, incluida la búsqueda de un marido adecuado para asegurar su trono.",
  },
  {
    nombre: "La familia perfecta",
    duracion: "1 Hora 44 minutos",
    genero: "Comedia",
    critica: "Buena",
    actores: [
      {
        nombre: "Belén Rueda",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Belén_Rueda",
      },
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=c_TOYXdsRag",
    resumen:
      "La familia perfecta es una comedia que gira en torno a una mujer obsesionada con la perfección que se enfrenta a la caótica y disfuncional familia de su futuro yerno. Es una historia sobre aceptación y aprender a amar lo imperfecto.",
  },
  {
    nombre: "Milagro en la cueva",
    duracion: "1 Hora 47 minutos",
    genero: "Drama",
    critica: "Inspiradora",
    actores: [
      {
        nombre: "Jim Sturgess",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Jim_Sturgess",
      },
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=sbYCJ6jZdDc",
    resumen:
      "Milagro en la cueva narra la historia real de un equipo de jóvenes futbolistas y su entrenador atrapados en una cueva inundada en Tailandia. La película sigue el intenso rescate y la esperanza que mantuvo a todos unidos.",
  },
  {
    nombre: "La familia del futuro",
    duracion: "1 Hora 42 minutos",
    genero: "Animada/Sci-Fi",
    critica: "Divertida",
    actores: [
      {
        nombre: "Daniel Hansen",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Daniel_Hansen",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/4lFZ45brIw0",
    resumen:
      "La familia del futuro es una película animada que sigue a un joven inventor que viaja en el tiempo y se encuentra con una excéntrica familia del futuro. Juntos, deben detener a un villano y aprender valiosas lecciones sobre familia y perseverancia.",
  },
  {
    nombre: "Moonfall",
    duracion: "2 Horas",
    genero: "Sci-Fi",
    critica: "Buena",
    actores: [
      {
        nombre: "Halle Berry",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Halle_Berry",
      },
      {
        nombre: "Patrick Wilson",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Patrick_Wilson",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/ivIwdQBlS10",
    resumen:
      "Moonfall es una película de ciencia ficción en la que la luna es sacada de su órbita y amenaza con colisionar con la Tierra. Un equipo de astronautas y científicos intenta evitar el desastre y descubrir la causa del fenómeno.",
  },
  {
    nombre: "Mi villano favorito 3",
    duracion: "1 Hora 30 minutos",
    genero: "Animada",
    critica: "Divertida",
    actores: [
      {
        nombre: "Steve Carell",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Steve_Carell",
      },
      {
        nombre: "Kristen Wiig",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Kristen_Wiig",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/6DBi41reeF0",
    resumen:
      "Mi villano favorito 3 sigue las aventuras de Gru, quien descubre que tiene un hermano gemelo llamado Dru. Juntos, se embarcan en una nueva misión para detener a un villano llamado Balthazar Bratt, que amenaza al mundo.",
  },
  {
    nombre: "El viaje de Chihiro",
    duracion: "2 Horas 5 minutos",
    genero: "Animada/Fantasía",
    critica: "Excelente",
    actores: [
      {
        nombre: "Rumi Hiiragi",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Rumi_Hiiragi",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/ByXuk9QqQkk",
    resumen:
      "El viaje de Chihiro es una película animada de Studio Ghibli que sigue a una niña llamada Chihiro que se encuentra en un mundo de espíritus. Para salvar a sus padres, debe trabajar en un baño de espíritus y encontrar el coraje para enfrentar sus miedos.",
  },
  {
    nombre: "Ascenso",
    duracion: "1 Hora 44 minutos",
    genero: "Drama",
    critica: "Excelente",
    actores: [
      {
        nombre: "Camila Mendes",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Camila_Mendes",
      },
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=Teb5FnDG5Fs",
    resumen:
      "Cuenta la historia de una joven ambiciosa que lucha por equilibrar su carrera profesional con sus deseos de encontrar el amor verdadero. ",
  },
  {
    nombre: "El correo",
    duracion: "1 Hora 42 minutos",
    genero: "Drama",
    critica: "Buena",
    actores: [
      {
        nombre: "Arón Piper",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Ar%C3%B3n_Piper",
      },
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=3wHbCXVNd_E",
    resumen:
      "Tras emplear su astucia para unirse a un esquema de lavado de dinero, un modesto valet parking descubre un mundo que se mueve a toda velocidad. Estrellarse es inevitable.",
  },
  {
    nombre: "Dejar el mundo atrás",
    duracion: "2 Horas",
    genero: "Drama/Thriller",
    critica: "Intrigante",
    actores: [
      {
        nombre: "Julia Roberts",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Julia_Roberts",
      },
      {
        nombre: "Ethan Hawke",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Ethan_Hawke",
      },
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=-8mZ-AzmYgY",
    resumen:
      "Dejar el mundo atrás es un thriller psicológico sobre una familia que, durante unas vacaciones, se enfrenta a eventos misteriosos y potencialmente catastróficos. A medida que la situación empeora, deben confrontar sus propios miedos y secretos.",
  },
  {
    nombre: "La purga",
    duracion: "1 Hora 25 minutos",
    genero: "Horror",
    critica: "Intensa",
    actores: [
      {
        nombre: "Ethan Hawke",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Ethan_Hawke",
      },
      {
        nombre: "Lena Headey",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Lena_Headey",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/K0LLaybEuzA",
    resumen:
      "La purga es una película de horror ambientada en un futuro cercano donde, una noche al año, todos los crímenes son legales. La historia sigue a una familia que debe sobrevivir a la noche más peligrosa del año mientras enfrenta amenazas externas e internas.",
  },
  {
    nombre: "Corre",
    duracion: "1 Hora 30 minutos",
    genero: "Thriller",
    critica: "Buena",
    actores: [
      {
        nombre: "Sarah Paulson",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Sarah_Paulson",
      },
      {
        nombre: "Kiera Allen",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Kiera_Allen",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/gejuUihIVLs",
    resumen:
      "Corre es un thriller psicológico que sigue a una joven en silla de ruedas que comienza a sospechar que su madre está ocultando un oscuro secreto. A medida que descubre la verdad, debe luchar por su libertad y su vida.",
  },
  {
    nombre: "No respires",
    duracion: "1 Hora 28 minutos",
    genero: "Horror/Thriller",
    critica: "Intensa",
    actores: [
      {
        nombre: "Stephen Lang",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Stephen_Lang",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/76yBTNDB6vU",
    resumen:
      "No respires es una película de horror y thriller que sigue a un grupo de amigos que deciden robar la casa de un hombre ciego. Sin embargo, pronto descubren que su víctima no es tan indefensa como pensaban y deben luchar por sobrevivir.",
  },
  {
    nombre: "Una esposa de mentira",
    duracion: "1 Hora 57 minutos",
    genero: "Comedia/Romance",
    critica: "Divertida",
    actores: [
      {
        nombre: "Adam Sandler",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Adam_Sandler",
      },
      {
        nombre: "Jennifer Aniston",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Jennifer_Aniston",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/7htOTHPpSDQ",
    resumen:
      "Una esposa de mentira sigue a un cirujano plástico que, para cubrir una mentira, persuade a su leal asistente para que se haga pasar por su esposa. Juntos, viven situaciones cómicas y románticas mientras tratan de mantener la farsa.",
  },
  {
    nombre: "Son como niños",
    duracion: "1 Hora 42 minutos",
    genero: "Comedia",
    critica: "Divertida",
    actores: [
      {
        nombre: "Adam Sandler",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Adam_Sandler",
      },
      {
        nombre: "Kevin James",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Kevin_James",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/e01NVCveGkg",
    resumen:
      "Son como niños cuenta la historia de un grupo de amigos de la infancia que se reúnen después de muchos años para pasar un fin de semana juntos. A medida que reviven viejas aventuras, enfrentan la realidad de la adultez y la paternidad.",
  },
  {
    nombre: "Buscando a Nemo",
    duracion: "1 Hora 40 minutos",
    genero: "Animada/Aventura",
    critica: "Excelente",
    actores: [
      {
        nombre: "Albert Brooks",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Albert_Brooks",
      },
      {
        nombre: "Ellen DeGeneres",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Ellen_DeGeneres",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/wZdpNglLbt8",
    resumen:
      "Buscando a Nemo es una película animada de Pixar que sigue a un pez payaso llamado Marlin en su aventura para encontrar a su hijo, Nemo, que ha sido capturado por un buzo. Con la ayuda de Dory, Marlin enfrenta diversos peligros en el océano.",
  },
  {
    nombre: "Coco",
    duracion: "1 Hora 45 minutos",
    genero: "Animada/Fantasía",
    critica: "Excelente",
    actores: [
      {
        nombre: "Anthony Gonzalez",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Anthony_Gonzalez_(actor)",
      },
      {
        nombre: "Gael García Bernal",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Gael_García_Bernal",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/Rvr68u6k5sI",
    resumen:
      "Coco es una película animada de Pixar que sigue a un joven llamado Miguel que, accidentalmente, entra en la Tierra de los Muertos. Allí, busca la ayuda de su tatarabuelo músico para regresar al mundo de los vivos y cumplir su sueño de ser músico.",
  },
  {
    nombre: "Wonka",
    duracion: "1 Hora 57 minutos",
    genero: "Fantasía/Aventura",
    critica: "Increíble",
    actores: [
      {
        nombre: "Timothée Chalamet",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Timothée_Chalamet",
      },
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=-YRw-3dgsjo",
    resumen:
      "Wonka es una película que explora los orígenes del famoso chocolatero Willy Wonka. La historia muestra su juventud, cómo llegó a crear su imperio de dulces y los eventos que lo convirtieron en el excéntrico personaje conocido mundialmente.",
  },
  {
    nombre: "El código enigma",
    duracion: "1 Hora 53 minutos",
    genero: "Drama/Histórica",
    critica: "Excelente",
    actores: [
      {
        nombre: "Benedict Cumberbatch",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Benedict_Cumberbatch",
      },
      {
        nombre: "Keira Knightley",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Keira_Knightley",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/nuPZUUED5uk",
    resumen:
      "El código enigma cuenta la historia real de Alan Turing y su equipo de criptoanalistas durante la Segunda Guerra Mundial. Su misión es descifrar el código Enigma utilizado por los nazis, lo que cambiaría el curso de la guerra.",
  },
  {
    nombre: "Comer, rezar, amar",
    duracion: "2 Horas 13 minutos",
    genero: "Drama/Romance",
    critica: "Inspiradora",
    actores: [
      {
        nombre: "Julia Roberts",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Julia_Roberts",
      },
      {
        nombre: "Javier Bardem",
        wikipediaUrl: "https://es.wikipedia.org/wiki/Javier_Bardem",
      },
    ],
    youtubeVideo: "https://www.youtube.com/embed/mjay5vgIwt4",
    resumen:
      "Comer, rezar, amar sigue a una mujer que, después de un divorcio, decide embarcarse en un viaje alrededor del mundo para redescubrirse. Durante su viaje, encuentra placer en la comida en Italia, la espiritualidad en la India y el amor en Indonesia.",
  },
];

const contenidoSimilar = [
  {
    href: "?name=Shrek",
    imgSrc: "../fotos-peliculas/shrek.webp",
    alt: "Shrek movie",
  },
  {
    href: "?name=Titanic",
    imgSrc: "../fotos-peliculas/titanic.webp",
    alt: "titanic movie",
  },
  {
    href: "?name=Star Wars",
    imgSrc: "../fotos-peliculas/star-wars.jpg",
    alt: "star-wars movie",
  },
  {
    href: "?name=Planeta de los simios",
    imgSrc: "../fotos-peliculas/simios.jpg",
    alt: "Planeta de los simios movie",
  },
  {
    href: "?name=Toy Story",
    imgSrc: "../fotos-peliculas/toy-story.jpg",
    alt: "Toy story",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  var query = window.location.search;
  var urlParams = new URLSearchParams(query);
  var peliNombre = urlParams.get("name");

  mostrarDetalle(peliNombre);
  mostrarContenidoSimilar();
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

function mostrarDetalle(name) {
  for (let i = 0; i < contenido.length; i++) {
    if (name === contenido[i].nombre) {
      const iframe = document.getElementById("iframe-trailer");
      const titulo = document.getElementById("titulo");
      const duracion = document.getElementById("duracion");
      const genero = document.getElementById("genero");
      const critica = document.getElementById("critica");
      const resumen = document.getElementById("resumen");
      const actoresDiv = document.getElementById("actores");
      iframe.src = contenido[i].youtubeVideo;
      titulo.textContent = "Titulo: " + contenido[i].nombre;
      duracion.textContent = "Duración: " + contenido[i].duracion;
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
