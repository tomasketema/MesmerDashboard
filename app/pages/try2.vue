<script setup>
import GrantChart from "../components/grant.vue";
import PssChart from "../components/pss.vue";
import RegistrationChart from "../components/registration.vue";
import { useState } from "#imports";
import { ref, onMounted, onBeforeUnmount } from "vue";
import Abyssinia_column from "~/components/abyssinia_first_trench_column.vue";
import Hibret_column from "~/components/hibret_second_trench_column.vue";
import DashenThirdTrenchColumn from "~/components/dashen_third_trench_column.vue";
import CountUp from "~/components/countup.vue";
import Hibret_first_trench_column from "~/components/hibret_first_trench_column.vue";
import IfbDisbursement from "~/components/ifb_disbursement.vue";
import YouthEmployment from "~/components/youth_employment.vue";
import IFBFOMTotalDisbursement from "~/components/ifb_fom_total_disbursement.vue";
import IFBRegistration from "~/components/ifb_registration.vue";
import DisabilityRegistration from "~/components/disability_registration.vue";
import FormalEnterprisesNumber from "~/components/formal_enterprises_number.vue";
import Y3Q2Column from "~/components/y3q2_column.vue";
import EnterprisesSupported from "~/components/enterprises_supported.vue";
import OutreachedIndividuals from "~/components/Outreached_Individuals.vue";
import InformalEnterprisesNumber from "~/components/informal_enterprises_number.vue";
import WomanEmploymentPie from "~/components/woman_employment_pie.vue";
import banks from "~/components/banks.vue";
import Y3q2Column from "~/components/y3q2_column.vue";
import Y3q2Pie from "~/components/y3q2_pie.vue";
import AnnualQ2Column from "~/components/annual_q2_column.vue";
import AnnualQ2Pie from "~/components/annual_q2_pie.vue";
import Y3Column from "~/components/y3_column.vue";
import Y3Pie from "~/components/y3_pie.vue";
import SecondY3q2Column from "~/components/second_y3q2_column.vue";
import SecondY3q2Pie from "~/components/second_y3q2_pie.vue";
import SecondAnnualQ2 from "~/components/second_annual_q2.vue";
import SecondAnnualQ2Pie from "~/components/second_annual_q2_pie.vue";
import IfbColumn from "~/components/ifb_column.vue";
import IfbPie from "~/components/ifb_pie.vue";
import Awash_first_trench_column from "~/components/awash_first_trench_column.vue";
import Dashen_first_trench_column from "~/components/dashen_first_trench_column.vue";
import AwashSecondTrenchColumn from "~/components/awash_second_trench_column.vue";
import DashenSecondTrenchColumn from "~/components/dashen_second_trench_column.vue";
import AwashThirdTrenchColumn from "~/components/awash_third_trench_column.vue";
const currentDate = useState("currentDate", () => {
  const today = new Date();
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const formatted = today.toLocaleDateString("en-US", options);
  return formatted.toUpperCase();
});

const data = ref({
  disability: { change: "0%" },
  enterprises: { change: "0%" },
  formalEnterprises: { change: "0%" },
  informalEnterprises: { change: "0%" },
  ifbRegistration: { change: "0%" },
  ifbDisbursement: { change: "0%" },
  outreach: { change: "0%" },
  youthEmployment: { change: "0%" },
  total: { change: "0%" },
});

onMounted(async () => {

  try {
    const res = await fetch("/api/get-change-data");
    const changeData = await res.json();
    data.value = changeData;
  } catch (err) {
    console.error("Failed to fetch change data:", err);
  }


  const LocomotiveScroll = (await import("locomotive-scroll")).default;
  await import("locomotive-scroll/dist/locomotive-scroll.css");

  locoScroll = new LocomotiveScroll({
    el: document.querySelector("#scroll-container"),
    smooth: true,
  });
});

