<script setup>
import { computed, ref, onMounted } from 'vue'
import CountUp from './countup.vue'

const value = ref(0)
const isPercentage = ref(false)
const metricNames = [
  'People with Disability',
  'People with Disabilities',
  'People with Disbility',
  'Persons with Disability',
  'Persons with Disabilities',
  'Disability Registration',
]

const roundedValue = computed(() => Math.round(value.value))

onMounted(async () => {
  try {
    const params = new URLSearchParams({
      section: 'Credit Disbursement',
      names: metricNames.join(','),
    })
    const res = await fetch(`/api/get-latest-data?${params.toString()}`)
    const data = await res.json()
    const lowerMetricNames = metricNames.map((name) => name.toLowerCase())
    const row = data.find((item) =>
      lowerMetricNames.includes(item.name?.toLowerCase()),
    )

    value.value = Number(row?.value) || 0
    isPercentage.value = row?.chart_type === 'percentage'
  } catch (err) {
    console.error('Failed to fetch credit people with disability data:', err)
  }
})
</script>

<template>
  <span v-if="isPercentage">{{ roundedValue }}%</span>
  <CountUp v-else :end="roundedValue" />
</template>
