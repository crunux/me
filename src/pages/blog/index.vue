<script setup lang="ts">
import type { Posts } from "~/types";
type Data = {
  posts: Posts[];
};

useHead({
  title: "Blogs",
});
const query = gql`
  query getPosts {
    posts {
      createdAt
      id
      slug
      tittle
      image {
        url(
          transformation: {
            document: { output: { format: svg } }
            image: { resize: { width: 350, height: 300, fit: crop } }
          }
        )
      }
    }
  }
`;

const { clients, getToken, onLogin, onLogout } = useApollo();
console.log(clients, getToken);

const { data, error, refresh } = await useAsyncQuery<Data>(query);
</script>
<template>
  <section class="w-[90%]">
    <div
      class="w-screen flex flex-col justify-center items-center"
      v-for="post in data.posts"
      :key="post.id"
    >
      <PostCard :post="post" />
    </div>
  </section>
</template>
<style scoped></style>
