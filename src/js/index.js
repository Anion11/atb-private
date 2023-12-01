/* eslint-disable unicorn/prevent-abbreviations */
import $ from 'jquery'
import 'lazysizes'
import bvi from 'bvi'
import { Fancybox } from '@fancyapps/ui'
import uiCheckbox from '../blocks/_ui/ui-checkbox/ui-checkbox'
import uiDatepicker from '../blocks/_ui/ui-datepicker/ui-datepicker'
import uiInput from '../blocks/_ui/ui-input/ui-input'
import uiRadio from '../blocks/_ui/ui-radio/ui-radio'
import uiRange from '../blocks/_ui/ui-range/ui-range'
import uiSelects from '../blocks/_ui/ui-select/ui-select'
import uiTextarea from '../blocks/_ui/ui-textarea/ui-textarea'
import uiTooltip from '../blocks/_ui/ui-tooltip/ui-tooltip'
import UiTable from '../blocks/_ui/ui-table/ui-table'
import accordion from '../blocks/accordion/accordion'
import banner from '../blocks/banner/banner'
import cardRouter from '../blocks/card/card-router/card-router'
import cookiesBanner from '../blocks/cookies-banner/cookies-banner'
import curConevrter from '../blocks/cur-converter/cur-converter'
import promo from '../blocks/promo/promo'
import promoLoan from '../blocks/promo-loan/promo-loan'
import headerScripts from '../blocks/header/header'
import howGet from '../blocks/how-get/how-get'
import popupScript from '../blocks/popup/popup'
import selectCard from '../blocks/select-card/select-card'
import seo from '../blocks/seo/seo'
import switchScripts from '../blocks/switch/switch'
import tabs from '../blocks/tabs/tabs'
import tabsAccordion from '../blocks/tabs-accordion/tabs-accordion'
import telInstruction from '../blocks/tel-instruction/tel-instruction'
import usefulGoods from '../blocks/useful-goods/useful-goods'
import contactWidget from '../blocks/contact-widget/contact-widget'
import './_backend'

document.addEventListener('DOMContentLoaded', function () {
  window.$ = $
  window.bviUpdate = bviUpdate
  uiCheckbox()
  uiInput()
  uiDatepicker()
  uiRadio()
  uiRange()
  uiSelects()
  uiTextarea()
  uiTooltip()
  UiTable()
  headerScripts()
  accordion()
  banner()
  cardRouter()
  cookiesBanner()
  curConevrter()
  promo()
  promoLoan()
  howGet()
  seo()
  switchScripts()
  popupScript()
  selectCard()
  scrollTo()
  tabs()
  tabsAccordion()
  telInstruction()
  usefulGoods()
  contactWidget()
  openAccordionByLink()
  openTabByLink()

  commonExpand()

  // eslint-disable-next-line no-new, no-undef
  new isvek.Bvi()
  $(document).on('click', '.bvi-link, .header__bvi', function () {
    bviUpdate()
  })

  window.autoHeightTable = autoHeightTable
})

window.addEventListener('load', function () {
  bviUpdate()
  commonTableScripts()
})

function bviUpdate() {
  autoHeightTable()
  const noStylesClass = 'bvi-no-styles'
  const bviBody = document.querySelector('.bvi-body')
  delete bviBody?.dataset.bviBuiltelements

  $('[class*="ymaps-2"]').addClass(noStylesClass)

  const className = 'bvi-background-image'
  Array.prototype.forEach.call(document.querySelectorAll(`.${className}`), function (node) {
    node.classList.remove(className)
    if (`${window.getComputedStyle(node).background}`.includes('url')) {
      node.classList.add('custom-bvi-background-image')
    } else {
      node.classList.add('custom-bvi-background-colors')
    }
  })

  const bviPanel = document.querySelector('.bvi-panel')
  if (bviPanel) {
    const wrapperTop = bviPanel.offsetHeight + Number.parseFloat(window.getComputedStyle(bviPanel).marginBottom)
    document.documentElement.style.setProperty('--bvi-panel-height', `${wrapperTop}px`)
  }
}

