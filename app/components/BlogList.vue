<script setup lang="ts">
import { formatDate, timeSince } from '~/shared/helpers/time-since';
import type { Posts } from '~/types';

type Data = {
    posts: Posts[];
};


const query = gql`
  query getPosts {
    posts {
      createdAt
      id
      slug
      tittle
      excerpt
      tags
      readTime
    }
  }
`;

const { data, error, refresh } = await useAsyncQuery<Data>(query);

</script>

<template>
    <div v-if="data?.posts" class="flex flex-col gap-2">
        <CardBlog v-for="post in data?.posts" :key="post.slug" :post="post" />
    </div>
    <div v-else class="text-center py-20 fade-in">
        <div class="i-carbon-document text-6xl text-color opacity-30 mx-auto mb-4"></div>
        <p class="text-color font-nunito opacity-50">No posts available yet.</p>
    </div>
</template>