let botonOcultar = document.getElementById('ocultarBtn');
let botonMostrar = document.getElementById('mostrarBtn');
let elemento = document.getElementById('miElemento');

botonOcultar.addEventListener('click', function() {
    elemento.style.display = 'none';
});

botonMostrar.addEventListener('click', function() {
    elemento.style.display = 'block';
});