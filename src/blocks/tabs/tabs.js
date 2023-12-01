import Swiper from 'swiper/bundle'

export default function tabs() {
  const locationHash = window.location.hash

  if ($('.tabs-head').length > 0) {
    const tabsHead = document.querySelectorAll('.tabs-head')

    for (const item of tabsHead) {
      let tabsSpace
      let tabsSpaceMobile
      let enableOnDesktop = true
      const headSlider = item.querySelector('.swiper')
      if (item.classList.contains('tabs-head--round')) {
        tabsSpace = tabsSpaceMobile = 10
      } else if (item.classList.contains('tabs-head--round-d-enable')) {
        tabsSpace = tabsSpaceMobile = 10
        enableOnDesktop = false
      } else if (item.classList.contains('tabs-head--buttons')) {
        tabsSpace = 0
        tabsSpaceMobile = 0
      } else {
        tabsSpace = 40
        tabsSpaceMobile = 20
      }
      const tabsSlider = new Swiper(headSlider, {
        spaceBetween: tabsSpaceMobile,
        slidesPerView: 'auto',
        // freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        watchOverflow: true,
        breakpoints: {
          767: {
            spaceBetween: tabsSpace,
            enabled: enableOnDesktop
          }
        }
      })
    }
    $('.tabs-head__item').on('click', function () {
      if (!$(this).hasClass('tabs-head__item--active') && !$(this).is('a')) {
        const tabGroup = $(this).parents('.tabs-head').data('tabs-group')
        const buttonData = $(this).data('group-item')
        $(this).parents('.tabs-head').find('.tabs-head__item').removeClass('tabs-head__item--active')
        $(this).addClass('tabs-head__item--active')
        if (typeof tabGroup !== 'undefined' && tabGroup !== false) {
          const bodyGroup = $(`.tabs-main[data-tabs-group='${tabGroup}']`)
          for (const block of bodyGroup) {
            const mainGroupItem = $(block).children(`.tabs-main__item[data-group-item]`)
            $(block).children('.tabs-main__item').fadeOut(0)
            if ($(mainGroupItem).length > 0) {
              $(block).children(`.tabs-main__item[data-group-item='${buttonData}']`).fadeIn()
            } else {
              bodyGroup.children('.tabs-main__item').eq($(this).index()).fadeIn()
            }
          }
        } else {
          const selectedTab = $(this).parents('.tabs-head').siblings('.tabs-main').find('.tabs-main__item').eq($(this).index())
          if (selectedTab.length > 0) {
            $(this).parents('.tabs-head').siblings('.tabs-main').find('.tabs-main__item').fadeOut(0)
            selectedTab.fadeIn()
          }
        }
      }
    })
  }

  if (locationHash) {
    const _href = locationHash
    if (_href !== '#/') {
      tabsSwitchHash(_href)
    }
  }

  window.addEventListener('hashchange', function () {
    const _href = window.location.hash
    tabsSwitchHash(_href)
  })

  function tabsSwitchHash(_href) {
    if ($(`.tabs-head__item${_href}`).length > 0) {
      $(`.tabs-head__item${_href}`).trigger('click')
      $('html, body').animate({
        scrollTop: `${$(_href).offset().top}px`
      }, 0)
    }
  }
}
