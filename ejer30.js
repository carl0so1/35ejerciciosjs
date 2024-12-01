const seguidor = document.getElementById('seguidor');

document.addEventListener('mousemove', (e) => {
    seguidor.style.left = (e.clientX - 25) + 'px';
    seguidor.style.top = (e.clientY - 25) + 'px';
});