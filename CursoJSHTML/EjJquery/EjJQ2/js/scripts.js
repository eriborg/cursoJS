$(function() {

    let persona = {nombre: "Juan", apellido: "Perez", edad: 30};
    
    $('#btnLeft').on('click', colorear);
    $('#btnLeft').on('click', agrandar);

    $('#btnRight').click(function(){
        //$('#btnLeft').off('click', colorear);
        $.each(persona, function (clave, valor) {
            console.log(clave + " = " + valor);//con el metodo each recorre el objeto
        });
    });
  

});

function colorear() {
    $('#miDiv').css('background-color','red');
}

function agrandar() {
    $('#miDiv').css('font-size', '+=5px');
}