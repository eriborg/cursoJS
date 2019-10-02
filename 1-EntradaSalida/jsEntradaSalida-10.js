/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe = parseInt(document.getElementById('importe').value);    

    if (!isNaN(importe)) {
        var descuento = importe * 0.75;
        document.getElementById('resultado').value = descuento;
    } else {
        alert("El valor ingresado no es un numero valido!");
    }
}
