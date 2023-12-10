<script setup lang="ts">
import type { Route } from "~/types";
import type { LinkSocial } from "../types/index";
interface Props {
  activeRoute?: boolean;
  links?: Route[];
}

interface Lang {
  code: string;
  lang: string;
}

defineProps<Props>();

const { locale } = useI18n();

const addSticky: Ref<string> = ref("");
const { y } = useWindowScroll();

const langs = ref<Lang[]>([
  {
    code: "en",
    lang: "English",
  },
  {
    code: "es",
    lang: "Espanol",
  },
]);
const menuLanguage = ref<boolean>(false);

watch(y, (newValue: number) => {
  addSticky.value = newValue >= 20 ? "sticky" : "";
});

const toggleChangeLanguage = (laguage: string) => {
  locale.value = laguage;
  menuLanguage.value = false;
};

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
    class="flex fixed w-[100vw] h-[60px] top-0 left-0 z-[99] justify-between"
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
      class="w-[450px] m-2 ml-8 flex flex-row laptop:items-start movil:items-center gap-[2px]"
    >
      <NuxtLink
        class="cursor-pointer dark:text-[#d9d9d9] link font-ubuntu movil:text-center font-semibold text-[#2d2e2e] p-[10px] m-[2px]"
        v-for="link in links"
        :key="link.name"
        :to="link.page"
        >{{ link.name }}</NuxtLink
      >
    </div>
    <SocialLink :links="socialLinks" />
    <div
      class="laptop:w-[200px] table:w-[150px] movil:w-[200px] h-auto flex justify-center items-center text-center gap-1"
    >
      <button
        @click="menuLanguage = !menuLanguage"
        class="flex justify-center laptop:w-[36px] laptop:h-[35px] movil:w-[32px] movil:h-[32px] bg-transparent rounded-full dark:text-[#d9d9d9] items-center text-[#2d2e2e] border-[#2d2e2e] dark:border-[#d9d9d9] border"
      >
        <IconsFlagsEs
          v-if="locale === 'es'"
          class="dark:fill-[#d9d9d9] fill-[#2d2e2e] laptop:w-[32px] movil:w-[22px]"
        />
        <IconsFlagsEn
          v-if="locale === 'en'"
          class="dark:fill-[#d9d9d9] fill-[#2d2e2e] laptop:w-[32px] movil:w-[22px]"
        />
      </button>
      <div
        class="flex justify-center items-center laptop:w-[36px] laptop:h-[35px] movil:w-[32px] movil:h-[32px] z-[100] bg-transparent rounded-full border-[#2d2e2e] dark:border-[#d9d9d9] border"
      >
        <DarkSwitcher
          class="dark:text-[#d9d9d9] text-[#2d2e2e] laptop:text-[32px] movil:text-[22px]"
        />
      </div>

      <!-- <button 
        class="flex justify-center items-center laptop:w-[36px] laptop:h-[35px] movil:w-[32px]  movil:h-[32px] z-[100] bg-transparent rounded-full border-[#2d2e2e] dark:border-[#d9d9d9] border"
        @click.prevent="changeTheme"
      >
        <IconsButtonLightMode
          v-if="colorMode.value == 'dark'"
          class="text-[#d9d9d9] laptop:w-[32px] movil:w-[22px]"
        />
        <IconsButtonDarkMode
          v-else
          class="text-[#2d2e2e] laptop:w-[32px] movil:w-[22px]"
        />
      </button> -->
    </div>
    <div
      v-show="menuLanguage"
      class="flex flex-col absolute origin-bottom laptop:right-[90px] table:right-[65px] top-[52px] movil:right-[47px] py-2 shadow-movil shadow-[#2d2e2e] dark:shadow-[#d9d9d9] bg-[#d9d9d9] text-[#2d2e2e] dark:bg-[#2d2e2e] dark:text-[#d9d9d9] rounded-md"
      @click="menuLanguage = false"
    >
      <button
        v-for="(lang, i) in langs"
        :key="`Lang${i}`"
        class="flex items-center px-4 py-2 bg-transparent text-[#2d2e2e] dark:text-[#d9d9d9]"
        @click="toggleChangeLanguage(lang.code)"
      >
        <IconsFlagsEs
          v-if="lang.code === 'es'"
          class="dark:fill-[#d9d9d9] fill-[#2d2e2e] laptop:w-[32px] movil:w-[22px]"
        />
        <IconsFlagsEn
          v-if="lang.code === 'en'"
          class="dark:fill-[#d9d9d9] fill-[#2d2e2e] laptop:w-[32px] movil:w-[22px]"
        />
      </button>
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
