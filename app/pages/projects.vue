<script setup lang="ts">
import { useScrollAnimation } from "~~/app/composables/useScrollAnimation";

useSeoMeta({ title: "Projects", description: "A collection of projects I've worked on, from web applications to tools and experiments." });
useScrollAnimation();

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div class="py-10">
    <!-- Page Header -->
    <div class="mb-12">
      <p class="font-mono text-sm text-primary">// projects</p>
      <h1 class="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        My Work
      </h1>
      <p class="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
        A selection of projects I have built or contributed to. From APIs and backend services to full-stack
        applications and mobile apps.
      </p>
    </div>
    <ProjectGrid />

    <!-- Projects Grid -->
    <!-- <div class="w-[90%] max-w-6xl mx-auto">
      <div class="grid laptop:grid-cols-3 table:grid-cols-2 movil:grid-cols-1 gap-8 stagger-children">
        <div v-for="project in data?.projects" :key="project.id"
          class="card-hover rounded-2xl overflow-hidden card-bg-color flex flex-col"> -->
    <!-- Project Image -->
    <!-- <div class="overflow-hidden relative group">
            <img class="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
              :src="project.image.url" :alt="project.title" />
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
              <a v-if="project.github" :href="`https://github.com/crunux/${project.github}`" target="_blank"
                class="px-4 py-2 bg-white/90 text-[#2d2e2e] font-ubuntu font-semibold rounded-lg text-sm transition-transform duration-200 hover:scale-105">
                Github
              </a>
              <a v-if="project.preview" :href="project.preview" target="_blank"
                class="px-4 py-2 bg-[#40CEF7]/90 text-white font-ubuntu font-semibold rounded-lg text-sm transition-transform duration-200 hover:scale-105">
                Preview
              </a>
            </div>
          </div> -->

    <!-- Project Info -->
    <!-- <div class="p-5 flex flex-col flex-1"> -->
    <!-- <h3 class="font-ubuntu font-semibold text-xl text-color mb-3">
              {{ project.title }}
            </h3>
            <div class="flex-1">
              <MarkdownStringRender class="text-sm font-nunito text-color opacity-80 line-clamp-3"
                :markdownString="project.description" :tag="project.id" />
            </div> -->
    <!-- Tech Stack -->
    <!-- <div class="flex gap-2 mt-4 pt-4 border-t borde-color flex-wrap">
              <img class="w-8 h-8 object-contain rounded transition-transform duration-200 hover:scale-110"
                v-for="(tech, index) in project.techs" :key="index" :src="tech.url" />
            </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
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
