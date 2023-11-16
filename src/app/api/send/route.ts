'use server'

import { EmailTemplate } from '../../components/email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async function POST(formData: FormData) {

    const senderName = formData.get("name");
    const senderEmail = formData.get("email");
    const senderMessage = formData.get("message");

    if(!senderMessage || typeof senderMessage !== "string"){
        return{
            error: "Invalid Message"
        };
    }

    await resend.emails.send({
      from: 'ronitgurjar999@gmail.com',
      to: 'gurjardilip1984advo@gmail.com',
      subject: 'Message from'+senderName,
      reply_to: senderEmail as string,
      text: senderMessage as string
    });
}
