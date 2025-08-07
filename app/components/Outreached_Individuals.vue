<script setup>
import { ref, onMounted } from 'vue'
import CountUp from '/components/CountUp.vue'

const outreachIndividuals = ref(0)

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=MESMER Supported&names=Outreach Individuals')
    const data = await res.json()

    const value = Number(data.find(item => item.name === 'Outreach Individuals')?.value) || 0
    outreachIndividuals.value = value
  } catch (err) {
    console.error('Failed to fetch Outreach Individuals data:', err)
  }
})
</script>

<template>
  <CountUp :end="outreachIndividuals" />
</template>
