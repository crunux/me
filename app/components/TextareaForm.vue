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
    <label
      v-if="label || !placeholder"
      for="name"
      text-sm
      class="font-nunito"
    >
      {{ label }}
    </label>
    <textarea
      w-full
      text-black
      bg-gray200
      focus:ring-2
      ring-inset
      focus:ring-[#1a9fd4]
      outline-none
      v-model="input"
      border="rounded-md"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      cols="30"
      rows="8"
      p2
    ></textarea>
  </div>
</template>
<style scoped></style>
