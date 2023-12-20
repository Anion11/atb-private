import answers from '../../blocks/answers/answers'
import tags from '../../blocks/tags/tags'

document.addEventListener('DOMContentLoaded', function () {
  tags()
})

window.addEventListener('load', function () {
  answers()
})
window.addEventListener('resize', answers)
