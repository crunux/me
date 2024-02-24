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
  description: "Porfolio of Joan Cruz",
  ogTitle: "Joan Cruz - Crunux",
  ogDescription: "CV Joan Cruz Fullstack Developer",
  ogImage:
    "https://pbs.twimg.com/profile_images/1421116782069403649/9TRcKV2t_400x400.jpg",
  ogUrl: "crunux.me",
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
      href: "../assets/img/ico.svg",
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
