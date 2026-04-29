<script setup>
const route = useRoute();
const name = defineModel("name");
const season = defineModel("season");
const rank = defineModel("rank");

const editLeague = async () => {
  await $fetch(`http://localhost:8000/api/leagues/${route.params.id}`, {
    method: "PATCH",
    body: {
      name: name.value,
      season: season.value,
      rank: rank.value,
    },
  });
};
</script>

<template>
  <input type="text" v-model="name" placeholder="name" />
  <input type="text" v-model="season" placeholder="season" />
  <input type="number" v-model="rank" placeholder="rank" />
  <button @click="editLeague">done</button>
</template>
