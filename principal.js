const films = [
  {
    title: "Shrek",
    type: "movie",
    category: "Comedia",
    imgSrc: "./films-home/shrek.webp",
    detailsLink: "./detalles/detalle-pelicula-shrek/index.html",
  },
  {
    title: "Titanic",
    type: "movie",
    category: "Romance",
    imgSrc: "./films-home/titanic.webp",
    detailsLink: "./detalles/detalle-pelicula-titanic/index.html",
  },
  {
    title: "Breaking Bad",
    type: "series",
    category: "Drama",
    imgSrc: "./films-home/breaking_bad.jpg",
    detailsLink: "./detalles/detalle-serie-breaking-bad/index.html",
  },
  {
    title: "Stranger Things",
    type: "series",
    category: "Sci-fi",
    imgSrc: "./films-home/Stranger_Things.png",
    detailsLink: "./detalles/detalle-serie-stranger-things/index.html",
  },
  {
    title: "Vikings",
    type: "series",
    category: "Accion",
    imgSrc: "./films-home/vikings.webp",
    detailsLink: "./detalles/detalle-serie-vikings/index.html",
  },
  {
    title: "Star Wars",
    type: "movie",
    category: "Sci-fi",
    imgSrc: "./films-home/star-wars.jpg",
    detailsLink: "./detalles/detalle-pelicula-star-wars/index.html",
  },
  {
    title: "Cobra Kai",
    type: "series",
    category: "Accion",
    imgSrc: "./films-home/cobra-kai.jpg",
    detailsLink: "./detalles/detalle-serie-cobra-kai/index.html",
  },
  {
    title: "Alicia",
    type: "movie",
    category: "Fantasia",
    imgSrc: "./films-home/alicia.png",
  },
  {
    title: "El diario de la princesa",
    type: "movie",
    category: "Comedia",
    imgSrc: "./films-home/diario-princesa.png",
  },
  {
    title: "El precio del mañana",
    type: "movie",
    category: "Sci-fi",
    imgSrc: "./films-home/precio-del-mañana.webp",
  },
  {
    title: "El diablo viste a la moda",
    type: "movie",
    category: "Comedia",
    imgSrc: "./films-home/diablo-moda.png",
  },
  {
    title: "Código 8",
    type: "movie",
    category: "Sci-fi",
    imgSrc: "./films-home/codigo8.jpg",
  },
  {
    title: "The Walking Dead",
    type: "series",
    category: "Terror",
    imgSrc: "./films-home/walking-dead.jpg",
  },
  {
    title: "La gran apuesta",
    type: "movie",
    category: "Drama",
    imgSrc: "./films-home/gran-apuesta.webp",
  },
  {
    title: "Suits",
    type: "series",
    category: "Drama",
    imgSrc: "./films-home/suits.jpg",
  },
  {
    title: "Dexter",
    type: "series",
    category: "Crimen",
    imgSrc: "./films-home/dexter.jpg",
  },
  {
    title: "El diario de la princesa 2",
    type: "movie",
    category: "Comedia",
    imgSrc: "./films-home/diario2.webp",
  },
  {
    title: "Dark",
    type: "series",
    category: "Sci-fi",
    imgSrc: "./films-home/dark.webp",
  },
  {
    title: "Modern Family",
    type: "series",
    category: "Comedia",
    imgSrc: "./films-home/modern-family.webp",
  },
  {
    title: "La familia del futuro",
    type: "movie",
    category: "Animacion",
    imgSrc: "./films-home/familia-futuro.png",
  },
  {
    title: "Death Note",
    type: "series",
    category: "Anime",
    imgSrc: "./films-home/death-note.webp",
  },
  {
    title: "Mi villano favorito 3",
    type: "movie",
    category: "Animacion",
    imgSrc: "./films-home/Despicable-Me-3.jpg",
  },
  {
    title: "Orange is the New Black",
    type: "series",
    category: "Drama",
    imgSrc: "./films-home/orange.jpeg",
  },
  {
    title: "Friends",
    type: "series",
    category: "Comedia",
    imgSrc: "./films-home/friends.avif",
  },
  {
    title: "Another",
    type: "series",
    category: "Anime",
    imgSrc: "./films-home/another.jpg",
  },
  {
    title: "Dejar el mundo atrás",
    type: "movie",
    category: "Thriller",
    imgSrc: "./films-home/dejar-el-mundo-atras-1.jpg",
  },
  {
    title: "La purga",
    type: "movie",
    category: "Terror",
    imgSrc: "./films-home/la-purga.jpg",
  },
  {
    title: "Corre",
    type: "movie",
    category: "Thriller",
    imgSrc: "./films-home/corre.jpg",
  },
  {
    title: "No respires",
    type: "movie",
    category: "Terror",
    imgSrc: "./films-home/no-respires.jpg",
  },
  {
    title: "Una esposa de mentira",
    type: "movie",
    category: "Comedia",
    imgSrc: "./films-home/esposa-de-mentira.jpg",
  },
  {
    title: "Son como niños",
    type: "movie",
    category: "Comedia",
    imgSrc: "./films-home/son-como-ninios.jpg",
  },
  {
    title: "Formula 1",
    type: "series",
    category: "Deportes",
    imgSrc: "./films-home/formula1.jpg",
  },
  {
    title: "Coco",
    type: "movie",
    category: "Animacion",
    imgSrc: "./films-home/coco.jpeg",
  },
  {
    title: "Van Helsing",
    type: "movie",
    category: "Accion",
    imgSrc: "./films-home/van-helsing.jpg",
  },
  {
    title: "El código enigma",
    type: "movie",
    category: "Drama",
    imgSrc: "./films-home/codigo-enigma.webp",
  },
  {
    title: "Comer, rezar, amar",
    type: "movie",
    category: "Romance",
    imgSrc: "./films-home/comer-rezar-amar.webp",
  },
  {
    title: "Nerve",
    type: "movie",
    category: "Thriller",
    imgSrc: "./films-home/nerve.jpg",
  },
  {
    title: "Joe Bell",
    type: "movie",
    category: "Drama",
    imgSrc: "./films-home/Joe_Bell.jpg",
  },
  {
    title: "Patos",
    type: "movie",
    category: "Comedia",
    imgSrc: "./films-home/patos.jpg",
  },
  {
    title: "El proyecto Adam",
    type: "movie",
    category: "Sci-fi",
    imgSrc: "./films-home/proyecto-adam.avif",
  },
  {
    title: "Oblivion",
    type: "movie",
    category: "Sci-fi",
    imgSrc: "./films-home/oblivion.jpg",
  },
  {
    title: "Jung_E",
    type: "movie",
    category: "Sci-fi",
    imgSrc: "./films-home/junge.jpeg",
  },
  {
    title: "Casi muerta",
    type: "movie",
    category: "Comedia",
    imgSrc: "./films-home/casi-muerta.avif",
  },
  {
    title: "La familia perfecta",
    type: "movie",
    category: "Comedia",
    imgSrc: "./films-home/familia-perfecta.jpg",
  },
  {
    title: "Milagro en la cueva",
    type: "movie",
    category: "Drama",
    imgSrc: "./films-home/milagro.jpg",
  },
  {
    title: "Moonfall",
    type: "movie",
    category: "Sci-fi",
    imgSrc: "./films-home/moonfal.jpeg",
  },
  {
    title: "El viaje de Chihiro",
    type: "movie",
    category: "Anime",
    imgSrc: "./films-home/El-viaje-de-Chihiro.jpg",
  },
  {
    title: "Ascenso",
    type: "movie",
    category: "Drama",
    imgSrc: "./films-home/ascenso.jpg",
  },
  {
    title: "El correo",
    type: "movie",
    category: "Drama",
    imgSrc: "./films-home/correo.jpg",
  },
  {
    title: "Amor y muerte",
    type: "series",
    category: "Crimen",
    imgSrc: "./films-home/amor-y-muerte.webp",
  },
  {
    title: "Outlander",
    type: "series",
    category: "Drama",
    imgSrc: "./films-home/outlander.jpg",
  },
  {
    title: "El caso Asunta",
    type: "series",
    category: "Crimen",
    imgSrc: "./films-home/caso-asunta.jpg",
  },
  {
    title: "El desorden que dejas",
    type: "series",
    category: "Drama",
    imgSrc: "./films-home/el-desorden.jpg",
  },
  {
    title: "Machos alfa",
    type: "series",
    category: "Comedia",
    imgSrc: "./films-home/machos-alfa.jpg",
  },
  {
    title: "Ozark",
    type: "series",
    category: "Drama",
    imgSrc: "./films-home/ozark.jpg",
  },
  {
    title: "Los Simpson",
    type: "series",
    category: "Animacion",
    imgSrc: "./films-home/los-simpson.jpeg",
  },
  {
    title: "¿Qué le pasó a lunes?",
    type: "movie",
    category: "Sci-fi",
    imgSrc: "./films-home/lunes.jpg",
  },
  {
    title: "Todo el dinero del mundo",
    type: "movie",
    category: "Drama",
    imgSrc: "./films-home/todo-dinero.jpg",
  },
  {
    title: "Los protectores",
    type: "series",
    category: "Comedia",
    imgSrc: "./films-home/los-protectores.avif",
  },
  {
    title: "Un cuento perfecto",
    type: "series",
    category: "Romance",
    imgSrc: "./films-home/cuento-perfecto.webp",
  },
  {
    title: "Hacks",
    type: "series",
    category: "Comedia",
    imgSrc: "./films-home/hacks.jpg",
  },
  {
    title: "Futurama",
    type: "series",
    category: "Animacion",
    imgSrc: "./films-home/futurama.jpg",
  },
  {
    title: "Bridgerton",
    type: "series",
    category: "Romance",
    imgSrc: "./films-home/Bridgerton.webp",
  },
  {
    title: "Shadowhunters",
    type: "series",
    category: "Fantasia",
    imgSrc: "./films-home/shadowhunters.webp",
  },
  {
    title: "Dr. House",
    type: "series",
    category: "Drama",
    imgSrc: "./films-home/house.jpg",
  },
  {
    title: "King the Land",
    type: "series",
    category: "Romance",
    imgSrc: "./films-home/king.jpg",
  },
  {
    title: "Ginny y Georgia",
    type: "series",
    category: "Drama",
    imgSrc: "./films-home/ginny-georgia.jpg",
  },
  {
    title: "Hannah Montana",
    type: "series",
    category: "Comedia",
    imgSrc: "./films-home/hanna.webp",
  },
  {
    title: "The Boys",
    type: "series",
    category: "Accion",
    imgSrc: "./films-home/boys.webp",
  },
  {
    title: "The OA",
    type: "series",
    category: "Sci-fi",
    imgSrc: "./films-home/oa.jpg",
  },
];
// filtro.js

document.addEventListener("DOMContentLoaded", function () {
  const categoriasSelect = document.getElementById("categorias");
  const filmsSection = document.querySelector(".films");
  const films = filmsSection.querySelectorAll(".film"); // Selecciona todos los elementos con la clase '.film'

  categoriasSelect.addEventListener("change", function () {
    const selectedCategoria = categoriasSelect.value;

    films.forEach(function (film) {
      const categoria = film.dataset.categoria; // Obtener la categoría del atributo 'data-categoria'

      if (selectedCategoria === "valor1" || categoria === selectedCategoria) {
        film.style.display = "block"; // Mostrar la película
      } else {
        film.style.display = "none"; // Ocultar la película
      }
    });
  });
});
// Cerrar sesión
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
