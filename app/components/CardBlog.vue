<script setup lang="ts">
import type { Posts } from '~/types';
import { formatDate } from '~/shared/helpers/time-since';

defineProps<{
    post: Posts
}>();
</script>

<template>
    <NuxtLink :to="`/blog/${post.slug}`"
        class="group flex flex-col rounded-lg border border-border/50 p-5 transition-all hover:border-border/50 hover:bg-card">
        <div class="flex items-center gap-3 text-xs text-muted-foreground">
            <time :dateTime="post.createdAt">{{ formatDate(post.createdAt) }}</time>
            <span class="h-1 w-1 rounded-full bg-border" />
            <span>{{ post.readTime }}</span>
        </div>
        <h3 class="mt-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {{ post.tittle }}
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
            {{ post.excerpt }}
        </p>
        <div class="mt-3 flex items-center justify-between">
            <div class="flex flex-wrap gap-1.5">
                <span v-for="tag in post.tags" :key="tag"
                    class="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {{ tag }}
                </span>
            </div>
            <span
                class="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read
                <div class="h-3 w-3 i-lucide-arrow-right" />
            </span>
        </div>
    </NuxtLink>
</template>
