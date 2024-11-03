


// var headingNavbar=document.querySelectorAll(".navbar");
const header = document.querySelector('nav');

window.addEventListener("scroll" ,function(e){
  if (window.scrollY > 300) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
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




