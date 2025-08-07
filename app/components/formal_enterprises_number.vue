<script setup>
import { ref, onMounted } from 'vue'
import CountUp from '/components/CountUp.vue'

const value = ref(0)

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Informal Enterprise&names=Formal Enterprises')
    const data = await res.json()
    const number = Number(data.find(item => item.name === 'Formal Enterprises')?.value) || 0
    value.value = number
  } catch (err) {
    console.error('Failed to fetch Formal Enterprises data:', err)
  }
})
</script>

<template>
  <div class="text-2xl font-semibold text-slate-800">
    <CountUp :end="value" />
  </div>
</template>
