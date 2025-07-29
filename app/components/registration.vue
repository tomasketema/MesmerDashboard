<script setup>
const VueApexCharts = defineAsyncComponent(() =>
  import("vue3-apexcharts")
);

const series = [7, 93];

const chartOptions = {
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Self-Registred", "Assisted"],
  colors: ['#f38429', '#155d99'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
</script>

<template>
  <client-only>
    
    <div class="flex justify-center p-10 gap-8 flex-wrap">

      <div class="flex flex-col gap-4">
        <div
          class="bg-[#76859b] rounded-[50px] shadow  max-w-[100%] max-h-[100%] text-center"
        >
          <div class="w-full max-w-full p-2 text-sm font-bold break-words">
            Total: <span class="font-bold">{{ series[0]+series[1] }}</span>
          </div>
        </div>

        <div
          class="bg-[#f38429] rounded-[50px] shadow max-w-[100%] max-h-[100%] text-center"
        >
          <div class="w-full max-w-full p-2 text-sm font-bold break-words">
            Self-Registred: <span class="font-bold">{{ series[0] }}</span>
          </div>
        </div>

        <div
          class="bg-[#155d99] rounded-[50px] shadow max-w-[100%] max-h-[100%] text-center"
        >
          <div class="w-full max-w-full p-2 text-sm font-bold break-words">
            Assisted: <span class="font-bold">{{ series[1] }}</span>
          </div>
        </div>
      </div>
      <div>
        <VueApexCharts
          type="pie"
          :series="series"
          :options="chartOptions"
          width="120%"
          height="120%"
        />
      </div>
    </div>
  </client-only>
</template>
