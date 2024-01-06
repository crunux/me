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
      text-md
      items-start
      font-semibold
      class="font-nunito"
      :for="name"
    >
      {{ label }}
    </label>
    <input
      h-8
      border="rounded-md"
      ring-none
      px2
      my1
      v-model="input"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :id="name"
    />
  </div>
</template>
<style scoped></style>
