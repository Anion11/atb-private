import headerBlocksPosition from '../header/header-blocks-position'

export default function promoLoan() {
  if (document.querySelector('.promo-loan')) {
    promoClose()
  }
}

function promoClose() {
  const blocks = document.querySelectorAll('.promo-loan')
  for (const block of blocks) {
    block.querySelector('.promo-loan__close').addEventListener('click', function () {
      block.classList.add('promo-loan--hidden')
      headerBlocksPosition()
    })
  }
}
