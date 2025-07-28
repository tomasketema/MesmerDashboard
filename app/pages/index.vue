<script setup>
import GrantChart from "../components/grant.vue";
import PssChart from "../components/pss.vue";
import RegistrationChart from "../components/registration.vue";
</script>

<template>
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
      <div id="registration" class="bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl rounded-xl p-1 w-full max-w-3xl">
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
  </div>
</template>
