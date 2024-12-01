function agregarTarea() {
    const tareaInput = document.getElementById("tareaInput");
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto !== "") {

    const tareaElemento = document.createElement("li");
    const textoTarea = document.createElement("span");
     textoTarea.textContent = tareaTexto;
     tareaElemento.appendChild(textoTarea);

    const botonCompletar = document.createElement("button");
     botonCompletar.textContent = "Completar";
     botonCompletar.classList.add("completar");
     botonCompletar.onclick = function() {
            tareaElemento.classList.toggle("completa"); 
};
    tareaElemento.appendChild(botonCompletar);
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.onclick = function() {
            tareaElemento.remove();
};
    tareaElemento.appendChild(botonEliminar);

document.getElementById("tareasList").appendChild(tareaElemento);
    tareaInput.value = "";
} else {
    alert("Por favor, ingresa una tarea.");
  }
}
function limpiarTareas() {
    const tareasList = document.getElementById("tareasList");
    tareasList.innerHTML = "";
}