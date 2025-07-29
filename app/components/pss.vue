<script setup>
const VueApexCharts = defineAsyncComponent(() =>
  import("vue3-apexcharts")
);
// import { calculatePssPercentage, calculatePssTotal } from '../data/data.js';

const series = [100];
const total = 100;

const chartOptions = {
  // Copy the same options as grant.vue, but change the label:
  chart: {
    height: 300,
    type: 'radialBar',
    toolbar: { show: true }
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
</script>

<template>
  <client-only>
  <div class="flex flex-col items-center">
    <VueApexCharts
      type="radialBar"
      :series="series"
      :options="chartOptions"
      width="180%"
      height="180%"
    />
    <div class="mt-2 text-lg font-bold">
     10,192 Informal Enterprises &
     6,000 Formal Enterprises
    </div>
  </div>
  </client-only>
</template>