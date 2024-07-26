<script setup lang="ts">
  import type { CreatedBy } from "~/types";
  interface Props {
    createdBy?: CreatedBy;
  }
  defineProps<Props>();
</script>
<template>
  <div v-if="createdBy" class="flex flex-row p-1 m-1 justify-center items-center gap2">
    <img class="rounded-full max-w-50px" :src="createdBy.picture" :alt="createdBy.id" />
    <h4 class="font-nunito font-semibold">
      {{ createdBy.name }}
    </h4>
  </div>
</template>
<style scoped></style>
