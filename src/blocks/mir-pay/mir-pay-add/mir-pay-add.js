import Swiper from 'swiper/bundle'

export default function mirPayAdd() {
  if (document.querySelector('.mir-pay-add')) {
    const intervalDelay = 4000
    const mirSlider = new Swiper('.mir-pay-add__steps', {
      slidesPerView: 1,
      spaceBetween: 20,
      enabled: true,
      autoplay: {
        delay: intervalDelay,
        disableOnInteraction: false
      },
      pagination: {
        el: '.mir-pay-add .ui-swiper-pagination .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      direction: 'horizontal',
      breakpoints: {
        767: {
          enabled: false,
          slidesPerView: 'auto',
          direction: 'vertical',
          spaceBetween: 0
        }
      }
    })
  }
}

