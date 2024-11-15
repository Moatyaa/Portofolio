import { Resend } from 'resend';


const resend = new Resend('re_h3xN9JCf_GQh55ykUgj5e5XbuDUC2ZPcH')
resend.apiKeys.create({ name: 'SendEmailKey' });
export const sendEmail = async (formData: any)=>{
    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'muhammadatyaa66@gmail.com',
        subject: 'Hello World',
        html: '<strong>It works!</strong>',
    });
    if (error) {
        return console.error({ error });
    }
}