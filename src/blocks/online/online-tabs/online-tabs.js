export default function onlineTabs() {
  if (document.querySelector('.online-tabs')) {
    $('.online-tabs__head-item').on('click', function () {
      $(this).siblings().removeClass('active')
      $(this).addClass('active')
      $('.online-tabs__main-item').removeClass('active').eq($(this).index()).addClass('active')
    })
    $('.online-tabs__main-item-btn').on('click', function () {
      $(this).toggleClass('active')
      $(this).siblings('.online-tabs__main-item-content').slideToggle()
    })
  }
}
