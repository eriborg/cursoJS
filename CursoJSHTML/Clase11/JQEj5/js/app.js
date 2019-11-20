$(document).ready(function(){
   
    $('#btn1').click(function() {
        $('th').attr('style', 'background-color: pink; color: green');
        $('td').css({'color': 'cyan', 'font-size': '20px'});
        //opcion js
        /*let ths = document.getElementsByTagName('th');

        for ( th of ths) {
            th.setAttribute('style', 'background-color: pink; color: green');
        }*/

    });

    $('#btn2').click(function() {
        console.log($('th').css('background-color'));
    });

    $('#btn3').click(function() {
        $('th').removeAttr('style', 'background-color: pink; color: green');
        $('td').css('color', 'black');
        $('td').css('font-size', '1rem');
    });


});

let ths = document.getElementsByTagName('th');

for ( th of ths) {
    th.setAttribute('style', 'background-color: pink');
}