function scrollTo() {
  for (const anchor of document.querySelectorAll('.js-scroll-to')) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault()
      if (document.querySelector('.fancybox__container')) {
        Fancybox.close(true)
      }
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    })
  }
}

function commonExpand() {
  const expandButtons = [...document.querySelectorAll('[data-expand-btn]')]
  for (const button of expandButtons) {
    button.addEventListener('click', function () {
      const hiddenBlock = document.querySelector(`[data-expand-block="${this.dataset.expandBtn}"]`)
      this.classList.toggle('active')
      this.classList.contains('active')
        ? this.textContent = this.dataset.endText
        : this.textContent = this.dataset.startText
      $(hiddenBlock).fadeToggle(300)
    })
  }
}

function commonTableScripts() {
  if (document.querySelector('.js-table')) {
    autoHeightTable()
    window.addEventListener('resize', autoHeightTable)
    mobileTableAccordion()
  }
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export default function autoHeightTable() {
  const tables = [...document.querySelectorAll('.js-table')]
  for (const table of tables) {
    const columns = [...table.querySelectorAll('.js-column')]

    const allCeils = [...table.querySelectorAll('.js-ceil')]
    for (const ceil of allCeils) {
      ceil.style.minHeight = 'auto'
    }

    const media = table.dataset.media

    if (window.innerWidth > media) {
      const columnLength = [...columns[0].querySelectorAll('.js-ceil')].length

      for (let index = 0; index < columnLength; index++) {
        const heights = []
        for (const column of columns) {
          if ([...column.querySelectorAll('.js-ceil')][index]) heights.push([...column.querySelectorAll('.js-ceil')][index].offsetHeight)
        }
        const maxHeight = `${Math.max(...heights) + 1}px`
        for (const column of columns) {
          if ([...column.querySelectorAll('.js-ceil')][index]) [...column.querySelectorAll('.js-ceil')][index].style.minHeight = maxHeight
        }
      }
    }
  }
}

function mobileTableAccordion() {
  const tables = [...document.querySelectorAll('.js-table')]
  for (const table of tables) {
    const media = table.dataset.media
    const tableAccordionHeads = [...table.querySelectorAll('.js-accordion-head')]
    for (const head of tableAccordionHeads) {
      head.addEventListener('click', function () {
        if (window.innerWidth < media) {
          this.classList.toggle('active')
          $(this.nextElementSibling).slideToggle()
        }
      })
    }

    window.addEventListener('resize', function () {
      for (const head of tableAccordionHeads) {
        if (window.innerWidth > media) {
          head.nextElementSibling.style.display = 'block'
        } else {
          head.classList.contains('active')
            ? head.nextElementSibling.style.display = 'block'
            : head.nextElementSibling.style.display = 'none'
        }
      }
    })
  }
}

function openAccordionByLink() {
  for (const link of document.querySelectorAll('.js-open-accordion')) {
    link.addEventListener('click', function (event) {
      event.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target && target.classList.contains('accordion-item')) {
        target.querySelector('.accordion-item__head').classList.add('accordion-item__head--active')
        target.scrollIntoView()
        $(target.querySelector('.accordion-item__main')).slideDown()
      }
    })
  }
}

function openTabByLink() {
  for (const link of document.querySelectorAll('.js-open-tab')) {
    link.addEventListener('click', function (event) {
      event.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      const closestTabItem = target.closest('.tabs-main__item')
      const closestTabHead = closestTabItem.closest('.tabs-main').parentElement.querySelector('.tabs-head')
      if (closestTabItem) {
        $(closestTabHead).find('.tabs-head__item--active').removeClass('tabs-head__item--active')
        $(closestTabHead).find('.tabs-head__item').eq($(closestTabItem).index()).addClass('tabs-head__item--active')
        $(closestTabItem).siblings('.tabs-main__item').fadeOut(0)
        $(closestTabItem).fadeIn()
        closestTabHead.scrollIntoView()
      }
    })
  }
}
