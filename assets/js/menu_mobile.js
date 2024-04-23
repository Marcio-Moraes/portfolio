function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

let areaTransparent = document.querySelector('.overlay');
areaTransparent.addEventListener('click', (e)=>{
    if(e.target.className == 'overlay'){
        closeNav();
    }
});


let btnMenuMobile = document.querySelector('.menu_mobile_icon');
btnMenuMobile.addEventListener('click', openNav);


let listaMenuMobile = document.querySelectorAll('.overlay-content a');
listaMenuMobile.forEach((i)=>{
    i.addEventListener('click', closeNav);
});