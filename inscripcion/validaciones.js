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
        var nombre = nombreInput.value;
        var nombreError = document.getElementById('nombre-error');
        if (nombre.length < 10 || /[^\w\s]/.test(nombre)) { // Aquí cambiamos la expresión regular para excluir los signos
            nombreInput.classList.add('error');
            nombreError.textContent = "Ingrese su nombre completo nuevamente";
        } else {
            nombreInput.classList.remove('error');
            nombreError.textContent = "";
        }
        validarFormulario();
        // Tu código de validación de nombre
    }

    function validarCedula() {
        var cedula = cedulaInput.value;
        var cedulaError = document.getElementById('cedula-error');
        if (cedula.length < 8 || /[^\d]/.test(cedula)) {
            cedulaInput.classList.add('error');
            cedulaError.textContent = "Debe contener solo números y mínimo 8 dígitos";
        } else {
            cedulaInput.classList.remove('error');
            cedulaError.textContent = "";
        }
        if (this.value.length > 15) {
            this.value = this.value.slice(0, 15);
          }
        validarFormulario();
        // Tu código de validación de cédula
    }

    function validarCelular() {
        var celular = celularInput.value;
        var celularError = document.getElementById('celular-error');
        if (celular.length < 10 || /[^\d]/.test(celular)) {
            celularInput.classList.add('error');
            celularError.textContent = "Ingrese mínimo 10 dígitos";
        } else {
            celularInput.classList.remove('error');
            celularError.textContent = "";
        }
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
          }
        validarFormulario();
       
    }

    function validarCorreo() {
        var correo = correoInput.value;
        var correoError = document.getElementById('correo-error');
        if (!/\S+@\S+\.\S+/.test(correo)) {
            correoInput.classList.add('error');
            correoError.textContent = "El correo debe tener el formato 'user@mail.com'";
        } else {
            correoInput.classList.remove('error');
            correoError.textContent = "";
        }
        validarFormulario();
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
        if (nombreInput.classList.contains('error') || fechaNacimientoInput.classList.contains('error') || correoInput.classList.contains('error') || cedulaInput.classList.contains('error') || celularInput.classList.contains('error') || correoInput.classList.contains('error')) {
            submitButton.disabled = true;
            submitButton.style.backgroundColor = '#184e71';
        } else {
            submitButton.disabled = false;
            submitButton.style.backgroundColor = '';
        }
    }
});
