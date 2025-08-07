<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'

const VueApexCharts = defineAsyncComponent(() =>
  import("vue3-apexcharts")
);

const series = ref([0]);

const chartOptions = {
  
  chart: {
    height: 300,
    type: 'radialBar',
    toolbar: { show: false }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.5
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0,
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.7
        }
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: (val) => parseInt(val),
          color: '#111',
          fontSize: '36px',
          show: true
        }
      }
    }
  },
  
 colors: ['#FDBA74'], 
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#C2410C'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: { lineCap: 'round' },
  labels: ['PSS']
};

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Informal Enterprise&names=PSS')
    const data = await res.json()
    console.log('PSS API data:', data)

    const pssValue = Number(data.find(item => item.name === 'PSS')?.value) || 0
    series.value = [pssValue]
  } catch (err) {
    console.error('Failed to fetch PSS data:', err)
  }
})
</script>

<template>
  <client-only>
  <div class="flex flex-col items-center">
    <VueApexCharts
      type="radialBar"
      :series="series"
      :options="chartOptions"
      width="250%"
      height="250%"
    />
  </div>
  </client-only>
</template>
