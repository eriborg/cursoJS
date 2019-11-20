$(document).ready(function(){
   
    $('#btn1').click(function() {
        cambiarTexto();
    });

    $('#btn2').click(function() {
        mostrarTexto();
    });

    $('#btn3').click(function() {
        $('p').text('Hola Jquery');//en js se harìa un array que se recorra todos los p y le aplica los cambios a todo
    });


});

function cambiarTexto() {
    $('h1').text('Hola Jquery');//funciona como setter la funcion text
}
function mostrarTexto() {
    console.log($('h1').text());//funciona como getter
}