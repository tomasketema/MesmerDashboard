<script setup>
import { ref, onMounted } from 'vue'
import CountUp from './countup.vue'

const pssTotal = ref(0)
const metricNames = ['Informal Enterprises', 'Formal Enterprises']

onMounted(async () => {
  try {
    const params = new URLSearchParams({
      section: 'Informal Enterprise',
      names: metricNames.join(','),
    })
    const res = await fetch(`/api/get-latest-data?${params.toString()}`)
    const data = await res.json()

    const getValue = (name) =>
      Number(data.find((item) => item.name === name)?.value) || 0

    pssTotal.value = metricNames.reduce(
      (sum, name) => sum + getValue(name),
      0,
    )
  } catch (err) {
    console.error('Failed to fetch PSS total data:', err)
  }
})
</script>

<template>
  <CountUp :end="pssTotal" />
</template>
