<script setup lang="ts">
const query = gql`
query GetPosts {
  posts {
    createdAt
    id
    slug
    tittle
    content
    image {
      url(
        transformation: {document: {output: {format: webp}}, image: {resize: {fit: scale}}}
      )
    }
  }
}`
const { data, error, refresh } = useAsyncQuery(query)
</script>
<template>
  <div class="app">{{data}}</div>
</template>
<style scoped></style>
