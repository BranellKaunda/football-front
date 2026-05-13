<script setup>
const { data: leagues } = await useFetch("http://localhost:8000/api/leagues");
</script>

<!-- <template>
  <ol v-if="data">
    <li v-for="season in data">
      <pre>{{ season }}</pre>
      <p><NuxtLink :to="`/leagues/${season.id}`">matches</NuxtLink></p>
      <p>
        <NuxtLink :to="`/leagues/${season.id}/edit`">edit league</NuxtLink>
      </p>
    </li>
  </ol>
</template> -->

<template>
  <div class="max-w-md mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6 text-center">Competition</h1>

    <div class="bg-white p-4 rounded shadow flex flex-col gap-3" v-if="leagues">
      <div
        v-for="competition in leagues"
        :key="competition.id"
        class="border-b pb-4"
      >
        <p class="text-lg font-semibold">{{ competition.name }}</p>

        <div class="flex justify-between text-sm text-gray-700">
          <span>Season:</span>
          <span class="font-medium">{{ competition.season }}</span>
        </div>

        <div class="flex justify-between text-sm text-gray-700">
          <span>Rank:</span>
          <span class="font-medium">{{ competition.rank }}</span>
        </div>

        <div>
          <NuxtLink
            class="text-blue-600 text-sm mt-2 hover:underline"
            :to="`/leagues/${competition.id}`"
            >matches</NuxtLink
          >
        </div>

        <div>
          <NuxtLink
            class="text-blue-600 text-sm mt-2 hover:underline"
            :to="`/leagues/${competition.id}/edit`"
            >edit league</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
