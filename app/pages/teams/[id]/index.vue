<script setup>
const route = useRoute();
const { data } = await useFetch(
  `http://localhost:8000/api/teams/${route.params.id}`,
  {
    query: route.query,
  },
);

const { data: recentMatches } = await useFetch(
  `http://localhost:8000/api/matches/?teamId=${route.params.id}`,
);
</script>

<template>
  <div v-if="data">
    <p>Name: {{ data.name }}</p>
    <p>location: {{ data.location }}</p>
    <NuxtImg :src="data.logo" :alt="data.name" />
  </div>

  <div>
    <NuxtLink :to="`/teams/${route.params.id}/edit`">Edit Team</NuxtLink>
  </div>

  <div v-if="recentMatches">
    <h1>Recent matches:</h1>

    <ul v-for="match in recentMatches.slice(0, 5)">
      <pre>{{ match }}</pre>
    </ul>
  </div>
</template>
