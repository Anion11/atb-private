import Swiper from 'swiper/bundle'

export default function clubPromotions() {
  const clubPromotionsBlock = document.querySelector('.club-promotions')
  if ($(clubPromotionsBlock).length > 0) {
    const slider = new Swiper('.club-promotions .swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      watchOverflow: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1259: {
          slidesPerView: 3,
          spaceBetween: 25
        }
      }
    })
  }
}
