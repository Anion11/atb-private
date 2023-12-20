export default function seo() {
  $('.seo .seo__title').on('click', function () {
    $(this).toggleClass('seo__title--active')
    $(this).siblings('.seo__inner').slideToggle()
  })

  $('.seo .seo-accordion-item').on('click', function () {
    $(this).find('.seo-accordion-item__inner').slideToggle()
  })

  $('.seo .new_block_simple .title').on('click', function () {
    $(this).toggleClass('active')
    $(this).siblings('.in_simple').slideToggle()
  })
  $('.seo .new_block_simple .in_simple .item h2').on('click', function () {
    $(this).siblings('.item_in').slideToggle()
  })
}
