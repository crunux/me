<script setup lang="ts">
import type { Blog } from "~/types";
interface Props {
  blog: Blog;
}

const {blog} = defineProps<Props>();

console.log(blog);
</script>
<template>
  <div class="">
    <img :src="blog.image.url" :alt="blog.tittle" />
    <h1>{{ blog.tittle }}</h1>
    <p>{{ blog.content }}</p>
    <span>{{ blog.createdAt }}</span>
    <RouterLink :to="`/blog/${blog.slug}`"></RouterLink>
  </div>
</template>
<style scoped></style>
