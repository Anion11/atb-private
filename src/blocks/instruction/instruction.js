import Swiper from 'swiper/bundle'

export default function instructionSlider() {
  const swiperSlider = new Swiper('.page-content .instruction__wrapper .swiper', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    allowTouchMove: false,
    pagination: {
      el: '.instruction__wrapper .swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      767: {
        allowTouchMove: true
      }
    }
  })
  if ($(window).width() > 767) {
    $('.instruction__wrapper .instruction-steps-item').on('click', function() {
      $(this).siblings('.instruction-steps-item').removeClass('active')
      $(this).addClass('active')
      swiperSlider.slideTo($(this).index(), 500)
    })
  }
  swiperSlider.on('slideChange', () => {
    const stepItem = $('.instruction__wrapper .instruction-steps-item')
    $(stepItem).removeClass('active')
    $(stepItem).eq(swiperSlider.activeIndex).addClass('active')
    if ($(window).width() < 767) {
      $(stepItem).fadeOut(0).eq(swiperSlider.activeIndex).fadeIn()
    }
  })
}
