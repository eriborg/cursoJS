$(document).ready(function(){
   
    $('#btn1').click(function() {        
        let formulario = '<form><label for="txtNombre">Nombre</label><input type="text" id="txtNombre"><br><label for="txtApellido">Apellido</label><input type="text" id="txtApellido"><br></form>';
        $('#divFrm').html(formulario);
    });
    

    $('#btn2').click(function() {
        console.log($('#divFrm').html());
    });

    $('#btn3').click(function() {
        
    });

    $('h1').mouseover(function() {
        $(this).attr('style', 'color: blue');
    });

    $('h1').mouseout(function() {
        $(this).removeAttr('style');
    });

    $('p').hover(mouseIn, mouseOut);

    $('#txtCategoria').focus(function() {
        //$(this).attr('value', "");
        $(this).val("");
    });

    $('#txtCategoria').blur(function() {
        if($(this).text().length === 0  ){
             //$(this).attr('value', "Buscar...");
             $(this).val("Buscar...");
        }
    });

    $('#btn3').click(function () {
        $('p').fadeOut('slow');
    });

    $('#btn4').click(function () {
        $('p').fadeIn('fast');
    });
    
    $('#btn5').click(function () {
        $('p').toggle('slow');
    });

});

function mouseIn() {
    $(this).css('color', 'red');
}

function mouseOut() {
    $(this).css('color', 'black');
}

