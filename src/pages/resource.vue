<template>
  <v-main class="pa-0">
    <v-container v-if="chartData.datasets[0].data.length !== 0" align="center" style="max-height: 500px;">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </v-container>
  <v-container v-else>
    Loading
  </v-container>
  </v-main>
  </template>
  
  <script>
  import http from "../http-common"
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [],
          datasets: [ {
            // label: '百分比',
            backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
            data: [],
            borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
            borderWidth: 1,
            // barThickness: 50,
            barPercentage: 0.5,
            categoryPercentage: 1,
          } ]
        },
        chartOptions: {
          responsive: true,
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              ticks: {
                callback: function (value) {
                  return value + '%'; // add '%'
                },
              }
            }
          }
        }
      }
    },
    async created() {
      try {
        await http.get('/membercount/')
          .then(response => {
            const resource = response.data
            // console.log(resource)
            let totalNumber = 0
            let numberArray = []
            for(let x = 0; x < resource.length; x++) {
              this.chartData.labels.push(resource[x].position)
              numberArray.push(resource[x].count)
              totalNumber += resource[x].count
            }
            console.log(numberArray)
            for(let x = 0; x < numberArray.length; x++) {
              numberArray[x] = numberArray[x] / totalNumber * 100
            }
            this.chartData.datasets[0].data = numberArray.slice()
          })
      } catch (error) {
          console.log(error)
        }
    }
  }
  </script>