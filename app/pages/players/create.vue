<script setup>
const player = ref({});

const onCancel = () => {
  navigateTo(`/players`);
};

const onSave = async (e) => {
  navigateTo(`/players/${e.id}`);
};
</script>

<template>
  <PlayerForm v-model="player" @cancel="onCancel" @save="onSave" />
</template>
