<script setup lang="ts">
import type { Route } from "~/types";
interface Props {
  links: Route[];
}
defineProps<Props>();
</script>
<template>
  <section
    class="snap-center mt-[65px] w-[100vw] flex flex-col justify-center items-center"
  >
    <div
      class="w-[95%] h-[600px] relative max-h-[30%] flex table:flex-row movil:flex-col justify-between rounded-[20px] dark:bg-transparent items-center bg-transparent text-[#2d2e2e]"
    >
      <div class="w-[45%] m-5 top-8 flex flex-col justify-center items-center">
        <div class="bottom-[10px]">
          
            <h6
              class="text-[#08B4EA] bottom-0 laptop:text-end movil:text-center text-[25px] p-0 m-0 leading-none"
            >
              {{ $t("home.greet") }}
            </h6>

            <h4
              class="laptop:text-[80px] movil:text-[60px] text-center laptop:leading-none font-ubuntu dark:text-[#d9d9d9] text-[#2d2e2e] font-bold"
            >
              {{ $t("home.name") }}
            </h4>

            <h5
              class="dark:text-[#d9d9d9] text-[#2d2e2e] font-ubuntu table:text-[35px] table:text-center laptop:leading-none movil:text-[24px] movil:truncate movil:top-3 laptop:text-[50px]"
            >
              {{ $t("home.ocupation") }}
            </h5>
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
          <img
            class="laptop:w-[500px] laptop:h-[500px] table:w-[400px] table:h-[390px] movil:hidden table:block laptop:block rounded"
            src="../assets/img/me.jpg"
            alt=""
          />
      </div>
    </div>
  </section>
</template>
<style scoped>
.link.router-link-exact-active {
  border-radius: 20px;
  background: #08b4ea;
  text-align: center;
  /**/
}
</style>
