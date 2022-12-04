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
