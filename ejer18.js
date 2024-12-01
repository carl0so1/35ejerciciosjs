function generarNumerosAleatorios(cantidad) {
const numerosAleatorios = [];
  for (let i = 0; i < cantidad; i++) {
  numerosAleatorios.push(Math.floor(Math.random() * 100) + 1);
 }
return numerosAleatorios;
}
  
const cantidadNumeros = 10;
const numeros = generarNumerosAleatorios(cantidadNumeros);

 console.log(numeros);