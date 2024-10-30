
var swiper = new Swiper("#mySwiper", {
    autoplay: {
      delay: 4000,
    },
    slidesPerView: 1,
    spaceBetween: 30,
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
  });














