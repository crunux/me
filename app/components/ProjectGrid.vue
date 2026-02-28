<script setup lang="ts">
  import type { Project } from '~/types';
  const { locale } = useI18n();

  const query = gql`
        query getProjects ($locale: [Locale!]!) {
          projects(locales: $locale, orderBy: publishedAt_DESC){
            id
            title
            github
            preview
            description
            tags
          }
        }
      `;


  const { data, error, refresh } = await useAsyncQuery<{ projects: Project[] }>(query, {
    locale: [locale.value],
  });

</script>
<template>
  <div v-if="data?.projects" class="grid gap-4 md:grid-cols-2 fade-in">
    <CardProject v-for="(project, indx) in data?.projects" :key="indx" :project="project" />
  </div>
  <div v-else class="text-center py-20 fade-in">
    <div class="i-carbon-box text-6xl text-primary opacity-30 mx-auto mb-4" />
    <p class="text-primary font-nunito opacity-50">No projects available yet.</p>
  </div>
</template>