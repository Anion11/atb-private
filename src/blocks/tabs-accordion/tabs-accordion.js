export default function tabsAccordion() {
  if ($('.tabs-accordion').length > 0) {
    tabsAccordionEvents()
    clearClasses()

    window.addEventListener('resize', clearClasses)
  }
}

function tabsAccordionEvents() {
  const headItems = document.querySelectorAll('.tabs-accordion-head__item')
  const mainButtons = document.querySelectorAll('.tabs-accordion-main__button')

  for (const [index, headItem] of headItems.entries()) {
    headItem.addEventListener('click', function (event) {
      const mainItems = headItem.closest('.tabs-accordion').querySelectorAll('.tabs-accordion-main__item')

      for (const item of headItems) {
        item.classList.remove('active')
      }
      headItem.classList.add('active')

      for (const mainItem of mainItems) {
        mainItem.classList.remove('active')
      }
      mainItems[index].classList.add('active')
    })
  }

  for (const mainButton of mainButtons) {
    mainButton.addEventListener('click', function (event) {
      mainButton.classList.toggle('active')
      mainButton.closest('.tabs-accordion-main__item').classList.toggle('active')
      $(mainButton).siblings('.tabs-accordion-main__content').slideToggle()
    })
  }
}

function clearClasses() {
  const headItems = document.querySelectorAll('.tabs-accordion-head__item')
  const mainItems = document.querySelectorAll('.tabs-accordion-main__item')
  const mainButtons = document.querySelectorAll('.tabs-accordion-main__button')
  const mainContents = document.querySelectorAll('.tabs-accordion-main__content')

  if (window.matchMedia('(max-width: 767px)').matches) {
    for (const mainItem of mainItems) {
      mainItem.classList.remove('active')
    }
    for (const mainButton of mainButtons) {
      mainButton.classList.remove('active')
    }
    for (const mainContent of mainContents) {
      mainContent.style.display = 'none'
    }
  } else {
    for (const headItem of headItems) {
      headItem.classList.remove('active')
    }
    for (const mainItem of mainItems) {
      mainItem.classList.remove('active')
    }
    for (const mainContent of mainContents) {
      mainContent.style.display = 'block'
    }
    headItems[0].classList.add('active')
    mainItems[0].classList.add('active')
  }
}
