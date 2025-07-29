<script setup>
import VueApexCharts from 'vue3-apexcharts';

const series = [185];

const chartOptions = {
  chart: {
    height: 350,
    type: 'radialBar',
    offsetY: -10
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '16px',
          color: undefined,
          offsetY: 120
        },
        value: {
          offsetY: 76,
          fontSize: '22px',
          color: undefined,
          formatter: function (val) {
            return val + '%';
          }
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    }
  },
  stroke: {
    dashArray: 4
  },
  labels: ['']
};
</script>

<template>
  <client-only>
    <div class="flex justify-center p-10">
      <VueApexCharts
        type="radialBar"
        :series="series"
        :options="chartOptions"
        width="300"
        height="300"
      />
    </div>
  </client-only>
</template>
