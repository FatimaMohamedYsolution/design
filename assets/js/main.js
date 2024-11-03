

// window.addEventListener("scroll" ,function(){
//   if (window.scrollY > 300) {
// $('.heading.bottom-heading.navbar').css({ backgroundColor:'red'});
//   } 
//   // else {
//   //   // $('#naaaaaav').css({top:'-12px'});
//   // }

//   console.log(window.scrollY)
// },false)

var headingNavbar=document.querySelectorAll(".navbar");

window.addEventListener("scroll" ,() =>{
  if (window.scrollY > 300) {
    headingNavbar.classList.add("scrolled");
  } else {
    headingNavbar.classList.remove("scrolled");
  }

  console.log(window.scrollY)
})





// var swiper = new Swiper("#mySwiper", {
//     autoplay: {
//       delay: 4000,
//     },
//     slidesPerView: 1,
//     spaceBetween: 60,
//     slidesPerGroup: 1,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     breakpoints: {
//           0: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           576: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           992: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           1200: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           1400: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//         },
//   });


// 
// $(document).ready(function(){
//   $('.dropdown-submenu a.test').on("click", function(e){
//     $(this).next('ul').toggle();
//     e.stopPropagation();
//     e.preventDefault();
//   });
// });



var swiper = new Swiper("#mySwiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Continue autoplay even after user interactions

  },
  centeredSlides: true,
  slidesPerGroup: 1,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
       
      },
  });




