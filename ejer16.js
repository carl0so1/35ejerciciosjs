function encontrarComunes(array1, array2) {
  const comunes = [];
    for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          comunes.push(array1[i]);
          console.log("Elemento común encontrado:", array1[i]);
        }
    }
}
return comunes;
}
  
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6];
const comunes = encontrarComunes(array1, array2);

  console.log("Elementos comunes:", comunes);