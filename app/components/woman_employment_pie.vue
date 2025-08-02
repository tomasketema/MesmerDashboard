<script setup>
import VueApexCharts from 'vue3-apexcharts';

const series = [58];

const chartOptions = {
  chart: {
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '50%' },
      track: { strokeWidth: '100%' },
      dataLabels: {
        name: { show: false },
        value: {
          show: true,
          fontSize: '18px',
          fontWeight: 600,
          color: '#1E293B',
        },
      },
    },
  },
  fill: {
  colors: ['#1e3a8a'],
  },

  labels: [],
};
</script>

<template>
  <client-only>
    <div class="w-full h-[140px]">
      <VueApexCharts
        type="radialBar"
        :options="chartOptions"
        :series="series"
        height="150%"
        width="200"
      />
    </div>
  </client-only>
</template>
