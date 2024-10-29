<script setup lang="ts">
import type { ProvideHero } from '~/types';

useSeoMeta({
  title: "About",
});
const { about, home } = inject<ProvideHero>('hero') ?? {}
</script>
<template>
  <section
    class="snap-center flex movil:flex-col table:flex-row justify-center items-center mt-[20px] m-auto w-[90%] h-[500px] rounded-[20px] bg-[#c5c5c5] dark:bg-[#2d2e2e]"
  >
    <div
      class="latop:w-[30%] table:w-1/3 movil:flex movil:flex-col movil:w-2/4 movil:items-center left-0"
    >
      <h3
        class="font-ubuntu font-semibold laptop:text-[50px] table:text-[30px] movil:text-[25px] movil:m-4 movil:p-2 text-center text-[#2d2e2e] dark:text-[#d9d9d9]"
      >
        {{ $t("about.title") }}
      </h3>
      <img
        class="w-[200px] h-[200px] table:hidden movil:inline rounded"
        :src="home?.avatar?.url"
        alt="Joan Cruz"
      />
    </div>
    <div
      class="laptop:w-[60%] table:w-2/3 movil:w-3/4 movil:h-auto grid items-center movil:flex movil:flex-col movil:items-center movil:justify-center"
    >
      <div
        class="movil:w-100vw movil:m-2 movil:h-auto items-center table:justify-center"
      >
        <h1 class="text-center text-[#2d2e2e] dark:text-[#d9d9d9] font-nunito">
          {{ about }}
        </h1>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
