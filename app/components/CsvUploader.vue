<template>
  <div class="p-6 bg-white rounded-xl shadow-md space-y-4">
    <h2 class="text-xl font-semibold">📤 Upload CSV for Chart Data</h2>

    <input
      type="file"
      accept=".csv,.tsv"
      @change="handleFileUpload"
      class="border p-2 rounded w-full"
    />

    <button
      @click="uploadCSV"
      :disabled="!csvFile"
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
    >
      Upload
    </button>

    <p
      v-if="statusMessage"
      :class="statusType === 'success' ? 'text-green-600' : 'text-red-600'"
      class="font-medium"
    >
      {{ statusMessage }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const csvFile = ref(null)
const statusMessage = ref('')
const statusType = ref('success')

function handleFileUpload(event) {
  csvFile.value = event.target.files[0]
  statusMessage.value = ''
}

async function uploadCSV() {
  if (!csvFile.value) return

  const formData = new FormData()
  formData.append('file', csvFile.value)

  try {
    const response = await fetch('/api/upload-csv', {
      method: 'POST',
      body: formData
    })

    const result = await response.json()

    if (response.ok && result.status === '🎉success') {
      statusMessage.value = result.message
      statusType.value = 'success'
    } else {
      statusMessage.value = result.message || '⚠️Upload failed.'
      statusType.value = 'error'
    }
  } catch (error) {
    console.error('Upload failed:', error)
    statusMessage.value = '🔄Upload failed. Please try again.'
    statusType.value = 'error'
  }
}
</script>
