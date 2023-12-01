export default function UiTable() {
  if (document.querySelector('.ui-table--accordions')) {
    const tablesAccordions = [...document.querySelectorAll('.ui-table--accordions')]
    for (const table of tablesAccordions) {
      const accordionHeads = [...table.querySelectorAll('.ui-table td:first-child')]
      for (const head of accordionHeads) {
        if ($(window).width() < 767) {
          $(head).siblings().css('display', 'none')
        }
        head.addEventListener('click', function () {
          if ($(window).width() < 767) {
            $(this).toggleClass('ui-table__td--active')
            $(this).siblings().slideToggle()
          }
        })
      }
    }
  }
}
