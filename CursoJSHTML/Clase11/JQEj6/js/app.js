$(document).ready(function(){
   
    $('#btn1').click(function() {
        $('p').addClass('rojo');

    });

    $('#btn2').click(function() {
        $('p').removeClass('rojo');
    });

    $('#btn3').click(function() {
        console.log($('p').attr('class'));
    });


});

