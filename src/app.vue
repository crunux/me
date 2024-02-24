<script setup lang="ts">
// const { hygraphToken } = useRuntimeConfig()

// const cookie = useCookie('cross-hygraph')
useHead({
  meta: [
    {
      name: "Joan Cruz, autodidact learn, student, full stack developer",
      content: "This is my page portfolio",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg",
      href: "./assets/img/ico.svg",
    },
  ],
});
const iBuilding = ref(true);
// cookie.value = cookie.value || hygraphToken
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UnderConstruction v-model="iBuilding" />
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
