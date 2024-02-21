// import type { SendEmailService } from "~/types";
// import { SecureToken, Subject, ToSend } from "~/shared/helpers/config";
// import Email from '@/assets/smtpJs/index.js'

const config = useRuntimeConfig()

config.SecureToken, config.ToSend, config.Subject

// export const sendEmailService = async (email: SendEmailService) => {
//     const Body = ``
//     const res = await Email.send({ SecureToken, Subject, To: ToSend, From: email.from, Body })
//     console.log(res);
// }