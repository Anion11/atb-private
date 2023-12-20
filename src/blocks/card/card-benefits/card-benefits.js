export default function cardBenefits() {
  $(document).on('click', '.bvi-link, .header__bvi', function () {
    cardBenefitsEvents()
  })
  window.addEventListener('load', cardBenefitsEvents)
  window.addEventListener('resize', cardBenefitsEvents)
}

function cardBenefitsEvents() {
  if ($('.card-benefits .card-benefits__item').length > 0 & $(window).width() > 1259) {
    const columns = $('.card-benefits__list:not(".card-benefits__list--full-h")')
    let count = 0
    $('.card-benefits__item').css('height', 'auto')
    for (const element of columns) {
      if ($(element).children().length > count) {
        count = $(element).children().length
      }
    }
    for (let row = 0; row < count; row++) {
      let maxHeight = 0
      for (const element of columns) {
        if ($(element).children().eq(row).outerHeight() > maxHeight) {
          maxHeight = $(element).children().eq(row).outerHeight()
        }
      }
      for (const element of columns) {
        $(element).children().eq(row).css('height', `${maxHeight}px`)
      }
    }

    for (const benefitsElement of document.querySelectorAll('.card-benefits')) {
      const heights = []
      const titles = benefitsElement.querySelectorAll('.card-benefits__title')
      for (const title of titles) {
        heights.push(title.offsetHeight)
      }
      const maxHeight = Math.max(...heights)
      for (const title of titles) {
        title.style.height = `${maxHeight}px`
      }
    }
  }
}
