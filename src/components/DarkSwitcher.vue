<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
  <div
    class="flex justify-center items-center laptop:w-[36px] laptop:h-[35px] movil:w-[32px] movil:h-[32px] z-[100] bg-transparent rounded-full border-[#2d2e2e] dark:border-[#d9d9d9] border"
  >
    <button
      name="theme-mode"
      class="laptop:text-[32px] movil:text-[22px] dark:text-[#d9d9d9] text-[#2d2e2e]"
      dark:i-carbon-asleep-filled
      i-carbon-awake
      @click="toggleDark()"
    ></button>
  </div>
</template>
<style scoped></style>
