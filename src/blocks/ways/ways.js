export default function waysButtonSlide() {
  const expandButtons = [...document.querySelectorAll('.ways-item .ui-button--expand')]
  for (const button of expandButtons) {
    button.addEventListener('click', function () {
      const hiddenBlock = button.closest('.ways-item').querySelector('.ways-item__hidden')
      this.classList.toggle('active')
      this.classList.contains('active')
        ? this.textContent = this.dataset.endText
        : this.textContent = this.dataset.startText
      $(hiddenBlock).slideToggle()
    })
  }
}
