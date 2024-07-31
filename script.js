const headerEl = document.querySelector(".header");
const btnEl = document.querySelector(".menu_btn");

btnEl.addEventListener("click", function(){
    headerEl.classList.toggle("nav_open");
})

