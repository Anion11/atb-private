export default function vacanciesFilter() {
  const filterInternship = document.querySelector('[data-filter="internship"]')
  const vacanciesBody = document.querySelector('.vacancies__body')
  if (filterInternship && vacanciesBody) {
    filterInternship.addEventListener('change', function () {
      if (this.checked) {
        vacanciesBody.classList.add('vacancies__body--promo-top')
      } else {
        vacanciesBody.classList.remove('vacancies__body--promo-top')
      }
    })
  }

  const filter = document.querySelector('.vacancies-filter')
  const resetButton = filter.querySelector('.ui-button[type="reset"]')
  if (filter && resetButton) {
    resetButton.addEventListener('click', function () {
      for (const select of filter.querySelectorAll('select')) {
        select.dispatchEvent(new Event('select:clear'))
      }

      if (filterInternship) {
        filterInternship.checked = false
        filterInternship.dispatchEvent(new Event('change'))
      }
    })
  }
}
