<script setup lang="ts">
const props = defineProps({
  totalProgress: { type: Number, default: 240 },
  matchesPlayed: { type: Number, required: true },
});

const totalMatches = computed(() => props.matchesPlayed ?? 0);
</script>

<template>
  <UProgress
    v-model="totalMatches"
    :max="totalProgress"
    color="success"
    size="md"
  />
</template>
