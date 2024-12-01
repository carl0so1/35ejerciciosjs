function mostrarTextoEnTiempoReal() {
  const input = document.getElementById("miInput");
  const textoEnPantalla = document.getElementById("textoEnPantalla");

    textoEnPantalla.textContent = input.value;
}