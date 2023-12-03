<script setup lang="ts">
import type { Blog } from "~/types";
type Data = {
  posts: Blog[];
};
const query = gql`
  query getPosts {
    posts {
      createdAt
      id
      slug
      tittle
      content
      image {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 300, height: 300 } }
          }
        )
      }
    }
  }
`;

const { data, error, refresh } = await useAsyncQuery<Data>(query);

console.log(data);
</script>
<template>
  <section class="flex flex-row">
    <BlogCard v-for="blog in data.posts" :key="blog.id" :blog="blog" />
  </section>
</template>
<style scoped></style>
