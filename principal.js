//cerrar sesion en menu
document.addEventListener("DOMContentLoaded", function () {
  const cerrarSesionLink = document.getElementById("cerrarSesion");

  cerrarSesionLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir la redirección inmediata

    // Limpiar todos los datos de la sesión aquí
    sessionStorage.clear();
    localStorage.clear();

    // Mostrar mensaje de alerta
    alert("La sesión se cerró con éxito.");

    // Redirigir al index
    window.location.href = "index.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const filmsSection = document.getElementById("films-section");

  const films = [
    {
      type: "film",
      category: "Comedia",
      url: "./detalles/detalle-pelicula/index.html?name=Shrek",
      imgSrc: "./films-home/shrek.webp",
      alt: "shrek",
    },
    {
      type: "film",
      category: "Romance",
      url: "./detalles/detalle-pelicula/index.html?name=Titanic",
      imgSrc: "./films-home/titanic.webp",
      alt: "titanic",
    },
    {
      type: "serie",
      category: "Drama",
      url: "./detalles/detalle-serie/index.html?name=Breaking Bad",
      imgSrc: "./films-home/breaking_bad.jpg",
      alt: "breaking bad",
    },
    {
      type: "serie",
      category: "Sci-fi",
      url: "./detalles/detalle-serie/index.html?name=Stranger Things",
      imgSrc: "./films-home/Stranger_Things.png",
      alt: "stranger things",
    },
    {
      type: "serie",
      category: "Accion",
      url: "./detalles/detalle-serie/index.html?name=Vikings",
      imgSrc: "./films-home/vikings.webp",
      alt: "vikings",
    },
    {
      type: "serie",
      category: "Accion",
      url: "./detalles/detalle-serie/index.html?name=Cobra Kai",
      imgSrc: "./films-home/cobra-kai.jpg",
      alt: "cobra kai",
    },
    {
      type: "film",
      category: "Fantasia",
      url: "./detalles/detalle-pelicula/index.html?name=Alicia en el país de las maravillas",
      imgSrc: "./films-home/alicia.png",
      alt: "alicia en el país de las maravillas",
    },
    {
      type: "film",
      category: "Comedia",
      url: "./detalles/detalle-pelicula/index.html?name=El diario de la princesa",
      imgSrc: "./films-home/diario-princesa.png",
      alt: "el diario de la princesa",
    },
    {
      type: "film",
      category: "Sci-fi",
      url: "./detalles/detalle-pelicula/index.html?name=El precio del mañana",
      imgSrc: "./films-home/precio-del-mañana.webp",
      alt: "el precio del mañana",
    },
    {
      type: "film",
      category: "Comedia",
      url: "./detalles/detalle-pelicula/index.html?name=El diablo viste a la moda",
      imgSrc: "./films-home/diablo-moda.png",
      alt: "el diablo viste a la moda",
    },
    {
      type: "film",
      category: "Sci-fi",
      url: "./detalles/detalle-pelicula/index.html?name=Código 8",
      imgSrc: "./films-home/codigo8.jpg",
      alt: "codigo 8",
    },
    {
      type: "serie",
      category: "Terror",
      url: "./detalles/detalle-serie/index.html?name=The Walking Dead",
      imgSrc: "./films-home/walking-dead.jpg",
      alt: "the walking dead",
    },
    {
      type: "film",
      category: "Drama",
      url: "./detalles/detalle-pelicula/index.html?name=La gran apuesta",
      imgSrc: "./films-home/gran-apuesta.webp",
      alt: "la gran apuesta",
    },
    {
      type: "serie",
      category: "Drama",
      url: "./detalles/detalle-serie/index.html?name=Suits",
      imgSrc: "./films-home/suits.jpg",
      alt: "suits",
    },
    {
      type: "serie",
      category: "Crimen",
      url: "./detalles/detalle-serie/index.html?name=Dexter",
      imgSrc: "./films-home/dexter.jpg",
      alt: "dexter",
    },
    {
      type: "film",
      category: "Comedia",
      url: "./detalles/detalle-pelicula/index.html?name=El diario de la princesa 2",
      imgSrc: "./films-home/diario2.webp",
      alt: "el diario de la princesa 2",
    },
    {
      type: "serie",
      category: "Sci-fi",
      url: "./detalles/detalle-serie/index.html?name=Dark",
      imgSrc: "./films-home/dark.webp",
      alt: "dark",
    },
    {
      type: "serie",
      category: "Comedia",
      url: "./detalles/detalle-serie/index.html?name=Modern Family",
      imgSrc: "./films-home/modern-family.webp",
      alt: "modern family",
    },
    {
      type: "film",
      category: "Animacion",
      url: "./detalles/detalle-pelicula/index.html?name=La familia del futuro",
      imgSrc: "./films-home/familia-futuro.png",
      alt: "la familia del futuro",
    },
    {
      type: "serie",
      category: "Anime",
      url: "./detalles/detalle-serie/index.html?name=Death Note",
      imgSrc: "./films-home/death-note.webp",
      alt: "death note",
    },
    {
      type: "film",
      category: "Animacion",
      url: "./detalles/detalle-pelicula/index.html?name=Mi villano favorito 3",
      imgSrc: "./films-home/Despicable-Me-3.jpg",
      alt: "mi villano favorito 3",
    },
    {
      type: "serie",
      category: "Drama",
      url: "./detalles/detalle-serie/index.html?name=Orange Is the New Black",
      imgSrc: "./films-home/orange.jpeg",
      alt: "orange is the new black",
    },
    {
      type: "serie",
      category: "Comedia",
      url: "./detalles/detalle-serie/index.html?name=Friends",
      imgSrc: "./films-home/friends.avif",
      alt: "friends",
    },
    {
      type: "serie",
      category: "Anime",
      url: "./detalles/detalle-serie/index.html?name=Another",
      imgSrc: "./films-home/another.jpg",
      alt: "another",
    },
    {
      type: "film",
      category: "Thriller",
      url: "./detalles/detalle-pelicula/index.html?name=Dejar el mundo atrás",
      imgSrc: "./films-home/dejar-el-mundo-atras-1.jpg",
      alt: "dejar el mundo atrás",
    },
    {
      type: "film",
      category: "Terror",
      url: "./detalles/detalle-pelicula/index.html?name=La purga",
      imgSrc: "./films-home/la-purga.jpg",
      alt: "la purga",
    },
    // {
    //   type: "film",
    //   category: "Thriller",
    //   url: "./detalles/detalle-pelicula/index.html?name=Corre",
    //   imgSrc: "./films-home/corre.jpg",
    //   alt: "corre",
    // },
    {
      type: "film",
      category: "Terror",
      url: "./detalles/detalle-pelicula/index.html?name=No respires",
      imgSrc: "./films-home/no-respires.jpg",
      alt: "no respires",
    },
    {
      type: "film",
      category: "Comedia",
      url: "./detalles/detalle-pelicula/index.html?name=Una esposa de mentira",
      imgSrc: "./films-home/esposa-de-mentira.jpg",
      alt: "una esposa de mentira",
    },
    {
      type: "film",
      category: "Comedia",
      url: "./detalles/detalle-pelicula/index.html?name=Son como niños",
      imgSrc: "./films-home/son-como-ninios.jpg",
      alt: "son como niños",
    },
    {
      type: "serie",
      category: "Deportes",
      url: "./detalles/detalle-serie/index.html?name=Fórmula 1: Drive to Survive",
      imgSrc: "./films-home/formula1.jpg",
      alt: "formula 1 drive to survive",
    },
    {
      type: "film",
      category: "Animacion",
      url: "./detalles/detalle-pelicula/index.html?name=Coco",
      imgSrc: "./films-home/coco.jpeg",
      alt: "coco",
    },
    {
      type: "serie",
      category: "Accion",
      url: "./detalles/detalle-serie/index.html?name=Van Helsing",
      imgSrc: "./films-home/van-helsing.jpg",
      alt: "van Helsing",
    },
    {
      type: "film",
      category: "Drama",
      url: "./detalles/detalle-pelicula/index.html?name=El código enigma",
      imgSrc: "./films-home/codigo-enigma.webp",
      alt: "el codigo enigma",
    },
    {
      type: "film",
      category: "Romance",
      url: "./detalles/detalle-pelicula/index.html?name=Comer, rezar, amar",
      imgSrc: "./films-home/comer-rezar-amar.webp",
      alt: "comer rezar amar",
    },
    {
      type: "film",
      category: "Thriller",
      url: "./detalles/detalle-pelicula/index.html?name=Nerve",
      imgSrc: "./films-home/nerve.jpg",
      alt: "nerve",
    },
    {
      type: "film",
      category: "Drama",
      url: "./detalles/detalle-pelicula/index.html?name=Joe Bell",
      imgSrc: "./films-home/Joe_Bell.jpg",
      alt: "joe bell",
    },
    {
      type: "film",
      category: "Animacion",
      url: "./detalles/detalle-pelicula/index.html?name=Patos",
      imgSrc: "./films-home/patos.jpg",
      alt: "patos",
    },
    {
      type: "film",
      category: "Fantasia",
      url: "./detalles/detalle-pelicula/index.html?name=El proyecto Adam",
      imgSrc: "./films-home/proyecto-adam.avif",
      alt: "el proyecto adam",
    },
    {
      type: "film",
      category: "Accion",
      url: "./detalles/detalle-pelicula/index.html?name=Oblivion",
      imgSrc: "./films-home/oblivion.jpg",
      alt: "oblivion",
    },
    {
      type: "film",
      category: "Fantasia",
      url: "./detalles/detalle-pelicula/index.html?name=Jung_e",
      imgSrc: "./films-home/junge.jpeg",
      alt: "jung_e",
    },
    {
      type: "film",
      category: "Comedia",
      url: "./detalles/detalle-pelicula/index.html?name=Casi muerta",
      imgSrc: "./films-home/casi-muerta.avif",
      alt: "casi muerta",
    },
    {
      type: "film",
      category: "Comedia",
      url: "./detalles/detalle-pelicula/index.html?name=La familia perfecta",
      imgSrc: "./films-home/familia-perfecta.jpg",
      alt: "la familia perfecta",
    },
    {
      type: "film",
      category: "Drama",
      url: "./detalles/detalle-pelicula/index.html?name=Milagro en la cueva",
      imgSrc: "./films-home/milagro.jpg",
      alt: "milagro en la cueva",
    },
    {
      type: "film",
      category: "Sci-fi",
      url: "./detalles/detalle-pelicula/index.html?name=Moonfall",
      imgSrc: "./films-home/moonfal.jpeg",
      alt: "moonfall",
    },
    {
      type: "film",
      category: "Anime",
      url: "./detalles/detalle-pelicula/index.html?name=El viaje de Chihiro",
      imgSrc: "./films-home/El-viaje-de-Chihiro.jpg",
      alt: "el viaje de chihiro",
    },
    {
      type: "film",
      category: "Drama",
      url: "./detalles/detalle-pelicula/index.html?name=Ascenso",
      imgSrc: "./films-home/ascenso.jpg",
      alt: "ascenso",
    },
    {
      type: "film",
      category: "Drama",
      url: "./detalles/detalle-pelicula/index.html?name=El correo",
      imgSrc: "./films-home/correo.jpg",
      alt: "el correo",
    },
    {
      type: "film",
      category: "Animacion",
      url: "./detalles/detalle-pelicula/index.html?name=Buscando a Nemo",
      imgSrc: "./films-home/nemo.png",
      alt: "buscando a nemo",
    },
    {
      type: "film",
      category: "Fantasia",
      url: "./detalles/detalle-pelicula/index.html?name=Wonka",
      imgSrc: "./films-home/wonka.jpg",
      alt: "wonka",
    },
    {
      type: "serie",
      category: "Crimen",
      url: "./detalles/detalle-serie/index.html?name=Amor y muerte",
      imgSrc: "./films-home/amor-y-muerte.webp",
      alt: "amor y muerte",
    },
    {
      type: "serie",
      category: "Drama",
      url: "./detalles/detalle-serie/index.html?name=Outlander",
      imgSrc: "./films-home/outlander.jpg",
      alt: "outlander",
    },
    // {
    //   type: "serie",
    //   category: "Crimen",
    //   url: "./detalles/detalle-serie/index.html?name=El caso Asunta",
    //   imgSrc: "./films-home/caso-asunta.jpg",
    //   alt: "el caso asunta",
    // },
    // {
    //   type: "serie",
    //   category: "Drama",
    //   url: "./detalles/detalle-serie/index.html?name=El desorden que dejas",
    //   imgSrc: "./films-home/el-desorden.jpg",
    //   alt: "el desorden que dejas",
    // },
    // {
    //   type: "serie",
    //   category: "Comedia",
    //   url: "./detalles/detalle-serie/index.html?name=Machos alfa",
    //   imgSrc: "./films-home/machos-alfa.jpg",
    //   alt: "machos alfa",
    // },
    {
      type: "serie",
      category: "Drama",
      url: "./detalles/detalle-serie/index.html?name=Ozark",
      imgSrc: "./films-home/ozark.jpg",
      alt: "ozark",
    },
    {
      type: "serie",
      category: "Animacion",
      url: "./detalles/detalle-serie/index.html?name=Los Simpson",
      imgSrc: "./films-home/los-simpson.jpeg",
      alt: "los simpson",
    },
    {
      type: "serie",
      category: "Sci-fi",
      url: "./detalles/detalle-serie/index.html?name=Qué le pasó a lunes",
      imgSrc: "./films-home/lunes.jpg",
      alt: "que le paso a lunes",
    },
    {
      type: "serie",
      category: "Drama",
      url: "./detalles/detalle-serie/index.html?name=Todo el dinero",
      imgSrc: "./films-home/todo-dinero.jpg",
      alt: "todo el dinero",
    },
    {
      type: "serie",
      category: "Comedia",
      url: "./detalles/detalle-serie/index.html?name=Los protectores",
      imgSrc: "./films-home/los-protectores.avif",
      alt: "los protectores",
    },
    {
      type: "serie",
      category: "Romance",
      url: "./detalles/detalle-serie/index.html?name=Un cuento perfecto",
      imgSrc: "./films-home/cuento-perfecto.webp",
      alt: "un cuento perfecto",
    },
    {
      type: "serie",
      category: "Comedia",
      url: "./detalles/detalle-serie/index.html?name=Hacks",
      imgSrc: "./films-home/hacks.jpg",
      alt: "hacks",
    },
    {
      type: "serie",
      category: "Animacion",
      url: "./detalles/detalle-serie/index.html?name=Futurama",
      imgSrc: "./films-home/futurama.jpg",
      alt: "futurama",
    },
    {
      type: "serie",
      category: "Romance",
      url: "./detalles/detalle-serie/index.html?name=Bridgerton",
      imgSrc: "./films-home/Bridgerton.webp",
      alt: "bridgerton",
    },
    {
      type: "serie",
      category: "Fantasia",
      url: "./detalles/detalle-serie/index.html?name=Shadowhunters",
      imgSrc: "./films-home/shadowhunters.webp",
      alt: "shadowhunters",
    },
    {
      type: "serie",
      category: "Drama",
      url: "./detalles/detalle-serie/index.html?name=Ginny y Georgia",
      imgSrc: "./films-home/ginny-georgia.jpg",
      alt: "ginny y georgia",
    },
    {
      type: "serie",
      category: "Comedia",
      url: "./detalles/detalle-serie/index.html?name=Hannah Montana",
      imgSrc: "./films-home/hanna.webp",
      alt: "hannah montana",
    },
    // {
    //   type: "serie",
    //   category: "Accion",
    //   url: "./detalles/detalle-serie/index.html?name=The Boys",
    //   imgSrc: "./films-home/boys.webp",
    //   alt: "the Boys",
    // },
    // {
    //   type: "serie",
    //   category: "Crimen",
    //   url: "./detalles/detalle-serie/index.html?name=The OA",
    //   imgSrc: "./films-home/oa.jpg",
    //   alt: "the oa",
    // },
  ];

const movieDetails = {
  "Planeta de los simios": {
    title: "El planeta de los simios",
    description:
      "Mientras un nuevo y tiránico líder simio construye su imperio, un joven simio emprende un viaje desgarrador que le llevará a tomar decisiones que definirán el futuro de simios y humanos por igual.",
    moreInfoUrl:
      "./detalles/detalle-pelicula/index.html?name=Planeta de los simios",
    viewFilmUrl:
      "./detalles/detalle-pelicula/index.html?name=Planeta de los simios",
    imgSrc: "./films-home/simios.jpg",
  },
  "The OA": {
    title: "The OA",
    description:
      "Una joven ciega desaparecida vuelve a casa con la vista recuperada, lo que lleva a muchos a cuestionarse si es un milagro o algo más.",
    moreInfoUrl: "./detalles/detalle-serie/index.html?name=The OA",
    viewFilmUrl: "./detalles/detalle-serie/index.html?name=The OA",
    imgSrc: "./films-home/oa.jpg",
  },
};

films.forEach((film) => {
  const div = document.createElement("div");
  div.classList.add(film.type);
  div.dataset.categoria = film.category;

  const a = document.createElement("a");
  a.href = film.url;

  const img = document.createElement("img");
  img.src = film.imgSrc;
  img.alt = film.alt;

  a.appendChild(img);
  div.appendChild(a);
  filmsSection.appendChild(div);
});

const movieDetailsSection = document.getElementById("details");

document.getElementById("todoTodas").addEventListener("click", () => {
  showAll();
  showMovieDetails("Planeta de los simios");
});

document.getElementById("todasLasSeries").addEventListener("click", () => {
  showOnly("serie");
  showMovieDetails("The OA");
});

document.getElementById("todasLasPeliculas").addEventListener("click", () => {
  showOnly("film");
  showMovieDetails("Planeta de los simios");
});

document.getElementById("categorias").addEventListener("change", (event) => {
  filterByCategory(event.target.value);
});

document.getElementById("site-search").addEventListener("input", (event) => {
  filterBySearch(event.target.value);
});

function showAll() {
  const items = filmsSection.children;
  for (let item of items) {
    item.classList.remove("hidden");
  }
}

function showOnly(type) {
  const items = filmsSection.children;
  for (let item of items) {
    if (item.classList.contains(type)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  }
}

function filterByCategory(category) {
  const items = filmsSection.children;
  if (category === "todos") {
    showAll();
  } else {
    for (let item of items) {
      if (item.dataset.categoria === category) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    }
  }
}

function filterBySearch(query) {
  const items = filmsSection.children;
  query = query.toLowerCase();
  for (let item of items) {
    const altText = item.querySelector("img").alt.toLowerCase();
    if (altText.includes(query)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  }
}

function showMovieDetails(name) {
  const details = movieDetails[name];
  document.getElementById("background-img").src = details.imgSrc;
  document.getElementById("background-img").alt = details.title;
  document.getElementById("title").textContent = details.title;
  document.getElementById("description").textContent = details.description;
  document.getElementById("moreInfoLink").href = details.moreInfoUrl;
  document.getElementById("viewFilmLink").href = details.viewFilmUrl;
}
 // Leer el parámetro de la URL y filtrar según corresponda
 const urlParams = new URLSearchParams(window.location.search);
 const filter = urlParams.get('filter');

 if (filter === "series") {
   showOnly("serie");
   showMovieDetails("The OA");
 } else if (filter === "peliculas") {
   showOnly("film");
 } else {
   showAll();
 }
});