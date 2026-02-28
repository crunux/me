<script setup lang="ts">

  useSeoMeta({ title: 'Projects', description: 'A collection of projects I`ve worked on, from web applications to tools and experiments.' });
  useScrollAnimation();

  definePageMeta({
    layout: 'custom',
  });
</script>
<template>
  <div class='py-10'>
    <!-- Page Header -->
    <div class='mb-12'>
      <p class='font-mono text-sm text-primary'>// projects</p>
      <h1 class='mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl'>
        My Work
      </h1>
      <p class='mt-4 max-w-lg text-base leading-relaxed text-muted-foreground'>
        A selection of projects I have built or contributed to. From frontend apps and backend services to full-stack
        applications and mobile apps.
      </p>
    </div>
    <!-- Projects Grid -->
    <ProjectGrid />
  </div>
</template>
<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
