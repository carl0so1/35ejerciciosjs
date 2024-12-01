function encontrarDuplicados(arr) {
    const duplicados = [];
    const contador = {};
  
    for (let num of arr) {
      if (contador[num]) {
        duplicados.push(num);
      } else {
        contador[num] = 1;
    }
 }

 return duplicados;
}
const numeros = [1, 2, 3, 2, 4, 1, 5];
const duplicados = encontrarDuplicados(numeros);
  console.log(duplicados);