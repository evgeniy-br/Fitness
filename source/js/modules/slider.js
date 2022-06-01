const eventButton = document.querySelector('.event__button');
const coachesSlide = document.querySelector('.coaches__slide');
const inputForward = document.querySelector('#coaches__slide-forward');
const inputBack = document.querySelector('#coaches__slide-back');

inputForward.addEventListener('focus', () => {
  coachesSlide.focus();
})

inputBack.addEventListener('focus', () => {
  eventButton.focus();
})

new Swiper('.coaches__swiper', {
  navigation: {
    prevEl: '.coaches__button-prev',
    nextEl: '.coaches__button-next',
  },
  slidesPerView: 1,
  spaceBetween: 15,
  initialSlide: 2,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

new Swiper('.comments__swiper', {
  navigation: {
    prevEl: '.comments__button-prev',
    nextEl: '.comments__button-next',
  },
  slidesPerView: 1,
  spaceBetween: 15,
  autoHeight: true,
});
