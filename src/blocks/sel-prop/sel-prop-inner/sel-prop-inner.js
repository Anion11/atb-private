/* eslint-disable unicorn/prevent-abbreviations */
import Swiper from 'swiper/bundle'

export default function selPropInner() {
  const thumbsSlider = new Swiper('.sel-prop-inner__thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    navigation: {
      nextEl: '.sel-prop-inner__thumbs .sel-prop-inner__btn--next',
      prevEl: '.sel-prop-inner__thumbs .sel-prop-inner__btn--prev'
    },
    breakpoints: {
      767: {
        spaceBetween: 15
      }
    }
  })
  const mainSlider = new Swiper('.sel-prop-inner__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.sel-prop-inner__slider .sel-prop-inner__btn--next',
      prevEl: '.sel-prop-inner__slider .sel-prop-inner__btn--prev'
    },
    thumbs: {
      swiper: thumbsSlider
    }
  })
}
