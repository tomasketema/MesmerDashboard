<script setup>
import GrantChart from "../components/grant.vue";
import PssChart from "../components/pss.vue";
import RegistrationChart from "../components/registration.vue";
import { useState } from '#imports'

const currentDate = useState('currentDate', () => {
  const today = new Date()
  const options = { day: '2-digit', month: 'long', year: 'numeric' }
  const formatted = today.toLocaleDateString('en-US', options)
  return formatted.toUpperCase()
})
</script>

<template>
  <div id="home" class="flex justify-center">
      <div class="bg-gradient-to-r from-teal-700 to-blue-700 rounded-xl p-1 w-full max-w-3xl">
        <h1 class="text-3xl font-bold text-white text-center tracking-wide">
    Dashboard, {{ currentDate }}
  </h1>
      </div>
    </div>
     <div class="flex justify-center">
      <div class="bg-white rounded-xl p-1 pt-8 w-full max-w-3xl">
        <h1 class="text-3xl font-bold text-black text-center tracking-wide">
          Informal Enterprise
        </h1>
      </div>
    </div>
  <div class=" bg-white pt-4 px-6 space-y-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div class="md:col-span-1 bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
        <h2 class="text-xl font-extrabold mb-4 text-gray-800 text-center">Grant</h2>
        <div class="w-full h-full flex items-center justify-center">
          <client-only>
            <GrantChart/>
          </client-only>
        </div>
      </div>
       <div class="md:col-span-1 bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
        <h2 class="text-xl font-extrabold mb-4 text-gray-800 text-center">PSS</h2>
        <div class="w-full h-full flex items-center justify-center">
          <client-only>
            <PssChart/>
          </client-only>
        </div>
      </div>
      <div class="md:col-span-1 bg-white shadow-md rounded-xl p-4 min-h-[200px] flex items-center justify-center">
      <p class="text-xl font-bold text-black text-center">
        10,192 Informal Enterprises  <br/>
        6,000 Formal Enterprises
      </p>
    </div>
    </div>


    <div class="flex justify-center">
      <div class="bg-white rounded-xl p-1 pt- w-full max-w-3xl">
        <h1 class="text-3xl font-bold text-black text-center tracking-wide">
          formal Enterprise
        </h1>
      </div>
    </div>
   <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <!-- registration -->
      <div class="bg-white  rounded-xl p-6 min-h-[200px] min-w-[300px] ">
        <h3 class="text-lg font-extrabold mb-4 text-gray-800">Registration Stats</h3>
        <div class="w-full h-full flex items-center justify-center bg-white shadow-lg rounded-lg">
          <client-only>
            <RegistrationChart/>
          </client-only>
        </div>
      </div>

                   <!-- BANKS -->
      <div id="registration" class="bg-white  rounded-xl p-6 min-h-[200px] min-w-[300px] ">
        <h3 class="text-lg font-extrabold mb-4 text-gray-800">Assisted Bank Registration to date</h3>
        <div class="w-full h-full flex items-center justify-center bg-white shadow-lg rounded-lg">
          <client-only>
            <banks/>
          </client-only>
        </div>
      </div>

                       <!-- IFB -->
<div class="bg-white rounded-xl p-6 min-h-[200px] min-w-[300px]">
  
  <div class="w-full h-full flex items-center justify-center bg-white shadow-lg rounded-lg">
    
    
      <div class="bg-white rounded-xl p-4 min-h-[200px] w-full flex flex-col items-center justify-center space-y-6">

                 <!-- Interest-Free Banking -->
        <div class="text-center">
          <p class="text-xl font-semibold text-black mb-2">Interest-Free Banking registration</p>
          <div class="inline-block bg-blue-200 border border-blue-500 text-blue-800 font-bold font-mono px-4 py-2 rounded-lg shadow">
            21,518
          </div>
        </div>

                  <!-- Disability -->
        <div class="text-center">
          <p class="text-xl font-semibold text-black mb-2">Disability registration</p>
          <div class="inline-block bg-blue-200 border border-blue-500 text-blue-800 font-bold font-mono px-4 py-2 rounded-lg shadow">
            2,253
          </div>
        </div>
      </div>
  </div>
</div>
   </div>

               <!-- BDS -->
<div id="bds" class="flex justify-center">
      <div id="#bds" class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl">
        <h1 class="text-3xl font-bold text-white text-center tracking-wide">
          BDS Status
        </h1>
      </div>
    </div>

    </div>

              
<div class="grid grid-cols-1  pt-10 md:grid-cols-3 gap-6">
              <!-- Y3Q2 -->
  <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
    <h3 class="text-lg font-extrabold  mb-4 text-gray-800 text-center">Y3Q2</h3>

    <div class="grid grid-cols-1 gap-4">
      <div class="flex items-center justify-center bg-white rounded-lg p-4">
        <client-only>
           <Y3q2Column/>
        </client-only>
      </div>

    </div>
  </div>
                  <!-- Annual Q2 -->
<div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
  <h3 class="text-lg font-extrabold mb-4 text-gray-800 text-center">Annual Q2</h3>

  <div class="flex items-center justify-center bg-white rounded-lg p-4">
    <client-only>
      <annual_q2 />
    </client-only>
  </div>
</div>


                  <!-- program target vs achievement to Date -->
  <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
    <h3 class="text-lg font-extrabold mb-4 text-gray-800 text-center">program target vs achievement to Date</h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap--1">
      <div class="flex items-center justify-center bg-white rounded-lg p-4">
        <client-only>
           <Y3Column/>
        </client-only>
      </div>
      <div class="flex items-center justify-center bg-white rounded-lg p-4 ">
        <client-only>
           <Y3Pie/>
        </client-only>
      </div>
    </div>
  </div>
  
</div>


          <!-- Credi Disbursement -->
<div id="bds" class="flex justify-center">
      <div id="#bds" class="bg-gradient-to-r from-teal-700 to-blue-700 shadow-xl rounded-xl p-1 w-full max-w-3xl">
        <h1 class="text-3xl font-bold text-white text-center tracking-wide">
          Credi Disbursement
        </h1>
      </div>
    </div>
    <div class="grid grid-cols-1  pt-10 md:grid-cols-3 gap-6">
              <!-- 2nd_Y3Q2 -->
  <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
    <h3 class="text-lg font-extrabold  mb-4 text-gray-800 text-center">Y3Q2</h3>

    <div class="grid grid-cols-1 gap-4">
      <div class="flex items-center justify-center bg-white rounded-lg p-4">
        <client-only>
           <SecondY3q2Column/>
        </client-only>
      </div>

    </div>
  </div>
                  <!-- 2nd_Annual Q2 -->
<div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
  <h3 class="text-lg font-extrabold mb-4 text-gray-800 text-center">Annual Q2</h3>

  <div class="flex items-center justify-center bg-white rounded-lg p-4">
    <client-only>
      <SecondAnnualQ2 />
    </client-only>
  </div>
</div>


                  <!-- program target vs achievement to Date -->
  <div class="bg-white shadow-lg rounded-xl p-6 min-h-[400px]">
    <h3 class="text-lg font-extrabold mb-4 text-gray-800 text-center">program target vs achievement to Date</h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap--1">
      <div class="flex items-center justify-center bg-white rounded-lg p-4">
        <client-only>
          <SecondY3Pie/>
        </client-only>
      </div>
      <div class="flex items-center justify-center bg-white rounded-lg p-4 ">
        <client-only>
           <SecondY3Pie/>
        </client-only>
      </div>
    </div>
  </div>
    </div>
</template>
