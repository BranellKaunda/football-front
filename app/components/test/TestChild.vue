<script setup lang="ts">
defineProps<{ age: String; isMarried: Boolean }>();
</script>

<template>
  <div>
    <h1>{{ age }}</h1>
    <h1>{{ isMarried }}</h1>
  </div>
</template>
