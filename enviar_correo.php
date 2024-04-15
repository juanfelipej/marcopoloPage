<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];
    
    $destinatario = "juanfelipej919@gmail.com";
    $asunto = "Mensaje de contacto de $nombre";
    $contenido = "Nombre: $nombre\nCorreo electrónico: $correo\nMensaje: $mensaje";
    
    $enviado = mail($destinatario, $asunto, $contenido);
    
    if($enviado) {
        echo "El correo ha sido enviado exitosamente.";
    } else {
        echo "Hubo un error al enviar el correo.";
    }
} else {
    echo "Acceso denegado.";
}
?>
