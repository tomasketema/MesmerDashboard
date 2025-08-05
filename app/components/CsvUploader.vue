<template>
  <form @submit.prevent="upload">
    <input type="file" @change="handleFile" accept=".csv" />
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Upload CSV</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const file = ref(null)

function handleFile(event) {
  file.value = event.target.files[0]
}

async function upload() {
  if (!file.value) return alert('Please select a CSV file')

  const formData = new FormData()
  formData.append('file', file.value)

  try {
    const res = await $fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    alert(res.message)
  } catch (err) {
    console.error(err)
    alert('Upload failed')
  }
}
</script>
