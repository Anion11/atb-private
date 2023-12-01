import noUiSlider from 'nouislider'

export default function uiRange() {
  const ranges = document.querySelectorAll('.ui-range')

  for (const range of ranges) {
    const itemRange = range.querySelector('.ui-range-body')
    const inputRange = range.querySelector('.ui-range__inp input')
    const inputRangeHiddenValue = range.querySelector('.ui-range__inp-val')

    if (range.classList.contains('ui-range--steps')) {
      let stepsArray = [0, 1, 2]
      if (inputRange.dataset.steps) {
        stepsArray = inputRange.dataset.steps.split(',')
        stepsArray = stepsArray.map((step) => Number.parseInt(step, 10))
      } else {
        // eslint-disable-next-line no-console
        console.error('Steps values not found in data attribute, set to default value', inputRange)
      }

      noUiSlider.create(itemRange, {
        start: stepsArray[0],
        connect: 'lower',
        snap: true,
        range: rangeStepsCalc(range, stepsArray)
      })
    } else {
      let minInp
      let maxInp

      if (inputRange.dataset.min) {
        minInp = Number.parseInt(inputRange.dataset.min, 10)
      } else {
        minInp = 1
        // eslint-disable-next-line no-console
        console.error('Minimum value not found in data attribute, set to default value', inputRange)
      }
      if (inputRange.dataset.max) {
        maxInp = Number.parseInt(inputRange.dataset.max, 10)
      } else {
        maxInp = 2
        // eslint-disable-next-line no-console
        console.error('Maximun value not found in data attribute, set to default value', inputRange)
      }

      noUiSlider.create(itemRange, {
        start: minInp,
        connect: 'lower',
        range: {
          min: minInp,
          max: maxInp
        }
      })

      range.querySelector('.ui-range-value-lower span').innerHTML = minInp.toLocaleString('ru-RU')
      range.querySelector('.ui-range-value-upper span').innerHTML = maxInp.toLocaleString('ru-RU')
    }

    itemRange.noUiSlider.on('update', function (values, handle) {
      const updValue = Math.round(values[handle])
      inputRange.value = updValue.toLocaleString('ru-RU')
      inputRangeHiddenValue.textContent = updValue.toLocaleString('ru-RU')
      const event = new CustomEvent('rangeChange', {
        detail: {
          value: updValue
        }
      })
      inputRange.dispatchEvent(event)
    })

    inputRange.addEventListener('change', function () {
      itemRange.noUiSlider.set(+(this.value).replace(/\s/g, ''))
      dispatchChangeEvent(inputRange)
    })

    inputRange.addEventListener('input', function () {
      this.value = this.value.replace(/[A-Z_a-zЁА-яё]/g, '')
      inputRangeHiddenValue.textContent = this.value
    })

    inputRange.closest('.ui-range__inp').addEventListener('click', function () {
      inputRange.focus()
    })

    setCustomEvents(itemRange, inputRange)
  }

  window.uiRangeUpdateMin = updUiRangeMin
  window.uiRangeUpdateMax = updUiRangeMax
  window.uiRangeUpdateMinMax = updUiRangeMinMax
  window.updUiRangeSteps = updUiRangeSteps

  window.uiRangeGetValue = uiRangeGetValue
  window.uiRangeSetValue = uiRangeSetValue

  $(document).on('click', '.bvi-link, .header__bvi', function () {
    bviFix()
  })
  window.addEventListener('load', function () {
    bviFix()
  })
}

function setCustomEvents(itemRange, inputRange) {
  itemRange.noUiSlider.on('update', () => dispatchUpdateEvent(inputRange))
  itemRange.noUiSlider.on('change', () => dispatchChangeEvent(inputRange))
}

function dispatchUpdateEvent(inputRange) {
  inputRange.dispatchEvent(new Event('range:update'))
}

function dispatchChangeEvent(inputRange) {
  inputRange.dispatchEvent(new Event('range:change'))
}

function updUiRangeMin(rangeInput, value) {
  const instance = rangeInput.closest('.ui-range').querySelector('.ui-range-body')
  const minLimit = instance.closest('.ui-range').querySelector('.ui-range-value-lower span')

  minLimit.textContent = value.toLocaleString('ru')
  instance.noUiSlider.updateOptions(
    {
      range: {
        min: value,
        max: instance.noUiSlider.options.range.max
      }
    },
    true
  )
}

function updUiRangeMax(rangeInput, value) {
  const instance = rangeInput.closest('.ui-range').querySelector('.ui-range-body')
  const maxLimit = instance.closest('.ui-range').querySelector('.ui-range-value-upper span')

  maxLimit.textContent = value.toLocaleString('ru')
  instance.noUiSlider.updateOptions(
    {
      range: {
        min: instance.noUiSlider.options.range.min,
        max: value
      }
    },
    true
  )
}

function updUiRangeMinMax(rangeInput, min, max) {
  updUiRangeMin(rangeInput, min)
  updUiRangeMax(rangeInput, max)
}

function updUiRangeSteps(rangeInput, steps) {
  const instance = rangeInput.closest('.ui-range').querySelector('.ui-range-body')

  instance.noUiSlider.updateOptions(
    {
      start: steps[0],
      range: rangeStepsCalc(rangeInput.closest('.ui-range'), steps)
    },
    true
  )
}

function uiRangeGetValue(rangeInput) {
  return rangeInput.closest('.ui-range').querySelector('.ui-range-body').noUiSlider.get()
}

function uiRangeSetValue(rangeInput, value) {
  return rangeInput.closest('.ui-range').querySelector('.ui-range-body').noUiSlider.set(value)
}

function rangeStepsCalc(range, stepsArray) {
  const rangeSettings = {
    min: [stepsArray[0], stepsArray[1]],
    max: [stepsArray[stepsArray.length - 1]]
  }

  const rangeNames = []
  const increment = 100 / (stepsArray.length - 1)
  let count = increment
  while (count < 100) {
    rangeNames.push(`${count}%`)
    count += increment
  }

  for (let index = 1; index < stepsArray.length - 1; index++) {
    rangeSettings[rangeNames[index - 1]] = [stepsArray[index], stepsArray[index + 1] - stepsArray[index]]
  }

  const rangeWrapp = range.querySelector('.ui-range__wrap')
  rangeWrapp.innerHTML = ''
  for (let index = 0; index < stepsArray.length; index++) {
    const span = document.createElement('span')
    span.textContent = stepsArray[index].toLocaleString('ru')
    if (index !== 0 && index !== stepsArray.length - 1) span.style.left = rangeNames[index - 1]
    rangeWrapp.append(span)
  }

  return rangeSettings
}

function bviFix() {
  if ($('body').hasClass('bvi-active')) {
    const noStylesClass = 'bvi-no-styles'
    $('.noUi-connect').addClass(noStylesClass)
    $('.noUi-handle').addClass(noStylesClass)
  }
}
