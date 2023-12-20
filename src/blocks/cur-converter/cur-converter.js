/* eslint-disable unicorn/prevent-abbreviations */
import 'select2'
import IMask from 'imask'

export default function curConevrter() {
  if (document.querySelector('.cur-converter')) {
    const selects = document.querySelectorAll('.cur-converter__select select')
    for (const select of selects) {
      const selectParent = select.parentElement
      $(select).select2({
        minimumResultsForSearch: Number.POSITIVE_INFINITY,
        width: 'auto',
        dropdownAutoWidth: true,
        dropdownParent: selectParent,
        templateResult: formatState,
        templateSelection: formatState
      })

      const changeCustomEvent = new Event('select:change')
      $(select).on('change', () => select.dispatchEvent(changeCustomEvent))
    }

    inputMask()
  }
}

function formatState(opt) {
  if (!opt.id) {
    return opt.text
  }
  const optimage = $(opt.element).data('image')
  return !optimage
    ? opt.text
    : $(
      `<span class="cur-converter__option"><img src="${optimage}" class="cur-converter__flag" /><span class="cur-converter__sign">${$(opt.element).text()}</span></span>`
    )
}

function inputMask() {
  const inputs = [...document.querySelectorAll('.cur-converter__input input')]
  for (const input of inputs) {
    const mask = IMask(input, {
      mask: Number,
      scale: 2,
      signed: false,
      thousandsSeparator: ' ',
      radix: ',',
      mapToRadix: ['.', ','],
      min: 0,
      // eslint-disable-next-line unicorn/numeric-separators-style
      max: 10000000,
      lazy: false
    })
  }
}
