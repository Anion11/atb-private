export default function switchScripts() {
  const item = $('.switch-nav__text')
  const itemActiveClass = 'switch-nav__text--active'
  const contentActiveClass = 'switch-content--active'
  const nav = '.switch-nav'
  const navActiveClass = 'switch-nav--active'
  $(item).on('click', function () {
    if (!$(this).hasClass(itemActiveClass)) {
      const itemGroup = $(this).parents('.switch').attr('data-switch-group')
      const activeIndex = $(this).index()
      $(this).siblings('.switch-nav__btn').toggleClass('switch-nav__btn--active')
      $(this).parents(nav).children(item).toggleClass(itemActiveClass)
      activeIndex === 0 ? $(this).parents(nav).removeClass(navActiveClass) : $(this).parents(nav).addClass(navActiveClass)
      if (itemGroup.length > 0) {
        $(`.switch-group[data-switch-group=${itemGroup}]`).each(function () {
          $(this).children('.switch-content').fadeOut(0).removeClass(contentActiveClass).eq(activeIndex).fadeIn(100).addClass(contentActiveClass)
        })
      }
    }
  })
  $('.switch-nav__btn').on('click', function () {
    const itemGroup = $(this).parents('.switch').attr('data-switch-group')
    $(this).toggleClass('switch-nav__btn--active')
    $(this).siblings(item).toggleClass(itemActiveClass)
    const activeIndex = $(this).siblings('.switch-nav__text--active').index()
    activeIndex === 0 ? $(this).parents(nav).removeClass(navActiveClass) : $(this).parents(nav).addClass(navActiveClass)
    if (itemGroup.length > 0) {
      $(`.switch-group[data-switch-group=${itemGroup}]`).each(function () {
        $(this).children('.switch-content').fadeOut(0).removeClass(contentActiveClass).eq(activeIndex).fadeIn(100).addClass(contentActiveClass)
      })
    }
  })
}
