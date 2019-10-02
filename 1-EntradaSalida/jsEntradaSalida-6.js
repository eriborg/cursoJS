/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1 = parseInt(document.getElementById('numeroUno').value);
    var numero2 = parseInt(document.getElementById('numeroDos').value);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        var suma = numero1 + numero2;
        alert("La suma es " + suma);
    } else {
        alert("El valor ingresado no es un numero valido!");
    }

    

    
}

