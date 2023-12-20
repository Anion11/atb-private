export default function infoPage() {
  if (document.querySelector('.info-page-aside__btn')) {
    const aside = document.querySelector('.info-page-aside')
    const asideButton = document.querySelector('.info-page-aside__btn')
    const asideList = asideButton.nextElementSibling

    asideButton.addEventListener('click', function () {
      asideList.classList.toggle('info-page-aside__ul--active')
    })

    $(document).on('click', function (event) {
      if ($(event.target).closest(aside).length === 0) {
        asideList.classList.remove('info-page-aside__ul--active')
      }
      event.stopPropagation()
    })
  }
}
