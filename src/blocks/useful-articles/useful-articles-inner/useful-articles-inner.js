export default function usefulArticlesInner() {
  if (document.querySelector('.useful-articles-inner')) {
    window.addEventListener('scroll', articleNav)
    articleMobAasideDivide()
  }

  window.addEventListener('resize', function () {
    articleMobAasideDivide()
    if (window.innerWidth > 767) {
      articleNav()
    }
  })
}

function articleNav() {
  if (window.innerWidth > 767) {
    const textSections = $('.useful-articles-inner__content [id]')

    textSections.each(function () {
      if (($(this).offset().top - 40) < $(window).scrollTop()) {
        const sectionId = $(this).attr('id')
        if ($(`[href='#${sectionId}']`).length > 0) {
          $('.useful-articles-inner__anchor').removeClass('useful-articles-inner__anchor--active')
          $(`[href="#${sectionId}"]`).parents('.useful-articles-inner__anchor').addClass('useful-articles-inner__anchor--active')
        }
      }
    })
  }
}

function articleMobAasideDivide() {
  const block = document.querySelector('.useful-articles-inner--mob-aside-divide')
  if (block) {
    const aside = block.querySelector('.useful-articles-inner__aside')
    const content = block.querySelector('.useful-articles-inner__content')
    const floatingBlock = block.querySelector('.useful-articles-inner__box--nav')
    if (window.innerWidth > 767) {
      aside.prepend(floatingBlock)
    } else {
      content.prepend(floatingBlock)
    }
  }
}
