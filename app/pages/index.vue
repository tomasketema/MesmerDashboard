<script setup>
import GrantChart from "../components/grant.vue";
import PssChart from "../components/pss.vue";
import RegistrationChart from "../components/registration.vue";
</script>

<template>
  <div id="home" class="flex justify-center">
      <div class="bg-gradient-to-r from-teal-700 to-blue-700 rounded-xl p-1 w-full max-w-3xl">
        <h1 class="text-3xl font-bold text-white text-center tracking-wide">
          Dashboard,21 JULY 2025
        </h1>
      </div>
    </div>
  <div class=" bg-white pt-4 px-6 space-y-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
        <h2 class="text-xl font-extrabold mb-4 text-gray-800 text-center">Grant</h2>
        <div class="w-full h-full flex items-center justify-center">
          <client-only>
            <GrantChart/>
          </client-only>
        </div>
      </div>
      <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
        <h2 class="text-xl font-extrabold mb-4 text-gray-800 text-center">PSS</h2>
        <div class="w-full h-full flex items-center justify-center">
          <client-only>
            <PssChart/>
          </client-only>
        </div>
      </div>
    </div>



    <div class="flex justify-center">
      <div class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl">
        <h1 class="text-3xl font-bold text-white text-center tracking-wide">
          CREDIT
        </h1>
      </div>
    </div>
   <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <!-- registration -->
      <div class="bg-white shadow-lg rounded-xl p-6 min-h-[200px] min-w-[300px] ">
        <h3 class="text-lg font-semibold mb-4 text-gray-800">Registration Stats</h3>
        <div class="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
          <client-only>
            <RegistrationChart/>
          </client-only>
        </div>
      </div>

                   <!-- BANKS -->
      <div id="registration" class="bg-white shadow-lg rounded-xl p-6 min-h-[200px] min-w-[300px] ">
        <h3 class="text-lg font-semibold mb-4 text-gray-800">Assisted Bank Registration to date</h3>
        <div class="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
          <client-only>
            <banks/>
          </client-only>
        </div>
      </div>

                     <!-- IFB -->
      <div class="bg-white shadow-lg rounded-xl p-6 min-h-[200px] min-w-[33%] ">
        <h3 class="text-lg font-semibold mb-4 text-gray-800">Interest-Free Banking</h3>
        <div class="w-full h-full flex items-center justify-center  bg-gray-50 rounded-lg">
          
          <client-only>
            <ifb/>
          </client-only>
        </div>
      </div>
    </div>

<div id="bds" class="flex justify-center">
      <div id="#bds" class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl">
        <h1 class="text-3xl font-bold text-white text-center tracking-wide">
          BDS
        </h1>
      </div>
    </div>

    </div>

               <!-- BDS -->
              
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Y3Q2 -->
  <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
    <h3 class="text-lg font-semibold mb-4 text-gray-800 text-center">Y3Q2 Formal Target and Achievement to Date</h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="flex items-center justify-center bg-gray-50 rounded-lg p-4">
        <client-only>
           <Y3q2Column/>
        </client-only>
      </div>

      <div class="flex items-center justify-center bg-gray-50 rounded-lg p-4">
        <client-only>
           <Y3q2Pie/>
        </client-only>
      </div>
    </div>
  </div>


                  <!-- Y3Q2 -->
  <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
    <h3 class="text-lg font-semibold mb-4 text-gray-800 text-center">Y3 Annual Target and Achievement to Date</h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="flex items-center justify-center bg-gray-50 rounded-lg p-4">
        <client-only>
           <Y3Column/>
        </client-only>
      </div>
      <div class="flex items-center justify-center bg-gray-50 rounded-lg p-4">
        <client-only>
           <Y3Pie/>
        </client-only>
      </div>
    </div>

    <p class="font-semibold text-2xl text-gray-1000 text-center mt-4">
      Over the three years of the program, 63,083 enterprises accessed BDS training.
    </p>
  </div>
</div>
</template>
