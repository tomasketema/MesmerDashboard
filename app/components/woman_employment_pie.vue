<script setup>
import { ref, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const series = ref([0]) // percentage value

const chartOptions = ref({
  chart: {
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '50%' },
      track: { strokeWidth: '100%' },
      dataLabels: {
        name: { show: false },
        value: {
          show: true,
          fontSize: '18px',
          fontWeight: 600,
          color: '#1E293B',
        },
      },
    },
  },
  fill: {
    colors: ['#1e3a8a'],
  },
  labels: [],
})

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=MESMER Supported&names=Woman Employment')
    const data = await res.json()
    const percentage = Number(data.find(item => item.name === 'Woman Employment')?.value) || 0
    series.value = [percentage]
  } catch (error) {
    console.error('Failed to fetch Woman Employment data:', error)
  }
})
</script>

<template>
  <client-only>
    <div class="w-full h-[140px]">
      <VueApexCharts
        type="radialBar"
        :options="chartOptions"
        :series="series"
        height="150%"
        width="200"
      />
    </div>
  </client-only>
</template>
