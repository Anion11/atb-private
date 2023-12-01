import Swiper from 'swiper/bundle'

export default function usefulGoods() {
  const blocks = [...document.querySelectorAll('.useful-goods')]
  if (blocks) {
    for (const block of blocks) {
      const sliderLength = block.querySelectorAll('.swiper-slide').length
      const valueSlidesPerView = (sliderLength > 2) ? 'auto' : 2
      const slider = new Swiper(block.querySelector('.swiper'), {
        slidesPerView: 'auto',
        spaceBetween: 15,
        resistanceRatio: 0.5,
        watchOverflow: true,
        navigation: {
          nextEl: block.querySelector('.swiper-btn-next'),
          prevEl: block.querySelector('.swiper-btn-prev')
        },
        pagination: {
          el: block.querySelector('.swiper-pagination')
        },
        breakpoints: {
          767: {
            slidesPerView: valueSlidesPerView,
            spaceBetween: 20,
            resistanceRatio: 0.2
          }
        }
      })

      block.addEventListener('click', (event) => {
        if (!event.target.closest('.ui-tooltip')) {
          for (const button of block.querySelectorAll('.ui-tooltip__btn')) {
            button._tippy.hide()
          }
        }
      })
    }
  }
}
