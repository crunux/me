import type { SendEmail } from '~~/app/types/index';

export const useSendEmail = async (email: SendEmail): Promise<string> => {
    const config = useRuntimeConfig();

    const data = {
        template_params: {
            user_name: `${email.name} ${email.lastname}`,
            reply_to: `${email.email}`,
            message: `${email.message}`,
        },
        service_id: `${config.public.servicesId}`,
        template_id: `${config.public.templateId}`,
        user_id: `${config.public.userId}`
    };
    try {
        const response = await useFetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)

        });
        if(response.data.value === 'OK'){
            return 'success';
        }

        return 'error';
    }
    catch (error) {
        // console.log(error);
        return 'error';
    }
};