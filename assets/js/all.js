import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
import '../../node_modules/swiper/swiper-bundle.min.css'

window.addEventListener('DOMContentLoaded', () => {

  const swiper = new Swiper('#whatIs', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  });

  const newSwiper = new Swiper('#news-swiper', {
    spaceBetween: 24,
    mousewheel: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      // hide: false,
      draggable: true
    },
    slidePerView: "auto",
  })

})