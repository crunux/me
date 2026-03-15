<script setup lang="ts">
	import { useSendEmail } from "@/composables/useSendEmail";
	import type { SendEmail } from "@/types";

	const form = reactive<SendEmail>({
		name: '',
		lastname: '',
		email: '',
		message: '',
	});
	const el = ref<HTMLElement>();
	const fields = reactive(useElementBounding(el));

	const sendEmail = async () => {
	  const res = await useSendEmail(form);
	  if (res === 'success') {
	    form.name = '';
	    form.lastname = '';
	    form.email = '';
	    form.message = '';
	  }else {
	    throw new Error('Error sending email');
	  }
    
	}; 

</script>
<template>
  <form @submit.prevent="sendEmail">
    <div ref="el" class="flex flex-col">
      <FieldForm v-model="form.name" max-w-100 label="Name:" type="text" name="name" />
      <FieldForm v-model="form.lastname" max-w-100 label="Last Name:" type="text" name="lastname" />
    </div>
    <div>
      <div class="">
        <FieldForm v-model="form.email" max-w-100 label="Email:" type="email" name="email" />
        <TextareaForm v-model="form.message" max-w-100 py2 my2 label="Message:" name="message" />
      </div>
      <div class="text-center mt-10">
        <button
          class="rounded-md bg-primary px-5 py-2 text-md font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          type="submit">Enviar</button>
      </div>
    </div>
  </form>
</template>
