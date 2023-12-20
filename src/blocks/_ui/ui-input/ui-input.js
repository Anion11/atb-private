import IMask from 'imask'
import 'parsleyjs'
import 'parsleyjs/dist/i18n/ru'

export default function uiInput() {
  inputMask()
  checkInputFill()
  validation()
}

function inputMask() {
  const inputMaskItem = document.querySelector('#phone')
  if (inputMaskItem) {
    IMask(inputMaskItem, {
      mask: '+{7} (000) 000-00-00',
      lazy: false
    })
  }

  for (const input of document.querySelectorAll('[data-mask=date-max-today]')) {
    const dateMinTodayMask = IMask(input, {
      mask: Date,
      max: new Date()
    })
    input.mask = dateMinTodayMask

    input.addEventListener('change', function () {
      dateMinTodayMask.updateValue()
    })
  }

  for (const input of document.querySelectorAll('[data-mask=date-range]')) {
    const dateRangeMask = IMask(input, {
      mask: 'from — to',
      autofix: true,
      blocks: {
        from: {
          mask: Date
        },
        to: {
          mask: Date
        }
      }
    })
    input.addEventListener('change', function () {
      dateRangeMask.updateValue()
    })
  }
}

function checkInputFill() {
  const uiInputs = document.querySelectorAll('.ui-input')
  if (uiInputs) {
    for (const element of uiInputs) {
      const input = element.querySelector('input')
      input.value !== '' ? input.classList.add('filled') : input.classList.remove('filled')
      input.addEventListener('input', function () {
        input.value !== '' ? input.classList.add('filled') : input.classList.remove('filled')
      })
    }
  }
}

function validation() {
  $('form').parsley()
}
