<script setup>
import { ref, onMounted } from 'vue'
import CountUp from './countup.vue'

const mfi = ref(0)

onMounted(async () => {
  try {
    const params = new URLSearchParams({
      section: 'Credit Disbursement',
      names: 'MFI,MFI Achievement,MFI Disbursement',
    })
    const res = await fetch(`/api/get-latest-data?${params.toString()}`)
    const data = await res.json()
    const metricNames = ['mfi', 'mfi achievement', 'mfi disbursement']
    const row = data.find((item) =>
      metricNames.includes(item.name?.toLowerCase()),
    )

    mfi.value = Number(row?.value) || 0
  } catch (err) {
    console.error('Failed to fetch MFI data:', err)
  }
})
</script>

<template>
  <CountUp :end="mfi" />
</template>
