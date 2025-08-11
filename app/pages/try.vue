<script setup>

</script>
<template>
  <div class="min-h-screen bg-gray-100 p-4">
     <div class="flex justify-center">
    <div class="bg-white rounded-xl p-1 pt-4 w-full max-w-2xl">
      <h1
        class="text-3xl font-bold font-serif text-black text-center tracking-wide"
      >
        <p><span class="text-[#ff7f50] ">MESMER</span> Supported</p>
      </h1>
    </div>
  </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 pt-6">
<div class="bg-white rounded-2xl p-6 shadow flex flex-col items-center justify-center text-center h-48">
  <!-- Header -->
  <p class="text-lg font-semibold text-gray-600 mb-2">
    Enterprises
  </p>

  <!-- Number -->
  <div
    class="bg-gray-100 border border-gray-300 px-6 py-3 rounded-xl shadow text-3xl font-mono font-bold text-gray-800"
  >
    <EnterprisesSupported />
  </div>

  <!-- Footer -->
  <p class="mt-2 text-sm font-medium text-gray-500">
    Supported
  </p>
</div>




<div class="bg-white rounded-2xl shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-10xl mx-max">
  <!-- Left: Youth Employment -->
  <div class="flex flex-col items-center text-center w-full">
    <p class="text-xl font-semibold text-gray-600 mb-3">Youth Employment</p>
    <div
      class="bg-gray-100 border border-gray-300 px-6 py-4 rounded-xl shadow text-3xl font-mono font-bold text-gray-800"
    >
      <YouthEmployment />
    </div>
    <p class="mt-2 text-base font-medium text-gray-500">Employed</p>
  </div>

  <!-- Right: Woman Employment -->
  <div class="flex flex-col  w-full">
    <p class="text-xl font-semibold text-gray-600 mb-4">Woman Employment</p>
    <div class="flex flex-row items-center justify-center gap-10">
      <!-- Chart -->
      <div class="w-[200px] h-[200px]">
        <ClientOnly>
          <WomanEmploymentPie />
        </ClientOnly>
      </div>

      <!-- Image -->
      <div class="w-[140px] h-[140px]">
        <img
          src="@/assets/mesmerLogo/businesswoman.png"
          alt="business woman"
          class="rounded-lg shadow w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</div>










      <!-- Google Workspace -->
      <div class="bg-white rounded-2xl p-4 shadow">
        <h2 class="text-sm font-semibold text-gray-500">Google Workspace</h2>
        <p class="text-lg font-bold mt-1">$8.40</p>
      </div>

      <!-- Spending Limit -->
      <div class="bg-white rounded-2xl p-4 shadow">
        <h2 class="text-sm font-semibold text-gray-500">Spending Limit</h2>
        <p class="text-lg font-bold mt-1">$252.98</p>
        <SpendingLimitBar />
      </div>

      <!-- Subscriptions -->
      <div class="bg-white rounded-2xl p-4 shadow">
        <h2 class="text-sm font-semibold text-gray-500">Spotify Subscription</h2>
        <p class="text-lg font-bold mt-1">$5.99</p>
      </div>

      <div class="bg-white rounded-2xl p-4 shadow">
        <h2 class="text-sm font-semibold text-gray-500">YouTube Membership</h2>
        <p class="text-lg font-bold mt-1">$13.99</p>
      </div>

      <!-- Daily Expense -->
      <div class="bg-white rounded-2xl p-4 shadow lg:col-span-2">
        <h2 class="text-sm font-semibold text-gray-500">Daily Expense</h2>
        <div class="h-40">
          <DailyExpenseChart />
        </div>
      </div>

      <!-- Saving Goal -->
      <div class="bg-white rounded-2xl p-4 shadow lg:row-span-2">
        <h2 class="text-sm font-semibold text-gray-500">Saving Goal</h2>
        <div class="h-40">
          <SavingGoalChart />
        </div>
      </div>

      <!-- Goal Cards -->
      <div class="bg-white rounded-2xl p-4 shadow">
        <h2 class="text-sm font-semibold text-gray-500">Dream Car</h2>
        <p class="text-lg font-bold mt-1">$12,367 / $35,000</p>
      </div>

      <div class="bg-white rounded-2xl p-4 shadow">
        <h2 class="text-sm font-semibold text-gray-500">House Saving</h2>
        <p class="text-lg font-bold mt-1">$8,500 / $50,000</p>
      </div>

      <div class="bg-white rounded-2xl p-4 shadow">
        <h2 class="text-sm font-semibold text-gray-500">Laptop</h2>
        <p class="text-lg font-bold mt-1">$1,250 / $2,000</p>
      </div>

      <div class="bg-white rounded-2xl p-4 shadow">
        <h2 class="text-sm font-semibold text-gray-500">Motorcycle</h2>
        <p class="text-lg font-bold mt-1">$3,200 / $5,000</p>
      </div>

    </div>
  </div>
</template>
