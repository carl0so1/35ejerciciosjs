function generarArrayNumeros(limite) {
  const numeros = [];
    for (let i = 1; i <= limite; i++) {
   numeros.push(i);
  }
return numeros;
}
const miArray = generarArrayNumeros(20);
console.log(miArray); 