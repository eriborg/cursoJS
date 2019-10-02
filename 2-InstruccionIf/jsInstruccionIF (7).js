function mostrar()
{
//tomo la edad 
    var edad = parseInt(document.getElementById('edad').value);
    var estadoCivil = document.getElementById('estadoCivil').value;

    if (!isNaN(edad) && edad > 0) {
        if (edad < 18 && (estadoCivil === "Casado" || estadoCivil === "Divorciado")) {
             alert("Es muy pequeño para NO ser soltero.");
        } else {
            alert("Su edad es " + edad + " y su estado civil es " + estadoCivil);
        }
    } else {
            alert("Ingreso un dato valido");
    }
}//FIN DE LA FUNCIÓN