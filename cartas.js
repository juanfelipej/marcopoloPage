window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const scrollMax = document.body.scrollHeight - window.innerHeight;
    const scrollRatio = scrollTop / scrollMax;

    const cartas = document.querySelector('.card');
    
    // Escalar de 0 a 100 más rápidamente
    let scaleValue = scrollRatio * 100 * 1.3; // Multiplicador de velocidad (ajustable)
    if (scaleValue > 100) scaleValue = 100; // Limitar a escala máxima de 100
    
    // Girar 180 grados más rápidamente
    const rotationDegrees = scrollRatio * 115 * 3.0; // Multiplicador de velocidad (ajustable)
    
    // Aplicar transformaciones
    cartas.style.transform = `scale(${scaleValue / 150}) rotate(${rotationDegrees}deg)`;
    
    // Cuando el usuario hace scroll hacia arriba, escalar a 0 y girar de nuevo
    if (scrollTop === 0) {
        cartas.style.transform = 'scale(0) rotate(0deg)';
    }
});
