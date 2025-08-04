<template>
  <div class="space-y-4 p-6 bg-white rounded-xl shadow-lg">
    <h2 class="text-xl font-bold">Upload CSV</h2>
    <input type="file" @change="handleFile" accept=".csv" class="border p-2 rounded" />
  </div>
</template>

<script setup>
import Papa from 'papaparse'

function handleFile(e) {
  const file = e.target.files[0]
  if (!file) return

  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      const jsonData = results.data
      console.log("Parsed CSV JSON:", JSON.stringify(jsonData, null, 2))

      const grantRow = jsonData.find(row => row.metric?.trim() === 'grant_value')
      const grantValue = grantRow && grantRow.value
        ? parseFloat(grantRow.value)
        : 0

      localStorage.setItem("grantValue", grantValue)
      alert("Grant value saved to localStorage: " + grantValue)
    }
  })
}
</script>

