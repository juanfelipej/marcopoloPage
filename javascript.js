document.addEventListener('DOMContentLoaded', () => {
    const div1 = document.querySelector('#div1');
    const div2 = document.querySelector('#div2');
    const div3 = document.querySelector('#div3');
    const div4 = document.querySelector('#div4');
    const ubi1 = document.querySelector('#ubi1');
    const ubi2 = document.querySelector('#ubi2');
    const ubi3 = document.querySelector('#ubi3');
    const ubi4 = document.querySelector('#ubi4');
    const btnSiguienteIzqBGT = document.querySelector('#btnSiguienteIzqBGT');
    const btnSiguienteIzqHLG = document.querySelector('#btnSiguienteIzqHLG');

    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    div1.addEventListener('click', () => {
        btnSiguienteIzqBGT.style.display = "none";
        btnSiguienteIzqHLG.style.display = "block";
        if (screenWidth <= 992){
            div1.style.transform = 'translateX(6vw) scale(0.7)';
            div2.style.transform = 'translateX(10vw) scale(0.4)';
            div3.style.transform = 'translateX(150vw) scale(0.4)';
            div4.style.transform = 'translateX(0) scale(0.4)';
        } else if (screenWidth <= 1024) {
            div1.style.transform = 'translateX(7vw) scale(0.7)';
            div2.style.transform = 'translateX(10vw) scale(0.4)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
        } else if (screenWidth <= 1280) {
            div1.style.transform = 'translateX(14vw) scale(0.8)';
            div2.style.transform = 'translateX(27vw) scale(0.5)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
        }   else if (screenWidth <= 1366) {
            div1.style.transform = 'translateX(17vw) scale(0.8)';
            div2.style.transform = 'translateX(29vw) scale(0.5)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
      
        }else if (screenWidth <= 1440) {
            div1.style.transform = 'translateX(17vw) scale(0.8)';
            div2.style.transform = 'translateX(29vw) scale(0.5)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
      
        } else if (screenWidth <= 1680) {
            div1.style.transform = 'translateX(22vw) scale(0.8)';
            div2.style.transform = 'translateX(34vw) scale(0.5)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
      
        }
         
        
        else{
            div1.style.transform = 'translateX(23vw) scale(1)';
            div2.style.transform = 'translateX(46vw) scale(0.5)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
        }
    });
    
    div2.addEventListener('click', () => {
        btnSiguienteIzqBGT.style.display = "block";
        btnSiguienteIzqHLG.style.display = "none";
        if (screenWidth <= 992){
            div1.style.transform = 'translateX(-50vw) scale(0.4)';
            div2.style.transform = 'translateX(-58vw) scale(0.7)';
            div3.style.transform = 'translateX(-54vw) scale(0.4)';
            div4.style.transform = 'translateX(0) scale(0.5)';
        } else if (screenWidth <= 1024) {
            div1.style.transform = 'translateX(-42vw) scale(0.4)';
            div2.style.transform = 'translateX(-53vw) scale(0.7)';
            div3.style.transform = 'translateX(-51vw) scale(0.4)';
            div4.style.transform = 'translateX(0) scale(0.4)';
        } else if (screenWidth <= 1280) {
            div1.style.transform = 'translateX(-38vw) scale(0.5)';
            div2.style.transform = 'translateX(-34vw) scale(0.8)';
            div3.style.transform = 'translateX(-20vw) scale(0.5)';
            div4.style.transform = 'translateX(27vw) scale(0.5)';
        } else if (screenWidth <= 1366) {
            div1.style.transform = 'translateX(-31vw) scale(0.5)';
            div2.style.transform = 'translateX(-28vw) scale(0.8)';
            div3.style.transform = 'translateX(-16vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
            
        } else if (screenWidth <= 1440) {
            div1.style.transform = 'translateX(-28vw) scale(0.5)';
            div2.style.transform = 'translateX(-26vw) scale(0.8)';
            div3.style.transform = 'translateX(-15vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
      
        } else if (screenWidth <= 1680) {
            div1.style.transform = 'translateX(-18vw) scale(0.5)';
            div2.style.transform = 'translateX(-14vw) scale(0.8)';
            div3.style.transform = 'translateX(-3vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
      
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
            div4.style.transform = 'translateX(-109vw) scale(0.5)';
        } else if (screenWidth <= 1024) {
            div1.style.transform = 'translateX(-62vw) scale(0.4)';
            div2.style.transform = 'translateX(-103vw) scale(0.4)';
            div3.style.transform = 'translateX(-114vw) scale(0.7)';
            div4.style.transform = 'translateX(-112vw) scale(0.4)';
        } else if (screenWidth <= 1280) {
            div1.style.transform = 'translateX(-150vw) scale(0.5)';
            div2.style.transform = 'translateX(-87vw) scale(0.5)';
            div3.style.transform = 'translateX(-82vw) scale(0.8)';
            div4.style.transform = 'translateX(-67vw) scale(0.5)';
        } else if (screenWidth <= 1366) {
            div1.style.transform = 'translateX(-51vw) scale(0.5)';
            div2.style.transform = 'translateX(-78vw) scale(0.5)';
            div3.style.transform = 'translateX(-73vw) scale(0.8)';
            div4.style.transform = 'translateX(-60vw) scale(0.5)';
            
        } else if (screenWidth <= 1440) {
            div1.style.transform = 'translateX(-38vw) scale(0.5)';
            div2.style.transform = 'translateX(-71vw) scale(0.5)';
            div3.style.transform = 'translateX(-68vw) scale(0.8)';
            div4.style.transform = 'translateX(-56vw) scale(0.5)';
      
        } else if (screenWidth <= 1680) {
            div1.style.transform = 'translateX(-43vw) scale(0.5)';
            div2.style.transform = 'translateX(-55vw) scale(0.5)';
            div3.style.transform = 'translateX(-51vw) scale(0.8)';
            div4.style.transform = 'translateX(-40vw) scale(0.5)';
      
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
        } else if (screenWidth <= 1024) {
            div1.style.transform = 'translateX(-62vw) scale(0.4)';
            div2.style.transform = 'translateX(-200vw) scale(0.5)';
            div3.style.transform = 'translateX(-164vw) scale(0.4)';
            div4.style.transform = 'translateX(-174vw) scale(0.7)';
        } else if (screenWidth <= 1280) {
            div1.style.transform = 'translateX(-100vw) scale(0.5)';
            div2.style.transform = 'translateX(-200vw) scale(0.5)';
            div3.style.transform = 'translateX(-132vw) scale(0.5)';
            div4.style.transform = 'translateX(-129vw) scale(0.8)';
        } else if (screenWidth <= 1366) {
            div1.style.transform = 'translateX(-51vw) scale(0.5)';
            div2.style.transform = 'translateX(-98vw) scale(0.5)';
            div3.style.transform = 'translateX(-123vw) scale(0.5)';
            div4.style.transform = 'translateX(-118vw) scale(0.8)';
            
        } else if (screenWidth <= 1440) {
            div1.style.transform = 'translateX(-38vw) scale(0.5)';
            div2.style.transform = 'translateX(-200vw) scale(0.5)';
            div3.style.transform = 'translateX(-112vw) scale(0.5)';
            div4.style.transform = 'translateX(-110vw) scale(0.8)';
      
        } else if (screenWidth <= 1680) {
            div1.style.transform = 'translateX(-43vw) scale(0.5)';
            div2.style.transform = 'translateX(-82vw) scale(0.5)';
            div3.style.transform = 'translateX(-92vw) scale(0.5)';
            div4.style.transform = 'translateX(-87vw) scale(0.8)';
      
        } else {
            div1.style.transform = 'translateX(-100vw) scale(0.5)';
            div2.style.transform = 'translateX(-200vw) scale(0.5)';
            div3.style.transform = 'translateX(-85vw) scale(0.5)';
            div4.style.transform = 'translateX(-73vw) scale(1)';
        }
        
    });

    ubi1.addEventListener('click', () => {
        if (screenWidth <= 992){
            div1.style.transform = 'translateX(6vw) scale(0.7)';
            div2.style.transform = 'translateX(10vw) scale(0.4)';
            div3.style.transform = 'translateX(150vw) scale(0.4)';
            div4.style.transform = 'translateX(0) scale(0.4)';
        } else if (screenWidth <= 1024) {
            div1.style.transform = 'translateX(7vw) scale(0.7)';
            div2.style.transform = 'translateX(10vw) scale(0.4)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
        } else if (screenWidth <= 1280) {
            div1.style.transform = 'translateX(14vw) scale(0.8)';
            div2.style.transform = 'translateX(27vw) scale(0.5)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
        }   else if (screenWidth <= 1366) {
            div1.style.transform = 'translateX(17vw) scale(0.8)';
            div2.style.transform = 'translateX(29vw) scale(0.5)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
      
        }else if (screenWidth <= 1440) {
            div1.style.transform = 'translateX(17vw) scale(0.8)';
            div2.style.transform = 'translateX(29vw) scale(0.5)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
      
        } else if (screenWidth <= 1680) {
            div1.style.transform = 'translateX(22vw) scale(0.8)';
            div2.style.transform = 'translateX(34vw) scale(0.5)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
      
        }
         
        
        else{
            div1.style.transform = 'translateX(23vw) scale(1)';
            div2.style.transform = 'translateX(46vw) scale(0.5)';
            div3.style.transform = 'translateX(150vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
        }
    });
    
    ubi2.addEventListener('click', () => {
        if (screenWidth <= 992){
            div1.style.transform = 'translateX(-50vw) scale(0.4)';
            div2.style.transform = 'translateX(-58vw) scale(0.7)';
            div3.style.transform = 'translateX(-54vw) scale(0.4)';
            div4.style.transform = 'translateX(0) scale(0.5)';
        } else if (screenWidth <= 1024) {
            div1.style.transform = 'translateX(-42vw) scale(0.4)';
            div2.style.transform = 'translateX(-53vw) scale(0.7)';
            div3.style.transform = 'translateX(-51vw) scale(0.4)';
            div4.style.transform = 'translateX(0) scale(0.4)';
        } else if (screenWidth <= 1280) {
            div1.style.transform = 'translateX(-38vw) scale(0.5)';
            div2.style.transform = 'translateX(-34vw) scale(0.8)';
            div3.style.transform = 'translateX(-20vw) scale(0.5)';
            div4.style.transform = 'translateX(27vw) scale(0.5)';
        } else if (screenWidth <= 1366) {
            div1.style.transform = 'translateX(-31vw) scale(0.5)';
            div2.style.transform = 'translateX(-28vw) scale(0.8)';
            div3.style.transform = 'translateX(-16vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
            
        } else if (screenWidth <= 1440) {
            div1.style.transform = 'translateX(-28vw) scale(0.5)';
            div2.style.transform = 'translateX(-26vw) scale(0.8)';
            div3.style.transform = 'translateX(-15vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
      
        } else if (screenWidth <= 1680) {
            div1.style.transform = 'translateX(-18vw) scale(0.5)';
            div2.style.transform = 'translateX(-14vw) scale(0.8)';
            div3.style.transform = 'translateX(-3vw) scale(0.5)';
            div4.style.transform = 'translateX(0) scale(0.5)';
      
        } else{
            div1.style.transform = 'translateX(-21vw) scale(0.5)';
            div2.style.transform = 'translateX(-9vw) scale(1)';
            div3.style.transform = 'translateX(14vw) scale(0.5)';
            div4.style.transform = 'translateX(27vw) scale(0.5)';
        }
    });
    
    ubi3.addEventListener('click', () => {
        if (screenWidth <= 992){
            div1.style.transform = 'translateX(-70vw) scale(0.4)';
            div2.style.transform = 'translateX(-111vw) scale(0.4)';
            div3.style.transform = 'translateX(-119vw) scale(0.7)';
            div4.style.transform = 'translateX(-109vw) scale(0.5)';
        } else if (screenWidth <= 1024) {
            div1.style.transform = 'translateX(-62vw) scale(0.4)';
            div2.style.transform = 'translateX(-103vw) scale(0.4)';
            div3.style.transform = 'translateX(-114vw) scale(0.7)';
            div4.style.transform = 'translateX(-112vw) scale(0.4)';
        } else if (screenWidth <= 1280) {
            div1.style.transform = 'translateX(-150vw) scale(0.5)';
            div2.style.transform = 'translateX(-87vw) scale(0.5)';
            div3.style.transform = 'translateX(-82vw) scale(0.8)';
            div4.style.transform = 'translateX(-67vw) scale(0.5)';
        } else if (screenWidth <= 1366) {
            div1.style.transform = 'translateX(-51vw) scale(0.5)';
            div2.style.transform = 'translateX(-78vw) scale(0.5)';
            div3.style.transform = 'translateX(-73vw) scale(0.8)';
            div4.style.transform = 'translateX(-60vw) scale(0.5)';
            
        } else if (screenWidth <= 1440) {
            div1.style.transform = 'translateX(-38vw) scale(0.5)';
            div2.style.transform = 'translateX(-71vw) scale(0.5)';
            div3.style.transform = 'translateX(-68vw) scale(0.8)';
            div4.style.transform = 'translateX(-56vw) scale(0.5)';
      
        } else if (screenWidth <= 1680) {
            div1.style.transform = 'translateX(-43vw) scale(0.5)';
            div2.style.transform = 'translateX(-55vw) scale(0.5)';
            div3.style.transform = 'translateX(-51vw) scale(0.8)';
            div4.style.transform = 'translateX(-40vw) scale(0.5)';
      
        } else{
            div1.style.transform = 'translateX(-150vw) scale(0.5)';
            div2.style.transform = 'translateX(-54vw) scale(0.5)';
            div3.style.transform = 'translateX(-41vw) scale(1)';
            div4.style.transform = 'translateX(-18vw) scale(0.5)';
        }
    });
    
    ubi4.addEventListener('click', () => {
        if (screenWidth <= 992){
            div1.style.transform = 'translateX(-100vw) scale(0.4)';
            div2.style.transform = 'translateX(-200vw) scale(0.4)';
            div3.style.transform = 'translateX(-172vw) scale(0.4)';
            div4.style.transform = 'translateX(-180vw) scale(0.7)';
        } else if (screenWidth <= 1024) {
            div1.style.transform = 'translateX(-62vw) scale(0.4)';
            div2.style.transform = 'translateX(-200vw) scale(0.5)';
            div3.style.transform = 'translateX(-164vw) scale(0.4)';
            div4.style.transform = 'translateX(-174vw) scale(0.7)';
        } else if (screenWidth <= 1280) {
            div1.style.transform = 'translateX(-100vw) scale(0.5)';
            div2.style.transform = 'translateX(-200vw) scale(0.5)';
            div3.style.transform = 'translateX(-132vw) scale(0.5)';
            div4.style.transform = 'translateX(-129vw) scale(0.8)';
        } else if (screenWidth <= 1366) {
            div1.style.transform = 'translateX(-51vw) scale(0.5)';
            div2.style.transform = 'translateX(-98vw) scale(0.5)';
            div3.style.transform = 'translateX(-123vw) scale(0.5)';
            div4.style.transform = 'translateX(-118vw) scale(0.8)';
            
        } else if (screenWidth <= 1440) {
            div1.style.transform = 'translateX(-38vw) scale(0.5)';
            div2.style.transform = 'translateX(-200vw) scale(0.5)';
            div3.style.transform = 'translateX(-112vw) scale(0.5)';
            div4.style.transform = 'translateX(-110vw) scale(0.8)';
      
        } else if (screenWidth <= 1680) {
            div1.style.transform = 'translateX(-43vw) scale(0.5)';
            div2.style.transform = 'translateX(-82vw) scale(0.5)';
            div3.style.transform = 'translateX(-92vw) scale(0.5)';
            div4.style.transform = 'translateX(-87vw) scale(0.8)';
      
        } else {
            div1.style.transform = 'translateX(-100vw) scale(0.5)';
            div2.style.transform = 'translateX(-200vw) scale(0.5)';
            div3.style.transform = 'translateX(-85vw) scale(0.5)';
            div4.style.transform = 'translateX(-73vw) scale(1)';
        }
        
    });

});
