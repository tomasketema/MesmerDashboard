<script setup>
import { ref, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const series = ref([
  {
    name: 'Value',
    data: [0, 0] // Initially 0s
  }
])

const chartOptions = ref({
  chart: {
    height: 50,
    type: 'bar',
    toolbar: { show: false }
  },
  legend: { show: false },
  colors: ['#60a5fa', '#1E293B'],
  plotOptions: {
    bar: {
      borderRadius: 10,
      distributed: true,
      dataLabels: { position: 'top' }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: val => val,
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758']
    }
  },
  xaxis: {
     categories: ['Target', 'Achievemnet'],
    position: 'bottom',
    axisBorder: { show: false },
    axisTicks: { show: false },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5
        }
      }
    },
    tooltip: { enabled: false }
  },
  yaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      show: false,
      formatter: val => val
    }
  },
  grid: {
    yaxis: { lines: { show: false } }
  }
})

// 🔄 Fetch live data on mount
onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=BDS Status&names=Program Target,Program Achievement')
    const data = await res.json()

    const target = Number(data.find(d => d.name === 'Program Target')?.value) || 0
    const achievement = Number(data.find(d => d.name === 'Program Achievement')?.value) || 0

    series.value[0].data = [target, achievement]
  } catch (err) {
    console.error('Failed to fetch chart data:', err)
  }
})
</script>

<template>
  <client-only>
    <div class="flex justify-center p-10">
      <VueApexCharts
        type="bar"
        :series="series"
        :options="chartOptions"
        width="250%"
        height="250%"
      />
    </div>
  </client-only>
</template>
