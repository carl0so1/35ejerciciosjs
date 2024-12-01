let numeros = [10, 20, 30, 40, 50];
let sumaArray = (array) => {
    return array.reduce((acc, num) => acc + num, 0);
};
let resultado = sumaArray(numeros);

document.getElementById('resultado').textContent = resultado;