<script setup lang="ts">
import type { Route } from "~/types";
import type { LinkSocial } from "../types/index";
interface Props {
  activeRoute?: boolean;
  links?: Route[];
}

const { links, activeRoute } = defineProps<Props>();

const addSticky: Ref<string> = ref("");
const { y } = useWindowScroll();

watch(y, (newValue: number) => {
  addSticky.value = newValue >= 20 ? "sticky" : "";
});

const socialLinks: LinkSocial[] = [
  {
    name: "linkedin",
    link: "www.linkedin.com/in/joancruz0502",
    icon: "i-carbon-logo-linkedin",
  },
  {
    name: "github",
    link: "https://github.com/cr0s502",
    icon: "i-carbon-logo-github",
  },
  {
    name: "twitter",
    link: "https://twitter.com/cr0s502",
    icon: "i-carbon-logo-x",
  },
];
</script>
<template>
  <nav
    class="flex fixed w-screen h-[60px] top-0 left-0 z-[99] justify-between"
    :class="{
      sticky: addSticky,
    }"
  >
    <div class="top-[15px] laptop:left-[20px] m-[10px] pl-1">
      <NuxtLink
        class="text-4xl laptop:text-center font-ubuntu text-[#2d2e2e] dark:text-[#d9d9d9] font-semibold"
        to="/"
        ><span class="text-[#08B4EA]">Cru</span>nux</NuxtLink
      >
    </div>
    <div
      v-if="activeRoute"
      :class="activeRoute ? 'movil:flex laptop:hidden' : ''"
      class="justify-center items-center m-2"
    >
      <MenuToggle>
        <template #socialLinks>
          <SocialLink :links="socialLinks" />
        </template>
        <template #darkMode>
          <div
            class="laptop:w-[200px] table:w-[150px] flex movil:w-auto movil:m-2 h-auto justify-center items-center text-center gap-1"
          >
            <DarkSwitcher />
          </div>
        </template>
        <template #links>
          <NuxtLink
            class="cursor-pointer dark:text-[#d9d9d9] link font-ubuntu movil:text-center font-semibold text-[#2d2e2e] p-[10px] m-[2px]"
            v-for="link in links"
            :key="link.name"
            :to="link.page"
          >
            {{ link.name }}
          </NuxtLink>
        </template>
      </MenuToggle>
    </div>
    <div
      v-if="activeRoute"
      class="w-[450px] m-2 ml-8 movil:hidden laptop:flex flex-row laptop:items-start movil:items-center gap-[2px]"
    >
      <NuxtLink
        class="cursor-pointer dark:text-[#d9d9d9] link font-ubuntu movil:text-center font-semibold text-[#2d2e2e] p-[10px] m-[2px]"
        v-for="link in links"
        :key="link.name"
        :to="link.page"
        >{{ link.name }}</NuxtLink
      >
    </div>
    <div
      :class="
        activeRoute ? 'movil:hidden laptop:flex' : !activeRoute ? 'flex' : ''
      "
      class="justify-center items-center"
    >
      <SocialLink :links="socialLinks" />
    </div>

    <div
      class="laptop:w-[200px] table:w-[150px] movil:w-auto movil:m-2 h-auto justify-center items-center text-center gap-1"
      :class="
        activeRoute ? 'movil:hidden laptop:flex' : !activeRoute ? 'flex' : ''
      "
    >
      <LanguageSwitcher />
      <DarkSwitcher />
    </div>
  </nav>
</template>
<style scoped>
.sticky {
  background: #cbcccc;
}
.dark .sticky {
  background: #242525;
}
</style>
