import nodemailer from 'nodemailer';


export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()
    const transporter = nodemailer.createTransport({
        service: runtimeConfig.mailService,
        auth: {
            user: runtimeConfig.mailEmail,
            pass: runtimeConfig.MailSecretKey,
        }
    });

    return {
        provide: {
            emailService: transporter
        }
    }
})