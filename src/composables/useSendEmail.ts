import type { SendEmail } from '@/types/index';
const config = useRuntimeConfig()

export const useSendEmail = async (email: SendEmail) => {

    let data = {
        template_params: {
            user_name: `${email.name} ${email.lastname}`,
            reply_to: `${email.email}`,
            message: `${email.message}`,
        },
        service_id: `${config.SERVICES_ID}`,
        template_id: `${config.TEMPLATE_ID}`,
        user_id: `${config.USER_ID}`
    }
    try {
        const response = await useFetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)

        });
        console.log(response);
    }
    catch (error) {
        console.log(error)
    }
}
