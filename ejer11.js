function numerosMayores(array, numero) {
 return array.filter(num => num > numero);
}
let miArray = [1, 5, 3, 8, 2];
let numeroComparar = 4;
let resultado = numerosMayores(miArray, numeroComparar);
  console.log(resultado); 