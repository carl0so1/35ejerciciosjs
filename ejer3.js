const numeros = [15, 27, 5, 49, 32, 8, 90];
const encontrarMaximo = (array) => {
    let maximo = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i]; 
        }
    }
return maximo;
};
const maximo = encontrarMaximo(numeros);
document.getElementById('resultado').textContent = maximo;