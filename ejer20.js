function crearObjetoDesdeArrays(claves, valores) {
 return claves.reduce((objeto, clave, indice) => {
    objeto[clave] = valores[indice];
return objeto;
 }, {});
}
const claves = ["nombre", "edad", "ciudad"];
const valores = ["Juanfeliz", 30, "Madrid"];

const resultado = crearObjetoDesdeArrays(claves, valores);
console.log(resultado);