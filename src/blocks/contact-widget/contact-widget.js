export default function contactWidget() {
  const widget = document.querySelector('.contact-widget')
  if (widget) {
    const activeClass = 'contact-widget--active'
    const listBlock = widget.querySelector('.contact-widget__list')
    widget.querySelector('.contact-widget__button--main').addEventListener('click', function () {
      $(listBlock).slideToggle()
      widget.classList.toggle(activeClass)
    })

    document.addEventListener('click', function (event) {
      if (!event.target.closest('.contact-widget')) {
        $(listBlock).slideUp()
        widget.classList.remove(activeClass)
      }
    })

    document.addEventListener('touchmove', function () {
      $(listBlock).slideUp()
      widget.classList.remove(activeClass)
    })
  }
}
