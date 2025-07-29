<template>
  <div>
    <nav
      class="fixed top-0 left-0 w-full  bg-white px-5 py-2.5 z-50 flex justify-between items-center font-semibold shadow-md"
    >
      <a href="/" class="block">
        <img src="../assets/mesmerLogo/mainMesmer2.png" alt="MESMER Dashboard Logo" class="h-10 w-auto" />
      </a>

      <div class="flex items-center pr-10">
        <NuxtLink
          to="#home"
          exact
          class="text-black no-underline mx-1 transition-colors duration-300 hover:text-blue-200 hover:underline"
          active-class="!text-orange-400 !font-bold !underline"
        >
          Home
        </NuxtLink>
        <span class="text-black mx-1">|</span>

        <a
          href="#registration"
          class="text-black no-underline mx-1 transition-colors duration-300 hover:text-blue-200 hover:underline"
        >
          Credit
        </a>
        <span class="text-black mx-1">|</span>
        <a
          href="#bds"
          class="text-black no-underline mx-1 transition-colors duration-300 hover:text-blue-200 hover:underline"
        >
          BDS
        </a>
      </div>
    </nav>
    <div class="max-w-full mx-auto pt-24 px-5 font-sans text-gray-800">
      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup></script>
