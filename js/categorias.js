const categorias = document.querySelectorAll("#categorias .categoria");
const contenedorPreguntas = document.querySelectorAll(".contenedor-preguntas");
let categoriaActiva = null;

//Categorias
categorias.forEach((categoria) => {
  categoria.addEventListener("click", (e) => {
    categorias.forEach((element) => element.classList.remove("activa"));
    e.currentTarget.classList.toggle("activa");
    categoriaActiva = categoria.dataset.categoria;

    //Activar contenedor de preguntas
    contenedorPreguntas.forEach((contenedor) => {
      if (contenedor.dataset.categoria === categoriaActiva) {
        contenedor.classList.add("activo");
      } else {
        contenedor.classList.remove("activo");
      }
    });
  });
});
