export default function loyaltyProgramCompare() {
  if ($('.loyalty-program-compare'.length)) {
    setHeight()
    $(window).on('resize', function () {
      if ($(window).width() > 767) {
        setHeight()
      }
    })
    $(document).on('click', '.bvi-link, .header__bvi', function () {
      setHeight()
    })
  }
}

function setHeight() {
  const programBlock = $('.loyalty-program-compare__block')
  const oldProgramTop = programBlock.eq(0).find('.loyalty-program-compare__top')
  const newProgramTop = programBlock.eq(1).find('.loyalty-program-compare__top')
  oldProgramTop.css('min-height', 'auto')
  newProgramTop.css('min-height', 'auto')
  let maxHeight = Math.max(oldProgramTop.outerHeight(), newProgramTop.outerHeight())
  oldProgramTop.css('min-height', `${maxHeight}px`)
  newProgramTop.css('min-height', `${maxHeight}px`)
  const oldProgramItems = programBlock.eq(0).find('.loyalty-program-compare__item')
  const newProgramItems = programBlock.eq(1).find('.loyalty-program-compare__item')
  const pointNumber = Math.max($(oldProgramItems).length, $(newProgramItems).length)
  for (let index = 0; index < pointNumber; index++) {
    oldProgramItems.eq(index).css('min-height', 'auto')
    newProgramItems.eq(index).css('min-height', 'auto')
    maxHeight = Math.max(oldProgramItems.eq(index).outerHeight(), newProgramItems.eq(index).outerHeight())
    oldProgramItems.eq(index).css('min-height', `${maxHeight}px`)
    newProgramItems.eq(index).css('min-height', `${maxHeight}px`)
  }
}
