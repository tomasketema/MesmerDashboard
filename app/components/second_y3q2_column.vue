<script setup>
import { ref, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const series = ref([
  {
    name: 'value',
    data: [0, 0]
  }
])

const chartOptions = ref({
  chart: {
    height: 50,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  legend: {
    show: false
  },
  colors: ['#4CA64C', '#5A2E0F'],
  plotOptions: {
    bar: {
      borderRadius: 10,
      distributed: true,
      dataLabels: {
        position: 'top'
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758']
    }
  },
  xaxis: {
    categories: ['Target', 'Achievement'],
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

// 🔄 Fetch latest data for Y3Q2 Target and Achievement
onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Credit Disbursement&names=Y3Q2 Target,Y3Q2 Achievement')
    const data = await res.json()

    const target = Number(data.find(d => d.name === 'Y3Q2 Target')?.value) || 0
    const achievement = Number(data.find(d => d.name === 'Y3Q2 Achievement')?.value) || 0

    series.value = [
      {
        name: 'value',
        data: [target, achievement]
      }
    ]
  } catch (err) {
    console.error('Failed to load bar chart data:', err)
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
