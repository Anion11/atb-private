export default function multiserviceProgrammTabs() {
  $('.multiservice-programm-tabs__head-item').click(function () {
    $('.multiservice-programm-tabs__head-item').removeClass('active')
    $(this).addClass('active')
    $(this).parents('.multiservice-programm-tabs__head').siblings('.multiservice-programm-tabs__main').find('.multiservice-programm-tabs__main-box').removeClass('active').eq($(this).index()).addClass('active')
  })

  $('.multiservice-programm-tabs__main-box-btn').click(function () {
    $(this).toggleClass('active')
    $(this).siblings('.multiservice-programm-tabs__main-box-content').slideToggle()
  })

  $('.multiservice-programms__tabs-item').click(function () {
    $('.multiservice-programms__tabs-item').removeClass('active')
    $(this).addClass('active')
    $(this).parents('.multiservice-programms__tabs').siblings('.multiservice-programms__content').find('.multiservice-programms__content-box').removeClass('active').eq($(this).index()).addClass('active')
  })
}
