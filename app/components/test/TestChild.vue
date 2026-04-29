<script setup>
const props = defineProps({
  names: Array,
  nums: Array,
});

const { names, nums } = props;

const model = defineModel();

function increment() {
  model.value++;
}
</script>

<template>
  <li v-for="name in names">{{ name }}</li>
  <li v-for="num in nums">{{ num }}</li>

  <p>parent model: {{ model }}</p>
  <button @click="increment">+</button>
</template>
