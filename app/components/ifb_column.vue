<script setup>
import VueApexCharts from 'vue3-apexcharts';

const series = [
  {
    name: 'value',
    data: [4656, 1021],
  },
];

const chartOptions = {
  chart: {
    type: 'bar',
    toolbar: { show: false },
    margin: {
    top: 30, // Add space at the top to avoid label clipping
  },
  },
  legend: { show: false },
  colors: ['#38bdf8', '#1e3a8a'],
  plotOptions: {
    bar: {
      borderRadius: 6,
      distributed: true,
      dataLabels: { position: 'top' },
      columnWidth: '50%',
    },
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => val,
    offsetY: -20,
    style: {
      fontSize: '10px',
      colors: ['#334155'],
    },
  },
  xaxis: {
    categories: ['Target', 'Achievement'],
    axisBorder: { show: false },
    axisTicks: { show: false },
    tooltip: { enabled: false },
  },
  yaxis: {
    labels: { show: false },
  },
  grid: {
    yaxis: { lines: { show: false } },
  },
};
</script>

<template>
  <client-only>
    <div class="w-full h-[140px]">
      <VueApexCharts
        type="bar"
        :series="series"
        :options="chartOptions"
        height="250px"
        width="170%"
      />
    </div>
  </client-only>
</template>
