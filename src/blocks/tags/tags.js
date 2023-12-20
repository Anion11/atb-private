export default function tags() {
  for (const shortMobTags of document.querySelectorAll('.tags[data-mob-short]')) {
    const tagsWrapper = shortMobTags.querySelector('.tags__wrapper')
    const tagsItems = shortMobTags.querySelectorAll('.tags__item')
    if (tagsItems.length > 13) {
      shortMobTags.classList.add('tags--short')
      const moreButton = document.createElement('button')
      moreButton.type = 'button'
      moreButton.className = 'tags__item tags__item--more'
      moreButton.innerHTML = `<svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.88464 9L11.8846 15L17.8846 9" stroke="currentColor" stroke-width="1"/>
      </svg>
      `
      moreButton.addEventListener('click', function () {
        shortMobTags.classList.toggle('tags--short')
        moreButton.classList.toggle('tags__item--active')
      })
      tagsWrapper.append(moreButton)
    }
  }

  for (const checkboxesTags of document.querySelectorAll('.tags--checkboxes')) {
    const resetButton = checkboxesTags.querySelector('.tags__item--reset')
    const tagsCheckboxes = checkboxesTags.querySelectorAll('.tags__option input')
    resetButton.addEventListener('click', function () {
      setTimeout(() => {
        this.setAttribute('disabled', '')
      })
    })
    for (const checkbox of tagsCheckboxes) {
      checkbox.addEventListener('change', function () {
        const checkedCount = checkboxesTags.querySelectorAll('.tags__option input:checked').length
        if (checkedCount === 0) {
          resetButton.setAttribute('disabled', '')
        } else {
          resetButton.removeAttribute('disabled')
        }
      })
    }
  }
}
