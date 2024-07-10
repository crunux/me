<script setup lang="ts">
// const { hygraphToken } = useRuntimeConfig()

// const cookie = useCookie('cross-hygraph')

console.log(window.location.hostname);

useHead({
  titleTemplate: (title) => title ? `${title} | Crunux` : 'Crunux',
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/ico', href: "/favicon.ico" },
    { rel: 'icon', type: 'image/png', sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: 'icon', type: 'image/png', sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
  ],
  meta: [
    {
      name: 'description',
      content: 'Hello, I`m Joan Cruz, autodidact learn, student and frontend developer.'
    },
    {
      name: 'msapplication-TileColor',
      content: '#2b5797'
    },
    {
      name: 'theme-color',
      content: '#ffffff'
    },
    {
      name: 'og:title',
      content: 'Pomodrag'
    },
    {
      name: 'og:site_name',
      content: 'Pomodrag'
    },
    {
      name: 'og:image:secure_url',
      content: 'https://crunux.me/og-cover.png'
    },
    {
      name: 'og:description',
      content: 'Hello, I`m Joan Cruz, autodidact learn, student and frontend developer.'
    },
    {
      name: 'og:image',
      content: 'https://crunux.me/og-cover.png'
    },
    {
      name: 'og:url',
      content: 'https://crunux.me'
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:site',
      content: '@crunux0'
    },
    {
      name: 'twitter:title',
      content: 'Pomodrag'
    },
    {
      name: 'twitter:description',
      content: 'Hello, I`m Joan Cruz, autodidact learn, student and frontend developer.'
    },
    {
      name: 'twitter:image',
      content: 'https://crunux.me/og-cover.png'
    },
    {
      name: 'twitter:image:secure_url',
      content: 'https://crunux.me/og-cover.png'
    }
  ],
})

// <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
// <link rel="manifest" href="/site.webmanifest">
// <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
// <meta name="msapplication-TileColor" content="#ffc40d">
// <meta name="theme-color" content="#ffffff">
const isBuilding = ref(true);
// cookie.value = cookie.value || hygraphToken
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UnderConstruction v-model="isBuilding" />
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
