export default function moneyTransfer() {
  $('.money-transfer__btn').on('click', function () {
    $(this).toggleClass('money-transfer__btn--active')
    $(this).prev().slideToggle(400, () => $(this).hasClass('money-transfer__btn--active') ? $(this).text('Скрыть') : $(this).text('Подробная информация'))
  })
}
