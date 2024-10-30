<script setup lang="ts">
const currentYear: number = new Date().getUTCFullYear();</script>
<template>
  <footer class="mt-auto w-screen p-5 text-color font-ubuntu font-semibold text-xl">
    <h6>&copy; Crunux Dev - {{ currentYear }}</h6>
  </footer>
</template>
<style scoped></style>