import Swiper from 'swiper/bundle'

export default function discountsMir() {
  if (document.querySelector('.discounts-mir')) {
    const settingsButton = document.querySelector('.discounts-mir__btn')
    if (settingsButton) {
      const settingsBLock = document.querySelector('.discounts-mir__settings')
      settingsButton.addEventListener('click', function () {
        this.classList.toggle('discounts-mir__btn--active')
        $(settingsBLock).slideToggle()
      })
    }

    if (document.querySelector('.discounts-mir__content .swiper-slide')) {
      const breakpoint = window.matchMedia('(min-width:1259px)')
      let discountsSlider
      const enableSwiper = function () {
        discountsSlider = new Swiper('.discounts-mir__content', {
          slidesPerView: 'auto',
          spaceBetween: 10,
          watchOverflow: true,
          speed: 400,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        })
      }
      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (discountsSlider !== undefined) discountsSlider.destroy(true, true)
        } else if (breakpoint.matches === false) {
          return enableSwiper()
        }
      }
      breakpoint.addEventListener('change', () => {
        breakpointChecker()
      })
      breakpointChecker()
    }
  }
}
