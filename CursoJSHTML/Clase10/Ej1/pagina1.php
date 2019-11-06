<?php
    
    $nombre = $_GET['nombre'];
    $edad = $_GET['edad'];

    $respuesta = $nombre. " " .$edad;
    //simular un tiempo de latencia para que tarde y devuelva el dato
    sleep(4);

    echo $respuesta;

?>