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
    <div>
    <div class="flex justify-center p-10 gap-8 flex-wrap">
  <div class="w-full max-w-full p-2 text-lg font-bold break-words">
    Registered at:
  </div>

  <div class="flex flex-col gap-4">
    <div
      class=" bg-[#76859b] rounded-[30px] shadow text-center px-20 py-2"
    >
      <div class="text-lg font-bold text-black whitespace-nowrap">
        Total: <span class="font-bold">{{ series[0] + series[1] }}</span>
      </div>
    </div>
  </div>
</div>

      <div>
        <VueApexCharts
          type="pie"
          :series="series"
          :options="chartOptions"
          width="100%"
          height="350"
        />
      </div>
    </div>
  </client-only>
</template>
