<script setup>
import GrantChart from "../components/grant.vue";
import PssChart from "../components/pss.vue";
import RegistrationChart from "../components/registration.vue";
import { useState } from "#imports";
import Abyssinia_column from "~/components/abyssinia_column.vue";
import Hibret_column from "~/components/hibret_column.vue";
import { DashenThirdTrenchColumn } from "#components";
const currentDate = useState("currentDate", () => {
  const today = new Date();
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const formatted = today.toLocaleDateString("en-US", options);
  return formatted.toUpperCase();
});

import { ref, onMounted } from 'vue'

const displayNumber = ref(0)
const finalNumber = 344622
let animationFinished = false

function animateCountUp(start, end, duration = 2000) {
  let startTime = null

  function step(timestamp) {
    if (!startTime) startTime = timestamp
    const progress = timestamp - startTime
    const current = Math.min(Math.floor(start + (progress / duration) * (end - start)), end)
    displayNumber.value = current.toLocaleString()

    if (current < end) {
      requestAnimationFrame(step)
    } else {
      animationFinished = true
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  animateCountUp(0, finalNumber)

  setTimeout(() => {
    if (!animationFinished || displayNumber.value === '0') {
      displayNumber.value = finalNumber.toLocaleString()
    }
  }, 3000)
})
</script>

<template>
  <div id="home" class="flex justify-center">
    <div
      class="bg-gradient-to-r from-teal-700 to-blue-700 rounded-xl p-1 w-full max-w-3xl"
    >
      <h1 class="text-3xl font-bold text-white text-center tracking-wide">
        Dashboard, {{ currentDate }}
      </h1>
    </div>
  </div>
<div class="bg-white rounded-xl shadow-md p-6 mb-10">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    
    <!-- Left: Paragraph Content -->
   <div class="space-y-6">
      <div class="text-center flex-1">
      <p class="text-3xl font-bold text-black mb-3">
        <span style="color: #FF7F50 ;">MESMER</span> Supported
      </p>
      <div
        class="inline-block bg-gray-200 border border-gray-500 text-black font-bold font-mono px-5 py-3 rounded-xl shadow text-2xl"
      >
        {{ displayNumber }}
      </div>
      <p class="mt-3 font-serif font-extrabold text-gray-1000 text-lg">EMPLOYMENT</p>
      </div>
    </div>


    <!-- Right: Pie Chart + Image -->
    <div class="flex flex-col items-center justify-center space-y-4">
      <!-- Pie Chart -->
      <div class="w-[200px] h-[200px]">
        <client-only>
          <!-- <FundingPieChart /> -->
        </client-only>
      </div>

      <!-- Image -->
      <div class="w-[150px] h-auto">
        <!-- <img src="/images/loan_progress.png" alt="Loan Progress" class="rounded-lg shadow" /> -->
      </div>
    </div>
  </div>
</div>

  <div class="flex justify-center">
    <div class="bg-white rounded-xl p-1 pt-8 w-full max-w-3xl">
      <h1 class="text-3xl font-bold text-black text-center tracking-wide">
        Informal Enterprise
      </h1>
    </div>
  </div>
  <div class="bg-white pt-4 px-6 space-y-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        class="md:col-span-1 bg-white shadow-lg rounded-xl p-6 min-h-[400px]"
      >
        <h2 class="text-xl font-extrabold mb-4 text-gray-800 text-center">
          Grant
        </h2>
        <div class="w-full h-full flex items-center justify-center">
          <client-only>
            <GrantChart />
          </client-only>
        </div>
      </div>
      <div
        class="md:col-span-1 bg-white shadow-lg rounded-xl p-6 min-h-[400px]"
      >
        <h2 class="text-xl font-extrabold mb-4 text-gray-800 text-center">
          PSS
        </h2>

        <div class="w-full h-full flex items-center justify-between gap-x-4">
          <div class="w-1/2 flex items-center justify-center">
            <client-only>
              <PssChart />
            </client-only>
          </div>
          <div class="w-1/2 text-center">
            <p class="text-xl font-bold text-black">
              10,192 Informal Enterprises <br />
              6,000 Formal Enterprises
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div
        id="#bds"
        class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl"
      >
        <h1 class="text-3xl font-bold text-white text-center tracking-wide">
          formal Enterprise
        </h1>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="bg-white rounded-xl p-1 pt- w-full max-w-3xl">
        <h1 class="text-3xl font-bold text-black text-center tracking-wide">
          Registration Status
        </h1>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- registration -->
      <div class="bg-white rounded-xl p-6 min-h-[200px] min-w-[300px]">
        <div
          class="w-full h-full flex items-center justify-center bg-white shadow-lg rounded-lg"
        >
          <client-only>
            <RegistrationChart />
          </client-only>
        </div>
      </div>

      <!-- BANKS -->
      <div
        id="registration"
        class="bg-white rounded-xl p-6 min-h-[200px] min-w-[300px]"
      >
        <div
          class="w-full h-full flex items-center justify-center bg-white shadow-lg rounded-lg"
        >
          <client-only>
            <banks />
          </client-only>
        </div>
      </div>

      <!-- IFB -->
      <div class="bg-white rounded-xl p-6 min-h-[200px] min-w-[300px]">
        <div
          class="w-full h-full flex items-center justify-center bg-white shadow-lg rounded-lg"
        >
          <div
            class="bg-white rounded-xl p-4 min-h-[200px] w-full flex flex-col items-center justify-center space-y-6"
          >
            <!-- Interest-Free Banking -->
            <div class="text-center">
              <p class="text-xl font-semibold text-black mb-2">
                Interest-Free Banking registration
              </p>
              <div
                class="inline-block bg-blue-200 border border-blue-500 text-blue-800 font-bold font-mono px-4 py-2 rounded-lg shadow"
              >
                21,518
              </div>
            </div>

            <!-- Disability -->
            <div class="text-center">
              <p class="text-xl font-semibold text-black mb-2">
                Disability registration
              </p>
              <div
                class="inline-block bg-blue-200 border border-blue-500 text-blue-800 font-bold font-mono px-4 py-2 rounded-lg shadow"
              >
                2,253
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BDS -->
    <div id="bds" class="flex justify-center">
      <div
        id="#bds"
        class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl"
      >
        <h1 class="text-3xl font-bold text-white text-center tracking-wide">
          BDS Status
        </h1>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 pt-10 md:grid-cols-3 gap-6">
    <!-- Y3Q2 -->
    <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
      <h3 class="text-lg font-extrabold mb-4 text-gray-800 text-center">
        Y3Q2
      </h3>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap--1">
        <div class="flex items-center justify-center bg-white rounded-lg p-4">
          <client-only>
            <Y3q2Column />
          </client-only>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-4">
          <client-only>
            <Y3q2Pie />
          </client-only>
        </div>
      </div>
    </div>
    <!-- Annual Q2 -->
    <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
      <h3 class="text-lg font-extrabold mb-4 text-gray-800 text-center">
        Annual Q2
      </h3>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap--1">
        <div class="flex items-center justify-center bg-white rounded-lg p-4">
          <client-only>
            <AnnualQ2Column />
          </client-only>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-4">
          <client-only>
            <AnnualQ2Pie />
          </client-only>
        </div>
      </div>
    </div>

    <!-- program target vs achievement to Date -->
    <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
      <h3 class="text-lg font-extrabold mb-4 text-gray-800 text-center">
        program target vs achievement to Date
      </h3>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap--1">
        <div class="flex items-center justify-center bg-white rounded-lg p-4">
          <client-only>
            <Y3Column />
          </client-only>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-4">
          <client-only>
            <Y3Pie />
          </client-only>
        </div>
      </div>
    </div>
  </div>

  <!-- Credi Disbursement -->
  <div id="bds" class="flex justify-center pt-6">
    <div
      id="#bds"
      class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl"
    >
      <h1 class="text-3xl font-bold text-white text-center tracking-wide">
        Credit Disbursement
      </h1>
    </div>
  </div>
  <div class="grid grid-cols-1 pt-10 md:grid-cols-3 gap-6">
    <!-- 2nd_Y3Q2 -->
    <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
      <h3 class="text-lg font-extrabold mb-4 text-gray-800 text-center">
        Y3Q2
      </h3>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap--1">
        <div class="flex items-center justify-center bg-white rounded-lg p-4">
          <client-only>
            <SecondY3q2Column />
          </client-only>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-4">
          <client-only>
            <SecondY3q2Pie /> 
            <!-- create -->
          </client-only>
        </div>
      </div>
      </div>
    <!-- 2nd_Annual Q2 -->
    <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
      <h3 class="text-lg font-extrabold mb-4 text-gray-800 text-center">
        Annual Q2
      </h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap--1">
        <div class="flex items-center justify-center bg-white rounded-lg p-4">
          <client-only>
            <SecondAnnualQ2 />
          </client-only>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-4">
          <client-only>
            <SecondAnnualQ2Pie /> 
            <!-- create -->
          </client-only>
        </div>
      </div>
    </div>

    <!-- program target vs achievement to Date -->
    <div class="bg-white shadow-lg rounded-xl p-6 min-h-[240px] space-y-6">
  <h3 class="text-lg font-extrabold text-gray-800 text-center">
    Program Target vs Achievement to Date
  </h3>

  <!-- Top Charts -->
  <div class="w-full bg-white rounded-lg px-2 py-3 flex items-center gap-8">

    <div class="w-[120px]">
      <IfbColumn />
    </div>

    <div class="flex-1">
      <client-only>
        <IfbPie />
      </client-only>
    </div>
  </div>

  <!-- Bottom Container -->
   
  <div class="w-full text-2xl font-bold  text-gray-700 rounded-lg pt-20 px-4 py-4 flex items-center gap-4">
    <div class="text-center flex-1">
      <p class="text-xxl font-semibold text-black mb-2">
        IFB Disbursement
      </p>
      <div
        class="inline-block bg-gray-200 border border-gray-500 text-black font-bold font-mono px-4 py-2 rounded-lg shadow"
      >
        21,518
      </div>
      <p class="mt-2 text-gray-700 ">6% of the total Disbursement</p>
    </div>
  </div>
</div>

    </div>





   <!-- Finance -->
<div class="flex justify-center pt-6">
  <div class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl">
    <h1 class="text-3xl font-bold text-white text-center tracking-wide">
      Finance
    </h1>
  </div>
</div>

<div class="space-y-8">
  <!-- 1st Trench -->
  <div class="bg-white rounded-xl p-6 shadow-md">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">1st Trench Disbursement</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <client-only>
      <Abyssinia_column />
      <Hibret_column />
      <AwashThirdTrenchColumn />
      <DashenThirdTrenchColumn />
      </client-only>
    </div>
  </div>

  <!-- 2nd Trench -->
  <div class="bg-white rounded-xl p-6 shadow-md">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">2nd Trench Disbursement</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <client-only>
      <Hibret_column />
      <AwashThirdTrenchColumn />
      <DashenThirdTrenchColumn />
      </client-only>
    </div>
  </div>

  <!-- 3rd Trench -->
  <div class="bg-white rounded-xl p-6 shadow-md">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">3rd Trench Disbursement</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <client-only>
      <AwashThirdTrenchColumn />
      <DashenThirdTrenchColumn />
      </client-only>
    </div>
  </div>
</div>



</template>
