<script setup lang="ts">
  interface Props {
    tag?: string;
    markdownString?: string;
  }

  defineProps<Props>();
</script>
<template>
  <div v-if="markdownString" v-html="$mdRenderer.render(markdownString)"></div>
</template>
