<script setup>
import { ref, onMounted } from 'vue'
import CountUp from '/components/CountUp.vue'

const disabilityRegistration = ref(0)

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Formal Enterprise&names=Disability Registration')
    const data = await res.json()

    const value = Number(data.find(item => item.name === 'Disability Registration')?.value) || 0
    disabilityRegistration.value = value
  } catch (err) {
    console.error('Failed to fetch Disability Registration data:', err)
  }
})
</script>

<template>
  <CountUp :end="disabilityRegistration" />
</template>
