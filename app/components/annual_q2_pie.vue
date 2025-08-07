<script setup>
import { ref, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const series = ref([0])

const chartOptions = {
  chart: { height: 350, type: 'radialBar', offsetY: -10 },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: { fontSize: '16px', color: undefined, offsetY: 120 },
        value: {
          offsetY: 76,
          fontSize: '22px',
          color: undefined,
          formatter: val => val + '%'
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
      gradientToColors: ['#1e3a8a'],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    },
    colors: ['#4b6cb7']
  },
  stroke: { dashArray: 4 },
  labels: ['']
}

onMounted(async () => {
  try {
    // Fetch target and achievement from the API
    const res = await fetch('/api/get-latest-data?section=BDS Status&names=Annual Q2 Target,Annual Q2 Achievement'
    )
    const data = await res.json()

    const target = Number(data.find(item => item.name === 'Annual Q2 Target')?.value) || 0
    const achievement = Number(data.find(item => item.name === 'Annual Q2 Achievement')?.value) || 0

    // Calculate percentage (avoid division by zero)
    const percentage = target > 0 ? Math.round((achievement / target) * 100) : 0

    // Set percentage as the radial value
    series.value = [percentage]
  } catch (err) {
    console.error('Failed to fetch radial chart data:', err)
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
