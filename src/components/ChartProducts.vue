<script>
import Chart from 'chart.js'
import DataProducts from '../data/products-data.js'

export default {
  name: 'SneakersChart',
  data() {
    return {
      productsChartData: DataProducts
    }
  },
  mounted() {
    const ctx = document.getElementById('sneakers-chart')
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: 'Green Sneakers',
            data: [0, 0, 1, 2, 79],
            backgroundColor: '#3deb34',
            borderColor: '#3deb34',
            borderWidth: 3
          },
          {
            label: 'Yellow Sneakers',
            data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
            backgroundColor: '#d9eb34',
            borderColor: '#d9eb34',
            borderWidth: 3
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
}
</script>

<template>
  <div>
    <canvas class="chart" id="sneakers-chart"></canvas>
  </div>
</template>

<style scoped>
.chart {
  width: 400px;
  height: 300px;
}
</style>
