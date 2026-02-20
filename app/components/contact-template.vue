<script setup lang="ts">
import { useScrollAnimation } from '~~/app/composables/useScrollAnimation';

useSeoMeta({ title: "Contact" });
useScrollAnimation();
</script>
<template>
  <div class="py-10">
    <!-- Page Header -->
    <div class="text-center mb-8 fade-in">
      <h1 class="text-color font-ubuntu font-bold laptop:text-5xl table:text-4xl movil:text-3xl">
        Contact
      </h1>
      <div class="section-divider mt-4"></div>
    </div>

    <!-- Contact Form -->
    <section class="max-w-3xl mx-auto rounded-2xl section-bg-color p-8 fade-in">
      <FormContact />
    </section>
  </div>
</template>