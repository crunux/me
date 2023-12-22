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
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1399: {
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
    class="py-2 max-w-[90%] rounded-[20px] section-bg-color"
    :modules="[SwiperPagination]"
    :breakpoints="perViews"
    :scrollbar="{
      draggable: true,
    }"
    :pagination="{ el: '.swiper-pagination', clickable: true }"
    :keyboard="{ enabled: true }"
    :grabCursor="true"
  >
    <SwiperSlide
      class="movil:px-3 table:px-3 flex justify-center items-center"
      v-for="project in data.projects"
      :key="project.id"
    >
      <CardProject :project="project" />
    </SwiperSlide>
    <div class="swiper-pagination"></div>
  </Swiper>
</template>
<style scoped>
.swiper-pagination {
  color: #08b4ea;
}
</style>
