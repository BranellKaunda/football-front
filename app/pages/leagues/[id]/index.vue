<script setup lang="ts">
const route = useRoute();

const { data: season } = await useFetch(
  `http://localhost:8000/api/matches/?competitionId=${route.params.id}`,
);
</script>

<template>
  <ol v-if="season">
    <li v-for="matches in season">
      <pre>{{ matches }}</pre>
    </li>
  </ol>
</template>
