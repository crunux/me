<script setup lang="ts">
import type { Project } from "@/types";
useHead({
  title: "Projects",
});

interface Projects {
  projects: Project[];
}

const perViews = reactive({
  375: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  779: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  1227: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1595: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1900: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
});

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
</script>
<template>
  <Swiper
    :breakpoints="perViews"
    :scrollbar="{
      draggable: true,
      enabled: true,
    }"
    :keyboard="{ enabled: true }"
    :grabCursor="true"
    class="flex scrollbar scrollbar-rounded scrollbar-track-color-[#dfdede] dark:scrollbar-track-color-[#4a4b4b] scrollbar-thumb-color-[#4a4b4b] dark:scrollbar-thumb-color-[#dfdede] overflow-auto m-auto justify-center items-center text-center mt-[20px] max-w-[90%] rounded-[20px] section-bg-color"
  >
    <SwiperSlide
      class="movil:px-3 table:px-3"
      v-for="project in data.projects"
      :key="project.id"
    >
      <CardProject :project="project" />
    </SwiperSlide>
  </Swiper>
</template>
<style scoped></style>
