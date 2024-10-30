<script lang="ts" setup>
import type { NuxtError } from '#app'

definePageMeta({
  layout: "error",
});

defineProps(
  { error: Object as () => NuxtError }
)

</script>
<template>
  <NuxtLayout>
    <div class="prose mt-16 mx-auto max-w-340 p-6 m-4 max-h-340 text-center rounded-xl card-bg-color text-color">
      <h1>Sorry Something Broke</h1>
      <p>{{ error?.message }}</p>
      <NuxtLink class="cursor-pointer py-2 px-4 no-underline text-color-i bg-color-primary rounded-xl" to="/">Back
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
<style scoped></style>