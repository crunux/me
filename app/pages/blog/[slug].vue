<script setup lang="ts">
import { parseMarkdown } from "@nuxtjs/mdc/runtime";
import { timeSince } from "~/shared/helpers/time-since";
import type { Post } from "~~/app/types";

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
      excerpt
      readTime
      tags
      image {
        url(transformation: { document: { output: { format: png } } })
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

if (data.value?.post === null) {
  throw createError({
    statusCode: 404,
    message: "Page not found",
    fatal: true,
  });
}

if (error.value) {
  router.push({ name: "blog" });
}

useHead({
  title: data.value?.post.tittle,
  meta: [
    {
      name: "description",
      content: data.value?.post.excerpt,
    },
    {
      name: "og:title",
      content: `Crunux - ${data.value?.post.tittle}`,
    },
    {
      name: "og:description",
      content: data.value?.post.excerpt,
    },
    {
      name: "og:image",
      content: data.value?.post.image?.url,
    },
  ],
});
// useSeoMeta({
//   title: data.value?.post.tittle,
//   ogTitle: `Crunux - ${data.value?.post.tittle}`,
//   description: data.value?.post.slug,
//   ogDescription: data.value?.post.slug,
//   ogImage: data.value?.post.image,
// });

const { data: ast } = await useAsyncData("markdown", () =>
  parseMarkdown(data.value?.post.content ?? ""),
);

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div class="max-w-[calc(100vw-2rem)] ml-0 overflow-x-hidden">
    <NuxtLink href="/blog"
      class="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
      <Icon name="mdi:arrow-left" class="h-3.5 w-3.5" />
      Back to blog
    </NuxtLink>

    <article>
      <header class="mb-8">
        <div class="mx-auto max-w-200 mb-2 pt-10 table:pt-18">
          <img class="rounded-[20px]" :src="data?.post.image.url" :alt="data?.post.tittle" />
        </div>
        <!-- <h1 class="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-pretty">
          {{ ast?.data?.title }}
        </h1> -->
        <div class="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
          <time>ago {{ timeSince(data?.post.createdAt as string) }}</time>
          <span class="h-1 w-1 rounded-full bg-border" />
          <span>{{ data?.post.readTime }}</span>
        </div>
      </header>

      <div class="prose prose-invert w-full">
        <p class="leading-relaxed text-muted-foreground">
          {{ data?.post.excerpt }}
        </p>
        <div class="mt-8 rounded-lg px-2">
          <MDCRenderer v-if="ast"
            class="prose mt-10 laptop:w-[calc(100vw-20rem)] mx-auto max-w-none overflow-hidden laptop:prose-xl prose-a:text-sky-500 prose-a:no-underline prose-pre:overflow-auto movil:text-xs table:text-lg laptop:text-xl text-start font-nunito text-[#2d2e2e] dark:text-[#d9d9d9]"
            :body="ast.body" :data="ast.data" />
        </div>
      </div>
    </article>
  </div>
</template>
<style scoped>
pre {
  overflow-x: auto;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 3rem;
}
</style>
