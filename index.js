let menuMobile = document.querySelector(".mobile-container");
let menuBtn = document.querySelector(".menu-btn");
let content = document.querySelector(".content");

menuBtn.addEventListener('click', clicar)
function clicar(){

    if(!menuMobile.classList.contains('active')){
        menuMobile.classList.add('active');
    }else{
        menuMobile.classList.remove('active');
    }

}