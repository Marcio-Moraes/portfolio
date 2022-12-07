let barraNavegation = document.querySelector('.div_navegation');
barraNavegation.addEventListener('mouseover', (e)=>{    
    barraNavegation.classList.remove('animate__animated');
});

barraNavegation.addEventListener('mouseout', (e)=>{    
    barraNavegation.classList.add('animate__animated');
});