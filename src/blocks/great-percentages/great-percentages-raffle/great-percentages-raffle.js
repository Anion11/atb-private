export default function greatPercentagesRaffle() {
  const showMoreButtons = [...document.querySelectorAll('.great-percentages-raffle__more')]
  if (showMoreButtons.length > 0) {
    for (const button of showMoreButtons) {
      button.addEventListener('click', function () {
        this.style.display = 'none'
        this.parentElement.querySelector('.great-percentages-raffle__winners--more').style.display = 'block'
      })
    }
  }
}
