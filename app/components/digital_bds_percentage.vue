<script setup>
import { ref, onMounted } from 'vue'

const digitalBdsPercentage = ref(0)

onMounted(async () => {
  try {
    const params = new URLSearchParams({
      section: 'BDS Status',
      names:
        'Program Target,Program Achievement,Digital BDS,Digital BDS Achievement',
    })
    const res = await fetch(`/api/get-latest-data?${params.toString()}`)
    const data = await res.json()

    const getValue = (...names) => {
      const row = data.find((item) => names.includes(item.name))
      return Number(row?.value) || 0
    }

    const target = getValue('Program Target')
    const achievement = getValue('Program Achievement')
    const digitalBds = getValue('Digital BDS', 'Digital BDS Achievement')

    if (digitalBds > 0 && achievement > 0) {
      digitalBdsPercentage.value = Math.round((digitalBds / achievement) * 100)
      return
    }

    digitalBdsPercentage.value =
      target > 0 ? Math.round((achievement / target) * 100) : 0
  } catch (err) {
    console.error('Failed to fetch Digital BDS percentage data:', err)
  }
})
</script>

<template>
  <span>{{ digitalBdsPercentage }}%</span>
</template>
