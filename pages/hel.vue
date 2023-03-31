<template>
  <!-- <n-input v-modal="data" /> -->
  <input class="w-100" type="text" v-model="data" />
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  <!-- <div>{{ data }}</div> -->
</template>

<script setup>
const data = ref(null);
</script>
