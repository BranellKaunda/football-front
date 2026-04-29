<script setup>
const { data } = await useFetch("http://localhost:8000/api/leagues");
</script>

<template>
  <ol v-if="data">
    <li v-for="season in data">
      <pre>{{ season }}</pre>
      <p><NuxtLink :to="`/leagues/${season.id}`">matches</NuxtLink></p>
      <p>
        <NuxtLink :to="`/leagues/${season.id}/edit`">edit league</NuxtLink>
      </p>
    </li>
  </ol>
</template>
