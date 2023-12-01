export default function howGet() {
  const howGetBlocks = document.querySelectorAll('.how-get:not(.how-get--static)')
  window.addEventListener('load', function () {
    for (const howGetBlock of howGetBlocks) {
      if (!$('body').hasClass('bvi-active')) {
        animation(howGetBlock)
      }
      $(document).on('click', '[data-bvi="close"]', function () {
        animation(howGetBlock)
      })
    }
  })
}

function animation(parent) {
  const boxes = [...parent.querySelectorAll('.how-get__box')]
  const lines = [...parent.querySelectorAll('.how-get__box-line')]
  const duration = 5000
  const delay = 500

  steps(boxes, lines, 0, duration, delay)
  const intervalId = setInterval(() => {
    steps(boxes, lines, 0, duration, delay)
  }, (duration + delay) * boxes.length)

  $(document).on('click', '.bvi-link, .header__bvi', function () {
    clearInterval(intervalId)
  })
}

function steps(boxes, lines, index, duration, delay) {
  if (index === boxes.length) {
    return
  }
  const activeElement = boxes[index]
  const activeLine = lines[index]
  activeElement.classList.add('active')
  setTimeout(() => {
    activeElement.classList.remove('active')
    if (index !== boxes.length - 1) {
      activeLine.classList.add('active_line')
    }
    setTimeout(() => {
      steps(boxes, lines, index + 1, duration, delay)
      if (index !== boxes.length - 1) {
        activeLine.classList.remove('active_line')
      }
    }, delay)
  }, duration)
}
