<script setup>
const route = useRoute();
const props = defineProps({
  form: Object,
});

const { data: recentMatches } = await useFetch(
  `http://localhost:8000/api/matches/?teamId=${route.params.id}`,
);
</script>

<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6 text-center">Recent Matches</h1>

    <div class="flex flex-col gap-4" v-if="recentMatches">
      <div
        v-for="match in recentMatches.slice(0, 5)"
        :key="match.id"
        class="bg-white p-4 rounded shadow flex flex-col gap-3"
      >
        <!-- MAIN MATCH ROW -->
        <div class="flex items-center justify-between gap-4">
          <!-- HOME TEAM -->
          <div class="flex items-center gap-2 w-1/3">
            <img :src="match.homeTeam.logo" class="w-10 h-10 object-contain" />
            <p class="font-medium text-sm">{{ match.homeTeam.name }}</p>
          </div>

          <!-- SCORE -->
          <div class="text-lg font-bold text-center w-1/3">
            {{ match.homeTeamGoals }}
            <span class="text-gray-500">vs</span>
            {{ match.awayTeamGoals }}
          </div>

          <!-- AWAY TEAM -->
          <div class="flex items-center justify-end gap-2 w-1/3">
            <p class="font-medium text-sm text-right">
              {{ match.awayTeam.name }}
            </p>
            <img :src="match.awayTeam.logo" class="w-10 h-10 object-contain" />
          </div>
        </div>

        <!-- COMPETITION + DATE -->
        <div class="text-gray-600 text-sm text-center">
          {{ match.competition?.name }} • {{ match.matchDate }}
        </div>

        <!-- FORM INDICATOR -->
        <!-- <div
          :class="[
            'self-start px-2 py-1 rounded text-xs font-semibold',
            getFormClass(match),
          ]"
        >
          {{
            getFormClass(match) === "bg-green-100 text-green-800"
              ? "Win"
              : getFormClass(match) === "bg-yellow-100 text-yellow-800"
                ? "Draw"
                : "Loss"
          }}
        </div> -->
      </div>
    </div>
  </div>
</template>
