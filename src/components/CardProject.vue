<script setup lang="ts">
import type { Project } from "~/types";
interface Props {
  project: Project;
}
defineProps<Props>();
</script>
<template>
  <div
    class="p-2 m-2 w-75 min-h-55 hover:max-h-150 flex flex-col justify-between hover:z-5 items-center rounded-[20px] card-bg-color group opacity-50 hover:opacity-100"
  >
    <header w-full flex flex-col justify-center items-center>
      <h2 class="font-ubuntu font-semibold m-1 p-1 text-md text-color">
        {{ project.title }}
      </h2>
      <img
        class="rounded-[10px] object-cover"
        :src="project.image.url"
        :placeholder="project.title"
      />
    </header>
    <div class="content" p-2 m-2>
      <MarkdownStringRender
        class="text-[15px] text-center font-nunito hidden group-hover:block text-color"
        :markdownString="project.description"
        :tag="project.id"
      />
    </div>
    <footer w-full>
      <p
        class="w-full group-hover:flex hidden justify-between items-center p-1 text-color"
      >
        <a
          :href="`https://github.com/crunux/${project.github}`"
          target="_blank"
          >Github</a
        >
        <a
          :href="project.preview"
          target="_blank"
          >Preview</a
        >
      </p>
      <div
        class="group-hover:flex hidden p-1 justify-center items-center bottom-0 border rounded-xl w-full borde-color"
      >
        <img
          class="size-10 object-contain rounded-md"
          v-for="(tech, index) in project.techs"
          :key="index"
          :src="tech.url"
        />
      </div>
    </footer>
  </div>
</template>
