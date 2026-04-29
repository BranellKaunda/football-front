<script setup>
const randomNumber = useCounter();

names.value.push("russell");
</script>

<template>
  <div>
    <h1>ABOUT PAGE</h1>
    <p>Number: {{ randomNumber }}</p>
  </div>

  <div>
    <p>about page names</p>
    <ol>
      <li v-for="name in names">{{ name }}</li>
    </ol>
  </div>
</template>
