function mostrar()
{
//tomo la edad  
    var edad = document.getElementById('edad').value;

    if (edad >= 18) {
        alert("Ud. es mayor de edad");
    } else {
        alert("Ud. es un menor de edad");
    }

}//FIN DE LA FUNCIÓN