<script setup lang="ts">
import { parseMarkdown } from '@nuxtjs/mdc/runtime'
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
    router.push({ name: "blog" })
  }

  useSeoMeta({
    title: data.value?.post.tittle,
    ogTitle: `Crunux - ${data.value?.post.tittle}`,
    description: data.value?.post.slug,
    ogDescription: data.value?.post.slug,
    ogImage: data.value?.post.image,
  });

console.log(data.value?.post.content)
const { data: ast } = await useAsyncData('markdown', () => parseMarkdown(data.value?.post.content ?? ''))
</script>
<template>
  <section
    class="mt-20 px-4 pb-20 table:px-10 laptop:mx-auto laptop:max-w-[calc(100vw-5rem)] laptop:max-w-340 laptop:pb-28">
    <div class="mx-auto max-w-200 pt-10 table:pt-18">
      <img class="rounded-[20px]" :src="data?.post.image.url" :alt="data?.post.tittle" />
    </div>
    <h1 class="font-ubuntu font-semibold  m-2 p-4 text-center text-4xl text-[#2d2e2e] dark:text-[#d9d9d9]">
      {{ data?.post.tittle }}
    </h1>
    <!-- <MarkdownStringRender
        class="laptop:text-xl movil:text-sm table:text-lg text-start font-nunito w-[60%] mt-3 p-4 text-[#2d2e2e] dark:text-[#d9d9d9]"
        :markdownString="data?.post.content" :tag="data?.post.id" /> -->
    <MDCRenderer v-if="ast"
      class="prose mt-10 w-full max-w-none overflow-hidden laptop:prose-xl prose-a:text-sky-500 prose-a:no-underline prose-pre:overflow-auto movil:text-xs table:text-lg laptop:text-xl text-start font-nunito text-[#2d2e2e] dark:text-[#d9d9d9]"
      :body="ast.body" :data="ast.data" />
    <div class="bottom-5 right-50 flex flex-col m-2 text-center text-[#2d2e2e] dark:text-[#d9d9d9]">
      <h3 class="font-nunito font-semibold">Created By</h3>
      <CreatedBy :createdBy="data?.post.createdBy" />
    </div>
  </section>
</template>
<style scoped>
pre {
  overflow-x: auto;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 3rem;
}
</style>
