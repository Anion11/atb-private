export default function atms() {
  const atmsInput = $('.js-atms-search-result')
  const atmsResults = $('.atms-search__results')
  atmsInput.on('focus', function () {
    atmsResults.addClass('atms-search__results--visible')
  })
  atmsInput.on('blur', function () {
    atmsResults.removeClass('atms-search__results--visible')
  })

  $('.js-atms-type').on('click', function () {
    if (!$(this).hasClass('active')) {
      const atmsType = $(this).attr('data-atms-type')
      $(this).siblings('.js-atms-type').removeClass('active')
      $(this).addClass('active')
      $('.atms-filter__section').each(function () {
        const activeSection = $(`.atms-filter__section[data-atms-type="${atmsType}"]`)

        if ($(activeSection).length > 0) {
          $('.atms-filter__section').removeClass('active')
          $(activeSection).addClass('active')
        } else {
          $('.atms-filter').removeClass('active')
          $('.js-atms-filter-btn').removeClass('active')
        }
      })
    }
  })
  $('.js-atms-filter-btn').on('click', function () {
    $(this).toggleClass('active')
    $('.atms-filter').toggleClass('active')
  })
  $('.js-atms-view').on('click', function () {
    if (!$(this).hasClass('active')) {
      $(this).siblings('.js-atms-view').removeClass('active')
      $(this).addClass('active')
      $('.atms-tabs__item').removeClass('active').eq($('.atms-view__item.active').index()).addClass('active')
    }
  })
  $('.js-open-list-map').on('click', function (event) {
    event.preventDefault()
    $(this).parents('.atms-list__item').find('.atms-list__map').slideToggle()
  })
  $('.js-atms-list-map-close').on('click', function (event) {
    event.preventDefault()
    $(this).parents('.atms-list__map').slideUp()
  })
}
