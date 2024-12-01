function aplicarFuncion() {
  const inputArray = document.getElementById("inputArray").value;
  const array = JSON.parse(inputArray);

  const inputFuncion = document.getElementById("inputFuncion").value;
  const funcion = new Function("x", `return ${inputFuncion}`);
  const resultado = miMap(array, funcion);

document.getElementById("resultado").textContent = `Resultado: [${resultado}]`;
}