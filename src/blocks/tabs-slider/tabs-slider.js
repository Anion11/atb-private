import Swiper from 'swiper/bundle'
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all'

export default function tabsSlider() {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  if (document.querySelector('.tabs-slider')) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    const txtSlider = new Swiper('.tabs-slider__content', {
      slidesPerView: 1,
      effect: 'fade',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.tabs-slider__btn--next',
        prevEl: '.tabs-slider__btn--prev'
      },
      scrollbar: {
        el: '.tabs-slider__scrollbar',
        hide: false,
        draggable: true
      }
    })
    const imgSlider = new Swiper('.tabs-slider__images', {
      slidesPerView: 1,
      effect: 'fade',
      grabCursor: true,
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: txtSlider
      }
    })

    const tabClass = '.tabs-slider__tab'
    const tabActiveClass = 'tabs-slider__tab--active'

    $(tabClass).on('click', function () {
      $(this).siblings(tabClass).removeClass(tabActiveClass)
      $(this).addClass(tabActiveClass)
      txtSlider.slideTo($(this).index(), 300)
    })
    txtSlider.on('slideChange', function () {
      const stepItem = $(tabClass)
      $(stepItem).removeClass(tabActiveClass)
      $(stepItem).eq(txtSlider.activeIndex).addClass(tabActiveClass)
      imgSlider.slideTo(txtSlider.activeIndex, 300)
    })
    ScrollTrigger.create({
      trigger: '.tabs-slider',
      start: '=-20%',
      endTrigger: '.tabs-slider',
      onToggle: () => txtSlider.slideTo(0, 300)
    })
  }
}
