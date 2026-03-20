<script setup lang="ts">
  interface Props {
    name: string;
    type?: string;
    label?: string;
    placeholder?: string;
  }

  const input = defineModel<string | number>();

  withDefaults(defineProps<Props>(), {
    type: 'text',
  });
</script>
<template>
  <div class="max-w-100 flex flex-col justify-start items-start gap-2  py-2 my-2">
    <label v-if="label || !placeholder" :for="name" class="text-sm font-nunito text-muted-foreground">
      {{ label }}
    </label>
    <textarea :id="name" v-model="input"
      class="w-full text-base bg-secondary focus:ring-2 ring-inset focus:ring-primary outline-ring outline-dotted outline-1 rounded-md p-2"
      :name="name" :placeholder="placeholder" cols="30" rows="8" :aria-label="label || 'comments'"/>
  </div>
</template>
<style scoped></style>
