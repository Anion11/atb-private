import 'select2'
import 'select2/dist/js/i18n/ru'

export default function uiSelects() {
  const selects = document.querySelectorAll('.ui-select select')
  for (const select of selects) {
    const selectParent = select.parentElement
    const minResultForSearch = selectParent.classList.contains('ui-select--input') ? 0 : Number.POSITIVE_INFINITY
    $(select).select2({
      minimumResultsForSearch: minResultForSearch,
      width: 'auto',
      dropdownAutoWidth: true,
      templateSelection: optionFormat,
      templateResult: optionFormat,
      dropdownParent: selectParent,
      placeholder: select.dataset.placeholder ? select.dataset.placeholder : '',
      closeOnSelect: !select.getAttribute('multiple'),
      language: 'ru'
    })
    if (select.getAttribute('multiple') !== null) {
      select.parentElement.querySelector('.select2-search__field').setAttribute('readonly', 'readonly')

      const clearAll = document.createElement('span')
      clearAll.className = 'select2-selection__clear-all'
      select.parentElement.querySelector('.select2-selection--multiple').append(clearAll)
    }
    if (selectParent.classList.contains('ui-select--input')) {
      $(select).on('select2:open', function (event) {
        const currentValue = $(select).val()
        if (currentValue) {
          selectParent.querySelector('.select2-search__field').value = currentValue
        }
        selectParent.querySelector('.select2-search__field').focus()
      })

      document.addEventListener('input', (event) => {
        if (event.target.closest('.select2-search__field') && event.target.closest('.select2-search__field').value === '') {
          $(select).val('')
          $(select).val('').trigger('change')
        }
      })
    }

    optionActions(select)
    dispatchCustomEvents(select)

    window.uiSelectSetValue = uiSelectSetValue
    window.uiSelectGetValue = uiSelectGetValue
  }

  function optionFormat(icon) {
    const originalOption = icon.element
    const originalOptionBadge = $(originalOption).data('class')
    return $(`<span class="${originalOptionBadge || ''}">${icon.text}</span>`)
  }

  $('.currency__ui-select select').on('select2:select', function () {
    const tabItem = '.currency-tabs__item'
    const activeValue = $(this).val()

    $(tabItem).fadeOut(0)
    $(`${tabItem}[id=${activeValue}]`).fadeIn()
  })

  $(document).on('click', '.select2-selection__clear-all', function () {
    const thisSelect = $(this).parents('.ui-select').find('select')
    thisSelect.val('').trigger('change')
    thisSelect.select2('close')
  })
}

function dispatchCustomEvents(select) {
  const changeCustomEvent = new Event('select:change')
  const selectCustomEvent = new Event('select:select')
  const unselectCustomEvent = new Event('select:unselect')
  const clearCustomEvent = new Event('select:clear')

  $(select).on('change', () => select.dispatchEvent(changeCustomEvent))
  $(select).on('select2:select', () => select.dispatchEvent(selectCustomEvent))
  $(select).on('select2:unselect', () => select.dispatchEvent(unselectCustomEvent))
  $(select).on('select2:clear', () => select.dispatchEvent(clearCustomEvent))

  // dispatch this event for clear select2 in another files (page file)
  select.addEventListener('select:clear', function () {
    $(this).val('')
    $(this).trigger('change')
  })
}

function uiSelectSetValue(select, value) {
  $(select).val(value).trigger('change')
}

function uiSelectGetValue(select) {
  return $(select).val()
}

function optionActions(select) {
  if (select.querySelector('[data-hide-target]')) {
    $(select).on('change', function () {
      const elementsAttribute = $(this).find(':selected').data('hide-target')
      if (elementsAttribute) {
        for (const elementAttribute of elementsAttribute.split(' ')) {
          $(`[data-toggle-element="${elementAttribute}"]`).fadeOut(0)
        }
      }
    })
  }
  if (select.querySelector('[data-show-target]')) {
    $(select).on('change', function () {
      const elementsAttribute = $(this).find(':selected').data('show-target')
      if (elementsAttribute) {
        for (const elementAttribute of elementsAttribute.split(' ')) {
          $(`[data-toggle-element="${elementAttribute}"]`).fadeIn()
        }
      }
    })
  }
  if (select.querySelector('[data-open-tab]')) {
    $(select).on('change', function () {
      const blockId = $(this).find(':selected').data('open-tab')
      if (blockId) {
        const tab = document.querySelector(`#${blockId}`)
        tab.dispatchEvent(new Event('click'))
      }
    })
  }

  $(select).on('select2:select', function () {
    const groupValue = $(this).data('select-group')
    const selectedValue = $(this).find(':selected').val()
    $(`[data-toggle-group="${groupValue}"]`).fadeOut(0)
    $(`[data-toggle-element="${selectedValue}"]`).fadeIn(0)
  })
  $('[data-select-change]').on('click', function () {
    const groupValue = $(this).data('select-change')
    const selectedValue = $(this).data('select-value')
    $(`select[data-select-group="${groupValue}"]`).val(selectedValue).trigger('change').trigger('select2:select')
  })
}
