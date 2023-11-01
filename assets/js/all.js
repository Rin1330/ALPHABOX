import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
import '../../node_modules/swiper/swiper-bundle.min.css'

window.addEventListener('DOMContentLoaded', () => {
  console.log('hi');

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

})