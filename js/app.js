import * as UI from "./interfaz.js";

UI.formularioBuscar.addEventListener("submit", buscarCancion);
console.log(UI);

function buscarCancion(e) {
  e.preventDefault();

  // Obtner datos del formulario
  const artista = document.querySelector("#artista").value;
  const cancion = document.querySelector("#cancion").value;

  if (artista === "" || cancion === "") {
    UI.divMensajes.textContent = "Error: Todos los campos son obligatios";
    UI.divMensajes.classList.add("error");

    setTimeout(() => {
      UI.divMensajes.textContent = "";
      UI.divMensajes.classList.remove("error");
    }, 3000);
  }
}
