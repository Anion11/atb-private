export default function getMortgage() {
  if (document.querySelector('.get-mortgage')) {
    const tabsWrappers = [...document.querySelectorAll('.get-mortgage__tab')]
    const tabs = [...document.querySelectorAll('.get-mortgage__tab-inner')]
    const content = [...document.querySelectorAll('.get-mortgage__item')]
    for (const tab of tabs) {
      tab.addEventListener('click', function () {
        for (const element of tabsWrappers) {
          element.classList.remove('get-mortgage__tab--active')
        }
        this.parentElement.classList.add('get-mortgage__tab--active')
        for (const element of content) {
          element.style.display = 'none'
        }
        content[getNodeindex(this.parentElement)].style.display = 'flex'
      })
    }
  }
}

function getNodeindex(elm) { return [...elm.parentElement.children].indexOf(elm) }
