import Swiper from 'swiper/bundle'

export default function calcMortgage() {
  if ($('.calc-mortgage').length > 0) {
    $(document).on('click', '.calc-mortgage__options-head', function () {
      $(this).siblings('.calc-mortgage__options-main').slideToggle()
    })
  }
}
