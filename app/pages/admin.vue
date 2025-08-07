<template>
  <div class="flex items-start justify-center bg-gray-100 pt-16 p-4">
    <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
      <h1 class="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
      <CsvUploader />
    </div>
  </div>
</template>

<script setup>
import CsvUploader from '~/components/CsvUploader.vue'
</script>
