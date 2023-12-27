<script setup lang="ts">
import type { Posts } from "~/types";
import { timeSince } from "~/shared/helpers/time-since";
interface Props {
  post: Posts;
}

const props = defineProps<Props>();
</script>
<template>
  <NuxtLink
    class="cursor-pointer m-5 laptop:w-[60%] movil:w-[90%] rounded-[20px] bg-[#c5c5c5] dark:bg-[#2d2e2e]"
    :to="`/blog/${props.post.slug}`"
    :name="`blog-${props.post.id}`"
  >
    <div class="flex flex-row justify-between items-center w-[80%]">
      <div class="w-auto p-1 m-1">
        <img
          class="laptop:w-60 movil:w-40 rounded-[20px]"
          :src="props.post.image.url"
          :alt="props.post.tittle"
        />
      </div>
      <div flex="~ col 1" class="p-2 text-[#2d2e2e] dark:text-[#d9d9d9]">
        <h1
          class="font-ubuntu laptop:text-[30px] movil:text-[14px] table:text-[18px] font-bold"
        >
          {{ props.post.tittle }}
        </h1>
        <span class="opacity-50 movil:text-xs table:text-sm"
          >{{ timeSince(props.post.createdAt) }} ago</span
        >
      </div>
    </div>
  </NuxtLink>
</template>
