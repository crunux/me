<script setup lang="ts">
import type { Route } from "~/types";

const {t} = useI18n()

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
  ogDescription: "Joan Cruz Developer, manejando diferentes tecnologia, aplicando condigo de calidad.",
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


const query = gql`
  query getHero {
  hero(locales: en, where: {id: "cm2iy2j2o052v07k2he41hrie"}) {
    about
    createdAt
    name
    occupation
    avatar {
      url(transformation: {image: {resize: {fit: clip, height: 400, width: 400}}})
    }
    id
  }
}
`

// const query = gql`
//   query getHeroes {
//     heroes {
//       id
//       about
//       createdAt
//       name
//       occupation
//       avatar {
//         url(transformation: {image: {resize: {fit: clip, height: 400, width: 400}}})
//       }
//     }
//   }
// `

const { data, error, refresh } = await useAsyncQuery<Projects>(query);
watch(data, async () => {
  await refresh();
});

provide('hero', {
  about: data.value.hero.about,
  home: data.value.hero
})

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
