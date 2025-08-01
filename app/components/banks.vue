<script setup>
import VueApexCharts from 'vue3-apexcharts';

const series = [
  {
    name: 'Registered Users',
    data: [17,40,24,18]
  }
];

const chartOptions = {
  chart: {
    height: 50,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  colors: ['#155d99'],
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
        return val + "%";
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
};
</script>
<template>
  <client-only>
    <div>
    <div class="flex justify-center p-10 gap-8 flex-wrap">
  <div class="flex flex-col gap-4">
    <div class="text-center px-20 py-2">
      <div class="text-lg font-bold text-black whitespace-nowrap">
        <h3 class="text-lg font-extrabold mb-4 text-gray-800">Assisted Bank Registration to date</h3>
      </div>
    </div>
  </div>
</div>

      <div  class="flex justify-center p-10">
      <VueApexCharts
        type="bar"
        :series="series"
        :options="chartOptions"
        width="100%"
        height="200%"
      />
    </div>
    </div>
  </client-only>
</template>
