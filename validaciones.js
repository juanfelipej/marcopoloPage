document.addEventListener('DOMContentLoaded', function() {
    var nombreInput = document.getElementById('nombre');
    var cedulaInput = document.getElementById('cedula');
    var celularInput = document.getElementById('celular');
    var correoInput = document.getElementById('correo');
    var fechaNacimientoInput = document.getElementById('fecha_nacimiento');
    var submitButton = document.querySelector('.pulse');

    nombreInput.addEventListener('input', validarNombre);
    cedulaInput.addEventListener('input', validarCedula);
    celularInput.addEventListener('input', validarCelular);
    correoInput.addEventListener('input', validarCorreo);
    fechaNacimientoInput.addEventListener('input', validarFechaNacimiento);

    function validarNombre() {
        // Tu código de validación de nombre
    }

    function validarCedula() {
        // Tu código de validación de cédula
    }

    function validarCelular() {
        // Tu código de validación de celular
    }

    function validarCorreo() {
        // Tu código de validación de correo
    }

    function validarFechaNacimiento() {
        var fechaNacimiento = new Date(fechaNacimientoInput.value);
        var fechaHace18Anios = new Date();
        fechaHace18Anios.setFullYear(fechaHace18Anios.getFullYear() - 18);

        var fechaNacimientoError = document.getElementById('fecha_nacimiento-error');
        if (fechaNacimiento > fechaHace18Anios) {
            fechaNacimientoInput.classList.add('error');
            fechaNacimientoError.textContent = "Debe ser mayor de 18 años";
        } else {
            fechaNacimientoInput.classList.remove('error');
            fechaNacimientoError.textContent = "";
        }

        validarFormulario();
    }



    function validarFormulario() {
        if (nombreInput.classList.contains('error') || cedulaInput.classList.contains('error') || celularInput.classList.contains('error') || correoInput.classList.contains('error')) {
            submitButton.disabled = true;
            submitButton.style.backgroundColor = '#184e71';
        } else {
            submitButton.disabled = false;
            submitButton.style.backgroundColor = '';
        }
    }
});
