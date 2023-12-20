export default function searchSuggestions() {
  document.addEventListener('click', (event) => {
    if (event.target.closest('.search-suggestions__head--archive')) {
      const accordionElement = event.target.closest('.search-suggestions__accordion')
      const body = accordionElement.querySelector('.search-suggestions__main--archive')
      accordionElement.classList.toggle('active')
      $(body).slideToggle()
    }
  })
}
