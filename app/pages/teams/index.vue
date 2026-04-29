<script setup>
const { data } = await useFetch("http://localhost:8000/api/teams");
</script>

<template>
  <h1>Teams page</h1>
  <ol v-if="data">
    <li v-for="team in data" :key="team.id">
      <NuxtLink :to="`/teams/${team.id}`">{{ team.name }} </NuxtLink>
    </li>
  </ol>
</template>
