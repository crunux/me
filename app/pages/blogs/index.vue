<script setup lang="ts">
  import type { Posts } from '~/types';


  useSeoMeta({
    title: 'Blog',
    description: 'Thoughts & Writing',
    ogTitle: 'Blog',
    ogDescription: 'Thoughts & Writing',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image'
  });
  
  useScrollAnimation();

  const { locale } = useI18n();

  const postsQuery = gql`
			query GetPosts($locale: [Locale!]!) {
					posts(locales: $locale, orderBy: publishedAt_DESC) {
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
	
	const { data, error, loading } = await useAsyncQuery<{ posts: Posts[] }>(postsQuery, {
  	locale: [locale.value],
	});


  definePageMeta({
    layout: 'custom',
  });
</script>
<template>
  <div class="py-10">

    <!-- Loading state -->
    <!-- Page Header -->
    <div class="mb-12">
      <p class="font-mono text-sm text-primary">// blog</p>
      <h1 class="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        Thoughts & Writing
      </h1>
      <p class="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
        Notes on development, tools, configuration and things I learn along the way.
      </p>
    </div>

    <div v-if="loading" class="flex justify-center py-20">
      <Icon name="i-heroicons-arrow-path" class="animate-spin text-primary text-3xl" />
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="text-center py-20 fade-in">
      <div class="i-carbon-document text-6xl text-primary opacity-30 mx-auto mb-4" />
      <p class="text-primary font-nunito opacity-50">No posts available yet.</p>
    </div>
    <!-- Blog Posts Grid -->
    <BlogList v-else :posts="data?.posts || []" />
    <!-- Empty state -->
  </div>
</template>
