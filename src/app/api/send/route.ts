'use server'

import { EmailTemplate } from '../../components/email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

    const senderName = formData.get("Name");
    const senderEmail = formData.get("Email");
    const senderMessage = formData.get("Message");

    if(!senderMessage || typeof senderMessage !== "string"){
        return{
            error: "Invalid Message"
        };
    }

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'gurjardilip1984advo@gmail.com',
      subject: "Hello world",
      reply_to: senderEmail as string,
      text: senderMessage as string
    });
}
