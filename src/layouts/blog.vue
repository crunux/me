<script setup lang="ts">
import type { Route } from "~/types";
const links = ref<Route[]>([
  {
    name: "Home",
    page: "/",
  },
  {
    name: "About",
    page: "/about",
  },
  {
    name: "Projects",
    page: "/projects",
  },
  {
    name: "Blog",
    page: "/blog",
  },
  {
    name: "Contact",
    page: "/contact",
  },
]);
</script>
<template>
  <NavBar activeRoute :links="links" />
  <slot />
  <Footer/>
</template>
<style scoped></style>
