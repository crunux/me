<script setup lang="ts">
const currentYear: number = new Date().getUTCFullYear();
</script>
<template>
  <footer class="mt-auto w-full py-8 text-center border-t borde-color">
    <p class="text-color font-ubuntu font-semibold text-sm opacity-70">
      &copy; {{ currentYear }} <span class="text-[#40CEF7]">Cru</span>nux Dev
    </p>
  </footer>
</template>
