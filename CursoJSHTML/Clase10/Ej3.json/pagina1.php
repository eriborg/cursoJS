<?php
    
    $respuesta = "{\"nombre\": \"Tony\", \"apellido\": "Stark\"}";
    //simular un tiempo de latencia para que tarde y devuelva el dato
    sleep(4);

    echo $respuesta;
?>