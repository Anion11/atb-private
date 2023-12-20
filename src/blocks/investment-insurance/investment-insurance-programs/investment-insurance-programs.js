import Swiper from 'swiper/bundle'

export default function investmentInsurancePrograms() {
  $('.investment-insurance-programs__to-docs').click(function () {
    $(this).parents('.investment-insurance-programs__box').toggleClass('active')
  })
  $('.investment-insurance-programs__close').click(function () {
    $(this).parents('.investment-insurance-programs__box').toggleClass('active')
  })

  const slider = new Swiper('.investment-insurance-programs .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    breakpoints: {
      1259: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  })
}
