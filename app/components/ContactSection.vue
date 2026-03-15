<script setup lang="ts">
const { t } = useI18n();
</script>
<template>
  <section id="contact" class="mx-auto max-w-5xl px-6 py-24 fade-in">
    <!-- Page Header -->
    <div class="">
      <h2 class="text-sm font-semibold tracking-widest text-primary">
        {{ t('contact.title') }}
      </h2>
      <p class="mt-4 leading-relaxed text-muted-foreground">{{ t('contact.description') }}</p>
    </div>
    <!-- Contact Form -->
    <FormContact />
  </section>
</template>
