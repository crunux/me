<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
  <button
    class="laptop:w-[32px] movil:w-[22px]"
    dark:i-carbon-asleep-filled
    i-carbon-awake
    @click="toggleDark()"
  ></button>
</template>
<style scoped></style>
