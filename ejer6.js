let numeros = [12, 5, 8, 21, 3, 15, 6];
let ordenarArray = (array) => {
 let n = array.length;
  let temp;

for (let i = 0; i < n; i++) {
for (let j = 0; j < n - i - 1; j++) {
 if (array[j] > array[j + 1]) {
    
  temp = array[j];
   array[j] = array[j + 1];
    array[j + 1] = temp;
    }
  }
}
return array;
};
let arrayOrdenado = ordenarArray([...numeros]);
document.getElementById('original').textContent = numeros.join(', ');
document.getElementById('ordenado').textContent = arrayOrdenado.join(', ');