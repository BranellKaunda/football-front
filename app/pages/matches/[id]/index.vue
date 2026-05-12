<script setup>
const route = useRoute();
const id = route.params.id;
const { data } = await useFetch(`http://localhost:8000/api/matches/${id}`, {
  query: route.query,
});
</script>

<template>
  <pre>{{ data }}</pre>
  <div>
    <p>
      <NuxtLink :to="`/matches/${id}/edit`">Edit match</NuxtLink>
    </p>
  </div>
</template>
