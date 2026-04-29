<script setup>
const route = useRoute();

const { data: team } = await useFetch(
  `http://localhost:8000/api/teams/${route.params.id}`,
);
</script>

<template>
  <TeamForm v-model="team" />
</template>
