import Swiper from 'swiper/bundle'

export default function mortgageSlider() {
  if ($('.mortgage-slider').length > 0) {
    const sliderParameters = {
      slidesPerView: 'auto',
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
      breakpoints: {
        1259: {
          slidesPerView: 5
        },
        767: {
          slidesPerView: 3
        }
      }
    }
    const slider = new Swiper('.mortgage-slider .swiper', sliderParameters)
    const sliderOpt = {
      slider,
      sliderParameters
    }
    $(document).on('click', '.bvi-link, .header__bvi', function () {
      bviUpdate(sliderOpt)
    })
    window.addEventListener('load', function () {
      bviUpdate(sliderOpt)
    })
  }
}

function bviUpdate(sliderOpt) {
  if ($('body').hasClass('bvi-active')) {
    sliderOpt.slider.destroy(true, true)
  } else {
    sliderOpt.slider = new Swiper('.mortgage-slider .swiper', sliderOpt.sliderParameters)
  }
}
