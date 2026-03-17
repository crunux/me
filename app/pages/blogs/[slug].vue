<script setup lang="ts">
	import { parseMarkdown } from '@nuxtjs/mdc/runtime';
	import { timeSince } from '~/shared/helpers/time-since';
	import type { Post } from '~/types';


	type Data = {
		post: Post;
	};

	const route = useRoute();
	const router = useRouter();
	const { locale } = useI18n();
	const slug = route.params.slug;



	const query = gql`
			query getPost($locale: [Locale!]!, $slug: String!) {
				post(locales: $locale, where: { slug: $slug }) {
					id
					createdAt
					content
					title
					excerpt
					readTime
					tags
					image {
						url(transformation: { document: { output: { format: png } } })
					}
					createdBy {
						name
						picture
						id
					}
				}
			}
		`;

	const { data, error } = await useAsyncQuery<Data>(query, {
		locale: [locale.value],
		slug: slug,
	});

	if (data.value?.post === null) {
		throw createError({
			statusCode: 404,
			message: 'Page not found',
			fatal: true,
		});
	}

	if (error.value) {
		router.push({ name: 'blogs' });
	}

	useSeoMeta({
		title: data.value?.post.title,
		ogTitle: `Crunux - ${data.value?.post.title}`,
		description: data.value?.post.slug,
		ogDescription: data.value?.post.slug,
		ogImage: data.value?.post.image,
	});

	const { data: ast } = await useAsyncData('markdown', () =>
		parseMarkdown(data.value?.post.content ?? ''),
	);

	definePageMeta({
		layout: 'custom',
	});
</script>
<template>
	<div class="max-w-[calc(100vw-2rem)] ml-0 overflow-x-hidden">
		<NuxtLink href="/blogs"
			class="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
			<Icon name="mdi:arrow-left" class="h-3.5 w-3.5" />
			Back to blog
		</NuxtLink>

		<article>
			<header class="mb-8">
				<h1 class="text-5xl font-nunito">{{ data?.post.title }}</h1>
				<div class="mt-4 flex items-center gap-3 text-sm text-muted-foreground border-y p-2">
					<time>ago {{ timeSince(data?.post.createdAt as string) }}</time>
					<span class="h-1 w-1 rounded-full bg-border" />
					<span>{{ data?.post.readTime }}</span>
				</div>
				<div class="mx-auto max-w-200 mb-2 pt-10 table:pt-18">
					<img 
						class="rounded-md" 
						:src="data?.post.image.url" 
						:alt="data?.post.title" 
					/>
				</div>
				<!-- <h1 class="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-pretty">
          {{ ast?.data?.title }}
        </h1> -->
			</header>

			<div class="prose prose-invert w-full">
				<p class="leading-relaxed text-muted-foreground">
					{{ data?.post.excerpt }}
				</p>
				<div class="mt-8 rounded-lg px-2">
					<MDCRenderer v-if="ast"
						class="prose mt-10 laptop:w-[calc(100vw-20rem)] mx-auto max-w-none overflow-hidden laptop:prose-xl prose-a:text-sky-500 prose-a:no-underline prose-pre:overflow-auto movil:text-xs table:text-lg laptop:text-xl text-start font-nunito text-[#2d2e2e] dark:text-[#d9d9d9]"
						:body="ast.body" :data="ast.data" />
				</div>
			</div>
		</article>
	</div>
</template>
<style scoped>
pre {
	overflow-x: auto;
	border-radius: 6px;
	padding: 1rem;
	margin-bottom: 3rem;
}
</style>
