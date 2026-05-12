<script setup lang="ts">
const route = useRoute();
const matchId = route.params.id;

const { data: match } = await useFetch(
  `http://localhost:8000/api/matches/${matchId}`,
);

const onCancel = () => {
  navigateTo(`/matches/${matchId}`);
};

const onSave = () => {
  navigateTo(`/matches/${matchId}`);
};
</script>

<template>
  <MatchEditForm v-model="match" @cancel="onCancel" @save="onSave" />
</template>
