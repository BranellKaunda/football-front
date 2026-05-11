<script setup>
const players = defineModel();
</script>

<template>
  <div>
    <input v-model="players.name" />
    <input v-model="players.age" />
    <input v-model="players.number" />
  </div>
</template>
