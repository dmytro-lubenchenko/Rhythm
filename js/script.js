"use strict"

const reviewsSwiper = document.querySelector('.swiper-reviews')

if (reviewsSwiper) {
    const swiper = new Swiper('.swiper-reviews', {
        // Optional parameters
        loop: true,
        navigation: true,
        autoplay: {
            delay: 2000,
            reverseDirection: true,
          },
        freeMode: {
            enabled: true,
            sticky: true,
        },
        autoHeight: true,
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
      });
}