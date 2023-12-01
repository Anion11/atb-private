export default function grace() {
  calcHeight()
  window.addEventListener('resize', calcHeight)
}

function calcHeight() {
  const blocks = document.querySelectorAll('.grace')
  if (blocks) {
    for (const block of blocks) {
      const lastItem = block.querySelector('.grace__pay--2')
      const lastItemHeight = lastItem.offsetHeight
      document.documentElement.style.setProperty('--grace-last-item-height', `${lastItemHeight}px`)
    }
  }
}
