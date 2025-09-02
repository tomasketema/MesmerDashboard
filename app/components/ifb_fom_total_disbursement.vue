<!-- components/IFB_FOM_Total_Disbursement.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import CountUp from './countup.vue'

const ifbDisbursementPercent = ref(0)

onMounted(async () => {
  try {
    const res = await fetch(
      '/api/get-latest-data?section=Credit Disbursement&names=IFB Disbursement Percentage'
    )
    const data = await res.json()
    const percentage = Number(
      data.find(item => item.name === 'IFB Disbursement Percentage')?.value
    ) || 0
    ifbDisbursementPercent.value = percentage
  } catch (err) {
    console.error('Failed to fetch IFB Disbursement Percentage:', err)
  }
})
</script>


<template>
  <div class="text-center">
  <span>{{ ifbDisbursementPercent }}%</span>

  </div>
</template>
