export default function answers() {
  const expandItems = [...document.querySelectorAll('.answers__item')]
  const expandButtons = [...document.querySelectorAll('.answers__item .ui-button--expand')]
  for (const item of expandItems) {
    const expandBlock = item.querySelector('.answers__expand')
    expandBlock.style.height = ''
    const button = item.querySelector('.ui-button--expand')
    expandBlock.shortHeight = expandBlock.offsetHeight

    // set fullHeight
    expandBlock.style.display = 'block'
    expandBlock.fullHeight = expandBlock.offsetHeight
    expandBlock.style.display = ''

    expandBlock.style.height = `${expandBlock.shortHeight}px`
    expandBlock.shortHeight >= expandBlock.fullHeight ? button.classList.add('ui-button--hidden') : button.classList.remove('ui-button--hidden')
  }
  for (const button of expandButtons) {
    const expandBlock = button.closest('.answers__text').querySelector('.answers__expand')
    button.addEventListener('click', function () {
      this.classList.toggle('active')
      if (expandBlock.timeoutID) clearTimeout(expandBlock.timeoutID)
      if (this.classList.contains('active')) {
        this.textContent = this.dataset.endText
        expandBlock.style.height = `${expandBlock.fullHeight}px`
        expandBlock.classList.add('answers__expand--open')
      } else {
        this.textContent = this.dataset.startText
        expandBlock.style.height = `${expandBlock.shortHeight}px`
        expandBlock.timeoutID = setTimeout(() => {
          expandBlock.classList.remove('answers__expand--open')
        }, 300)
      }
    })
  }
}
