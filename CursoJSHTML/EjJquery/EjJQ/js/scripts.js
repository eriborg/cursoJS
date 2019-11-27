$(function() {
    
    $('#btnLeft').click(function(){
        $('#miDiv').animate({left: '-=20px'});
    });

    $('#btnRight').click(function(){
        $('#miDiv').animate({left: '+=20px'}, 2000, 'linear', function () {
            alert("llegué");
        });
    });

    $('#btnUp').click(function(){
        $('#miDiv').animate({top: '-=20px'});
    });

    $('#btnDown').click(function(){
        $('#miDiv').animate({top: '+=20px'});
    });


});