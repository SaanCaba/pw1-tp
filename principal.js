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

// buscar.js

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("site-search");
  const filmsSection = document.querySelector(".films");
  const films = filmsSection.querySelectorAll(".film");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();

    films.forEach(function (film) {
      const altText = film.querySelector("img").alt.toLowerCase();

      if (altText.includes(searchTerm)) {
        film.style.display = "block"; // Mostrar la película si coincide con el término de búsqueda
      } else {
        film.style.display = "none"; // Ocultar la película si no coincide
      }
    });
  });
});

// Cerrar sesión
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
