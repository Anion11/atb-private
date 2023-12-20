import Swiper from 'swiper/bundle'

export default function telInstruction() {
  const sections = [...document.querySelectorAll('.tel-instruction__section')]
  if (sections) {
    for (const section of sections) {
      const slider = new Swiper(section.querySelector('.swiper'), {
        slidesPerView: 1,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: section.querySelector('.swiper-button-next'),
          prevEl: section.querySelector('.swiper-button-prev')
        },
        pagination: {
          el: section.querySelector('.swiper-pagination'),
          clickable: true
        }
      })
      if ($(window).width() > 767) {
        $(section).find('.tel-instruction__steps-item').on('click', function () {
          $(this).siblings('.tel-instruction__steps-item').removeClass('active')
          $(this).addClass('active')
          slider.slideTo($(this).index(), 300)
        })
      }
      slider.on('slideChange', function () {
        const stepItem = $(section).find('.tel-instruction__steps-item')
        $(stepItem).removeClass('active')
        $(stepItem).eq(slider.activeIndex).addClass('active')
        if ($(window).width() < 767) {
          $(stepItem).fadeOut(0).eq(slider.activeIndex).fadeIn()
        }
      })
    }
  }

  window.slideTo = function (slider, activeIndex) {
    document.querySelector(slider).swiper.slideTo(activeIndex, 300)
  }
}
