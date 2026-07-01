<script setup>
import { ref, onMounted } from 'vue'

const womenPercentage = ref(0)

onMounted(async () => {
  try {
    const params = new URLSearchParams({
      section: 'Credit Disbursement',
      names:
        'Women,Women Percentage,Program Achievement,IFB Disbursment Women,IFB Disbursement Women',
    })
    const res = await fetch(`/api/get-latest-data?${params.toString()}`)
    const data = await res.json()

    const getValue = (...names) => {
      const lowerNames = names.map((name) => name.toLowerCase())
      const row = data.find((item) =>
        lowerNames.includes(item.name?.toLowerCase()),
      )
      return Number(row?.value) || 0
    }

    const importedWomen = data.find((item) =>
      ['women', 'women percentage'].includes(item.name?.toLowerCase()),
    )
    if (importedWomen) {
      womenPercentage.value = Number(importedWomen.value) || 0
      return
    }

    const achievement = getValue('Program Achievement')
    const women = getValue('IFB Disbursment Women', 'IFB Disbursement Women')
    womenPercentage.value =
      achievement > 0 ? Math.round((women / achievement) * 100) : 0
  } catch (err) {
    console.error('Failed to fetch credit women percentage data:', err)
  }
})
</script>

<template>
  <span>{{ womenPercentage }}%</span>
</template>
