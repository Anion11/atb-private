import headerBlocksPosition from '../header/header-blocks-position'

/* eslint-disable unicorn/numeric-separators-style */
export default function promo() {
  window.initPromo = function () {
    if (document.querySelector('.promo')) {
      promoClose()
      makeTimer()
      setInterval(function () { makeTimer() }, 1000)
    }
  }

  window.initPromo()
}

function promoClose() {
  document.querySelector('.promo__close').addEventListener('click', function () {
    this.closest('.promo').classList.add('promo--hidden')
    headerBlocksPosition()
  })
}

function makeTimer() {
  const timerBlock = document.querySelector('.promo__timer')
  const endTime = (Date.parse(new Date(timerBlock.dataset.end))) / 1000
  const now = (Date.parse(new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' })) / 1000)

  const timeLeft = endTime - now

  let days = Math.floor(timeLeft / 86400)
  let hours = Math.floor((timeLeft - (days * 86400)) / 3600)
  let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60)
  let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)))

  if (days < '10') { days = `0${days}` }
  if (hours < '10') { hours = `0${hours}` }
  if (minutes < '10') { minutes = `0${minutes}` }
  if (seconds < '10') { seconds = `0${seconds}` }

  if (days > -1) {
    timerUpdateValues('days', days, ['День', 'Дня', 'Дней'])
    timerUpdateValues('hours', hours)
    timerUpdateValues('minutes', minutes)
    timerUpdateValues('seconds', seconds)
  }
}

function decOfNumber(number, titles) {
  const decCache = []
  const decCases = [2, 0, 1, 1, 1, 2]
  if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)]
  return titles[decCache[number]]
}

function timerUpdateValues(id, item, descr) {
  const element = document.querySelector(`[data-timer-item="promo-timer-${id}"]`)
  const valueArray = [...String(item)]
  const valueFirst = element.querySelector('.promo__timer-number--first')
  const valueSecond = element.querySelector('.promo__timer-number--second')
  valueFirst.innerHTML = valueArray[0]
  valueSecond.innerHTML = valueArray[1]
  if (descr !== undefined) {
    element.querySelector('.promo__timer-descr').innerHTML = decOfNumber(item, descr)
  }
}
