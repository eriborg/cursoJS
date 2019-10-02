/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
    var numero1 = parseInt(document.getElementById('numeroUno').value);
    var numero2 = parseInt(document.getElementById('numeroDos').value);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        var resta = numero1 - numero2;
        alert("La resta es " + resta);
    } else {
        alert("El valor ingresado no es un numero valido!");
    }
}

function multiplicar()
{ 
    var numero1 = parseInt(document.getElementById('numeroUno').value);
    var numero2 = parseInt(document.getElementById('numeroDos').value);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        var multi = numero1 * numero2;
        alert("La multiplicacion es " + multi);
    } else {
        alert("El valor ingresado no es un numero valido!");
    }
}

function dividir()
{
	var numero1 = parseInt(document.getElementById('numeroUno').value);
    var numero2 = parseInt(document.getElementById('numeroDos').value);

    if (!isNaN(numero1) && !isNaN(numero2) && !(numero2 == 0)) {
        var divi = numero1 / numero2;
        alert("La division es " + divi);
    } else {
        alert("El valor ingresado no es un numero valido!");
    }
}

