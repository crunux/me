<script setup lang="ts">
import type { ProvideHero } from '~/types';

useSeoMeta({ title: "About" });
useScrollAnimation();

const { about, home } = inject<ProvideHero>('hero') ?? {
  about: '',
  home: null,
};

</script>
<template>
  <div class="py-10">
    <!-- Page Header -->
    <div class="text-center mb-12 fade-in">
      <h1 class="text-color font-ubuntu font-bold laptop:text-5xl table:text-4xl movil:text-3xl">
        {{ $t("about.title") }}
      </h1>
      <div class="section-divider mt-4"></div>
    </div>
      <!-- About Content -->
    <section class="w-[90%] max-w-5xl mx-auto">
      <div class="flex table:flex-row movil:flex-col items-center gap-12">
        <div class="table:w-[40%] movil:w-full flex justify-center fade-in-left">
          <img
            v-if="home?.avatar?.url"
            class="w-[280px] h-[280px] rounded-2xl object-cover shadow-xl"
            :src="home.avatar.url"
            alt="Joan Cruz"
          />
        </div>
        <div class="table:w-[60%] movil:w-full fade-in-right">
          <p class="text-color font-nunito laptop:text-lg movil:text-base leading-relaxed">
            {{ about }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
