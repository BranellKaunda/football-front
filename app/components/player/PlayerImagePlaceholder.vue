<script setup>
const props = defineProps({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const acronym = computed(() => {
  const first = props.firstName?.charAt(0).toUpperCase() || "";
  const last = props.lastName?.charAt(0).toUpperCase() || "";
  return first + last;
});
</script>

<template>
  <span
    class="font-bold text-lg bg-gray-200 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center"
  >
    {{ acronym }}
  </span>
</template>
