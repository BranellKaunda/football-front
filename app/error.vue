<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const title = computed(() => {
  switch (props.error.status) {
    //if status is 404, return "Page Not Found"
    case 404:
      return "Page Not Found";
    case 401:
      return "Unauthorized";
    case 403:
      return "Forbidden";
    case 500:
      return "Server Error";
    default:
      return "Something went wrong";
  }
});

const description = computed(() => {
  switch (props.error.status) {
    case 404:
      return "The page you're looking for doesn't exist or has been moved.";
    case 401:
      return "You need to be signed in to access this page.";
    case 403:
      return "You don't have permission to access this page.";
    case 500:
      return "An unexpected error occurred on the server. Please try again later.";
    default:
      return "An unexpected error occurred.";
  }
});

function handleError() {
  clearError({ redirect: "/" });
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 px-4">
    <div
      class="card p-8 sm:p-12 max-w-md w-full text-center flex flex-col items-center gap-6"
    >
      <p class="text-6xl font-bold text-slate-300 tabular-nums">
        {{ error.status }}
      </p>

      <div class="flex flex-col gap-2">
        <h1 class="text-xl sm:text-2xl font-bold text-slate-800">
          {{ title }}
        </h1>
        <p class="text-sm text-slate-500 leading-relaxed">
          {{ description }}
        </p>
      </div>

      <div class="flex gap-3 mt-2">
        <button class="btn-secondary" @click="handleError">Go Home</button>
        <button class="btn-primary" @click="$router.go(-1)">Go Back</button>
      </div>
    </div>
  </div>
</template>
