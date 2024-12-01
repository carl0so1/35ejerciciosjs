const imagenes = [
    'https://picsum.photos/id/1018/400/300',
    'https://picsum.photos/id/1015/400/300',
    'https://picsum.photos/id/1019/400/300'
];
let indiceActual = 0;
const imagenElemento = document.getElementById('imagenActual');
const anteriorBtn = document.getElementById('anteriorBtn');
const siguienteBtn = document.getElementById('siguienteBtn');

imagenElemento.src = imagenes[indiceActual];

siguienteBtn.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    imagenElemento.src = imagenes[indiceActual];
});

anteriorBtn.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    imagenElemento.src = imagenes[indiceActual];
});