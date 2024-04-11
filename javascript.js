document.addEventListener('DOMContentLoaded', () => {
    const div1 = document.querySelector('#div1');
    const div2 = document.querySelector('#div2');
    const div3 = document.querySelector('#div3');
    const div4 = document.querySelector('#div4');
    
    

    div1.addEventListener('click', () => {
        console.log('Se hizo clic en el div 1');
        div1.classList.add = 'div2';
        div1.style.transform = 'translateX(555px)scale(1)';
        div2.style.transform = 'translateX(1090px) scale(0.5)';
        div3.style.transform = 'translateX(1084px)scale(0.5)';
        div4.style.transform = 'translateX(122px) scale(0.5)';
    });
    
    div2.addEventListener('click', () => {
        div1.style.transform = ' translateX(-385px)scale(0.5)';
        div2.style.transform = 'translateX(-177px)scale(1)';
        div3.style.transform = ' translateX(479px)scale(0.5)';
        div4.style.transform = 'translateX(500px) scale(0.5)';
    });

    div3.addEventListener('click', () => {
        div1.style.transform = 'translateX(-664px) scale(0.5)';
        div2.style.transform = 'translateX(-1038px) scale(0.5)';
        div3.style.transform = 'translateX(-699px) scale(1)';
        div4.style.transform = 'translateX(-141px) scale(0.5)';
        
    });
    div4.addEventListener('click', () => {
        div1.style.transform = 'translateX(-664px) scale(0.5)';
        div2.style.transform = 'translateX(-1238px) scale(0.5)';
        div3.style.transform = 'translateX(-1645px) scale(0.5)';
        div4.style.transform = 'translateX(-1317px) scale(1)';
    });
});
