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
console.log(data.value);
</script>
<template>
  <section
    class="flex movil:flex-col table:flex-row justify-start items-center text-center mt-[20px] m-auto w-[90%] h-[500px] rounded-[20px] bg-[#c5c5c5] dark:bg-[#2d2e2e]"
  >
    <CardProject
      v-for="project in data.projects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>
<style scoped></style>
