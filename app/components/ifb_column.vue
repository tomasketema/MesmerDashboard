<script setup>
import VueApexCharts from 'vue3-apexcharts';

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
      columnWidth: '50%',
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
    axisBorder: { show: false },
    axisTicks: { show: false },
    tooltip: { enabled: false },
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
    <div class="w-full h-[140px]">
      <VueApexCharts
        type="bar"
        :series="series"
        :options="chartOptions"
        height="250px"
        width="170%"
      />
    </div>
  </client-only>
</template>
