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
  <div flex="~ col" justify-start items-start py-2>
    <label
      v-if="label || !placeholder"
      text-sm
      class="font-nunito"
      :for="name"
    >
      {{ label }}
    </label>
    <input
    w-full
      text-gray500
      bg-gray200
      h-7
      border-rounded-md
      outline-none
      focus:ring-2
      focus:ring-inset
      focus:ring-[#1a9fd4]
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
