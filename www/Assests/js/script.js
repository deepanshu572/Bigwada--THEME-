var mnu = document.querySelector(".i1");
var close = document.querySelector(".i2");
var nav = document.querySelector(".resp-nav");
if (mnu && close && nav) {
mnu.addEventListener("click", function(){
    nav.style.left = "0%";
})
close.addEventListener("click", function(){
    nav.style.left = "-100%";
})

}
$(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
    });


    