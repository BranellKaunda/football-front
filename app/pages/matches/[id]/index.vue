<script setup>
const route = useRoute();
const { data } = await useFetch(
  `http://localhost:8000/api/matches/${route.params.id}`,
  {
    query: route.query,
  },
);

console.log(data);
</script>

<template>
  <pre>{{ data }}</pre>
  <div>
    <p>
      <NuxtLink :to="`/matches/${route.params.id}/edit`">Edit match</NuxtLink>
    </p>
  </div>
</template>
