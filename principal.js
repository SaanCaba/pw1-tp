// filtro.js

document.addEventListener("DOMContentLoaded", function () {
  const filmsSection = document.querySelector(".films");
  const films = filmsSection.querySelectorAll(".film, .serie");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("site-search");
  const categorySelect = document.getElementById("categorias");
  const noResultsMessage = document.getElementById("no-results");
  const filterHomeButton = document.getElementById("filterHome");
  const filterMoviesButton = document.getElementById("filterMovies");
  const filterSeriesButton = document.getElementById("filterSeries");

  let currentFilter = "todos";

  const filterContent = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategories = Array.from(categorySelect.selectedOptions).map(
      (option) => option.value
    );
    let found = false;

    films.forEach((film) => {
      const altText = film.querySelector("img").alt.toLowerCase();
      const filmCategory = film.dataset.categoria;

      const matchesSearch = altText.includes(searchTerm);
      const matchesCategory =
        selectedCategories.includes("todos") ||
        selectedCategories.includes(filmCategory);
      const matchesType =
        currentFilter === "todos" || film.classList.contains(currentFilter);

      if (matchesSearch && matchesCategory && matchesType) {
        film.style.display = "block";
        found = true;
      } else {
        film.style.display = "none";
      }
    });

    noResultsMessage.style.display = found ? "none" : "block";
  };

  searchForm.addEventListener("input", function (event) {
    event.preventDefault();
    filterContent();
  });

  categorySelect.addEventListener("change", function () {
    filterContent();
  });

  filterHomeButton.addEventListener("click", function (event) {
    event.preventDefault();
    currentFilter = "todos";
    filterContent();
  });

  filterMoviesButton.addEventListener("click", function (event) {
    event.preventDefault();
    currentFilter = "film";
    filterContent();
  });

  filterSeriesButton.addEventListener("click", function (event) {
    event.preventDefault();
    currentFilter = "serie";
    filterContent();
  });
});

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