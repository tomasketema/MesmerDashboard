<script setup>
import { ref, onMounted } from 'vue'
import CountUp from './countup.vue'

const value = ref(0)

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Informal Enterprise&names=Informal Enterprises')
    const data = await res.json()
    const number = Number(data.find(item => item.name === 'Informal Enterprises')?.value) || 0
    value.value = number
  } catch (err) {
    console.error('Failed to fetch Informal Enterprises data:', err)
  }
})
</script>

<template>
  <div class="text-2xl font-semibold text-slate-800">
    <CountUp :end="value" />
  </div>
</template>
