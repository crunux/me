<script setup lang="ts">
// import { z } from "zod";

// const schemaField = toTypedSchema(
//   z.object({
//     email: z.string().email("Must be a valid email"),
//     name: z.string().min(3, { message: "fullname please" }),
//   })
// );

const form = reactive({
  name: "",
  email: "",
  message: "",
});
const el = ref<HTMLElement>();
const fields = reactive(useElementBounding(el));
watchEffect(() => console.log(fields));

const sendEmail = () => {
  console.log("sendEmail");
};
</script>
<template>
  <div
    flex="~ col"
    w-full
    justify-center
    text-center
    items-center
    text-color
    p2
  >
    <h2 font-bold mb3 class="font-ubuntu movil:mt-2 movil:text-3xl laptop:text-5xl">
      Contact me
    </h2>
    <div flex w-full justify-between items-center>
      <div
        class="w-[45%] movil:hidden laptop:flex"
        i-carbon-email
        w-full
        p2
        m2
        text-9xl
      ></div>
      <form
        @submit.prevent="sendEmail"
        flex="~ col"
        justify-center
        items-center
        w-full
        class="movil:w-full laptop:w-[45%]"
        m1
      >
        <div
          ref="el"
          class="flex movil:flex-col movil:justify-center laptop:flex-row laptop:justify-initial gap2"
        >
          <FieldForm
            v-model="form.name"
            max-w-60
            label="FullName:"
            type="text"
            name="name"
          />
          <FieldForm
            v-model="form.email"
            max-w-60
            label="Email:"
            type="email"
            name="email"
          />
        </div>
        <div :style="{ width: `${fields.width}px` }">
          <TextareaForm
            v-model="form.message"
            py2
            my2
            label="Message:"
            name="message"
          />
        </div>
        <div
          text-center
          class="text-xs laptop:text-md font-nunito font-semibold"
        >
          <button p2 m1 border="~ rounded-md" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped></style>
