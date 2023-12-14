<script setup lang="ts">
import type { Project } from "@/types";
useHead({
  title: "Projects",
});

interface Projects {
  projects: Project[];
}

const query = gql`
  query getProjects {
    projects {
      github
      id
      image {
        url(
          transformation: {
            image: { resize: { height: 350, width: 500, fit: clip } }
          }
        )
      }
      title
      preview
      description
      techs {
        url(
          transformation: {
            image: { resize: { height: 200, width: 200, fit: clip } }
          }
        )
      }
    }
  }
`;

const { data, error, refresh } = await useAsyncQuery<Projects>(query);
watch(data, async () => {
  await refresh();
});
console.log(data.value);
</script>
<template>
  <Swiper
    :modules="[SwiperEffectCards]"
    :space-between="15"
    :slides-per-view="4"
    :scrollbar="{ draggable: true }"
    class="flex movil:flex-col table:flex-row justify-center items-center text-center mt-[20px] m-auto w-[90%] overflow-auto scrollbar:!h-1.5 scrollbar:!w-1.5 rounded-[20px] section-bg-color"
  >
    <SwiperSlide v-for="project in data.projects" :key="project.id">
      <CardProject :project="project" />
    </SwiperSlide>
  </Swiper>
</template>
<style scoped></style>
