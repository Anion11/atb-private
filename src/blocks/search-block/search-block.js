export default function searchBlock() {
  arrowNavigation()
  toggleSuggestions()
}

function toggleSuggestions() {
  const searchElements = document.querySelectorAll('.search-block')
  for (const searchElement of searchElements) {
    const input = searchElement.querySelector('.ui-input input')
    const resetButton = searchElement.querySelector('.search-form__button--reset')
    const suggestionsElement = searchElement.querySelector('.search-suggestions')

    if (searchElement.classList.contains('js-type')) {
      input.addEventListener('input', () => {
        if (input.value.length > 0) {
          suggestionsElement.classList.add('active')
        } else {
          suggestionsElement.classList.remove('active')
        }
      })
      resetButton.addEventListener('click', () => {
        suggestionsElement.classList.remove('active')
      })
    }
  }
}
function arrowNavigation() {
  const searchElements = document.querySelectorAll('.search-block')
  for (const searchElement of searchElements) {
    let focusedIndex = 0

    searchElement.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        const focusableElements = searchElement.querySelectorAll('.search-form .ui-input input, .search-suggestions button, .search-suggestions a')
        event.preventDefault()
        const direction = event.key === 'ArrowUp' ? -1 : 1
        updateFocusedIndex(focusedIndex, focusableElements, direction)
      }
    })

    searchElement.addEventListener('focusin', function (event) {
      const focusableElements = searchElement.querySelectorAll('.search-form .ui-input input, .search-suggestions button, .search-suggestions a')
      const targetElement = event.target
      const index = [...focusableElements].indexOf(targetElement)
      if (index !== -1) {
        focusedIndex = index
      }
    })
  }
}

function updateFocusedIndex(focusedIndex, focusableElements, direction) {
  // Скрытые элементы могут не быть фокусируемыми, пропускаем их
  do {
    focusedIndex = (focusedIndex + direction + focusableElements.length) % focusableElements.length
  } while (focusableElements[focusedIndex].offsetParent === null)
  focusableElements[focusedIndex].focus()
}
