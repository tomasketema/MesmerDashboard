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
      track: { strokeWidth: '50%' },
      dataLabels: {
        name: { show: false },
        value: {
          show: true,
          fontSize: '15px',
          fontWeight: 600,
          color: '#1E293B',
          formatter: val => `${val}%`,
        },
      },
    },
  },
  fill: {
  colors: ['#003366'],
  },

  labels: [],
}

const props = defineProps({
  width: {
    type: [String, Number],
    default: 100,
  },
  height: {
    type: [String, Number],
    default: '100%',
  },
})
onMounted(async () => {
  try {
    const res = await fetch(
      '/api/get-latest-data?section=Credit Disbursement&names=IFB Disbursement Percentage'
    )
    const data = await res.json()

    const target = Number(data.find(item => item.name === 'IFB Disbursement Percentage')?.value) || 0
    const achievement = Number(data.find(item => item.name === 'IFB Disbursement Percentage')?.value) || 0

    // const percentage = target > 0 ? Math.round((achievement / target) * 100) : 0
    const percentage = Number(data.find(item => item.name === 'IFB Disbursement Percentage')?.value) || 0 
    
    series.value = [percentage]
  } catch (err) {
    console.error('Failed to fetch Program data:', err)
  }
})
</script>

<template>
  <client-only>
    <div class="w-[80px] h-[80px]">
      <VueApexCharts
        type="radialBar"
        :options="chartOptions"
        :series="series"
        :height="props.height"
        :width="props.width"
      />
    </div>
  </client-only>
</template>
