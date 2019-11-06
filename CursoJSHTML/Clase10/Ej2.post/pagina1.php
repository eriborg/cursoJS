<?php
    
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];

    $respuesta = "$nombre. " " .$edad";
    //simular un tiempo de latencia para que tarde y devuelva el dato
    sleep(4);

    echo $respuesta;

?>