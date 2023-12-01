export default function coinsSelect() {
  if (document.querySelector('.coins-select')) {
    const parametersButton = document.querySelector('.coins-select__open')
    parametersButton.addEventListener('click', function () {
      this.classList.toggle('coins-select__open--active')
      const dropParameters = document.querySelector('.coins-select__drop')
      dropParameters.classList.toggle('coins-select__drop--visible')
    })

    const chooseButton = [...document.querySelectorAll('.coins-select__button')]
    for (const button of chooseButton) {
      button.addEventListener('click', function (event) {
        event.preventDefault()
        for (const element of chooseButton) {
          element.classList.remove('coins-select__button--active')
        }
        this.classList.add('coins-select__button--active')
      })
    }
  }
}
