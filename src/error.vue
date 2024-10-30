<script lang="ts" setup>
import type { NuxtError } from '#app'

useDark();
defineProps(
  { error: Object as () => NuxtError }
)


</script>
<template>
  <NuxtLayout name="error">
    <div class="prose mt-16 mx-auto max-w-340 p-6 m-4 max-h-340 text-center rounded-xl card-bg-color text-color">
      <h1 v-if="error?.statusCode === 404">Page not found</h1>
      <h1 v-else>{{ error?.message }}</h1>
      <h3>Sorry, something happaned!</h3>
      <NuxtLink class="cursor-pointer py-2 px-4 no-underline text-color-i bg-color-primary rounded-xl" to="/">Go Back
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>