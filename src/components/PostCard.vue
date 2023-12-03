<script setup lang="ts">
import type { Posts } from "~/types";
interface Props {
  post: Posts;
}

const props = defineProps<Props>();
</script>
<template>
  <NuxtLink class="cursor-pointer" :to="`/blog/${props.post.slug}`">
    <div
      class="flex flex-row justify-betweet items-center p-5 m-5 w-[60%] h-[250px] rounded-[20px] bg-[#c5c5c5] dark:bg-[#2d2e2e]"
    >
      <div>
        <img
          class="rounded-[20px] h-60"
          :src="props.post.image.url"
          :alt="props.post.tittle"
        />
      </div>
      <div flex="~ col" class="justify-betweet items-center">
        <h1>{{ props.post.tittle }}</h1>
        <span class="text">{{ props.post.createdAt }}</span>
      </div>
    </div>
  </NuxtLink>
</template>
<style scoped></style>
