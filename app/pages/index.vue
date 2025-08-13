<script setup>
import GrantChart from "../components/grant.vue";
import PssChart from "../components/pss.vue";
import RegistrationChart from "../components/registration.vue";
import { useState } from "#imports";
import Abyssinia_column from "~/components/abyssinia_first_trench_column.vue";
import Hibret_column from "~/components/hibret_second_trench_column.vue";
import DashenThirdTrenchColumn from "~/components/dashen_third_trench_column.vue";
import CountUp from "~/components/countup.vue";
import Hibret_first_trench_column from "~/components/hibret_first_trench_column.vue";
import IfbDisbursement from '~/components/ifb_disbursement.vue';
import YouthEmployment from '~/components/youth_employment.vue';
import IFBFOMTotalDisbursement from '~/components/ifb_fom_total_disbursement.vue';
import IFBRegistration from '~/components/ifb_registration.vue'
import DisabilityRegistration from '~/components/disability_registration.vue'
import FormalEnterprisesNumber from '~/components/formal_enterprises_number.vue'
import Y3Q2Column from '~/components/y3q2_column.vue'

onMounted(async () => {
  const LocomotiveScroll = (await import('locomotive-scroll')).default
  await import('locomotive-scroll/dist/locomotive-scroll.css')

  locoScroll = new LocomotiveScroll({
    el: document.querySelector('#scroll-container'),
    smooth: true,
  })
})

onBeforeUnmount(() => {
  if (locoScroll) locoScroll.destroy()
})

const currentDate = useState("currentDate", () => {
  const today = new Date();
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const formatted = today.toLocaleDateString("en-US", options);
  return formatted.toUpperCase();
});
</script>

