<script setup>
import VueApexCharts from 'vue3-apexcharts';

const series = ref([0])

const chartOptions = {
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
}
onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Credit Disbursement&names=Program Target,Program Achievement'
    )
    const data = await res.json()

    const target = Number(data.find(item => item.name === 'Program Target')?.value) || 0
    const achievement = Number(data.find(item => item.name === 'Program Achievement')?.value) || 0

    const percentage = target > 0 ? Math.round((achievement / target) * 100) : 0

    series.value = [percentage]
  } catch (err) {
    console.error('Failed to fetch Program data:', err)
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
