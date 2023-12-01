import Swiper from 'swiper/bundle'
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all'

export default function onlineAbout() {
  if ($('.online-about').length > 0) {
    const navSlider = new Swiper('.online-about__nav-slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      watchOverflow: true,
      breakpoints: {
        767: {
          spaceBetween: 50
        }
      }
    })
    navSlider.on('progress', function (swiper, progress) {
      const nav = document.querySelector('.online-about__nav')
      if (progress >= 1) {
        nav.classList.add('online-about__nav--progress')
      } else {
        nav.classList.remove('online-about__nav--progress')
      }
    })

    const aboutTxtSlider = new Swiper('.online-about__txt .swiper-container', {
      slidesPerView: 1,
      effect: 'fade',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      autoHeight: true,
      fadeEffect: {
        crossFade: true
      },
      breakpoints: {
        1259: {
          autoHeight: false
        }
      },
      navigation: {
        nextEl: '.online-about__content .swiper-button-next',
        prevEl: '.online-about__content .swiper-button-prev'
      },
      on: {
        resize: function () {
          this.update()
        }
      }
    })
    const aboutImgSlider = new Swiper('.online-about__img .swiper-container', {
      slidesPerView: 1,
      effect: 'fade',
      grabCursor: true,
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: aboutTxtSlider
      },
      on: {
        resize: function () {
          this.update()
        }
      }
    })

    $('.online-about__link').on('click', function () {
      $(this).siblings('.online-about__link').removeClass('online-about__link--active')
      $(this).addClass('active')
      aboutTxtSlider.slideTo($(this).index(), 300)
    })
    aboutTxtSlider.on('slideChange', function () {
      const stepItem = $('.online-about__link')
      $(stepItem).removeClass('online-about__link--active')
      $(stepItem).eq(aboutTxtSlider.activeIndex).addClass('online-about__link--active')
      aboutImgSlider.slideTo(aboutTxtSlider.activeIndex, 300)
      navSlider.slideTo(aboutTxtSlider.activeIndex, 300)
      setTimeout(function () {
        $('.online-about__txt-item .underline-needle').removeClass('underline-needle--anim')
        $('.swiper-slide-thumb-active .underline-needle').addClass('underline-needle--anim')
      }, 100)
    })

    window.addEventListener('scroll', floatNav, {
      passive: false
    })
  }
}

function floatNav() {
  if (window.innerWidth < 767) {
    const section = document.querySelector('.online-about__txt')
    const top = section.getBoundingClientRect().top + window.pageYOffset
    const bot = section.getBoundingClientRect().bottom + window.pageYOffset
    const scrollWindow = window.pageYOffset
    const nav = document.querySelector('.online-about__nav')
    if (scrollWindow > top && (scrollWindow < bot - nav.offsetHeight)) {
      nav.classList.add('online-about__nav--fixed')
    } else {
      nav.classList.remove('online-about__nav--fixed')
    }
  }
}
