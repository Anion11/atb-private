/* eslint-disable unicorn/prefer-dom-node-dataset */
export default function newsMain() {
  const newsFilter = document.querySelector('.news-main__filter')
  if (newsFilter) {
    const resetButton = newsFilter.querySelector('.news-main__reset')
    const resetHiddenCLass = 'news-main__reset--hidden'
    const select = newsFilter.querySelector('.ui-select select')
    const searchInput = newsFilter.querySelector('.ui-input input')
    if (resetButton && select && searchInput) {
      select.addEventListener('select:change', function () {
        if (select.value === 'period') {
          resetButton.classList.remove(resetHiddenCLass)
        } else if (searchInput.value === '') {
          resetButton.classList.add(resetHiddenCLass)
        }
      })

      searchInput.addEventListener('input', function () {
        if (searchInput.value === '' && select.value !== 'period') {
          resetButton.classList.add(resetHiddenCLass)
        } else {
          resetButton.classList.remove(resetHiddenCLass)
        }
      })

      resetButton.addEventListener('click', function () {
        window.uiSelectSetValue(select, 'all-time')
        searchInput.value = ''
        resetButton.classList.add(resetHiddenCLass)
      })
    }
  }
}
