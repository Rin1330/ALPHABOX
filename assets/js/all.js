import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
import '../../node_modules/swiper/swiper-bundle.min.css'

window.addEventListener('DOMContentLoaded', () => {

  document.querySelector('#whatIs') ? swiperWhatIsInit() : null;
  document.querySelector('#swiperNews') ? swiperNewsInit() : null;
  document.querySelectorAll('#pills-ai-product') ? swiperProductsInit() : null;

  function swiperWhatIsInit() {
    const swiper = new Swiper('#whatIs', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // Navigation arrows
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
    })
  }

  function swiperNewsInit() {
    const swiperNews = new Swiper('#swiperNews', {
      spaceBetween : 24,
      slidesPerView: 3,
      scrollbar: {
        el: ".news-swiper .swiper-scrollbar",
        draggable: true,
      },
      mousewheel: true
    })
  }

  function swiperProductsInit() {
    const swiper = new Swiper('#pills-ai-product .swiper', {
      loop: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      effect: 'fade',
      crossFade: true,
      navigation: {
        prevEl: '.ai-products .swiper-button-prev',
        nextEl: '.ai-products .swiper-button-next',
      }
    })
  }

})