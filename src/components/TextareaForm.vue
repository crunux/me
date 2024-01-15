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
  <div flex="~ col">
    <label
      v-if="label || !placeholder"
      for="name"
      text-md
      font-semibold
      class="font-nunito"
    >
      {{ label }}
    </label>
    <textarea
      text-black
      bg-gray200
      v-model="input"
      border="rounded-md"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      cols="30"
      rows="8"
      p2
      ring-none
    ></textarea>
  </div>
</template>
<style scoped></style>
