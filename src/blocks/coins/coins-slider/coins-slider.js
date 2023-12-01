import Swiper from 'swiper/bundle'

export default function coinsSlider() {
  const coinsSliderElement = document.querySelector('.coins-slider')
  if (coinsSliderElement) {
    let loop = true
    if (coinsSliderElement.querySelectorAll('.coins-item').length < 3) {
      loop = false
    }
    const swiper = new Swiper('.coins-slider__wrapper', {
      slidesPerGroup: 1,
      loop: loop,
      spaceBetween: 80,
      speed: 400,
      watchOverflow: true,
      breakpoints: {
        1259: {
          slidesPerView: 2,
          slidesPerGroup: 2
        }
      },
      pagination: {
        el: '.coins-slider__pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.coins-slider__btn--next',
        prevEl: '.coins-slider__btn--prev'
      }
    })
  }
}
