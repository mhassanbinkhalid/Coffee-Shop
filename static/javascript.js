let close=document.querySelector(".close");
let navbar2=document.getElementById("navbar2");
let menu=document.querySelector(".menu");

close.addEventListener("click",()=>{
    navbar2.style.right="-2000px";
});

menu.addEventListener("click",()=>{
    navbar2.style.right="0px";
    navbar2.style.transition="0.3s ease-in-out";

});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
  spaceBetween:25,
  grabCursor:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }

  });



