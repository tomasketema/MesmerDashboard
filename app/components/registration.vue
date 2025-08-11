<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import CountUp from '/components/CountUp.vue'

const VueApexCharts = defineAsyncComponent(() =>
  import("vue3-apexcharts")
);

const series = ref([0, 0]);
const total = ref(0);

const chartOptions = {
  chart: {
    width: 380,
    type: "pie",
  },
  stroke: {
    width:0,
  },
  labels: ["Self-Registred", "Bank Assisted"],
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

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Formal Enterprise&names=Self-Registered,Bank Assisted,Total')
    const data = await res.json()
    console.log('Registration API data:', data)

    const getValue = name => Number(data.find(item => item.name === name)?.value) || 0

    const selfRegistered = getValue('Self-Registered')
    const bankAssisted = getValue('Bank Assisted')
    total.value = getValue('Total')

    series.value = [selfRegistered, bankAssisted]
  } catch (err) {
    console.error('Failed to fetch registration data:', err)
  }
})
</script>

<template>
  <client-only>
    <div>
      <div class="flex justify-center p-10 gap-8 flex-wrap">
        <div class="w-full max-w-full p-2 text-lg font-bold break-words">
          Registered at:
        </div>

        <div class="flex flex-col gap-2">
          <div class=" bg-[#76859b] rounded-[30px] shadow text-center px-10 -py-1">
            <div class="text-lg font-bold text-black-800 whitespace-nowrap flex items-center justify-center gap-2">
              Total: <span class="font-bold"><CountUp :end="total" /></span>
            </div>

          </div>
        </div>
      </div>

      <div>
        <VueApexCharts
          type="pie"
          :series="series"
          :options="chartOptions"
          width="300"
          height="350"
        />
      </div>
    </div>
  </client-only>
</template>
