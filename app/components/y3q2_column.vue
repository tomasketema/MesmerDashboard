<script setup>
import { ref, onMounted, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'


const isFHD = computed(() => {
  if (typeof window !== 'undefined') {
    const w = window.innerWidth
    const h = window.innerHeight
    return w >= 1880 && w <= 1940 && h >= 1000 && h <= 1100
  }
  return false
})

const chartWidth = computed(() => {
  if (isFHD.value) return '100%'
  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    if (width < 1024) return '100%'
    if (width < 1400) return '140%'
    return '250%'
  }
  return '100%'
})

const chartHeight = computed(() => {
  if (isFHD.value) return '100%'
  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    if (width < 1024) return '200'
    if (width < 1400) return '220'
    return '250'
  }
  return '250'
})

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
    formatter: function (val) {
      return new Intl.NumberFormat('en-US').format(val);
    },
    offsetY: -15,
    style: {
      fontSize: '10px',
      colors: ['#304758'],
      fontWeight: 'bold'
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
      maxHeight: 100,
      style: {
        colors: [],
        fontSize: '11px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 500,
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
    <div class="w-full h-full flex justify-center items-center p-2">
      <VueApexCharts
        type="bar"
        :series="series"
        :options="chartOptions"
        :width="chartWidth"
        :height="chartHeight"
      />
    </div>
  </client-only>
</template>
