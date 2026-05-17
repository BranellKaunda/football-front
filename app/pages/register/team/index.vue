<script setup>
const team = ref({});

function onCancel(e) {
  navigateTo("/teams");
}

function onSave(e) {
  navigateTo(`/teams/${e.id}`);
}
</script>

<template>
  <TeamRegisterForm v-model="team" @cancel="onCancel" @save="onSave" />
</template>
