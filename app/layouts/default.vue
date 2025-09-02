<template>
  <SpeedInsights />
  <div>
    <nav
      class="fixed top-0 left-0 w-full bg-white bg-opacity-99 px-5 py-2.5 z-50 flex justify-between items-center font-semibold shadow-md"
    >
      <a href="/" class="block ">
        <img
          src="../assets/mesmerLogo/MESMERFULL.png"
          alt="MESMER Dashboard Logo"
          class="h-10 w-auto"
        />
      </a>

      <div class="flex items-center">
       <img
          src="../assets/MasterCardLogo/mastercard_foundation.svg"
          alt="MasterCard Foundation Logo"
           class="h-10 w-auto object-contain mx-10 transform scale-150"
        />
      </div>
      
    </nav>
    <div class="max-w-full mx-auto pt-20 px-5 font-sans text-gray-800">
      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>
