function iniciar() {
let tiempo = 128;
const intervalo = setInterval(() => {
    document.getElementById('tiempo').textContent = --tiempo;
        if (tiempo <= 0) {
        clearInterval(intervalo);
        alert('Terminado');
    }
 }, 1000);
}