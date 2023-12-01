import Chart from 'chart.js/auto'

export default function metalsChart() {
  charts()
  checkPeriods()
}

function charts() {
  if ([...document.querySelectorAll('#metalsChartMain')].length > 0) {
    const goldData = {
      labels: ['19.11.2022', '22.11.2022', '23.11.2022', '24.11.2022', '25.11.2022', '26.11.2022', '29.11.2022'],
      datasetsLabel: 'Золото',
      datasetsData: [3415, 3300, 3400, 3250, 3500, 3150, 3000]
    }

    const silverData = {
      labels: ['9.11.2022', '12.11.2022', '23.11.2022', '24.11.2022', '25.11.2022', '26.11.2022', '28.11.2022'],
      datasetsLabel: 'Серебро',
      datasetsData: [3215, 2500, 3400, 3250, 3500, 3550, 2500]
    }

    let labels
    let datasetsData
    let datasetsLabel

    if ([...document.querySelectorAll('.js-test-data')].length > 0) {
      labels = goldData.labels
      datasetsData = goldData.datasetsData
      datasetsLabel = goldData.datasetsLabel
    } else {
      labels = ''
      datasetsData = ''
      datasetsLabel = ''
    }

    const myData = {
      labels: labels,
      datasets: [{
        label: datasetsLabel,
        data: datasetsData,
        pointStyle: 'circle',
        backgroundColor: ['#fe5000'],
        pointHoverBackgroundColor: ['rgba(254, 80, 0, 1)'],
        borderColor: ['#fe5000'],
        borderWidth: 2,
        pointBorderColor: 'rgba(254, 80, 0, 0)',
        pointHoverBorderColor: 'rgba(254, 80, 0, 0.31)',
        pointBorderWidth: 10,
        pointHoverBorderWidth: 10,
        pointRadius: 1,
        pointHoverRadius: 6
      }]
    }

    window.myChart = new Chart(document.querySelector('#metalsChartMain'), {
      type: 'line',
      data: myData,
      options: {
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            usePointStyle: true
          }
        },
        scales: {
          y: {
            display: true,
            title: {
              display: true,
              text: 'руб./гр.',
              font: {
                family: 'Circe'
              }
            },
            ticks: {
              count: 5,
              font: {
                family: 'Circe'
              }
            }
          },
          x: {
            ticks: {
              font: {
                family: 'Circe'
              }
            }
          }
        }
      }
    })

    window.updateChart = function (data) {
      const newLabels = data.labels
      const newDatasetsLabel = data.datasetsLabel
      const newDatasetsData = data.datasetsData
      myData.labels = newLabels
      myData.datasets[0].label = newDatasetsLabel
      myData.datasets[0].data = newDatasetsData
      myChart.update()
    }

    $('.js-chart-test-update .switch-nav__btn').on('click', function () {
      $(this).parents('.switch-nav').hasClass('switch-nav--active') ? updateChart(silverData) : updateChart(goldData)
    })

    $('.js-chart-test-update .switch-nav__text').on('click', function () {
      $(this).parents('.switch-nav').hasClass('switch-nav--active') ? updateChart(silverData) : updateChart(goldData)
    })
  }
}

function checkPeriods() {
  const periodItems = document.querySelectorAll('.metals-chart__ui-radio input')
  const datepicker = document.querySelector('.metals-chart__ui-datepicker input')
  for (const item of periodItems) {
    item.addEventListener('input', function () {
      if (this.id === 'metals-chart-period-range') {
        datepicker.removeAttribute('disabled')
      } else {
        datepicker.setAttribute('disabled', 'disabled')
      }
    })
  }
}
