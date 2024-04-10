document.addEventListener('DOMContentLoaded', () => {
    const div1 = document.querySelector('#div1');
    const div2 = document.querySelector('#div2');
    const div3 = document.querySelector('#div3');

    div1.addEventListener('click', () => {
        console.log('Se hizo clic en el div 1');
        div1.classList.add = 'div2';
        div1.style.transform = 'translateX(445px)scale(1)';
        div2.style.transform = 'translateX(861px) scale(0.5)';
        div3.style.transform = 'translateX(664px)scale(0.5)';
        
    });
    
    div2.addEventListener('click', () => {
        div1.style.transform = ' translateX(-386px)scale(0.5)';
        div2.style.transform = 'translateX(-177px)scale(1)';
        div3.style.transform = ' translateX(219px)scale(0.5)';
    });

    div3.addEventListener('click', () => {
        div1.style.transform = 'translateX(-664px) scale(0.5)';
        div2.style.transform = 'translateX(-1038px) scale(0.5)';
        div3.style.transform = 'translateX(-832px) scale(1)';
    });
});
