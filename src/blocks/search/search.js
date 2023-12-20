export default function search() {
  const searchFilter = document.querySelector('.search__filter')
  if (searchFilter) {
    const searchPeriod = searchFilter.querySelector('.search__period')
    const searchPeriodButton = searchFilter.querySelector('.search__dates-btn')
    searchPeriodButton.addEventListener('click', function (event) {
      event.preventDefault()
      searchPeriod.classList.toggle('active')
    })

    document.addEventListener('click', function (event) {
      if (!event.target.closest('.search__period') && !event.target.closest('.search__dates-btn') && !event.target.closest('.flatpickr-calendar')) {
        searchPeriod.classList.remove('active')
      }
    })
  }
}
