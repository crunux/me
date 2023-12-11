<script setup lang="ts">
interface Lang {
  code: string;
  lang: string;
}
const { locale } = useI18n();

const menuLanguage = ref<boolean>(false);

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
const toggleChangeLanguage = (laguage: string) => {
  locale.value = laguage;
  menuLanguage.value = false;
};
</script>
<template>
  <button
    name="language-switcher"
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
</template>
<style scoped></style>
