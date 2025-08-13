<script setup>
import { ref, onMounted, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

// Responsive chart sizing optimized for 14-inch laptops
const chartWidth = computed(() => {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    if (width < 1024) return '100%'   // mobile/tablet
    if (width < 1400) return '140%'   // 14-inch laptops (1366x768)
    return '170%'                     // larger screens
  }
  return '170%'
})

const chartHeight = computed(() => {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    if (width < 1024) return '180px'  // mobile/tablet
    if (width < 1400) return '200px'  // 14-inch laptops
    return '250px'                    // larger screens
  }
  return '250px'
})

const series = ref([
  {
    name: 'value',
    data: [0, 0]
  }
])

const chartOptions = {
  chart: {
    type: 'bar',
    toolbar: { show: false },
    margin: {
    top: 30,
  },
  },
  legend: { show: false },
  colors: ['#38bdf8', '#1e3a8a'],
  plotOptions: {
    bar: {
      borderRadius: 6,
      distributed: true,
      dataLabels: { position: 'top' },
      columnWidth: '70%',
      barGap: 70
    },
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => val,
    offsetY: -20,
    style: {
      fontSize: '10px',
      colors: ['#334155'],
    },
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
    }
  },
  yaxis: {
    labels: { show: false },
  },
  grid: {
    yaxis: { lines: { show: false } },
  },
}
onMounted(async () => {
  try {
    const res = await fetch(
      '/api/get-latest-data?section=Credit Disbursement&names=Program Target,Program Achievement'
    )
    const data = await res.json()
    console.log('Program API data:', data)

    const target = Number(data.find(item => item.name === 'Program Target')?.value) || 0
    const achievement = Number(data.find(item => item.name === 'Program Achievement')?.value) || 0
    series.value[0].data = [target, achievement]
  } catch (err) {
    console.error('Failed to fetch Program data:', err)
  }
})
</script>

<template>
  <client-only>
    <div class="w-full h-full flex items-center justify-center">
      <VueApexCharts
        type="bar"
        :series="series"
        :options="chartOptions"
        :height="chartHeight"
        :width="chartWidth"
      />
    </div>
  </client-only>
</template>
