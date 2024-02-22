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

useSeoMeta({
  description: "Porfotio of Joan Cruz",
  ogTitle: "Crunux",
  ogDescription: "CV Crunux",
  ogImage:
    "https://pbs.twimg.com/profile_images/1421116782069403649/9TRcKV2t_400x400.jpg",
  ogUrl: "crunux.dev",
  twitterTitle: "Cross Dev",
  twitterDescription: "Fullstack Developer",
  twitterImage:
    "https://pbs.twimg.com/profile_images/1421116782069403649/9TRcKV2t_400x400.jpg",
  twitterCard: "summary",
});

useHead({
  titleTemplate: "%s - Crunux",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "favicon.ico",
    },
  ],
});
</script>
<template>
  <div>
    <NavBar />
    <Home :links="links" />
    <slot />
    <Footer />
  </div>
</template>

<style scoped></style>
