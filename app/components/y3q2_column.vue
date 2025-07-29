<script setup>
import VueApexCharts from 'vue3-apexcharts';

const series = [
  {
    name: 'value',
    data: [4656,1021]
  }
];

const chartOptions = {
  chart: {
    height: 50,
    type: 'bar'
  },
  colors: ['#f38429', '#155d99'],
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
      return val;
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758']
    }
  },
  xaxis: {
    categories: ['Target', 'Achievemnet'],
    position: 'bottom',
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
        return val;
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
        width="200%"
        height="200%"
      />
    </div>
  </client-only>
</template>
