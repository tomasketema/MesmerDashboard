<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  end: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 3000
  }
})

const displayNumber = ref(0)
let animationFinished = false

function animateCountUp(start, end, duration) {
  let startTime = null
  animationFinished = false

  function step(timestamp) {
    if (!startTime) startTime = timestamp
    const progress = timestamp - startTime
    const current = Math.min(
      Math.floor(start + (progress / duration) * (end - start)),
      end
    )
    displayNumber.value = current.toLocaleString()

    if (current < end) {
      requestAnimationFrame(step)
    } else {
      animationFinished = true
    }
  }

  requestAnimationFrame(step)
}

function startAnimation() {
  displayNumber.value = 0
  animateCountUp(0, props.end, props.duration)

  setTimeout(() => {
    if (!animationFinished || displayNumber.value === '0') {
      displayNumber.value = props.end
    }
  }, props.duration + 1000)
}

onMounted(() => {
  startAnimation()
})
watch(() => props.end, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    startAnimation()
  }
})
</script>

<template>
  <div class="text-xl font-bold">{{ displayNumber }}</div>
</template>
