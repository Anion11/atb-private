import Swiper from 'swiper/bundle'

export default function coinsInner() {
  if ($('.coins-inner__photo-big').length > 0) {
    const coinsSlider = new Swiper('.coins-inner__photo-big .swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      allowTouchMove: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
      breakpoints: {
        767: {
          loop: false,
          allowTouchMove: false
        }
      }
    })
    $('.coins-inner__photo-small').on('click', function () {
      $(this).siblings('.coins-inner__photo-small').removeClass('active')
      $(this).addClass('active')
      coinsSlider.slideTo($(this).index(), 500)
    })
  }
}
