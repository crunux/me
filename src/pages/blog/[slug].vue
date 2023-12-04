<script setup lang="ts">
import type { Post } from "~/types";
type Data = {
  post: Post;
};
const route = useRoute();
const slug = route.params.slug;
const mdcVars = ref({ name: "Maxime" });
useHead({
  title: "Blog",
});

definePageMeta({
  layout: "blog",
});

const query = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      createdAt
      content
      tittle
      image {
        url(
          transformation: {
            document: { output: { format: svg } }
            image: { resize: { height: 350, width: 700, fit: scale } }
          }
        )
      }
      createdBy {
        name
        picture
        id
      }
    }
  }
`;

const { data } = await useAsyncQuery<Data>(query, {
  slug: slug,
});
</script>
<template>
  <section
    class="snap-center mt-[65px] w-[100vw] flex flex-col justify-center items-center"
  >
    <div
      class="grid place-items-center h-auto rounded-[20px] w-[90%] bg-[#c5c5c5] dark:bg-[#2d2e2e]"
    >
      <h1
        class="font-ubuntu font-semibold m-3 p-3 text-4xl text-[#2d2e2e] dark:text-[#d9d9d9]"
      >
        {{ data.post.tittle }}
      </h1>
      <div class="grid h-auto place-items-center">
        <img class="rounded-[20px]" :src="data.post.image.url" alt="" />
      </div>

      <div>
        <MarkdownStringRender
          class="text-lg mt-3 text-[#2d2e2e] dark:text-[#d9d9d9]"
          :markdownString="data.post.content"
          :tag="data.post.id"
        />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
