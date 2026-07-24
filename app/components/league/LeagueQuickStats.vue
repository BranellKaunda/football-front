<script setup>
const props = defineProps({
  totalMatchesPlayed: { type: Number, required: true },
  leagueId: { type: Number, required: false },
});

const { getNumberOfTeamsInLeague } = useTeamXLeague();
const numberOfTeamsInLeague = ref(0);

watch(
  () => props.leagueId,
  async (id) => {
    if (id) {
      numberOfTeamsInLeague.value = await getNumberOfTeamsInLeague(id);
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="grid grid-cols-2 gap-x-6 gap-y-1 items-center text-sm">
    <span class="font-semibold">Total Matches Played:</span>
    <span>{{ totalMatchesPlayed }}</span>
    <span class="font-semibold">Teams:</span>
    <span>{{ numberOfTeamsInLeague }}</span>
    <span class="font-semibold">Progress: </span>
    <div><ProgressBar :matches-played="totalMatchesPlayed" /></div>
  </div>
</template>
