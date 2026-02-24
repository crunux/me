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
    <label v-if="label || !placeholder" class="text-muted-foreground text-sm font-nunito" :for="name">
      {{ label }}
    </label>
    <input class="w-full bg-secondary text-base h-8 border-rounded-md outline-none focus:ring-2 focus:ring-inset
      focus:ring-primary px2 my1" v-model="input" :type="type" :placeholder="placeholder" :name="name" :id="name" />
  </div>
</template>
