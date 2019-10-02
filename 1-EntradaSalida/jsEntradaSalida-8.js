/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numero1 = parseInt(document.getElementById('numeroDividendo').value);
    var numero2 = parseInt(document.getElementById('numeroDivisor').value);

    if (!isNaN(numero1) && !isNaN(numero2) && !(numero2 == 0)) {
        var resto = numero1 % numero2;
        alert("El resto es " + resto);
    } else {
        alert("El valor ingresado no es un numero valido!");
    }
}
