<script setup lang="ts">
import type { Route } from "~~/app/types";

const links = ref<Route[]>([
  { name: "Home", page: "/" },
  { name: "Projects", page: "/projects" },
  { name: "Blog", page: "/blog" },
]);

useSeoMeta({
  description: "Portfolio of Joan Cruz",
  ogTitle: "Joan Cruz - Crunux",
  ogDescription: "Joan Cruz Developer, manejando diferentes tecnologias, aplicando codigo de calidad.",
  ogImage: "https://pbs.twimg.com/profile_images/1421116782069403649/9TRcKV2t_400x400.jpg",
  ogUrl: "crunux.me",
  twitterTitle: "Joan Cruz - Crunux",
  twitterDescription: "Frontend Developer",
  twitterImage: "https://pbs.twimg.com/profile_images/1421116782069403649/9TRcKV2t_400x400.jpg",
  twitterCard: "summary",
});

useHead({
  titleTemplate: "%s - Crunux",
  htmlAttrs: { lang: "en" },
  link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }],
});


</script>
<template>
  <NavBar />
  <main>
    <slot />
  </main>
  <Footer />
</template>
