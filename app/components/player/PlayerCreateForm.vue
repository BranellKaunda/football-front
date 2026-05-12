<script setup>
const player = defineModel();
const draft = ref({ ...player.value });
const emit = defineEmits(["cancel", "save"]);

const { data: teams } = await useFetch("http://localhost:8000/api/teams");

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
  <form
    @submit.prevent="save"
    class="flex flex-col gap-4 bg-white p-4 rounded shadow"
  >
    <select v-model="draft.teamId" placeholder="select a team">
      <option disabled value="">Select a team</option>
      <option v-for="team in teams" :key="team.id" :value="team.id">
        {{ team.name }}
      </option>
    </select>

    <div>
      <label>First name:</label>
      <input v-model="draft.firstName" placeholder="firstName" />
    </div>

    <div>
      <label>Last name:</label>
      <input v-model="draft.lastName" placeholder="lastName" />
    </div>

    <div>
      <label>Date of Birth:</label>
      <input v-model="draft.dob" placeholder="yyyy-mm-dd" />
    </div>

    <div>
      <label>Position:</label>
      <input v-model="draft.position" placeholder="position" />
    </div>

    <div>
      <label>Weight (kg):</label>
      <input v-model.number="draft.weightKg" placeholder="weight" />
    </div>

    <div>
      <label>Height (cm):</label>
      <input v-model.number="draft.heightCm" placeholder="height" />
    </div>

    <button type="button" @click="cancel">Cancel</button>
    <button type="submit">Save</button>
  </form>
</template>
