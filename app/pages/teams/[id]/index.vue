<script setup>
const route = useRoute();
const { data: team } = await useFetch(
  `http://localhost:8000/api/teams/${route.params.id}`,
  {
    query: route.query,
  },
);

const { data: recentMatches } = await useFetch(
  `http://localhost:8000/api/matches/?teamId=${route.params.id}`,
);
</script>

<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6 text-center">Teams</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        :key="team.id"
        class="bg-white p-4 rounded shadow flex items-center gap-4"
      >
        <!-- TEAM LOGO -->
        <NuxtLink :to="`/teams/${team.id}`">
          <img
            :src="team.logo"
            alt="team logo"
            class="w-14 h-14 object-contain rounded"
          />
        </NuxtLink>

        <!-- TEAM INFO -->
        <div class="flex flex-col">
          <NuxtLink :to="`/teams/${team.id}`" class="font-semibold text-lg">
            {{ team.name }}
          </NuxtLink>
          <p class="text-gray-600 text-sm capitalize">{{ team.location }}</p>
          <NuxtLink
            :to="`/teams/${team.id}/edit`"
            class="text-blue-600 text-sm mt-2 hover:underline"
          >
            Edit Team
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <!-- RECENT MATCHES -->
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
      </div>
    </div>
  </div>
</template>
