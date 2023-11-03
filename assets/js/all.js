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

  const swiperNews = new Swiper('#swiperNews', {
    spaceBetween : 24,
    slidesPerView: 3,
    scrollbar: {
      el: ".news-swiper .swiper-scrollbar",
      draggable: true,
    },
    mousewheel: true
  })

})