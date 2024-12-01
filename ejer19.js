function contarPalabraEnArray(array, palabra) {
    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === palabra) {
            contador++;
   }
 }   
return contador;
}
const miArray = ["manzana", "banana", "manzana", "cereza", "manzana"];
const palabraABuscar = "manzana";

const resultado = contarPalabraEnArray(miArray, palabraABuscar);
console.log(`La palabra "${palabraABuscar}" aparece ${resultado} veces en el array.`);