<script setup lang="ts">
const colorMode = useColorMode();
interface Props {
  tag: string;
  markdownString: string;
}

const props = defineProps<Props>();
</script>
<template>
  <div v-html="$mdRenderer.render(props.markdownString)"></div>
</template>
