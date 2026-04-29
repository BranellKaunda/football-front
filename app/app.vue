<script setup>
import TestChild from "./components/test/TestChild.vue";

const names = ref(["john", "sam", "mary"]);
const nums = ref([1, 2, 3, 4, 5, 6, 0]);
const newCount = ref(0);
</script>

<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/matches">Matches</NuxtLink></li>
        <li><NuxtLink to="/teams">Teams</NuxtLink></li>
        <li><NuxtLink to="/leagues">Leagues</NuxtLink></li>
      </ul>
    </nav>

    <NuxtPage />
    <TestChild :names="names" :nums="nums" v-model="newCount" />
  </div>
</template>
