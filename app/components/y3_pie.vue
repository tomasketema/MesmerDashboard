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
      gradientToColors: ['#1E293B'],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    },
    colors: ['#475569']
  },
  stroke: {
    dashArray: 4
  },
  labels: ['']
})

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=BDS Status&names=Program Target,Program Achievement')
    const data = await res.json()

    const target = Number(data.find(item => item.name === 'Program Target')?.value) || 0
    const achievement = Number(data.find(item => item.name === 'Program Achievement')?.value) || 0

    const percentage = target > 0 ? Math.round((achievement / target) * 100) : 0

    series.value = [(percentage)]
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
