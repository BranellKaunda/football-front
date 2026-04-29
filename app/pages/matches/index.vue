<script setup>
const { data } = await useFetch("http://localhost:8000/api/matches");
</script>

<template>
  <div>
    <h1>Matches Page</h1>
    <ol v-if="data">
      <li v-for="match in data" :key="match.id">
        <NuxtLink :to="`/teams/${match.homeTeam.id}`">{{
          match.homeTeam.name
        }}</NuxtLink>
        vs
        <NuxtLink :to="`/teams/${match.awayTeam.id}`">{{
          match.awayTeam.name
        }}</NuxtLink>
        <br />
        <NuxtLink :to="`/matches/${match.id}`">Match details</NuxtLink>
      </li>
    </ol>
  </div>
</template>
