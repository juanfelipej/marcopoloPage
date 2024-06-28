document.getElementById('audioLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    var audio = document.getElementById('clickSound');
    audio.currentTime = 0; // Reiniciar el audio
    audio.play();

    // Desplazar suavemente al elemento con el ID 'intro'
    document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('div1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    var audio = document.getElementById('slide1Sound');
    audio.play();

   
});
document.getElementById('div2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    var audio = document.getElementById('slide2Sound');
    audio.play();

   
});

document.getElementById('div3').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    var audio = document.getElementById('slide3Sound');
    audio.play();

   
});

document.getElementById('div4').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    var audio = document.getElementById('slide4Sound');
    audio.play();

   
});
document.addEventListener('DOMContentLoaded', (event) => {
    var links = document.getElementsByClassName('vermas');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            var audio = document.getElementById('clic');
            audio.play();

            // Redirigir después de un breve retraso para permitir la reproducción del sonido
            setTimeout(function() {
                window.location.href = event.target.closest('a').href;
            }, 300); // Ajusta el tiempo según sea necesario
        });
    }
});





