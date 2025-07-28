<script setup>
import VueApexCharts from 'vue3-apexcharts';

const series = [40];

const chartOptions = {
  chart: {
    height: 350,
    type: 'radialBar'
  },
  colors: ['#1e40af'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%'
      }
    }
  },
  labels: [['From total','Disbursement']]
};
</script>

<template>
  <client-only>
    <div class="flex justify-center p-10 gap-8 flex-wrap">

      <div class="flex flex-col gap-4">

        <div class="space-y-4">
  <div class="bg-[#10b981] rounded-[50px] shadow max-w-[100%] max-h-[100%] text-center">
    <div class="w-full max-w-full p-2 text-sm font-bold flex flex-col items-center">
      <span class="whitespace-nowrap">IFB Registration:</span>
      <span class="font-bold whitespace-nowrap">21,518</span>
    </div>
  </div>

  <div class="bg-[#2dd4bf] rounded-[50px] shadow max-w-[100%] max-h-[100%] text-center">
    <div class="w-full max-w-full p-2 text-sm font-bold flex flex-col items-center">
      <span class="whitespace-nowrap">IFB Loan Provided:</span>
      <span class="font-bold whitespace-nowrap">2,253</span>
    </div>
  </div>
</div>
      </div>
    </div>
      <div>
      <VueApexCharts
        type="radialBar"
        :series="series"
        :options="chartOptions"
        width="150%"
        height="150%"
      />
    </div>
  </client-only>
</template>
