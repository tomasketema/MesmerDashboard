<script setup>
import { ref, onMounted } from 'vue'
import CountUp from '/components/CountUp.vue'

const enterprises = ref(0)

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=MESMER Supported&names=Enterprises')
    const data = await res.json()

    const value = Number(data.find(item => item.name === 'Enterprises')?.value) || 0
    enterprises.value = value
  } catch (err) {
    console.error('Failed to fetch Enterprises data:', err)
  }
})
</script>

<template>
  <CountUp :end="enterprises" />
</template>
