<script setup>
import { ref, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const series = ref([
  {
    name: 'value',
    data: [0, 0]
  }
])

const chartOptions = {
  chart: {
    height: 50,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  legend: {
    show: false
  },
  colors: ['#002B5B', '#F7941D'],
  plotOptions: {
    bar: {
      borderRadius: 10,
      distributed: true,
      dataLabels: {
        position: 'top' // top, center, bottom
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758']
    }
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
      maxHeight: 120,
      style: {
        colors: [],
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label'
      }
    },
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
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val
      }
    }
  },
  grid: {
    yaxis: {
      lines: {
        show: false
      }
    }
  }
}

onMounted(async () => {
  try {
    const res = await fetch(
      '/api/get-latest-data?section=Credit Disbursement&names=Annual Q2 Target,Annual Q2 Achievement'
    )
    const data = await res.json()
    console.log('Second Annual Q2 API data:', data)

    const target = Number(data.find(item => item.name === 'Annual Q2 Target')?.value) || 0
    const achievement = Number(data.find(item => item.name === 'Annual Q2 Achievement')?.value) || 0
    series.value[0].data = [target, achievement]
  } catch (err) {
    console.error('Failed to fetch second annual Q2 data:', err)
  }
})
</script>

<template>
  <client-only>
    <div class="flex justify-center p-10">
      <VueApexCharts
        type="bar"
        :series="series"
        :options="chartOptions"
        width="250%"
        height="250%"
      />
    </div>
  </client-only>
</template>
