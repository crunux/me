<script setup lang="ts">
  import type { Post } from "~/types";
  definePageMeta({
    layout: "blog",
  });
  type Data = {
    post: Post;
  };
  const route = useRoute();
  const router = useRouter();
  const slug = route.params.slug;

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

  const { data, error } = await useAsyncQuery<Data>(query, {
    slug: slug,
  });

  if (error.value) {
    console.log(error.value);
    router.push({ name: "blog" })
  }

  useSeoMeta({
    title: data.value?.post.tittle,
    ogTitle: `Crunux - ${data.value?.post.tittle}`,
    description: data.value?.post.slug,
    ogDescription: data.value?.post.slug,
    ogImage: data.value?.post.image,
  });
</script>
<template>
  <section class="snap-center mt-[65px] w-screen flex flex-col justify-center items-center">
    <div class="relative grid place-items-center h-auto rounded-[20px] w-[90%] bg-[#c5c5c5] dark:bg-[#2d2e2e]">
      <div class="grid h-auto place-items-center m-4">
        <img class="rounded-[20px]" :src="data?.post.image.url" :alt="data?.post.tittle" />
      </div>
      <h1 class="font-ubuntu font-semibold m-3 p-3 text-center text-4xl text-[#2d2e2e] dark:text-[#d9d9d9]">
        {{ data?.post.tittle }}
      </h1>
      <MarkdownStringRender
        class="laptop:text-xl movil:text-sm table:text-lg text-start font-nunito w-[60%] mt-3 p-4 text-[#2d2e2e] dark:text-[#d9d9d9]"
        :markdownString="data?.post.content" :tag="data?.post.id" />
      <div class="bottom-5 right-50 flex flex-col m-2 text-center text-[#2d2e2e] dark:text-[#d9d9d9]">
        <h3 class="font-nunito font-semibold">Created By</h3>
        <CreatedBy :createdBy="data?.post.createdBy" />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
