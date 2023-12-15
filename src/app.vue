<script setup lang="ts">
// const { hygraphToken } = useRuntimeConfig()

// const cookie = useCookie('cross-hygraph')

// cookie.value = cookie.value || hygraphToken
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.dark body {
  background: #303231;
}

.light body {
  background: #d9d9d9;
}
</style>
