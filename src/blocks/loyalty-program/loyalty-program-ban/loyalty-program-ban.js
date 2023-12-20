export default function loyaltyProgramBan() {
  if ($('.loyalty-program-ban').length > 0) {
    banHeight()

    const detailsButton = $('.loyalty-program-ban__ui-button')
    const closeButton = $('.loyalty-program-ban__close')
    detailsButton.on('click', flip)
    closeButton.on('click', flip)
  }
  $(document).on('click', '.bvi-link, .header__bvi', function () {
    banHeight()
  })
}

function flip(event) {
  event.preventDefault()
  $(this).parents('.loyalty-program-ban').toggleClass('loyalty-program-ban--flip')
}

function banHeight() {
  const blocks = $('.loyalty-program-ban__item')
  let maxHeight = blocks.eq(0).outerHeight()
  blocks.each(function () {
    maxHeight = ($(this).outerHeight() > maxHeight) ? $(this).outerHeight() : maxHeight
  })
  $('.loyalty-program-ban').outerHeight(maxHeight)
  blocks.outerHeight(maxHeight)
}
