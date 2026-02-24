<script setup lang="ts">
import type { Project } from '~/types';

const query = gql`
  query getProjects {
    projects {
      id
      image {
        url(
          transformation: {
            image: { resize: { height: 400, width: 500, fit: clip } }
          }
        )
      }
      title
      github
      preview
      description
      tags
    }
  }
`;

// const query = gql`
//   query getProjects {
//     projects {
//       github
//       id
//       image {
//         url(
//           transformation: {
//             image: { resize: { height: 400, width: 500, fit: clip } }
//           }
//         )
//       }
//       title
//       preview
//       description
//       tags
//       techs {
//         url(
//           transformation: {
//             image: { resize: { height: 200, width: 200, fit: clip } }
//           }
//         )
//       }
//     }
//   }
// `;

const { data, error, refresh } = await useAsyncQuery<{ projects: Project[] }>(query);
watch(data, async () => {
  await refresh();
});
</script>
<template>
  <div class="grid gap-4 md:grid-cols-2">
    <CardProject v-if="data?.projects" v-for="project in data?.projects" :key="project.title" :project="project" />
    <div v-else class="col-span-full text-center py-12">
      <p class="text-muted-foreground">No projects found</p>
    </div>
  </div>
</template>