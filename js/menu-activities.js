var getMenuIcon = document.querySelector(".menubar");
var getHeader = document.querySelector(".menu");
var getHeaderScroll = document.querySelector(".header-scroll");
var getList = document.querySelector(".menu>nav>ul");

document.addEventListener("scroll",()=>{
    if(window.scrollY >100){
        getHeaderScroll.style.position = "fixed";
        getHeaderScroll.style.margin = "-20px 0 0 0";
    }
    if(window.scrollY == 0){
        getHeaderScroll.style.position = "sticky";
        getHeaderScroll.style.margin = "auto";
    }
})