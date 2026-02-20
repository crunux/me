<script setup lang="ts">
import { useScrollAnimation } from "~~/app/composables/useScrollAnimation";
import { timeSince } from "~~/app/shared/helpers/time-since";
import type { Posts } from "~~/app/types";

type Data = {
  posts: Posts[];
};

useSeoMeta({ title: "Blog" });
useScrollAnimation();
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

const { data, error, refresh } = await useAsyncQuery<Data>(query);
</script>
<template>
   <div class="py-10">
    <!-- Page Header -->
    <div class="text-center mb-12 fade-in">
      <h1 class="text-color font-ubuntu font-bold laptop:text-5xl table:text-4xl movil:text-3xl">
        Blog
      </h1>
      <div class="section-divider mt-4"></div>
      <p class="text-color font-nunito mt-4 opacity-70 laptop:text-lg movil:text-base max-w-2xl mx-auto px-4">
        Thoughts, tutorials, and insights about web development and technology.
      </p>
    </div>

    <!-- Blog Posts Grid -->
    <div class="w-[90%] max-w-5xl mx-auto">
      <div class="flex flex-col gap-6 stagger-children">
        <NuxtLink
          v-for="post in data?.posts"
          :key="post.id"
          :to="`/blog/${post.slug}`"
          class="card-hover flex table:flex-row movil:flex-col items-center gap-6 p-5 rounded-2xl card-bg-color transition-all duration-300 group"
        >
          <div class="table:w-[200px] table:h-[140px] movil:w-full movil:h-[200px] overflow-hidden rounded-xl flex-shrink-0">
            <img
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              :src="post.image.url"
              :alt="post.tittle"
            />
          </div>
          <div class="flex-1 flex flex-col gap-2">
            <h2 class="font-ubuntu font-bold laptop:text-2xl table:text-xl movil:text-lg text-color group-hover:text-[#40CEF7] transition-colors duration-300">
              {{ post.tittle }}
            </h2>
            <span class="text-sm opacity-50 text-color font-nunito">
              {{ timeSince(post.createdAt) }} ago
            </span>
          </div>
          <div class="text-[#40CEF7] movil:hidden table:block transition-transform duration-300 group-hover:translate-x-2">
            <div class="i-carbon-arrow-right text-3xl"></div>
          </div>
        </NuxtLink>
      </div>

      <!-- Empty state -->
      <div v-if="!data?.posts?.length" class="text-center py-20 fade-in">
        <div class="i-carbon-document text-6xl text-color opacity-30 mx-auto mb-4"></div>
        <p class="text-color font-nunito opacity-50">No posts available yet.</p>
      </div>
    </div>
  </div>
</template>
