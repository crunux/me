<script setup lang="ts">
  import type { Posts } from '~/types';

  type Props = {
    posts: Posts[];
  };

  defineProps<Props>();
</script>

<template>
  <div v-if="posts" class="flex flex-col gap-2">
    <CardBlog v-for="post in posts" :key="post.slug" :post="post" />
  </div>
</template>