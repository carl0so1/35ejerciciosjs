function comprobarParImpar() {
 const numero = document.getElementById('numero').value;
   const numeroInt = parseInt(numero);

if (numeroInt % 2 === 0) {
     document.getElementById('resultado').textContent = `El número ${numero} es par.`;
} else {
    document.getElementById('resultado').textContent = `El número ${numero} es impar.`;
  }
}