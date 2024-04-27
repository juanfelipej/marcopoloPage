<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $cedula = $_POST["cedula"];
    $celular = $_POST["celular"];
    $correo = $_POST["correo"];

    // Construir el mensaje
    $mensaje = "Nombre y Apellido: $nombre\n";
    $mensaje .= "Cédula: $cedula\n";
    $mensaje .= "Celular: $celular\n";
    $mensaje .= "Correo electrónico: $correo\n";

    // Configurar el correo electrónico
    $destinatario = "tucorreo@example.com"; // Cambia esto por tu dirección de correo
    $asunto = "Nuevo formulario enviado";
    $headers = "From: $correo";

    // Enviar el correo electrónico
    if (mail($destinatario, $asunto, $mensaje, $headers)) {
        echo "El formulario ha sido enviado con éxito.";
    } else {
        echo "Hubo un error al enviar el formulario.";
    }
}
?>