onBeforeUnmount(() => {
  if (locoScroll) locoScroll.destroy();
});
</script>
<template>
  <div id="scroll-container" data-scroll-container>
    <div
      class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6"
    >
      <!-- Header Section -->
      <div class="max-w-7xl mx-auto mb-12">
        <div class="text-center space-y-4">
          <h1
            class="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
          >
            Dashboard Overview
          </h1>
          <p class="text-lg text-gray-600 font-medium">{{ currentDate }}</p>
          <div class="inline-block">
            <span class="text-2xl font-bold text-blue-600">MESMER</span>
            <span class="text-2xl font-bold text-gray-700 ml-2">Analytics</span>
          </div>
        </div>
      </div>

      <!-- Main Grid  -->
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div
          class="lg:col-span-7 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl border border-blue-100 overflow-hidden"
        >
          <div class="p-8">
            <!-- Header with Icon -->
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-3">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-gray-900">
                    Employment Overview
                  </h2>
                  <p class="text-sm text-gray-600">
                    Youth & Women Workforce Analytics
                  </p>
                </div>
              </div>
              <div class="hidden sm:block">
                <div
                  class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                ></div>
              </div>
            </div>

            <!-- Content Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <!-- Youth Employment Stats -->
              <div class="text-center space-y-3 relative">
                <!-- Circle -->
                <div
                  class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl shadow-lg relative"
                >
                  <div class="text-2xl font-bold text-black">
                    <YouthEmployment />
                  </div>

                  <span
                    class="absolute left-full ml-2 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-900"
                  >
                    {{ data.youthEmployment.change }}
                  </span>
                </div>

                <!-- Words (stay directly under the circle) -->
                <div>
                  <p
                    class="text-sm font-medium text-gray-500 uppercase tracking-wide"
                  >
                    Youth
                  </p>
                  <p class="text-lg font-semibold text-gray-900">Employed</p>
                </div>
              </div>

              <!-- Woman Employment Chart -->
              <div class="flex justify-center">
                <div class="relative">
                  <div class="w-32 h-32">
                    <ClientOnly>
                      <Woman />
                    </ClientOnly>
                  </div>
                  <div
                    class="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                  >
                    <span
                      class="inline-block px-3 py-1 bg-purple-100 animate-bounce text-purple-700 text-xs font-semibold rounded-full"
                    >
                      Women
                    </span>
                  </div>
                </div>
              </div>

              <!-- Business Woman image -->
              <div class="flex justify-center">
                <div class="relative">
                  <div
                    class="w-32 h-32 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-3 shadow-lg"
                  >
                    <img
                      src="@/assets/mesmerLogo/businesswoman.png"
                      alt="business woman"
                      class="w-full h-full object-fill"
                    />
                  </div>
                  <div
                    class="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center"
                  >
                    <svg
                      class="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enterprises Card - Modern Metric Card -->
        <div
          class="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div
                class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <div class="text-right">
                <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div class="space-y-4">
              <div>
                <p
                  class="text-sm font-medium text-gray-500 uppercase tracking-wide"
                >
                  Enterprises
                </p>
                <div class="flex items-baseline space-x-2">
                  <div class="text-3xl font-bold text-gray-900">
                    <EnterprisesSupported />
                  </div>
                  <span class="text-sm font-medium text-green-600">{{
                    data.enterprises.change
                  }}</span>
                </div>
                <p class="text-sm text-gray-600 mt-1">Successfully Supported</p>
              </div>
              <div class="pt-4 border-t border-gray-100">
                <div class="flex items-center text-xs text-gray-500">
                  <div class="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Active Programs
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Outreach Card -->
        <div
          class="lg:col-span-3 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div
                class="w-10 h-10 bg-gradient-to-r from-rose-500 to-orange-500 rounded-xl flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  ></path>
                </svg>
              </div>
              <div class="text-right">
                <span
                  class="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full "
                >
                  Outreach
                </span>
              </div>
            </div>
            <div class="space-y-4">
              <div>
                <p
                  class="text-sm font-medium text-gray-500 uppercase tracking-wide"
                >
                  Individuals Reached
                </p>
                <div class="flex items-baseline space-x-2">
                  <div class="text-3xl font-bold text-gray-900">
                    <OutreachedIndividuals />
                  </div>
                  <span class="text-sm font-medium text-orange-600">{{
                    data.outreach.change
                  }}</span>
                </div>
                <p class="text-sm text-gray-600 mt-1">Community Impact</p>
              </div>
              <div class="pt-4 border-t border-gray-100">
                <div
                  class="flex items-center justify-between text-xs text-gray-500"
                >
                  <div class="flex items-center">
                    <div class="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    Active Campaigns
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Informal Enterprise Section -->
      <div class="max-w-7xl mx-auto mt-16">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">
            Informal Enterprise
          </h2>
          <p class="text-gray-600">
            Financial support and business development services
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <!-- Grant Card -->
          <div
            class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">
                      Grant Distribution
                    </h3>
                    <p class="text-sm text-gray-600">
                      Financial assistance
                    </p>
                  </div>
                </div>
                <div
                  class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                ></div>
              </div>
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
                <div class="h-64 flex items-center justify-center">
                  <client-only>
                    <GrantChart />
                  </client-only>
                </div>
              </div>
            </div>
          </div>

          <!-- PSS Card -->
          <div
            class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">
                      PSS Analytics
                    </h3>
                    <p class="text-sm text-gray-600">
                      Business support
                    </p>
                  </div>
                </div>
                <div
                  class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                ></div>
              </div>
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
                <div class="h-64 flex items-center justify-center">
                  <client-only>
                    <PssChart />
                  </client-only>
                </div>
              </div>
            </div>
          </div>

          <!-- Metrics Card for Informal/Formal Enterprises -->
          <div
            class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">
                      Enterprise Metrics
                    </h3>
                    <p class="text-sm text-gray-600">
                      Formal & Informal
                    </p>
                  </div>
                </div>
                <div
                  class="w-2 h-2 bg-purple-600 rounded-full animate-pulse"
                ></div>
              </div>
              <div class="space-y-4">
                <div
                  class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100"
                >
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-blue-700"
                      >Informal</span
                    >
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div
                    class="text-2xl font-bold text-blue-900 flex items-baseline space-x-2"
                  >
                    <InformalEnterprisesNumber />
                    <span class="text-sm font-medium text-blue-900">{{
                      data.informalEnterprises.change
                    }}</span>
                  </div>
                  <p class="text-xs text-blue-600 mt-1">Enterprises</p>
                </div>

                <div
                  class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100"
                >
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-purple-700"
                      >Formal</span
                    >
                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <div
                    class="text-2xl font-bold text-purple-900 flex items-baseline space-x-2"
                  >
                    <FormalEnterprisesNumber />
                    <span class="text-sm font-medium text-purple-900">{{
                      data.formalEnterprises.change
                    }}</span>
                  </div>
                  <p class="text-xs text-purple-600 mt-1">Enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Formal Enterprise Section -->
      <div class="max-w-7xl mx-auto mt-16">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">
            Formal Enterprise
          </h2>
          <p class="text-gray-600">
            Banking partnerships and registration services
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <!-- Registration Card -->
          <div
            class="lg:col-span-3 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <div
                  class="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </div>
                <span
                  class="inline-block px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full"
                >
                  Active
                </span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-4">Registration</h3>
              <div class="h-48 flex items-center justify-center">
                <client-only>
                  <RegistrationChart />
                </client-only>
              </div>
            </div>
          </div>

          <!-- Banks Card - Featured -->
          <div
            class="lg:col-span-6 bg-gradient-to-br from-white to-indigo-50 rounded-3xl shadow-xl border border-indigo-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900">
                      Assisted Bank Registration to date
                    </h3>
                  </div>
                </div>
                <div class="flex space-x-1 ">
                  <div
                    class="w-2 h-2 bg-green-600 rounded-full animate-pulse"
                  ></div>
                  <div
                    class="w-2 h-2 bg-blue-600 rounded-full animate-pulse"
                    style="animation-delay: 0.2s"
                  ></div>
                  <div
                    class="w-2 h-2 bg-red-600 rounded-full animate-pulse"
                    style="animation-delay: 0.4s"
                  ></div>
                </div>
              </div>
              <div class="h-64 flex items-center justify-center">
                <client-only>
                  <banks />
                </client-only>
              </div>
            </div>
          </div>

          <!-- IFB & Disability Registration Card -->
          <div
            class="lg:col-span-3 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <div
                  class="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div class="text-right">
                  <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
              </div>

              <div class="space-y-6">
                <!-- Interest-Free Banking -->
                <div
                  class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100"
                >
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-blue-700">IFB</span>
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div
                    class="text-xl font-bold text-black flex items-baseline space-x-2"
                  >
                    <IFBRegistration />
                    <span class="text-sm font-medium text-blue-900">{{
                      data.ifbRegistration.change
                    }}</span>
                  </div>

                  <p class="text-xs text-blue-600 mt-1">
                    Interest-Free Banking
                  </p>
                </div>

                <!-- Disability Registration -->
                <div
                  class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100"
                >
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-emerald-700"
                      >Disability</span
                    >
                    <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <div
                    class="text-xl font-bold text-black flex items-baseline space-x-2"
                  >
                    <DisabilityRegistration />
                    <span class="text-sm font-medium text-emerald-900">{{
                      data.disability.change
                    }}</span>
                  </div>
                  <p class="text-xs text-emerald-600 mt-1">
                    Special Registration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BDS Status Section -->
      <div class="max-w-7xl mx-auto mt-16">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">BDS Status</h2>
          <p class="text-gray-600">
            Business Development Services performance metrics
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <!-- Y3Q2 Card -->
          <div
            class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center"
                  >
                    <span class="text-white font-bold text-sm">Q2</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Y3Q2</h3>
                    <p class="text-sm text-gray-600">Quarter 2 Analytics</p>
                  </div>
                </div>
                <div
                  class="w-2 h-2 bg-rose-400 rounded-full animate-pulse"
                ></div>
              </div>
              <div class="grid grid-cols-1 gap-4">
                <div
                  class="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-4 border border-rose-100"
                >
                  <div class="h-32 flex items-center justify-center">
                    <client-only>
                      <Y3q2Column />
                    </client-only>
                  </div>
                </div>
                <div
                  class="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 border border-pink-100"
                >
                  <div class="h-32 flex items-center justify-center">
                    <client-only>
                      <Y3q2Pie />
                    </client-only>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Annual Q2 Card -->
          <div
            class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Annual Q2</h3>
                    <p class="text-sm text-gray-600">Yearly Performance</p>
                  </div>
                </div>
                <div
                  class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                ></div>
              </div>
              <div class="grid grid-cols-1 gap-4">
                <div
                  class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-100"
                >
                  <div class="h-32 flex items-center justify-center">
                    <client-only>
                      <AnnualQ2Column />
                    </client-only>
                  </div>
                </div>
                <div
                  class="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-4 border border-orange-100"
                >
                  <div class="h-32 flex items-center justify-center">
                    <client-only>
                      <AnnualQ2Pie />
                    </client-only>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Program Target vs Achievement Card -->
          <div
            class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">
                      program target vs achievement
                    </h3>
                    <p class="text-sm text-gray-600">Progress Overview</p>
                  </div>
                </div>
                <div
                  class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                ></div>
              </div>
              <div class="grid grid-cols-1 gap-4">
                <div
                  class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100"
                >
                  <div class="h-32 flex items-center justify-center">
                    <client-only>
                      <Y3Column />
                    </client-only>
                  </div>
                </div>
                <div
                  class="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-4 border border-teal-100"
                >
                  <div class="h-32 flex items-center justify-center">
                    <client-only>
                      <Y3Pie />
                    </client-only>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Credit Disbursement Section -->
      <div class="max-w-7xl mx-auto mt-16">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">
            Credit Disbursement
          </h2>
          <p class="text-gray-600">
            Financial distribution and lending analytics
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <!-- Y3Q2 Credit Card -->
          <div
            class="lg:col-span-4 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center"
                  >
                    <span class="text-white font-bold text-sm">Q2</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Y3Q2 Credit</h3>
                    <p class="text-sm text-gray-600">Quarter disbursement</p>
                  </div>
                </div>
                <div
                  class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                ></div>
              </div>
              <div class="grid grid-cols-1 gap-4">
                <div
                  class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100"
                >
                  <div class="h-32 flex items-center justify-center">
                    <client-only>
                      <SecondY3q2Column />
                    </client-only>
                  </div>
                </div>
                <div
                  class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-4 border border-cyan-100"
                >
                  <div class="h-32 flex items-center justify-center">
                    <client-only>
                      <SecondY3q2Pie />
                    </client-only>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Annual Q2 Credit Card -->
          <div
            class="lg:col-span-4 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Annual Q2</h3>
                    <p class="text-sm text-gray-600">Yearly credit flow</p>
                  </div>
                </div>
                <div
                  class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                ></div>
              </div>
              <div class="grid grid-cols-1 gap-4">
                <div
                  class="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-4 border border-purple-100"
                >
                  <div class="h-32 flex items-center justify-center">
                    <client-only>
                      <SecondAnnualQ2 />
                    </client-only>
                  </div>
                </div>
                <div
                  class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-100"
                >
                  <div class="h-32 flex items-center justify-center">
                    <client-only>
                      <SecondAnnualQ2Pie />
                    </client-only>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- IFB Program Achievement Card -->
          <div
            class="lg:col-span-4 bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-xl border border-emerald-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">
                      program target vs achievement
                    </h3>
                    <p class="text-sm text-gray-600">Target achievement</p>
                  </div>
                </div>
                <div
                  class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                ></div>
              </div>

              <!-- Charts Section -->
              <div
                class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100 mb-4"
              >
                <div class="flex items-center justify-center gap-4">
                  <div class="w-24">
                    <IfbColumn />
                  </div>
                  <div class="flex-1">
                    <client-only>
                      <IfbPie />
                    </client-only>
                  </div>
                </div>
              </div>

              <!-- Disbursement Metrics -->
              <div
                class="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-4 border border-teal-100"
              >
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium text-emerald-700"
                    >IFB Disbursement</span
                  >
                  <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
                <div
                  class="flex text-xxl font-bold text-emerald-900 items-baseline space-x-2"
                >
                  <IfbDisbursement />
                  <span class="text-sm font-medium text-emerald-900">{{
                    data.ifbDisbursement.change
                  }}</span>
                </div>

                <span
                  class="inline-flex font-serif text-xl  font-bold text-emerald-600 mt-1"
                >
                  <IFBFOMTotalDisbursement /> of total disbursement
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Finance Section -->
      <div class="max-w-7xl mx-auto mt-16 mb-16">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Finance</h2>
          <p class="text-gray-600">
            Trench disbursement tracking across banking partners
          </p>
        </div>

        <!-- 1st Trench -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
            1st Trench Disbursement
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              class="bg-white rounded-2xl shadow p-6 flex items-center justify-center min-h-[200px]"
            >
              <client-only>
                <Abyssinia_column />
              </client-only>
            </div>
            <div
              class="bg-white rounded-2xl shadow p-6 flex items-center justify-center min-h-[200px]"
            >
              <ClientOnly>
                <Hibret_first_trench_column />
              </ClientOnly>
            </div>
            <div
              class="bg-white rounded-2xl shadow p-6 flex items-center justify-center min-h-[200px]"
            >
              <client-only>
                <Awash_first_trench_column />
              </client-only>
            </div>
            <div
              class="bg-white rounded-2xl shadow p-6 flex items-center justify-center min-h-[200px]"
            >
              <client-only>
                <Dashen_first_trench_column />
              </client-only>
            </div>
          </div>
        </div>

        <!-- 2nd Trench -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
            2nd Trench Disbursement
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              class="bg-white rounded-2xl shadow p-6 flex items-center justify-center min-h-[200px]"
            >
              <client-only>
                <Hibret_column />
              </client-only>
            </div>
            <div
              class="bg-white rounded-2xl shadow p-6 flex items-center justify-center min-h-[200px]"
            >
              <client-only>
                <AwashSecondTrenchColumn />
              </client-only>
            </div>
            <div
              class="bg-white rounded-2xl shadow p-6 flex items-center justify-center min-h-[200px]"
            >
              <client-only>
                <DashenSecondTrenchColumn />
              </client-only>
            </div>
          </div>
        </div>

        <!-- 3rd Trench -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
            3rd Trench Disbursement
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="bg-white rounded-2xl shadow p-6 flex items-center justify-center min-h-[200px]"
            >
              <client-only>
                <AwashThirdTrenchColumn />
              </client-only>
            </div>
            <div
              class="bg-white rounded-2xl shadow p-6 flex items-center justify-center min-h-[200px]"
            >
              <client-only>
                <DashenThirdTrenchColumn />
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
