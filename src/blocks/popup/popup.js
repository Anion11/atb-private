import { Fancybox } from '@fancyapps/ui'

export default function popupScript() {
  window.Fancybox = Fancybox
  window.showPopup = showPopup

  Fancybox.defaults.ScrollLock = false

  const popupOpenButton = document.querySelectorAll('.js-popup-open')
  for (const button of popupOpenButton) {
    button.addEventListener('click', (event) => {
      event.preventDefault()
      const popupUrl = button.getAttribute('href')
      if (popupUrl) showPopup(popupUrl)
    })
  }

  const closePopupButton = document.querySelector('.js-close-popup')
  if (closePopupButton) {
    closePopupButton.addEventListener('click', function () {
      Fancybox.close(true)
    })
  }
}

function showPopup(popupUrl) {
  Fancybox.show(
    [
      {
        src: popupUrl,
        preload: false
      }
    ],
    {
      mainClass: 'popup',
      parentEl: document.querySelector('.wrapper'),
      showClass: 'fancybox-fadeIn',
      hideClass: 'fancybox-fadeOut',
      hideScrollbar: true,
      autoFocus: true,
      trapFocus: true,
      dragToClose: false,
      on: {
        reveal: (fancybox) => {
          const container = fancybox.$container
          const mods = container.querySelector('.popup__wrapper').dataset.containerMods
          container.classList.add(mods)
        }
      }
    }
  )
}
