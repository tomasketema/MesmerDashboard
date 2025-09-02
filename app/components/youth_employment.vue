<script setup>
import { ref, onMounted } from 'vue'
import CountUp from './countup.vue'

const youthEmployment = ref(0)

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=MESMER Supported&names=Youth Employment')
    const data = await res.json()

    const employmentValue = Number(data.find(item => item.name === 'Youth Employment')?.value) || 0
    youthEmployment.value = employmentValue
  } catch (err) {
    console.error('Failed to fetch Youth Employment data:', err)
  }
})
</script>

<template>
  <CountUp :end="youthEmployment" />
</template>
