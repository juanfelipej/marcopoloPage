document.addEventListener('DOMContentLoaded', () => {
    const div1 = document.querySelector('#div1');
    const div2 = document.querySelector('#div2');
    const div3 = document.querySelector('#div3');
    const div4 = document.querySelector('#div4');
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    div1.addEventListener('click', () => {
        if (screenWidth <= 992){
            div1.style.transform = 'translateX(6vw) scale(0.7)';
            div2.style.transform = 'translateX(11vw) scale(0.4)';
            div3.style.transform = 'translateX(150vw) scale(0.4)';
            div4.style.transform = 'translateX(0) scale(0.4)';
        } else if (screenWidth <= 1200) {
            div1.style.transform = 'translateX(13vw) scale(0.8)';
            div2.style.transform = 'translateX(26vw) scale(0.5)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
        } else{
            div1.style.transform = 'translateX(23vw) scale(1)';
            div2.style.transform = 'translateX(46vw) scale(0.5)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
        }
    });
    
    div2.addEventListener('click', () => {
        if (screenWidth <= 992){
            div1.style.transform = 'translateX(-50vw) scale(0.4)';
            div2.style.transform = 'translateX(-58vw) scale(0.7)';
            div3.style.transform = 'translateX(-54vw) scale(0.4)';
            div4.style.transform = 'translateX(0) scale(0.5)';
        } else if (screenWidth <= 1200) {
            div1.style.transform = 'translateX(-42vw) scale(0.5)';
            div2.style.transform = 'translateX(-38vw) scale(0.8)';
            div3.style.transform = 'translateX(-24vw) scale(0.5)';
            div4.style.transform = 'translateX(27vw) scale(0.5)';
        } else{
            div1.style.transform = 'translateX(-21vw) scale(0.5)';
            div2.style.transform = 'translateX(-9vw) scale(1)';
            div3.style.transform = 'translateX(14vw) scale(0.5)';
            div4.style.transform = 'translateX(27vw) scale(0.5)';
        }
    });
    
    div3.addEventListener('click', () => {
        if (screenWidth <= 992){
            div1.style.transform = 'translateX(-70vw) scale(0.4)';
            div2.style.transform = 'translateX(-111vw) scale(0.4)';
            div3.style.transform = 'translateX(-119vw) scale(0.7)';
            div4.style.transform = 'translateX(-114vw) scale(0.4)';
        } else if (screenWidth <= 1200) {
            div1.style.transform = 'translateX(-150vw) scale(0.5)';
            div2.style.transform = 'translateX(-94vw) scale(0.5)';
            div3.style.transform = 'translateX(-90vw) scale(0.8)';
            div4.style.transform = 'translateX(-76vw) scale(0.5)';
        } else{
            div1.style.transform = 'translateX(-150vw) scale(0.5)';
            div2.style.transform = 'translateX(-54vw) scale(0.5)';
            div3.style.transform = 'translateX(-41vw) scale(1)';
            div4.style.transform = 'translateX(-18vw) scale(0.5)';
        }
    });
    
    div4.addEventListener('click', () => {
        if (screenWidth <= 992){
            div1.style.transform = 'translateX(-100vw) scale(0.4)';
            div2.style.transform = 'translateX(-200vw) scale(0.4)';
            div3.style.transform = 'translateX(-172vw) scale(0.4)';
            div4.style.transform = 'translateX(-180vw) scale(0.7)';
        } else if (screenWidth <= 1200) {
            div1.style.transform = 'translateX(-100vw) scale(0.5)';
            div2.style.transform = 'translateX(-200vw) scale(0.5)';
            div3.style.transform = 'translateX(-144vw) scale(0.5)';
            div4.style.transform = 'translateX(-141vw) scale(0.8)';
        } else {
            div1.style.transform = 'translateX(-100vw) scale(0.5)';
            div2.style.transform = 'translateX(-200vw) scale(0.5)';
            div3.style.transform = 'translateX(-85vw) scale(0.5)';
            div4.style.transform = 'translateX(-73vw) scale(1)';
        }
        
    });
});
