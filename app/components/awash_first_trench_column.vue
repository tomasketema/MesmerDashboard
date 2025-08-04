<script setup>
import VueApexCharts from 'vue3-apexcharts';

const series = [
  {
    name: 'value',
    data: [269000000,269000000]
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
  legend: {
    show: false
  },
  colors: ['#F48C00', '#002366'
],
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
    categories: ['Trench amount', 'Amount Dispursed'],
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
        return val;
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
    <div class="flex flex-col items-center p-10 space-y-4">
      <img
        src="/images/banks/AwashLogo.png"
        alt="Awash Bank"
        class="h-10 object-contain"
      />
      <VueApexCharts
        type="bar"
        :series="series"
        :options="chartOptions"
        width="150%"
        height="250px"
      />
    </div>
  </client-only>
</template>
