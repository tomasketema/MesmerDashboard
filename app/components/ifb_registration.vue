<script setup>
import { ref, onMounted } from 'vue'
import CountUp from '/components/CountUp.vue'

const ifbRegistration = ref(0)

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Formal Enterprise&names=IFB Registration')
    const data = await res.json()

    const value = Number(data.find(item => item.name === 'IFB Registration')?.value) || 0
    ifbRegistration.value = value
  } catch (err) {
    console.error('Failed to fetch IFB Registration data:', err)
  }
})
</script>

<template>
  <CountUp :end="ifbRegistration" />
</template>
