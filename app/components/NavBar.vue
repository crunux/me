<script setup lang="ts">
import type { Route } from "~~/app/types";
import type { LinkSocial } from "../types/index";
interface Props {
  activeRoute?: boolean;
  links?: Route[];
}

const { links, activeRoute } = defineProps<Props>();

const isScrolled = ref(false);
const { y } = useWindowScroll();

watch(y, (newValue: number) => {
  isScrolled.value = newValue >= 20;
});

const socialLinks: LinkSocial[] = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/joancruz0502",
    icon: "i-carbon-logo-linkedin",
  },
  {
    name: "github",
    link: "https://github.com/crunux",
    icon: "i-carbon-logo-github",
  },
  {
    name: "twitter",
    link: "https://twitter.com/crunux0",
    icon: "i-carbon-logo-x",
  },
];
</script>
<template>
  <nav
    class="flex fixed w-screen h-[60px] top-0 left-0 z-[99] justify-between items-center transition-all duration-300"
    :class="{ 'navbar-scrolled': isScrolled }"
  >
    <div class="pl-4">
      <NuxtLink
        class="text-3xl font-ubuntu text-[#2d2e2e] dark:text-[#d9d9d9] font-semibold transition-colors duration-300"
        to="/"
        >
        <span class="text-[#40CEF7]">Cru</span>nux
      </NuxtLink>
    </div>
    <div
      v-if="activeRoute"
      class="movil:flex laptop:hidden justify-center items-center m-2"
    >
      <MenuToggle>
        <template #socialLinks>
          <SocialLink :links="socialLinks" />
        </template>
        <template #darkMode>
          <div class="flex movil:w-auto movil:m-2 h-auto justify-center items-center text-center gap-1">
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
        class="cursor-pointer dark:text-[#d9d9d9] nav-link font-ubuntu font-semibold text-[#2d2e2e] px-3 py-2 rounded-lg transition-all duration-300"
        v-for="link in links"
        :key="link.name"
        :to="link.page"
        >
        {{ link.name }}
      </NuxtLink>
    </div>
    <!-- Social links + controls -->
    <div class="flex items-center gap-2 pr-4">
      <div class="movil:hidden laptop:flex items-center">
        <SocialLink :links="socialLinks" />
      </div>
      <LanguageSwitcher />
      <DarkSwitcher />
    </div>
  </nav>
</template>
<style scoped>
.navbar-scrolled {
  background: rgba(203, 204, 204, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.dark .navbar-scrolled {
  background: rgba(36, 37, 37, 0.95);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #40cef7;
  transition: width 0.3s ease;
  border-radius: 1px;
}

.nav-link:hover::after {
  width: 80%;
}

.nav-link.router-link-exact-active {
  color: #40cef7;
}

.nav-link.router-link-exact-active::after {
  width: 80%;
}
</style>
