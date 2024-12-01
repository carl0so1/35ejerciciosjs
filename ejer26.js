document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const emailValido = email.includes('@') && email.includes('.');
    
    if (emailValido) {
        alert("Email válido");
    } else {
        alert("Email inválido");
    }
});