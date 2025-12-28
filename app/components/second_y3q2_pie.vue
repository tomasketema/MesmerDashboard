<script setup>
import { ref, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const series = ref([0])
const chartOptions = ref({
  chart: {
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '50%' },
      track: { strokeWidth: '100%' },
      dataLabels: {
        name: {
          show: false,
          fontSize: '14px',
          fontWeight: 500,
          color: '#1E293B',
        },
        value: {
          show: true,
          fontSize: '18px',
          fontWeight: 600,
          color: '#1E293B',
          offsetY: 10
        },
      },
    },
  },
  fill: {
    colors: ['#003366'],
  },
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