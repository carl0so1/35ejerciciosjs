function convertirAMayusculas(array) {
 return array.map(palabra => palabra.toUpperCase());
}
const palabras = ["hola", "mundo", "javascript"];
const palabrasMayusculas = convertirAMayusculas(palabras);
console.log(palabrasMayusculas); 