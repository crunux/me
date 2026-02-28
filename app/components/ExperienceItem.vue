<script setup lang="ts">
	defineProps<{
		period: string
		title: string
		company: string
		description: string
		tags: string[]
	}>();
</script>
<template>
    <div class="group rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/30">
        <p class="text-xs font-medium text-muted-foreground">{{ period }}</p>
        <h3 class="mt-1 font-semibold text-foreground">
            {{ title }}
            <span class="text-primary">. {{ company }}</span>
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{{ description }}</p>
        <div class="mt-3 flex flex-wrap gap-1.5">
            <span
v-for="tag in tags" :key="tag"
                class="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {{ tag }}
            </span>
        </div>
    </div>
</template>