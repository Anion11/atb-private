export default function loyaltyProgramCalc() {
  if ($('.loyalty-program-calc'.length) && $(window).width() <= 1259) {
    const calcPurchasesButton = $('.loyalty-program-calc__purchases .loyalty-program-calc__title--main')
    calcPurchasesButton.on('click', function () {
      $(this).toggleClass('loyalty-program-calc__title--active')
      $(this).next().slideToggle()
    })
    const calcTabs = $('.loyalty-program-calc__sum-tab')
    calcTabs.on('click', function () {
      $(this).siblings().removeClass('loyalty-program-calc__sum-tab--active')
      $(this).addClass('loyalty-program-calc__sum-tab--active')
      $('.loyalty-program-calc__sum-item').fadeOut(0).eq($(this).index()).fadeIn()
    })
  }
}
