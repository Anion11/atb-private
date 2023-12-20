import Swiper from 'swiper/bundle'

export default function banner() {
  const bannerBlock = document.querySelector('.banner')
  if ($(bannerBlock).find('.banner-item').length > 1) {
    $('.banner').addClass('banner--slider')

    const svgCircle = $('.banner').find('.banner-nav-pagination-progress')

    const topBanSlider = new Swiper('.banner .swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      watchSlidesProgress: true,
      watchOverflow: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.banner-nav-pagination-num',
        type: 'fraction'
      },
      navigation: {
        nextEl: '.banner-nav-btn-next',
        prevEl: '.banner-nav-btn-prev'
      },
      on: {
        init: function () {
          bannerProgressAnim()
        },
        slideChange: function () {
          bannerProgressAnim()
        }
      }
    })
  }

  const sapidBoxMainClass = '.banner-sapid-box-main'
  const sapidBoxMain = $(sapidBoxMainClass)
  $('.banner-sapid-box-btn.js-open-content').on('click', function () {
    sapidBoxMain.fadeOut()
    $(this).siblings(sapidBoxMainClass).fadeIn()
  })
  $('.banner-sapid-box-btn.js-popup-open').on('click', function () {
    sapidBoxMain.fadeOut()
  })
  $('.banner-sapid-box-main-btn_close').on('click', function () {
    $(this).parent(sapidBoxMainClass).fadeOut()
  })
  $(document).click(function (event) {
    if ($(event.target).closest('.banner-sapid-box').length > 0) return
    sapidBoxMain.fadeOut()
    event.stopPropagation()
  })

  qrCode()
}

function bannerProgressAnim() {
  const svgCircle = $('.banner').find('.banner-nav-pagination-progress')

  svgCircle.css('animation', 'none')
  setTimeout(() => {
    svgCircle.css('animation', 'banner-progress 7s linear 1 forwards')
  }, 10)
}

function qrCode() {
  const qrBlock = document.querySelector('.banner-item__qr')
  if (qrBlock) {
    const popup = qrBlock.querySelector('.banner-item__qr-popup')
    const openButton = qrBlock.querySelector('[data-open-qr]')
    const closeButton = qrBlock.querySelector('[data-close-qr]')
    openButton.addEventListener('click', function () {
      openButton.style.display = 'none'
      closeButton.style.display = ''
      popup.classList.add('active')
    })
    closeButton.addEventListener('click', function () {
      closeButton.style.display = 'none'
      openButton.style.display = ''
      popup.classList.remove('active')
    })
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.banner-item__qr')) {
        closeButton.style.display = 'none'
        openButton.style.display = ''
        popup.classList.remove('active')
      }
    })
  }
}
