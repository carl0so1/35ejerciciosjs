function agregarElemento() {
const nuevoElementoInput = document.getElementById("nuevoElemento");
const miLista = document.getElementById("miLista");

const nuevoItem = document.createElement("li");
nuevoItem.textContent = nuevoElementoInput.value;

 miLista.appendChild(nuevoItem);
   nuevoElementoInput.value = "";
}