import Swiper from 'swiper/bundle'

export default function walletPayApp() {
  const walletPayAppSlider = new Swiper('.wallet-pay-app .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    watchOverflow: true,
    breakpoints: {
      1259: {
        spaceBetween: 80
      },
      767: {
        spaceBetween: 40
      }
    }
  })
}
