export default function uiRadio() {
  for (const toggleRadio of document.querySelectorAll('.ui-radio input[data-toggle-target]')) {
    toggleRadio.addEventListener('change', () => {
      for (const radio of document.querySelectorAll(`input[name=${toggleRadio.name}]`)) {
        if (radio.dataset.toggleTarget) {
          for (const element of document.querySelectorAll(`[data-toggle-element=${radio.dataset.toggleTarget}]`)) {
            element.style.display = 'none'
          }
        }
      }
      if (toggleRadio.value === 'on') {
        for (const element of document.querySelectorAll(`[data-toggle-element=${toggleRadio.dataset.toggleTarget}]`)) {
          element.style.display = ''
        }
      }
    })
  }
}
