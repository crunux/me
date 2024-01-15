
export interface SendEmailService {
    to: string;
    subject: string;
    html: string;
}

const { $emailService } = useNuxtApp()


export const sendEmailService = async (object: SendEmailService) => {
    const res = await $emailService.sendMail({ to: object.to, subject: object.subject, html: object.html })
    console.log(res);
    
}