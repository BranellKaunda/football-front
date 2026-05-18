<script setup>
const route = useRoute();
const id = route.params.id;
const { data: match } = await useFetch(
  `http://localhost:8000/api/matches/${id}`,
  {
    query: route.query,
  },
);
</script>

<template>
  <div class="max-w-3xl mx-auto p-6">
    <div class="flex flex-col gap-4" v-if="match">
      <div
        :key="match.id"
        class="bg-white p-4 rounded shadow flex flex-col gap-3"
      >
        <!-- MAIN MATCH ROW -->
        <div class="flex items-center justify-between gap-4">
          <!-- HOME TEAM -->
          <div class="flex items-center gap-2 w-1/3">
            <NuxtLink :to="`/teams/${match.homeTeam.id}`">
              <img
                :src="match.homeTeam.logo"
                class="w-10 h-10 object-contain"
              />
            </NuxtLink>

            <NuxtLink
              :to="`/teams/${match.homeTeam.id}`"
              class="font-medium text-sm hover:text-blue-600"
            >
              {{ match.homeTeam.name }}
            </NuxtLink>
          </div>

          <!-- SCORE -->
          <div class="text-lg font-bold text-center w-1/3">
            {{ match.homeTeamGoals }}
            <span class="text-gray-500">vs</span>
            {{ match.awayTeamGoals }}
          </div>

          <!-- AWAY TEAM -->
          <div class="flex items-center justify-end gap-2 w-1/3">
            <NuxtLink
              :to="`/teams/${match.awayTeam.id}`"
              class="font-medium text-sm text-right hover:text-blue-600"
            >
              {{ match.awayTeam.name }}
            </NuxtLink>

            <NuxtLink :to="`/teams/${match.awayTeam.id}`">
              <img
                :src="match.awayTeam.logo"
                class="w-10 h-10 object-contain"
              />
            </NuxtLink>
          </div>
        </div>

        <!-- COMPETITION + DATE -->
        <div class="text-gray-600 text-sm text-center">
          {{ match.competition?.name }} • {{ match.matchDate }}
        </div>

        <div class="text-center">
          <NuxtLink
            class="text-blue-600 hover:text-blue-800 text-sm"
            :to="`/matches/${match.id}/edit`"
          >
            Edit Match
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
