<script setup lang="ts">
const currentYear: number = new Date().getUTCFullYear();</script>
<template>
    <footer
      class="relative flex items-end left-5 bottom-0 w-[100vw] h-[30px] m-[10px] dark:text-[#d9d9d9] text-[#2d2e2e] font-ubuntu font-semibold text-xl"
    >
      <h6>&copy; Crunux Dev - {{ currentYear }}</h6>
    </footer>
</template>
<style scoped></style>