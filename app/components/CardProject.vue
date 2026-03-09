<script setup lang="ts">
  import type { Project } from '~~/app/types';

  interface Props {
    project: Project;
  }

  defineProps<Props>();

</script>
<template>
  <article
    class="group flex flex-col rounded-lg border border-border/50 bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
    <h3 class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
      {{ project.title }}
    </h3>
    <p class="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
      {{ project.description }}
    </p>
    <div class="w-full mt-4 flex flex-wrap gap-1.5">
      <span v-for="tag in project.tags" :key="tag"
        class="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
        {{ tag }}
      </span>
    </div>
    <div class="mt-4 flex items-center gap-3">
      <a v-if="project.github" :href="`https://github.com/crunux/${project.github}`" target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary">
        <Icon name="lucide:github" class="h-3.5 w-3.5" />
        Code
      </a>
      <a v-if="project.preview" :href="project.preview" target="_blank" rel="noopener noreferrer"
        class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary">
        <Icon name="lucide:external-link" class="h-3.5 w-3.5" />
        preview
      </a>
    </div>
  </article>
</template>
