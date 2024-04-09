document.addEventListener('DOMContentLoaded', () => {
    const div1 = document.querySelector('#div1');
    const div2 = document.querySelector('#div2');
    const div3 = document.querySelector('#div3');

    div1.addEventListener('click', () => {
        console.log('Se hizo clic en el div 1');
        div1.style.transform = 'translateX(712px) scale(2)';
        div2.style.transform = 'translateX(931px) scale(0.5)';
        div3.style.transform = 'translateX(664px)';
        
    });
    
    div2.addEventListener('click', () => {
        div1.style.transform = ' translateX(-206px)';
        div2.style.transform = 'translateX(0)';
        div3.style.transform = ' translateX(206px)';
    });

    div3.addEventListener('click', () => {
        div1.style.transform = 'translateX(-664px)';
        div2.style.transform = 'translateX(-931px) scale(0.5)';
        div3.style.transform = 'translateX(-712px) scale(2)';
    });
});
