<!-- /components/ifb_disbursement.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import CountUp from './countup.vue'
const ifbDisbursement = ref(0)

onMounted(async () => {
  try {
    const res = await fetch(
      '/api/get-latest-data?section=Credit Disbursement&names=IFB Disbursement'
    )
    const data = await res.json()
    console.log('IFB Disbursement data:', data)

    const disbursement = Number(data.find(item => item.name === 'IFB Disbursement')?.value) || 0
    ifbDisbursement.value = disbursement
  } catch (err) {
    console.error('Failed to fetch IFB Disbursement data:', err)
  }
})
</script>

<template>
  <div class="text-xl font-semibold text-center text-gray-800">
    <CountUp :end="ifbDisbursement" />
  </div>
</template>
