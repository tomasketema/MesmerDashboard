<!-- components/CountUp.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  end: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000
  }
})

const displayNumber = ref(0)
let animationFinished = false

function animateCountUp(start, end, duration) {
  let startTime = null

  function step(timestamp) {
    if (!startTime) startTime = timestamp
    const progress = timestamp - startTime
    const current = Math.min(Math.floor(start + (progress / duration) * (end - start)), end)
    displayNumber.value = current.toLocaleString()

    if (current < end) {
      requestAnimationFrame(step)
    } else {
      animationFinished = true
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  animateCountUp(0, props.end, props.duration)

  setTimeout(() => {
    if (!animationFinished || displayNumber.value === '0') {
      displayNumber.value = props.end.toLocaleString()
    }
  }, props.duration + 1000)
})
</script>

<template>
  <div class="text-xl font-bold">{{ displayNumber }}</div>
</template>
