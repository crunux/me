<script setup lang="ts">
// const { hygraphToken } = useRuntimeConfig()

// const cookie = useCookie('cross-hygraph')


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
			{ name: 'description', content: 'Hello, I`m Joan Cruz, autodidact learner, student and frontend developer.' },
			{ name: 'msapplication-TileColor', content: '#2b5797' },
			{ name: 'theme-color', content: '#ffffff' },
			{ name: 'apple-mobile-web-app-title', content: 'crunux' },
			{ name: 'og:title', content: 'Joan Cruz - Crunux' },
			{ name: 'og:site_name', content: 'Crunux' },
			{ name: 'og:image:secure_url', content: 'https://crunux.me/img/og-cover.png' },
			{ name: 'og:description', content: 'Hello, I`m Joan Cruz, autodidact learner, student and frontend developer.' },
			{ name: 'og:image', content: 'https://crunux.me/img/og-cover.png' },
			{ name: 'og:url', content: 'https://crunux.me' },
			{ name: 'og:type', content: 'website' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:site', content: '@crunux0' },
			{ name: 'twitter:title', content: 'Joan Cruz - Crunux' },
			{ name: 'twitter:description', content: 'Hello, I`m Joan Cruz, autodidact learner, student and frontend developer.' },
			{ name: 'twitter:image', content: 'https://crunux.me/img/og-cover.png' },
			{ name: 'twitter:image:secure_url', content: 'https://crunux.me/img/og-cover.png' },
		],
	});


	const isBuilding = ref(false);
	// cookie.value = cookie.value || hygraphToken
	const greet = ref(
		'Hello, I`m Joan Cruz, autodidact learn, student and frontend developer.',
	);
</script>
<template>
	<div class="flex flex-col min-h-screen">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<UnderConstruction v-model="isBuilding" />
	</div>
</template>