export default function headerBlocksPosition() {
  const headerBottom = document.querySelector('.header').offsetHeight
  document.documentElement.style.setProperty('--header-bottom', `${headerBottom}px`)
  const headerBottomOffset = document.querySelector('.header').offsetHeight + document.querySelector('.header').offsetTop
  document.documentElement.style.setProperty('--header-bottom-offset', `${headerBottomOffset}px`)
  const headerTopPartBottom = document.querySelector('.header__top').offsetHeight
  document.documentElement.style.setProperty('--desk-burger-top', `${headerTopPartBottom}px`)

  const headerTopBottomCoordinate = getCoords(document.querySelector('.header__top')).top
  document.documentElement.style.setProperty('--desk-burger-top-coord', `${headerTopBottomCoordinate}px`)

  const pageHeight = document.querySelector('.wrapper').offsetHeight

  const headerShadow = document.querySelector('.header__shadow')
  headerShadow.style.height = `${pageHeight - headerBottom}px`
}

function getCoords(element) {
  const box = element.getBoundingClientRect()
  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  }
}