<template>
  <div id="scroll-container" data-scroll-container>
  <div id="home" class="flex justify-center">
    <div
      class="bg-gradient-to-r from-teal-700 to-blue-700 rounded-xl p-1 w-full max-w-3xl"
    >
      <h1
        class="text-3xl font-bold font-serif text-white text-center tracking-wide"
      >
        Dashboard, {{ currentDate }}
      </h1>
    </div>
  </div>
  <div class="flex justify-center">
    <div class="bg-white rounded-xl p-1 pt-8 w-full max-w-3xl">
      <h1
        class="text-3xl font-bold font-serif text-black text-center tracking-wide"
      >
        <p><span class="text-[#ff7f50] ">MESMER</span> Supported</p>
      </h1>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-md p-6 mb-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <!-- Left: Paragraph Content -->
      <div class="space-y-6">
        <div class="text-center flex-1">
          <p class="text-3xl font-semibold text-black mb-3">Youth Employment</p>
          <div
            class="inline-block bg-gray-200 border border-gray-500 text-black font-bold font-mono px-5 py-3 rounded-xl shadow text-2xl"
          >
            <YouthEmployment />
          </div>
          <p class="mt-3 font-serif font-extrabold text-gray-1000 text-lg">
            Employed
          </p>
        </div>
      </div>

      <!-- Right: Pie Chart + Image -->
      <div class="flex flex-col items-center justify-center space-y-4">
        <p class="text-3xl font-semibold text-black mb-1">Woman Employment</p>
        <div class="pt-6 flex flex-row items-center justify-center space-x-8">
          <!-- Chart -->
          <div class="w-[200px] h-[200px]">
            <ClientOnly>
              <WomanEmploymentPie />
            </ClientOnly>
          </div>

          <!-- Image -->
          <div class="w-[150px] h-[150px]">
            <img
              src="@/assets/mesmerLogo/businesswoman.png"
              alt="business woman"
              class="rounded-lg shadow w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-md p-6 mb-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <!-- Left: Paragraph Content -->
      <div class="space-y-6">
        <div class="text-center flex-1">
          <p class="text-3xl font-semibold text-black mb-3">Enterprises</p>
          <div
            class="inline-block bg-gray-200 border border-gray-500 text-black font-bold font-mono px-5 py-3 rounded-xl shadow text-2xl"
          >
            <EnterprisesSupported />
          </div>
          <p class="mt-3 font-serif font-extrabold text-gray-1000 text-lg">
            Supported
          </p>
        </div>
      </div>

      <!-- Right: Pie Chart + Image -->
      <div class="flex flex-col items-center justify-center space-y-4">
        <div class="text-center flex-1">
          <p class="text-3xl font-semibold text-black mb-3">Outreach Individuals</p>
          <div
            class="inline-block bg-gray-200 border border-gray-500 text-black font-bold font-mono px-5 py-3 rounded-xl shadow text-2xl"
          >
            <OutreachedIndividuals />
          </div>
          <p class="mt-3 font-serif font-extrabold text-gray-1000 text-lg">
            Reached
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Informal Enterprise -->
  <div class="flex justify-center">
    <div
      class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl"
    >
      <h1
        class="text-3xl font-bold font-serif text-white text-center tracking-wide"
      >
        Informal Enterprise
      </h1>
    </div>
  </div>
  <div class="bg-white pt-4 px-6 space-y-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        class="md:col-span-1 bg-white shadow-lg rounded-xl p-6 min-h-[400px]"
      >
        <h2 class="text-[2rem] font-semibold mb-2 text-gray-800 text-center">
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
       <h2 class="text-[2rem] font-semibold mb-2 text-gray-800 text-center">
          PSS
        </h2>

        <div class="w-full h-full flex items-center justify-between gap-x-4">
          <div class="w-1/2 flex items-center justify-center">
            <client-only>
              <PssChart />
            </client-only>
          </div>
          <div class="w-1/2 text-center">
             <p class="text-gray-700 text-base">
    <span class="inline-block"><InformalEnterprisesNumber /></span> Informal Enterprises
  </p>
   <p class="text-gray-700 text-base">
    <span class="inline-block"><FormalEnterprisesNumber /></span> Formal Enterprises
  </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
    <div
      class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl"
    >
      <h1
        class="text-3xl font-bold font-serif text-white text-center tracking-wide"
      >
        Formal Enterprise
      </h1>
    </div>
  </div>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-2 items-stretch mt-4">
      <!-- Registration (Left) -->
      <div
        id="registration"
        class="bg-white rounded-xl p-4 min-h-[200px] w-full h-full flex flex-col md:col-span-3"
      >
        <div
          class="w-full h-full flex items-center justify-center bg-white shadow-md rounded-lg"
        >
          <client-only>
            <RegistrationChart />
          </client-only>
        </div>
      </div>

      <!-- BANKS (Middle) -->
      <div
        class="bg-white rounded-xl p-4 min-h-[200px] w-full h-full flex flex-col md:col-span-6 md:-mr-2"
      >
        <div
          class="w-full h-full flex items-center justify-center bg-white shadow-md rounded-lg"
        >
          <client-only>
            <banks />
          </client-only>
        </div>
      </div>

      <!-- IFB (Right) -->
      <div
        class="bg-white rounded-xl p-4 min-h-[200px] w-full h-full flex flex-col md:col-span-3"
      >
        <div
          class="w-full h-full flex items-center justify-center bg-white shadow-md rounded-lg"
        >
          <div
            class="bg-white rounded-xl p-4 w-full flex flex-col items-center justify-center space-y-6"
          >
            <!-- Interest-Free Banking -->
            <div class="text-center">
              <p class="text-xl font-semibold text-black mb-2">
                Interest-Free Banking registration
              </p>
              <div
                class="inline-block bg-blue-200 border border-blue-500 text-blue-800 font-bold px-4 py-2 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              >
                <IFBRegistration />
              </div>
            </div>

            <!-- Disability -->
            <div class="text-center">
              <p class="text-xl font-semibold text-black mb-2">
                Disability registration
              </p>
              <div
                class="inline-block bg-blue-200 border border-blue-500 text-blue-800 font-bold px-4 py-2  rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              >
                <DisabilityRegistration />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BDS -->
    <div id="bds" class="flex justify-center">
      <div
        class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl"
      >
        <h1
          class="text-3xl font-bold font-serif text-white text-center tracking-wide"
        >
          BDS Status
        </h1>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 pt-10 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 xl:gap-6">
    <!-- Y3Q2 -->
    <div class="bg-white shadow-lg rounded-xl p-4 lg:p-5 xl:p-6 min-h-[350px] lg:min-h-[380px] xl:min-h-[400px]">
      <h3 class="text-base lg:text-lg font-extrabold mb-3 lg:mb-4 text-gray-800 text-center">
        Y3Q2
      </h3>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 lg:gap-3 xl:gap-4">
        <div class="flex items-center justify-center bg-white rounded-lg p-2 lg:p-3 xl:p-4 min-h-[120px] lg:min-h-[140px]">
          <client-only>
            <Y3q2Column />
          </client-only>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-2 lg:p-3 xl:p-4 min-h-[120px] lg:min-h-[140px]">
          <client-only>
            <Y3q2Pie />
          </client-only>
        </div>
      </div>
    </div>
    <!-- Annual Q2 -->
    <div class="bg-white shadow-lg rounded-xl p-4 lg:p-5 xl:p-6 min-h-[350px] lg:min-h-[380px] xl:min-h-[400px]">
      <h3 class="text-base lg:text-lg font-extrabold mb-3 lg:mb-4 text-gray-800 text-center">
        Annual Q2
      </h3>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 lg:gap-3 xl:gap-4">
        <div class="flex items-center justify-center bg-white rounded-lg p-2 lg:p-3 xl:p-4 min-h-[120px] lg:min-h-[140px]">
          <client-only>
            <AnnualQ2Column />
          </client-only>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-2 lg:p-3 xl:p-4 min-h-[120px] lg:min-h-[140px]">
          <client-only>
            <AnnualQ2Pie />
          </client-only>
        </div>
      </div>
    </div>

    <!-- program target vs achievement to Date -->
    <div class="bg-white shadow-lg rounded-xl p-4 lg:p-5 xl:p-6 min-h-[350px] lg:min-h-[380px] xl:min-h-[400px] lg:col-span-2 xl:col-span-1">
      <h3 class="text-base lg:text-lg font-extrabold mb-3 lg:mb-4 text-gray-800 text-center">
        program target vs achievement to Date
      </h3>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 lg:gap-3 xl:gap-4">
        <div class="flex items-center justify-center bg-white rounded-lg p-2 lg:p-3 xl:p-4 min-h-[120px] lg:min-h-[140px]">
          <client-only>
            <Y3Column />
          </client-only>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-2 lg:p-3 xl:p-4 min-h-[120px] lg:min-h-[140px]">
          <client-only>
            <Y3Pie />
          </client-only>
        </div>
      </div>
    </div>
  </div>

  <!-- Credi Disbursement -->
  <div id="credit" class="flex justify-center pt-6">
    <div
      class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl"
    >
      <h1
        class="text-3xl font-bold font-serif text-white text-center tracking-wide"
      >
        Credit Disbursement
      </h1>
    </div>
  </div>
  <div class="grid grid-cols-1 pt-10 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 xl:gap-6">
    <!-- 2nd_Y3Q2 -->
    <div class="bg-white shadow-lg rounded-xl p-4 lg:p-5 xl:p-6 min-h-[350px] lg:min-h-[380px] xl:min-h-[400px]">
      <h3 class="text-base lg:text-lg font-extrabold mb-3 lg:mb-4 text-gray-800 text-center">
        Y3Q2
      </h3>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 lg:gap-3 xl:gap-4">
        <div class="flex items-center justify-center bg-white rounded-lg p-2 lg:p-3 xl:p-4 min-h-[120px] lg:min-h-[140px]">
          <client-only>
            <SecondY3q2Column />
          </client-only>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-2 lg:p-3 xl:p-4 min-h-[120px] lg:min-h-[140px]">
          <client-only>
            <SecondY3q2Pie />
          </client-only>
        </div>
      </div>
    </div>
    <!-- 2nd_Annual Q2 -->
    <div class="bg-white shadow-lg rounded-xl p-4 lg:p-5 xl:p-6 min-h-[350px] lg:min-h-[380px] xl:min-h-[400px]">
      <h3 class="text-base lg:text-lg font-extrabold mb-3 lg:mb-4 text-gray-800 text-center">
        Annual Q2
      </h3>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 lg:gap-3 xl:gap-4">
        <div class="flex items-center justify-center bg-white rounded-lg p-2 lg:p-3 xl:p-4 min-h-[120px] lg:min-h-[140px]">
          <client-only>
            <SecondAnnualQ2 />
          </client-only>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-2 lg:p-3 xl:p-4 min-h-[120px] lg:min-h-[140px]">
          <client-only>
            <SecondAnnualQ2Pie />
            <!-- create -->
          </client-only>
        </div>
      </div>
    </div>

    <!-- program target vs achievement to Date -->
    <div class="bg-white shadow-lg rounded-xl p-4 lg:p-5 xl:p-6 min-h-[350px] lg:min-h-[380px] xl:min-h-[400px] space-y-0 lg:space-y-0 xl:space-y-1 lg:col-span-2 xl:col-span-1">
      <h3 class="text-base lg:text-lg font-extrabold text-gray-800 text-center">
        Program Target vs Achievement to Date
      </h3>

      <!-- Top Charts -->
      <div class="w-full bg-white rounded-lg px-2 py-2 lg:py-3 flex flex-col lg:flex-row items-center gap-4 lg:gap-6 xl:gap-8">
        <div class="w-[100px] lg:w-[110px] xl:w-[120px]">
          <IfbColumn />
        </div>

        <div class="flex-1 w-full">
          <client-only>
            <IfbPie />
          </client-only>
        </div>
      </div>

      <!-- Bottom Container -->
      <div
        class="w-full text-lg lg:text-xl xl:text-2xl font-bold text-gray-700 rounded-lg pt-1 lg:pt-3 xl:pt-10 px-3 lg:px-4 py-3 lg:py-4 flex items-center gap-3 lg:gap-4"
      >
        <div class="text-center flex-1">
          <p class="text-lg lg:text-xl xl:text-2xl font-semibold text-black mb-2">IFB Disbursement</p>
          <div
            class="inline-block bg-gray-200 border border-gray-500 text-black font-bold font-mono px-3 lg:px-4 py-2 rounded-lg shadow text-sm lg:text-base xl:text-lg"
          >
             <IfbDisbursement />
          </div>

          <p class="mt-2 text-gray-700 text-sm lg:text-base"> <span class="inline-flex items-center">
    <IFBFOMTotalDisbursement /><span>% </span></span> of the total Disbursement
