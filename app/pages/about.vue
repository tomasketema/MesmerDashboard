<script setup>
import { ref } from 'vue';
import { setGrantNumbers, setPssNumbers, setGrantAchievement, setPssAchievement } from '../data/data.js';

const grantInput = ref('');
const pssInput = ref('');
const grant_achievement = ref(100);
const pss_achievement = ref(100);

function submitForm() {
  setGrantNumbers(grantInput.value.split(',').map(n => Number(n.trim())));
  setPssNumbers(pssInput.value.split(',').map(n => Number(n.trim())));
  setGrantAchievement(Number(grant_achievement.value));
  setPssAchievement(Number(pss_achievement.value));
  alert('Values saved! Go to the dashboard to see the updated chart.');
}
</script>

<template>
  <div class="p-8 max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4">Set Grant, PSS Numbers and Achievement</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label>Grant Numbers (comma separated):</label>
        <input v-model="grantInput" class="border p-2 w-full" placeholder="e.g. 10, 20, 30" />
      </div>
      <div>
        <label>Achievement Number for GRANT(what is 100%?):</label>
        <input v-model="grant_achievement" type="number" class="border p-2 w-full" min="1" />
      </div>


      <div>
        <label>PSS Numbers (comma separated):</label>
        <input v-model="pssInput" class="border p-2 w-full" placeholder="e.g. 5, 15, 25" />
      </div>
      <div>
        <label>Achievement Number for PSS (what is 100%?):</label>
        <input v-model="pss_achievement" type="number" class="border p-2 w-full" min="1" />
      </div>


      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  </div>
</template>