<script setup lang="ts">

	useHead({
		titleTemplate: (title) => (title ? `${title} | Crunux` : 'Crunux'),
		htmlAttrs: {
			lang: 'en',
		},
		link: [
			{ rel: 'icon', type: 'image/ico', href: '/favicon.ico' },
			{ rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			{ rel: 'shortcut icon', href: '/favicon.ico' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
			{ rel: 'manifest', href: '/site.webmanifest' }
		],
		meta: [
			{ name: 'description', content: 'Fullstack developer passionate about clean architecture, engineering principles, and developer experience with a focus on building high-performance web applications, mobile applications, web pages, APIs, microservices, and scalable systems. I work across the stack but my heart lives in the client side.' },
			{ name: 'msapplication-TileColor', content: '#2b5797' },
			{ name: 'theme-color', content: '#ffffff' },
			{ name: 'apple-mobile-web-app-title', content: 'crunux' },
			{ name: 'og:title', content: 'Joan Cruz - crunux' },
			{ name: 'og:site_name', content: 'crunux' },
			{ name: 'og:image:secure_url', content: 'https://crunux.me/img/og-cover.png' },
			{ name: 'og:description', content: 'Fullstack developer passionate about clean architecture, engineering principles, and developer experience with a focus on building high-performance web applications, mobile applications, web pages, APIs, microservices, and scalable systems. I work across the stack but my heart lives in the client side.' },
			{ name: 'og:image', content: 'https://crunux.me/img/og-cover.png' },
			{ name: 'og:url', content: 'https://crunux.me' },
			{ name: 'og:type', content: 'website' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:site', content: '@crunux_' },
			{ name: 'twitter:title', content: 'crunux' },
			{ name: 'twitter:description', content: 'Fullstack developer passionate about clean architecture, engineering principles, and developer experience with a focus on building high-performance web applications, mobile applications, web pages, APIs, microservices, and scalable systems. I work across the stack but my heart lives in the client side.' },
			{ name: 'twitter:image', content: 'https://crunux.me/img/og-cover.png' },
			{ name: 'twitter:image:secure_url', content: 'https://crunux.me/img/og-cover.png' },
		],
	});


	const isBuilding = ref(false);

</script>
<template>
	<div class="flex flex-col min-h-screen">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<UnderConstruction v-model="isBuilding" />
	</div>
</template>