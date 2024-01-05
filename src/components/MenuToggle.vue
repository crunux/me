<script setup lang="ts">
const activeMenu = ref(false);
const showIcon = computed(() =>
  activeMenu ? "i-carbon-menu" : "i-carbon-close-large"
);

useEventListener("mouseup", (e: Event) => {
  if (activeMenu.value) {
    activeMenu.value = false;
  }
});
</script>
<template>
  <div class="gap-3 grid grid-cols-1 z-[999] m-2" @click="activeMenu = !activeMenu">
    <Icon
      class="dark:text-[#d9d9d9] text-[#2d2e2e] laptop:text-[32px] movil:text-[28px]"
      :name="!activeMenu ? 'i-carbon-menu' : 'i-carbon-close-large'"
    />

    <div
      class="absolute flex flex-col justify-start items-center h-screen movil:w-[50%] table:w-[30%] p-2 top-0 right-0 bg-#cbcccc dark:bg-#242525"
      v-show="activeMenu"
    >
      <div
        @click="activeMenu = !activeMenu"
        class="dark:text-[#d9d9d9] text-[#2d2e2e] laptop:text-[32px] movil:text-[28px] m-10"
        i-carbon-close-large
      ></div>
      <div class="flex flex-col justify-center items-center">
        <slot name="socialLinks" />
        <slot name="darkMode" />
      </div>
      <div class="flex flex-col">
        <slot name="links" />
      </div>
    </div>
    <span></span>
  </div>
</template>
<style scoped></style>
