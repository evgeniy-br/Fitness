const sliderCoaches = new Swiper('.coaches__swiper', {
  navigation: {
    prevEl: '.coaches__button-prev',
    nextEl: '.coaches__button-next',
  },
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  autoHeight: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const sliderComments = new Swiper('.comments__swiper', {
  navigation: {
    prevEl: '.comments__button-prev',
    nextEl: '.comments__button-next',
  },
  slidesPerView: 1,
  spaceBetween: 15,
  autoHeight: true,
});
