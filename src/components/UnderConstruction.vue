<script setup lang="ts">
const value = defineModel({type: Boolean, default: true});
</script>
<template>
  <div
    flex
    absolute
    top-0
    right-0
    left-0
    z-999
    justify-center
    items-center
    w-full
    md:inset-0
    class="h-[calc(100%-1rem)]"
    max-h-full
    v-show="value"
  >
    <div
      p-4
      top-20
      w-full
      max-w-6xl
      max-h-full
      rounded-lg
      borde-color
      text-color
      section-bg-color
      class="table:max-w-6xl max-h-3/4 m-auto"
    >
      <div flex relative borde-color text-color justify-end section-bg-color>
        <div
          text-xl
          @click="value = !value"
          i-carbon-close-large
          hover:text-color
        ></div>
      </div>

      <div>
        <h1 font-bold text-4xl text-center m-2 p-2 class="font-ubuntu">
          PAGE IS UNDER CONSTRUCTION.
        </h1>
        <img
          src="~/assets/img/under-construction.jpeg"
          alt="under construction"
          rounded-lg
          m-auto
          p-4
          class="laptop:w-96 laptop:h-full max-w-86"
        />
      </div>
    </div>
  </div>
</template>
