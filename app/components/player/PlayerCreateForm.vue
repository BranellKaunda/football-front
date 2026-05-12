<script setup>
const player = defineModel();
const draft = ref({ ...player.value });
const emit = defineEmits(["cancel", "save"]);

async function save() {
  const res = await $fetch("http://localhost:8000/api/players/create", {
    method: "POST",
    body: {
      teamId: draft.value.teamId,
      firstName: draft.value.firstName,
      lastName: draft.value.lastName,
      dob: draft.value.dob,
      position: draft.value.position,
      weightKg: draft.value.weightKg,
      heightCm: draft.value.heightCm,
    },
  });

  player.value = res; // update the player with the response from the server
  emit("save", res.id);
}

function cancel() {
  draft.value = { ...player.value };
  emit("cancel");
}
</script>

<template>
  <form @submit.prevent="save">
    <input v-model.number="draft.teamId" placeholder="teamId" />
    <input v-model="draft.firstName" placeholder="firstName" />
    <input v-model="draft.lastName" placeholder="lastName" />
    <input v-model="draft.dob" placeholder="dob" />
    <input v-model="draft.position" placeholder="position" />
    <input v-model.number="draft.weightKg" placeholder="weightKg" />
    <input v-model.number="draft.heightCm" placeholder="heightCm" />
    <button type="button" @click="cancel">Cancel</button>
    <button type="submit">Save</button>
  </form>
</template>
