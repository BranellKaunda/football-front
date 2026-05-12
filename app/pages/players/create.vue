<script setup>
const player = ref({});

const onCancel = () => {
  navigateTo(`/create`);
};

const onSave = async (e) => {
  navigateTo(`/players/${e}`);
};
</script>

<template>
  <p>lets import a player</p>
  <PlayerCreateForm v-model="player" @cancel="onCancel" @save="onSave" />
</template>
