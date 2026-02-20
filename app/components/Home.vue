<script setup lang="ts">
  import type { ProvideHero, Route } from "~~/app/types";
  interface Props {
    links: Route[];
  }

  defineProps<Props>();

  const { home } = inject<ProvideHero>("hero") ?? ({} as ProvideHero);
  console.log(home);

  const handlerSeeCV = () => {
    window.open(home.cv.url);
  };
</script>
<template>
  <section class="snap-center mt-[65px] w-screen flex flex-col justify-center items-center">
    <div
      class="w-[95%] h-[600px] relative max-h-[30%] flex table:flex-row movil:flex-col justify-between rounded-[20px] dark:bg-transparent items-center bg-transparent text-[#2d2e2e]">
      <div class="w-[45%] laptop:m-5 movil:m-2 top-8 flex flex-col justify-center items-center">
        <div class="bottom-[10px]">
          <h6 class="text-[#40CEF7] bottom-0 laptop:text-end movil:text-center text-[25px] p-0 m-0 leading-none">
            {{ $t("home.greet") }}
          </h6>

          <h4
            class="laptop:text-[80px] movil:text-[60px] text-center laptop:leading-none font-ubuntu dark:text-[#d9d9d9] text-[#2d2e2e] font-bold">
            {{ home.name.toUpperCase() }}
          </h4>

          <h5
            class="dark:text-[#d9d9d9] text-[#2d2e2e] font-ubuntu table:text-[35px] table:text-center laptop:leading-none movil:text-[24px] movil:truncate movil:top-3 laptop:text-[50px]">
            {{ home.occupation }}
          </h5>
        </div>

        <div class="w-[450px] m-[25px] flex flex-col laptop:items-start movil:items-center gap-[2px]">
          <NuxtLink
            class="cursor-pointer dark:text-[#fcfcfc] link font-ubuntu movil:text-center font-semibold text-[#2d2e2e] p-[10px] m-[2px]"
            v-for="link in links"
            :key="link.name"
            :to="link.page">
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>

      <div class="w-[45%] flex flex-col justify-center items-center">
        <nuxt-img class="laptop:w-[400px] table:w-[400px] movil:hidden table:block laptop:block rounded-[20px]"
          :src="home?.avatar?.url"
          loading="lazy"
          alt="Joan Cruz" />
        <a class="cursor-pointer movil:py-1 movil:px-2 text-sm laptop:py-2 laptop:px-4 my-2 laptop:mx-4 no-underline text-color-i bg-color-primary hover:bg-color-primary-hover rounded-xl"
          :href="home.cv.url"
          target="_blank"
          download="CV Joan Cruz - Web Developer">
          CV - Joan Cruz
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .link.router-link-exact-active {
    border-radius: 20px;
    background: #40cef7;
    text-align: center;
    /**/
  }
</style>
