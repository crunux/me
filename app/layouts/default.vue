<script setup lang="ts">

	useSeoMeta({
		description: 'Portfolio of Joan Cruz',
		ogTitle: 'Joan Cruz',
		ogDescription: 'Fullstack developer passionate about clean architecture, engineering principles, and developer experience with a focus on building high-performance web applications, mobile applications, web pages, APIs, microservices, and scalable systems. I work across the stack but my heart lives in the client side.',
		ogImage: 'https://crunux.me/img/og-cover.png',
		ogUrl: 'crunux.me',
		twitterTitle: 'Joan Cruz - Crunux',
		twitterDescription: 'Fullstack developer passionate about clean architecture, engineering principles, and developer experience with a focus on building high-performance web applications, mobile applications, web pages, APIs, microservices, and scalable systems. I work across the stack but my heart lives in the client side.',
		twitterImage: 'https://crunux.me/img/og-cover.png',
		twitterCard: 'summary',
	});

	useHead({
		titleTemplate: '%s - Crunux',
		htmlAttrs: { lang: 'en' },
		link: [{ rel: 'icon', type: 'image/ico', href: '/favicon.ico' }],
	});


</script>
<template>
  <NavBar />
  <main>
    <slot />
  </main>
  <Footer />
</template>
