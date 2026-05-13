<script setup>
const player = defineModel();
const draft = ref({ ...player.value });
const emit = defineEmits(["cancel", "save"]);

const { data: teams } = await useFetch("http://localhost:8000/api/teams");

async function save() {
  const res = await $fetch(
    `http://localhost:8000/api/players/${player.value.id}`,
    {
      method: "PATCH",
      body: {
        teamId: draft.value.teamId,
        firstName: draft.value.firstName,
        lastName: draft.value.lastName,
        dob: draft.value.dob,
        position: draft.value.position,
      },
    },
  );

  player.value = res; // emit once
  emit("save");
}

function cancel() {
  draft.value = { ...player.value };
  emit("cancel");
}
</script>

<template>
  <h1 class="m-8 text-2xl font-bold text-center">Edit Player</h1>
  <form
    class="flex flex-col gap-4 bg-white p-4 rounded shadow max-w-md mx-auto m-10"
    @submit.prevent="save"
  >
    <div class="flex flex-col gap-2">
      <label>Team</label>
      <select v-model.number="draft.teamId" placeholder="select a team">
        <option disabled value="">Select a team</option>
        <option v-for="team in teams" :key="team.id" :value="team.id">
          {{ team.name }}
        </option>
      </select>
    </div>

    <div class="flex flex-col gap-2">
      <label>First name</label>
      <input v-model="draft.firstName" placeholder="firstName" />
    </div>

    <div class="flex flex-col gap-2">
      <label>Last name</label>
      <input v-model="draft.lastName" placeholder="lastName" />
    </div>

    <div class="flex flex-col gap-2">
      <label>Date of Birth</label>
      <input v-model="draft.dob" placeholder="dob" />
    </div>

    <div class="flex flex-col gap-2">
      <label>Position</label>
      <select v-model="draft.position">
        <option disabled value="">Select a position</option>
        <option value="Forward">Forward</option>
        <option value="Midfielder">Midfielder</option>
        <option value="Defender">Defender</option>
        <option value="Goalkeeper">Goalkeeper</option>
      </select>
    </div>

    <div class="flex gap-4 justify-end">
      <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
        type="button"
        @click="cancel"
      >
        Cancel
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        type="submit"
      >
        Save
      </button>
    </div>
  </form>
</template>
