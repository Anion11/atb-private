export default function multiInsuranseTabs() {
  if (document.querySelector('.multi-insuranse-tabs')) {
    $('.multi-insuranse-tabs__head-item').on('click', function () {
      $(this).siblings().removeClass('multi-insuranse-tabs__head-item--active')
      $(this).addClass('multi-insuranse-tabs__head-item--active')
      $('.multi-insuranse-tabs__main-item').removeClass('multi-insuranse-tabs__main-item--active').eq($(this).index()).addClass('multi-insuranse-tabs__main-item--active')
    })
    $('.multi-insuranse-tabs__main-item-btn').on('click', function () {
      $(this).toggleClass('multi-insuranse-tabs__main-item-btn--active')
      $(this).siblings('.multi-insuranse-tabs__main-item-content').slideToggle()
    })
  }
}
