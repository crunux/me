<script setup lang="ts">
	import type { Posts } from '~/types';

	const { locale, t } = useI18n();

	const postsQuery = gql`
			query GetPosts($locale: [Locale!]!) {
					posts(locales: $locale, orderBy: publishedAt_DESC, first: 1) {
							id
							title
							publishedAt
							readTime
							excerpt
							slug
							tags
					}
			}
	`;
	
	const { data, error } = await useAsyncQuery<{ posts: Posts[] }>(postsQuery, {
  	locale: [locale.value],
	});

</script>
<template>
	<section class="mx-auto w-full max-w-5xl px-6 py-24">
		<div class="grid gap-12">
			<div class="fade-in">
				<h2 class="text-sm font-semibold tracking-widest uppercase text-primary">{{ t('blogs.title') }}</h2>
				<p class="mt-4 leading-relaxed text-muted-foreground">{{ t('blogs.description') }}</p>
			</div>
			<div v-if="data?.posts" class="fade-in-left">
				<CardBlog v-for="post in data.posts" :key="post.id" :post="post" />
			</div>
			<div class="text-center mt-10 fade-in">
				<NuxtLink to="/blogs"
					class="rounded-md border border-primary bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
					{{ locale === 'es' ? "Ver todos los posts" : "View All Posts" }}
				</NuxtLink>
			</div>
		</div>
	</section>
</template>