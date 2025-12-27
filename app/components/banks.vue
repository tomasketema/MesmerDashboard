<script setup>
import { ref, onMounted, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const chartWidth = computed(() => {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    if (width < 1024) return '130%'
    if (width < 1400) return '150%'
    return '200%'
  }
  return '200%'
})

const chartHeight = computed(() => {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    if (width < 1024) return '250px'
    if (width < 1400) return '250px'
    return '250px'
  }
  return '250px'
})

const series = ref([
  {
    name: 'Registered Users',
    data: [0, 0, 0, 0]
  }
])

const chartOptions = {
  chart: {
    height: 50,
    type: 'bar',
    toolbar: { show: false }
  },
  colors: ['#FFAA00', '#F7923A', '#273274', '#00B7A9'],
  plotOptions: {
    bar: {
      borderRadius: 10,
      distributed: true,
      dataLabels: { position: 'top' }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: val => val + '%',
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758']
    }
  },
  xaxis: {
    categories: ['Abyssinia', 'Awash', 'Dashen', 'Hibret'],
    labels: { show: false },
    position: 'bottom',
    axisBorder: { show: false },
    axisTicks: { show: false },
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
    labels: {
      show: false,
      formatter: val => val + '%'
    }
  },
  grid: {
    yaxis: {
      lines: { show: false }
    }
  },
  legend: {
  show: false
},
}

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Formal Enterprise&names=Abyssinia,Awash,Dashen,Hibret')
    const data = await res.json()

    const getValue = name =>
      Number(data.find(item => item.name === name)?.value) || 0

    series.value[0].data = [
      getValue('Abyssinia'),
      getValue('Awash'),
      getValue('Dashen'),
      getValue('Hibret')
    ]
  } catch (err) {
    console.error('Failed to fetch bank registration data:', err)
  }
})
</script>

<template>
  <client-only>
    <div>
      <div class="flex justify-center p-4 lg:p-6 xl:p-10 flex-col items-center w-full">
        <VueApexCharts
          type="bar"
          :series="series"
          :options="chartOptions"
          :width="chartWidth"
          :height="chartHeight"
        />

        <div class="flex justify-between -mt-4 lg:-mt-5 xl:-mt-6 w-full max-w-xs lg:max-w-md xl:max-w-2xl">
          <div class="flex justify-center flex-1">
            <img src="/images/banks/AbyssiniaLogo.png" alt="Abyssinia" class="h-8 lg:h-10 xl:h-12 object-contain" />
          </div>
          <div class="flex justify-center flex-1">
            <img src="/images/banks/AwashLogo.png" alt="Awash" class="h-6 lg:h-8 xl:h-10 object-contain" />
          </div>
          <div class="flex justify-center flex-1">
            <img src="/images/banks/Dashen-remove.png" alt="Dashen" class="h-8 lg:h-10 xl:h-12 object-contain" />
          </div>
          <div class="flex justify-center flex-1">
            <img src="/images/banks/HibretLogo.png" alt="Hibret" class="h-6 lg:h-8 xl:h-10 object-contain" />
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>