<script setup lang="ts">
interface Props {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
}

const input = defineModel<string | number>();

withDefaults(defineProps<Props>(), {
  type: "text",
});
</script>
<template>
  <div flex="~ col" justify-start items-start>
    <label v-if="label || !placeholder" for="name" class="text-sm font-nunito text-muted-foreground">
      {{ label }}
    </label>
    <textarea class="w-full text-base bg-secondary focus:ring-2 ring-inset focus:ring-primary outline-none"
      v-model="input" border="rounded-md" :name="name" :id="name" :placeholder="placeholder" cols="30" rows="8"
      p2></textarea>
  </div>
</template>
<style scoped></style>
