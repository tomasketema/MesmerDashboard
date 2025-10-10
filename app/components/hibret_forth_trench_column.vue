<script setup>
import { ref, onMounted } from "vue";
import VueApexCharts from "vue3-apexcharts";

const series = ref([{ name: "value", data: [0, 0] }]);

const chartOptions = {
  chart: { height: 50, type: "bar", toolbar: { show: false } },
  legend: { show: false },
  colors: ['#00A499', '#4B2485'
],
  plotOptions: {
    bar: {
      borderRadius: 10,
      distributed: true,
      dataLabels: { position: "top" },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => {
      return new Intl.NumberFormat('en-US').format(val);
    },
    offsetY: -20,
    style: { fontSize: "12px", colors: ["#304758"] },
  },
  xaxis: {
    categories: ["Trench amount", "Amount Dispursed"],
    position: "bottom",
    axisBorder: { show: false },
    axisTicks: { show: false },
     labels: {
      rotate: 0,
      rotateAlways: false,
      hideOverlappingLabels: false,
      trim: false,
      minHeight: undefined,
      maxHeight: 100,
      style: {
        colors: [],
        fontSize: '11px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 500,
        cssClass: 'apexcharts-xaxis-label'
      }
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: { enabled: false },
  },
  yaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { show: false },
  },
  grid: { yaxis: { lines: { show: false } } },
};

onMounted(async () => {
  try {
    const res = await fetch(
      "/api/get-latest-data?section=Finance - 4th Trench&names=Hibret Trench Amount,Hibret Amount Disbursed"
    );
    const data = await res.json();
    console.log("API data:", data);

    const trench =
      Number(
        data.find((item) => item.name === "Hibret Trench Amount")?.value
      ) || 0;
    const dispursed =
      Number(
        data.find((item) => item.name === "Hibret Amount Disbursed")?.value
      ) || 0;
    series.value[0].data = [trench, dispursed];
  } catch (err) {
    console.error("Failed to fetch chart data:", err);
  }
});
</script>

<template>
  <client-only>
    <div class="flex flex-col items-center p-10 space-y-4">
      <img
        src="/images/banks/HibretLogo.png"
        alt="Hibret Bank"
        class="h-16 object-contain"
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
 