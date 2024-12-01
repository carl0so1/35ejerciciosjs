const original = "hola";
const invertirString = (str) => {
    let invertido = ''; 
    for (let i = str.length - 1; i >= 0; i--) {
        invertido += str[i];  
    }
return invertido;
};

const invertido = invertirString(original);
document.getElementById('original').textContent = original;
document.getElementById('invertido').textContent = invertido;