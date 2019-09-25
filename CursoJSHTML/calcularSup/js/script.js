//Recargar la página y ejecutar la funcion inicializarManejadores (se pasa la referencia de la funciion)
//js es asincronico
window.addEventListener('load', inicializarManejadores);

function inicializarManejadores(params) {
    //console.log("Se cargo la ventana");
    document.getElementById('btnCalcular').addEventListener('click', calcularSuperficie);   

}



function calcularSuperficie() {
    let radio = document.getElementById('txtRadio').value;
    let superficie = Math.PI * Math.pow(radio, 2);
    document.getElementById('txtSuperficie').value = superficie.toFixed(2);
}

//Funcion anonima version 1  cuando la quiero utilizar en un solo lugar, es <> con las funciones
/*let unaFuncion =function () {
    alert("Hola");
}

unaFuncion();

//Funcion anonima version 2
let otraFuncion = () =>{
    alert("Chau");
}

otraFuncion();*/

/*
window.addEventListener('load', function() {
    //console.log("Se cargo la ventana");
    document.getElementById('btnCalcular').addEventListener('click', calcularSuperficie);   

});

FUNCION CALLBACK
window.addEventListener('load', () ==> {
    //console.log("Se cargo la ventana");
    document.getElementById('btnCalcular').addEventListener('click', calcularSuperficie);   
});

*/

function calcular(operador1, operador2, callback) {
    return callback(operador1, operador2);
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if(b != 0){
        return a / b;
    }
}

let resultado = calcular(5, 6, dividir);

console.log(resultado);