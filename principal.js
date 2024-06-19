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
