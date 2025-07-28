<script setup>
import VueApexCharts from 'vue3-apexcharts';

const series = [
  {
    name: 'Inflation',
    data: [4.6, 8.1, 5.0, 3.1]
  }
];

const chartOptions = {
  chart: {
    height: 50,
    type: 'bar'
  },
  colors: ['#20f0a0'],
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top' // top, center, bottom
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758']
    }
  },
  xaxis: {
    categories: ['Abyssinia', 'Awash', 'Dashen', 'Hibret'],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
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
      enabled: true
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
      show: true,
      formatter: function (val) {
        return val + "%";
      }
    }
  },
};
</script>

<template>
  <client-only>
    <div  class="flex justify-center p-10">
      <VueApexCharts
        type="bar"
        :series="series"
        :options="chartOptions"
        width="100%"
        height="200%"
      />
    </div>
  </client-only>
</template>
