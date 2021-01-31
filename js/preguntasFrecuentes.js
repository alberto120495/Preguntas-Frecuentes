const preguntas = document.querySelectorAll(".contendor-pregunta");

preguntas.forEach((pregunta) => {
  pregunta.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("activa");

    const respuesta = pregunta.querySelector(".respuesta");
    const alturaReal = respuesta.scrollHeight;

    if (!respuesta.style.maxHeight) {
      respuesta.style.maxHeight = alturaReal + "px";
    } else {
      respuesta.style.maxHeight = "";
    }

    //Mantener una sola pregunta activa

    preguntas.forEach((elemento) => {
      //Ejecuta para las preguntas que no sean la pregunta a la que dimos click
      if (pregunta !== elemento) {
        elemento.classList.remove("activa");
        elemento.querySelector(".respuesta").style.maxHeight = null;
      }
    });
  });
});
