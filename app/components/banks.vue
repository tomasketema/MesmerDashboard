<script setup>
import { ref, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

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
  colors: ['#155d99'],
  plotOptions: {
    bar: {
      borderRadius: 10,
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
  }
}

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Formal Enterprise&names=Abyssinia,Awash,Dashen,Hibret')
    const data = await res.json()
    console.log('Bank API raw data:', JSON.stringify(data, null, 2))

    const getValue = name => {
      const item = data.find(item => item.name === name)
      console.log(`Matching item for ${name}:`, item)
      return Number(item?.value) || 0
    }

    const abyssinia = getValue('Abyssinia')
    const awash = getValue('Awash')
    const dashen = getValue('Dashen')
    const hibret = getValue('Hibret')
    
    series.value[0].data = [abyssinia, awash, dashen, hibret]
  } catch (err) {
    console.error('Failed to fetch bank registration data:', err)
  }
})
</script>

<template>
  <client-only>
    <div>
      <div class="flex justify-center p-10 gap-8 flex-wrap">
        <div class="text-lg font-bold text-black whitespace-nowrap">
          <h3 class="text-lg font-extrabold mb-4 text-gray-800">
            Assisted Bank Registration to date
          </h3>
        </div>
      </div>

      <div class="flex justify-center p-10 flex-col items-center" style="width: 100%">
        <VueApexCharts
          type="bar"
          :series="series"
          :options="chartOptions"
          width="200%"
          height="250px"
        />

        <div class="flex justify-between -mt-6" style="width: 100%; max-width: 800px">
          <div class="flex justify-center" style="flex: 1">
            <img src="/images/banks/AbyssiniaLogo.png" alt="Abyssinia" class="h-12 object-contain" />
          </div>
          <div class="flex justify-center" style="flex: 1">
            <img src="/images/banks/AwashLogo.png" alt="Awash" class="h-10 object-contain" />
          </div>
          <div class="flex justify-center" style="flex: 1">
            <img src="/images/banks/Dashen.png" alt="Dashen" class="h-12 object-contain" />
          </div>
          <div class="flex justify-center" style="flex: 1">
            <img src="/images/banks/HibretLogo.png" alt="Hibret" class="h-10 object-contain" />
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>
