<?php 
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['asunto'];

    $emailDestino = "chjesuscode@gmail.com";
    $asunto = "Contacto de mi sitio web";

    $carta = "De: $nombre \n";
    $carta .= "Tèlefono: $telefono Correo: $correo \n";
    $carta .= "Mensaje: $mensaje";

    mail($emailDestino,$asunto,$carta);
?>