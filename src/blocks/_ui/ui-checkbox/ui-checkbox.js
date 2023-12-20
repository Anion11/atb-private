
export default function uiCheckbox() {
  const checkboxExpand = document.querySelector('.js-checkbox-expand')
  if (checkboxExpand) {
    checkboxExpand.addEventListener('change', function () {
      const expandBlockElement = $(`[data-expand-container="${this.dataset.expand}"]`)
      expandBlockElement.fadeToggle()
    })
  }
}
