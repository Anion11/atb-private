export default function installmentInfo() {
  if ($('.installment-info').length > 0) {
    $('.installment-info__select-item').on('click', function () {
      $(this).siblings().removeClass('installment-info__select-item--active')
      $(this).addClass('installment-info__select-item--active')
      $('.installment-info__option').css('display', 'none')
      $('.installment-info__option').eq($(this).index()).css('display', 'block')
    })
    if ($(window).width() < 767) {
      $('.installment-purchases__top').on('click', function () {
        $(this).toggleClass('installment-purchases__top--active')
        $(this).siblings('.installment-purchases__main').slideToggle()
      })
      $('.installment-timeline__title').on('click', function () {
        $(this).toggleClass('installment-timeline__title--active')
        $(this).siblings('.installment-timeline__main').slideToggle()
      })
    }
  }
}
