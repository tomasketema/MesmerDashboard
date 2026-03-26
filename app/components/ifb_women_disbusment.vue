<script setup>
import { ref, onMounted } from 'vue'
import CountUp from './countup.vue'

const ifbDisbursmentWomen = ref(0)

onMounted(async () => {
  try {
    const res = await fetch('/api/get-latest-data?section=Credit Disbursement&names=IFB Disbursment Women')
    const data = await res.json()

    const value = Number(data.find(item => item.name === 'IFB Disbursment Women')?.value) || 0
    ifbDisbursmentWomen.value = value
  } catch (err) {
    console.error('Failed to fetch IFB Disbursment Women data:', err)
  }
})
</script>

<template>
  <CountUp :end="ifbDisbursmentWomen" />
</template>
