export const planetChartData = {
  type: 'line',
  data: {
    labels: ['Green', 'Yellow', 'Red', 'Black', 'Gray'],
    datasets: [
      {
        label: 'Number of Green',
        data: [0, 0, 1, 2, 79],
        backgroundColor: '#3deb34',
        borderColor: '#3deb34',
        borderWidth: 3
      },
      {
        label: 'Planetary Mass (relative to the Sun x 10^-6)',
        data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
        backgroundColor: '#d9eb34',
        borderColor: '#d9eb34',
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    }
  }
}

export default planetChartData
