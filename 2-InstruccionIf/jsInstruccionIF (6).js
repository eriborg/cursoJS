function mostrar()
{
//tomo la edad  
    var edad = parseInt(document.getElementById('edad').value);

    if (!isNaN(edad)) {
        if (edad >= 18) {
            alert("Eres mayor de edad");
        } else if (edad > 12 && edad < 18) {
            alert("Eres un adolescente");
        } else {
            alert("Eres un niño");
        }
    }
}//FIN DE LA FUNCIÓN