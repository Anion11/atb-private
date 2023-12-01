import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru'

export default function uiDatepicker() {
  // datepicker settings
  const tomorrowDate = new Date().setDate(new Date().getDate() + 1)
  const defaultSettings = {
    locale: Russian,
    defaultDate: 'today',
    dateFormat: 'd.m.Y',
    disableMobile: 'true'
  }
  const timeSettings = {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    defaultDate: '12:00',
    time_24hr: true
  }

  // datepicker init
  const datepickersSingle = document.querySelectorAll('.ui-datepicker--single')
  const datepickersRange = document.querySelectorAll('.ui-datepicker--range')
  const datepickersTime = document.querySelectorAll('.ui-datepicker--time')
  for (const datepicker of datepickersSingle) {
    const datepickerSingle = datepicker.querySelector('input')
    flatpickr(datepickerSingle, Object.assign({}, defaultSettings, {
      defaultDate: datepickerSingle.dataset.defaultDate || 'today',
      onChange: function () {
        if (datepickerSingle.mask) {
          datepickerSingle.mask.updateValue()
        }
      }
    }))
    datepickerSingle.mask.updateValue()
  }
  for (const datepicker of datepickersRange) {
    const datepickerRange = datepicker.querySelector('input')
    const fl = flatpickr(datepickerRange, Object.assign({}, defaultSettings, {
      mode: 'range',
      defaultDate: [datepickerRange.dataset.rangeStart, datepickerRange.dataset.rangeEnd],
      allowInput: datepickerRange.dataset.allowInput === 'true'
    }))
  }
  for (const datepicker of datepickersTime) {
    const datepickerTime = datepicker.querySelector('input')
    flatpickr(datepickerTime, timeSettings)
  }

  window.uiDatepickerUpdDate = uiDatepickerUpdDate
}

function uiDatepickerUpdDate(input, dates, format) {
  const dateInput = document.querySelector(input)
  const formatInput = format || 'd.m.Y'
  if (dates.length > 1) {
    const dateStart = flatpickr.parseDate(dates[0], formatInput)
    const dateEnd = flatpickr.parseDate(dates[1], formatInput)
    dateInput._flatpickr.setDate([dateStart, dateEnd])
  } else {
    const date = flatpickr.parseDate(dates[0], formatInput)
    dateInput._flatpickr.setDate([date])
  }
}
