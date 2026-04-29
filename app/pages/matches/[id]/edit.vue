<script setup lang="ts">
const route = useRoute();
const homeTeamId = defineModel("homeTeamId");
const awayTeamId = defineModel("awayTeamId");
const homeTeamGoals = defineModel("homeTeamGoals");
const awayTeamGoals = defineModel("awayTeamGoals");
const matchDate = defineModel("matchDate");
const status = defineModel("status");
const competitionId = defineModel("competitionId");

const editMatch = async () => {
  await $fetch(`http://localhost:8000/api/matches/${route.params.id}`, {
    method: "PATCH",
    body: {
      homeTeamId: homeTeamId.value,
      awayTeamId: awayTeamId.value,
      homeTeamGoals: homeTeamGoals.value,
      awayTeamGoals: awayTeamGoals.value,
      matchDate: matchDate.value,
      status: status.value,
      competitionId: competitionId.value,
    },
  });
};
</script>

<template>
  <input type="text" v-model="homeTeamId" placeholder="home team id" />
  <input type="text" v-model="awayTeamId" placeholder="away team id" />
  <input type="text" v-model="homeTeamGoals" placeholder="home team goals" />
  <input type="text" v-model="awayTeamGoals" placeholder="away team goals" />
  <input type="text" v-model="matchDate" placeholder="match date" />
  <input type="text" v-model="status" placeholder="status" />
  <input type="text" v-model="competitionId" placeholder="competition id" />
  <button @click="editMatch">done</button>
</template>
