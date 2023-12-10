<script setup lang="ts">
import type { Posts } from "~/types";
import { timeSince } from '~/shared/helpers/time-since'
interface Props {
  post: Posts;
}

const props = defineProps<Props>();
</script>
<template>
  <NuxtLink
    class="cursor-pointer p-2 m-5 w-[80%] flex justify-center items-center rounded-[20px] bg-[#c5c5c5] dark:bg-[#2d2e2e]"
    :to="`/blog/${props.post.slug}`"
  >
    <div class="flex flex-row justify-center items-center w-[80%] h-[250px]">
      <div class="w-auto p-2 m-2">
        <img
          class="w-80 rounded-[20px]"
          :src="props.post.image.url"
          :alt="props.post.tittle"
        />
      </div>
      <div
        flex="~ col 1"
        class="items-center text-[#2d2e2e] dark:text-[#d9d9d9]"
      >
        <h1 class="font-ubuntu text-[30px] font-bold">
          {{ props.post.tittle }}
        </h1>
        <span class="opacity-50">{{ timeSince(props.post.createdAt) }} ago</span>
      </div>
    </div>
  </NuxtLink>
</template>
<style scoped></style>
