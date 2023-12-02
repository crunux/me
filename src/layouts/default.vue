import { IconsFlagsEs, IconsFlagsEn } from '../../.nuxt/components';
<script setup lang="ts">
interface Lang {
  code: string;
  lang: string;
}
const { locale } = useI18n();
const colorMode = useColorMode();

useSeoMeta({
  description: "Porfotio of Joan Cruz",
  ogTitle: "Crunux",
  ogDescription: "CV Crunux",
  ogImage: "../assets/img/avatar.png",
  ogUrl: "crunux.dev",
  twitterTitle: "Cross Dev",
  twitterDescription: "Fullstack Developer",
  twitterImage:
    "https://pbs.twimg.com/profile_images/1421116782069403649/9TRcKV2t_400x400.jpg",
  twitterCard: "summary",
});

useHead({
  titleTemplate: "%s - Crunux",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "/favicon.ico",
    },
  ],
});

const currentYear: number = new Date().getUTCFullYear();
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

const toggleChangeLanguage = (laguage: string) => {
  locale.value = laguage;
  menuLanguage.value = false;
};

const changeTheme = () => {
  colorMode.preference = colorMode.value == "light" ? "dark" : "light";
};

watch(y, (newValue: number) => {
  addSticky.value = newValue >= 20 ? "sticky" : "";
});

const links = ref([
  {
    name: "Home",
    page: "/",
  },
  {
    name: "About",
    page: "/about",
  },
  {
    name: "Projects",
    page: "/projects",
  },
  {
    name: "Blog",
    page: "/blog",
  },
  {
    name: "Contact",
    page: "/contact",
  },
]);
</script>
<template>
  <div class="">
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
      <ul class="w-[200px] flex justify-center items-center">
        <li class="laptop:p-[8px] movil:p-[2px]">
          <a class="" to="/"
            ><IconsLinkedInLink
              class="dark:text-[#d9d9d9] text-[#2d2e2e] laptop:w-[32px] movil:w-[25px]"
          /></a>
        </li>
        <li class="p-[8px] movil:p-[2px]">
          <a class="" to="/"
            ><IconsGithubLink
              class="dark:text-[#d9d9d9] text-[#2d2e2e] laptop:w-[32px] movil:w-[25px]"
          /></a>
        </li>
        <li class="laptop:p-[8px] movil:p-[2px]">
          <a class="" to="/"
            ><IconsTwitterLink
              class="dark:text-[#d9d9d9] text-[#2d2e2e] laptop:w-[32px] movil:w-[25px]"
          /></a>
        </li>
      </ul>
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
        <button
          class="flex justify-center items-center laptop:w-[36px] laptop:h-[35px] movil:w-[32px] movil:h-[32px] z-[100] bg-transparent rounded-full border-[#2d2e2e] dark:border-[#d9d9d9] border"
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
        </button>
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
    <section
      class="snap-center mt-[65px] w-[100vw] flex flex-col justify-center items-center"
    >
      <div
        class="w-[95%] h-[600px] relative max-h-[30%] flex table:flex-row movil:flex-col justify-between rounded-[20px] dark:bg-transparent items-center bg-transparent text-[#2d2e2e]"
      >
        <div
          class="w-[45%] m-5 top-8 flex flex-col justify-center items-center"
        >
          <div class="bottom-[10px]">
            <Transition class="animate__animated animate__backInDown" appear>
              <h6
                class="text-[#08B4EA] bottom-0 laptop:text-end movil:text-center text-[25px] p-0 m-0 leading-none"
              >
                {{ $t("home.greet") }}
              </h6>
            </Transition>
            <Transition class="animate__animated animate__backInLeft" appear>
              <h4
                class="laptop:text-[80px] movil:text-[60px] text-center laptop:leading-none font-ubuntu dark:text-[#d9d9d9] text-[#2d2e2e] font-bold"
              >
                {{ $t("home.name") }}
              </h4>
            </Transition>
            <Transition class="animate__animated animate__backInUp" appear>
              <h5
                class="dark:text-[#d9d9d9] text-[#2d2e2e] font-ubuntu table:text-[35px] table:text-center laptop:leading-none movil:text-[24px] movil:truncate movil:top-3 laptop:text-[50px]"
              >
                {{ $t("home.ocupation") }}
              </h5>
            </Transition>
          </div>

          <div
            class="w-[450px] m-[25px] flex flex-col laptop:items-start movil:items-center gap-[2px]"
          >
            <NuxtLink
              class="cursor-pointer dark:text-[#d9d9d9] link font-ubuntu movil:text-center font-semibold text-[#2d2e2e] p-[10px] m-[2px]"
              v-for="link in links"
              :key="link.name"
              :to="link.page"
              >{{ link.name }}</NuxtLink
            >
          </div>
        </div>

        <div class="w-[45%] flex justify-center items-center">
          <Transition class="animate__animated animate__backInRight" appear>
            <img
              class="laptop:w-[500px] laptop:h-[500px] table:w-[400px] table:h-[390px] movil:hidden table:block laptop:block rounded"
              src="../assets/img/me.jpg"
              alt=""
            />
          </Transition>
        </div>
      </div>
    </section>
    <slot />
    <footer
      class="relative flex items-end left-5 bottom-0 w-[100vw] h-[30px] m-[10px] dark:text-[#d9d9d9] text-[#2d2e2e] font-ubuntu font-semibold text-xl"
    >
      <h6>&copy; Crunux Dev - {{ currentYear }}</h6>
    </footer>
  </div>
</template>

<style scoped>
.sticky {
  background: #cbcccc;
}
.dark .sticky {
  background: #242525;
}

.link.router-link-exact-active {
  border-radius: 20px;
  background: #08b4ea;
  text-align: center;
  /**/
}
</style>
