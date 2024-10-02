const header = document.querySelector("header_bottom");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>0);
})