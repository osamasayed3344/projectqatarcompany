function displaymenu(){
    document.querySelector(".navbar_mobile").style.animation="anim_displaymenu 2s";
    document.querySelector(".navbar_mobile").style.display="flex";
    document.querySelector(".backgroound-menu").style.display="none";
    document.querySelector(".close-menu").style.display="block";
}

function closemenu(){
    document.querySelector(".navbar_mobile").style.animation="anim_displaymenu 2s";
    document.querySelector(".navbar_mobile").style.display="none";
    document.querySelector(".close-menu").style.display="none";
    document.querySelector(".backgroound-menu").style.display="block";
}