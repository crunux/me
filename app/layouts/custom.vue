<script setup lang="ts">
	import type { Route } from '~/types';


	useHead({
		titleTemplate: '%s - Crunux',
		htmlAttrs: { lang: 'en' },
		link: [{ rel: 'icon', type: 'image/ico', href: '/favicon.ico' }],
	});


</script>
<template>
	<NavBar />
	<main class="mx-auto min-h-[calc(100vh-8rem)] max-w-5xl px-6 pt-28 pb-16">
		<slot />
	</main>
	<Footer />
</template>
<style scoped></style>
