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
            label: '在職人數',
            backgroundColor: '#f87979',
            data: [],
            borderColor: '#000000',
            borderWidth: 3,
            barThickness: 50,
          } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    },
    async created() {
      try {
        await http.get('/membercount/')
          .then(response => {
            const resource = response.data
            console.log(resource)
            for(let x = 0; x < resource.length; x++) {
              this.chartData.labels.push(resource[x].position)
              this.chartData.datasets[0].data.push(resource[x].count)
            }
          })
      } catch (error) {
          console.log(error)
        }
    }
  }
  </script>