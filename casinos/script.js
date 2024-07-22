document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const animationDuration = 35; // Ajusta este valor para hacer el desplazamiento más lento o más rápido
    track.style.animationDuration = `${animationDuration}s`;

    const puertaDer = document.querySelector('#puertaDer');
    const puertaIzq = document.querySelector('#puertaIzq');
    const logoMPIntro = document.querySelector('#logoMPIntro');

    // Bloquear desplazamiento
    function preventScroll(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    // Bloquear scroll inicialmente
    document.body.style.overflow = 'hidden';

    // Aplicar transformaciones con una pequeña demora para permitir que se apliquen las transiciones CSS
    setTimeout(function() {
        puertaDer.style.transform = 'translateX(99vw)';
        puertaIzq.style.transform = 'translateX(-99vw)';
        logoMPIntro.style.opacity = '0';

        // Quitar bloqueo de desplazamiento después de 600 milisegundos
        setTimeout(function() {
            document.body.style.overflow = '';
            window.removeEventListener('scroll', preventScroll);
        }, 2500);

        // Ajusta este valor según sea necesario para evitar que la transición se vea afectada negativamente por la carga previa de la página
        var audio = document.getElementById('bienvenido');
        audio.play();
    }, 600); // Pequeña demora de 600 milisegundos
});
