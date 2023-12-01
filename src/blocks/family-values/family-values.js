export default function familyValues() {
  if ($(window).width() > 767) {
    $('.family-values-box-front .ui-button').on('click', function () {
      $('.family-values').addClass('active')
    })
    $('.family-values-box-back .family-values-box-btn_close').on('click', function () {
      $('.family-values').removeClass('active')
    })
  } else {
    $('.family-values-box-front .ui-button').on('click', function () {
      $('.family-values-box-front').fadeOut(0)
      $('.family-values-box-back').fadeIn(200)
    })
    $('.family-values-box-back .family-values-box-btn_close').on('click', function () {
      $('.family-values-box-back').fadeOut(0)
      $('.family-values-box-front').fadeIn(200)
    })
  }
}
