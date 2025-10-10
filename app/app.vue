<script setup>
// import 'apexcharts/dist/apexcharts.css'
</script>
<template>
  <div>
    <VitePwaManifest />
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
}

#scroll-container {
  overflow: visible;
}

</style>