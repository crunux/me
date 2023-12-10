<script setup lang="ts">
import type { LinkSocial } from "~/types";
interface Props {
  links: LinkSocial[];
}

const { links } = defineProps<Props>();
</script>
<template>
  <ul class="flex justify-center items-center">
    <li
      v-for="social of links"
      :key="social.name"
      class="laptop:p-[8px] movil:p-[2px] text-center"
    >
      <a :href="social.link" target="_blank">
        <Icon
          class="dark:text-[#d9d9d9] text-[#2d2e2e] laptop:text-[32px] movil:text-[28px]"
          :name="social.icon"
        />
      </a>
    </li>
  </ul>
</template>
<style scoped></style>
