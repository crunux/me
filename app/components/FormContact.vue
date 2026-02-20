<script setup lang="ts">
import { useSendEmail } from "~~/app/composables/useSendEmail";
import type { SendEmail } from "~~/app/types";
const form: SendEmail = reactive({
  name: "",
  lastname: "",
  email: "",
  message: "",
});
const el = ref<HTMLElement>();
const fields = reactive(useElementBounding(el));

const sendEmail = () => {
  useSendEmail(form);
};
</script>
<template>
  <div flex="~ col"
    w-full
    justify-center
    text-center
    items-center
    text-color
    p2>
    <!-- <h2 font-bold
      mb3
      class="font-ubuntu movil:mt-2 movil:text-3xl laptop:text-5xl">
      Contact me
    </h2> -->
    <!-- <div flex
      w-full
      justify-between
      items-center> -->
      
      <form @submit.prevent="sendEmail"
        flex="~ col"
        justify-center
        items-center
        w-full
        class="movil:w-full laptop:w-[50%]"
        m1>
        <div ref="el"
          class="flex movil:flex-col movil:justify-center laptop:flex-row laptop:justify-initial gap2 flex-wrap">
          <FieldForm v-model="form.name"
            max-w-60
            label="Name:"
            type="text"
            name="name" />
          <FieldForm v-model="form.lastname"
            max-w-60
            label="Last Name:"
            type="text"
            name="lastname" />
        
        </div>
        <div :style="{ width: `${fields.width}px` }">
          <FieldForm v-model="form.email"
            max-w-full
            label="Email:"
            type="email"
            name="email" />
          <TextareaForm v-model="form.message"
            py2
            my2
            label="Message:"
            name="message" />
        </div>
        <div justify-center
        text-sm laptop:text-md font-nunito>
        <button p2
            block
            m1
            border="~ rounded-md"
            type="submit">Enviar</button>
        </div>
      </form>
    </div>
  <!-- </div> -->
</template>
<style scoped></style>
