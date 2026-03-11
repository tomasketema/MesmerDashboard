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
    default: 200,
  },
  height: {
    type: [String, Number],
    default: '150%',
  },
})
onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Credit Disbursement&names=Program Target,Program Achievement'
    )
    const data = await res.json()
    console.log("data",data);

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
        :height="props.height"
        :width="props.width"
      />
    </div>
  </client-only>
</template>
