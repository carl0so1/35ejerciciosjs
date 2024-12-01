function filtrarMayoresA10(array) {
 return array.filter(numero => numero > 10);
 }
let numeros = [3, 15, 7, 22, 9, 18];
let mayoresA10 = filtrarMayoresA10(numeros);
  console.log(mayoresA10); 