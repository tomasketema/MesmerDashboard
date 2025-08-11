<script setup>
import { ref, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const series = ref([
  {
    name: 'value',
    data: [0, 0] // Initial values
  }
])

const chartOptions = ref({
  chart: {
    height: 50,
    type: 'bar',
    toolbar: { show: false }
  },
  legend: { show: false },
  colors: ['#f38429', '#155d99'],
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
    formatter: val => val,
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
    labels: {
      rotate: 0,
      rotateAlways: false,
      hideOverlappingLabels: false,
      trim: false,
      minHeight: undefined,
      maxHeight: 120,
      style: {
        colors: [],
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label'
      }
    },
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
    labels: { show: false }
  },
  grid: {
    yaxis: {
      lines: { show: false }
    }
  }
})

onMounted(async () => {
  try {
    const res = await fetch(
      '/api/get-latest-data?section=BDS Status&names=Y3Q2 Target,Y3Q2 Achievement'
    )
    const data = await res.json()
    console.log('Y3Q2 data:', data)

    const target = Number(data.find(item => item.name === 'Y3Q2 Target')?.value) || 0
    const achievement = Number(data.find(item => item.name === 'Y3Q2 Achievement')?.value) || 0

    series.value[0].data = [target, achievement]
  } catch (err) {
    console.error('Failed to fetch Y3Q2 bar data:', err)
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
