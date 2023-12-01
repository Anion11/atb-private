import headerBlocksPosition from '../header/header-blocks-position'

export default function promoLoan() {
  if (document.querySelector('.promo-loan')) {
    promoClose()
  }
}

function promoClose() {
  document.querySelector('.promo-loan__close').addEventListener('click', function () {
    this.closest('.promo-loan').classList.add('promo-loan--hidden')
    headerBlocksPosition()
  })
}
