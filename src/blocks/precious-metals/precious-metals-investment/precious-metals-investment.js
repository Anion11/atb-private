export default function preciousMetals() {
  alignImvestment()
  $(document).on('click', '.bvi-link, .header__bvi', function () {
    alignImvestment()
  })
  window.addEventListener('load', function () {
    alignImvestment()
  })
}
function alignBlocks(elements) {
  if ($(window).width() > 1259) {
    let maxHeight = 0
    elements.height('auto')
    elements.each(function () {
      maxHeight = ($(this).height() > maxHeight) ? $(this).height() : maxHeight
    })
    elements.height(maxHeight)
  }
}

function alignImvestment() {
  if ($('.investment'.length)) {
    const investTop = $('.precious-metals-investment__top')
    const invsetBot = $('.precious-metals-investment__bot')
    alignBlocks(investTop)
    alignBlocks(invsetBot)

    $(window).resize(function () {
      alignBlocks(investTop)
      alignBlocks(invsetBot)
    })
  }
}
