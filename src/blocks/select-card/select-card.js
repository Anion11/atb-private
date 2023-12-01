import Swiper from 'swiper/bundle'

export default function selectCard() {
  if ($('.select-card').length > 0) {
    const slider = new Swiper('.select-card .swiper', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
      breakpoints: {
        1259: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    })
  }
}
