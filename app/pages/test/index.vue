<script setup>
const { data } = await useFetch("/api/test");
console.log(data.value);
</script>

<template>
  <pre>{{ data }}</pre>
</template>
