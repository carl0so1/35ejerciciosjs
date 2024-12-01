function eliminarDuplicados(array) {
    return [...new Set(array)];
} 
const numeros = [1, 2, 3, 2, 4, 1, 5];
const sinDuplicados = eliminarDuplicados(numeros);

  console.log(sinDuplicados); 