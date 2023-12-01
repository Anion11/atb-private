import autoHeightTable from '../../js'

export default function accordion() {
  $('.accordion-item__head').on('click', function () {
    $(this).toggleClass('accordion-item__head--active')
    $(this).siblings('.accordion-item__main').slideToggle()
  })

  $('.accordion-item--card-router .accordion-item__head').on('click', function () {
    setTimeout(() => {
      autoHeightTable()
    }, 10)
  })

  window.openAccordionById = function (id) {
    const accordionItem = document.querySelector(`#${id}`)
    if (accordionItem) {
      $(accordionItem).find('.accordion-item__head').toggleClass('accordion-item__head--active')
      $(accordionItem).find('.accordion-item__main').slideDown()
    }
  }
}
