import Swiper from 'swiper/bundle'

export default function cardRouter() {
  for (const cardRouterElement of document.querySelectorAll('.card-router')) {
    const cardRouterSlider = new Swiper(cardRouterElement.querySelector('.swiper'), {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        1259: {
          slidesPerView: cardRouterElement.dataset.slidesPerView ?? 3
        }
      }
    })

    cardRouterElement.addEventListener('click', (event) => {
      if (!event.target.closest('.ui-tooltip')) {
        for (const button of cardRouterElement.querySelectorAll('.ui-tooltip__btn')) {
          button._tippy.hide()
        }
      }
    })
  }
}
