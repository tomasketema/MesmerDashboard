<script setup>
import { ref, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const series = ref([0])

const chartOptions = ref({
  chart: {
    height: 350,
    type: 'radialBar',
    offsetY: -10
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '16px',
          color: undefined,
          offsetY: 120
        },
        value: {
          offsetY: 76,
          fontSize: '22px',
          color: undefined,
          formatter: function (val) {
            return val + '%'
          }
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#5A2E0F'],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    },
    colors: ['#5A2E0F']
  },
  stroke: {
    dashArray: 4
  },
  labels: ['']
})

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Credit Disbursement&names=Y3Q2 Target,Y3Q2 Achievement')
    const data = await res.json()

    const target = Number(data.find(item => item.name === 'Y3Q2 Target')?.value) || 0
    const achievement = Number(data.find(item => item.name === 'Y3Q2 Achievement')?.value) || 0

    const percentage = target > 0 ? Math.round((achievement / target) * 100) : 0
    series.value = [percentage]
  } catch (err) {
    console.error('Failed to load radial chart data:', err)
  }
})
</script>

<template>
  <client-only>
    <div class="flex justify-center p-10">
      <VueApexCharts
        type="radialBar"
        :series="series"
        :options="chartOptions"
        width="200"
        height="200"
      />
    </div>
  </client-only>
</template>