document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const animationDuration = 11; // Ajusta este valor para hacer el desplazamiento más lento o más rápido
    track.style.animationDuration = `${animationDuration}s`;

    const puertaDer = document.querySelector('#puertaDer');
    const puertaIzq = document.querySelector('#puertaIzq');
    const logoMPIntro = document.querySelector('#logoMPIntro');

    // Aplicar transformaciones con una pequeña demora para permitir que se apliquen las transiciones CSS
    setTimeout(function() {
        puertaDer.style.transform = 'translateX(99vw)';
        puertaIzq.style.transform = 'translateX(-99vw)';
        logoMPIntro.style.opacity = '0';
    }, 100); // Pequeña demora de 100 milisegundos

    // Ajusta este valor según sea necesario para evitar que la transición se vea afectada negativamente por la carga previa de la página

});