</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Finance -->
  <div class="flex justify-center pt-6">
    <div
      class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl"
    >
      <h1
        class="text-3xl font-bold font-serif text-white text-center tracking-wide"
      >
        Finance
      </h1>
    </div>
  </div>

  <div class="space-y-8">
    <!-- 1st Trench -->
    <div class="bg-white rounded-xl p-6">
      <h2 id="finance" class="text-2xl font-bold text-gray-800 mb-4">
        1st Trench Disbursement
      </h2>
      <div class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="flex items-center justify-center bg-white shadow-md rounded-lg p-4"
        >
          <client-only>
            <Abyssinia_column />
          </client-only>
        </div>
        <div
          class="flex items-center justify-center bg-white shadow-md rounded-lg p-4"
        >
          <ClientOnly>
            <Hibret_first_trench_column />
          </ClientOnly>
        </div>
        <div
          class="flex items-center justify-center bg-white shadow-md rounded-lg p-4"
        >
          <client-only>
            <Awash_first_trench_column />
          </client-only>
        </div>
        <div
          class="flex items-center justify-center bg-white shadow-md rounded-lg p-4"
        >
          <client-only>
            <Dashen_first_trench_column />
          </client-only>
        </div>
      </div>
    </div>

    <!-- 2nd Trench -->
    <div class="bg-white rounded-xl p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">
        2nd Trench Disbursement
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="flex items-center justify-center bg-white shadow-md rounded-lg p-4"
        >
          <client-only>
            <Hibret_column />
          </client-only>
        </div>
        <div
          class="flex items-center justify-center bg-white shadow-md rounded-lg p-4"
        >
          <client-only>
            <AwashSecondTrenchColumn />
          </client-only>
        </div>
        <div
          class="flex items-center justify-center bg-white shadow-md rounded-lg p-4"
        >
          <client-only>
            <DashenSecondTrenchColumn />
          </client-only>
        </div>
      </div>
    </div>

    <!-- 3rd Trench -->
    <div class="bg-white rounded-xl p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">
        3rd Trench Disbursement
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="flex items-center justify-center bg-white shadow-md rounded-lg p-4"
        >
          <client-only>
            <AwashThirdTrenchColumn />
          </client-only>
        </div>
        <div
          class="flex items-center justify-center bg-white shadow-md rounded-lg p-4"
        >
          <client-only>
            <DashenThirdTrenchColumn />
          </client-only>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
