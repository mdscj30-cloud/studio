
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string(),
});

type FormState = {
  success: boolean;
  message?: string;
};

export async function handleConsultationFormSubmission(values: z.infer<typeof formSchema>): Promise<FormState> {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data.',
    };
  }

  try {
    const { name, email, phone, company, message } = validatedFields.data;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'chiragjainrockcool@gmail.com',
      subject: 'New Consultation Request from Website',
      reply_to: email,
      html: `
            <p>You have a new consultation request from the form in the footer.</p>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
                <li><strong>Company:</strong> ${company || 'Not provided'}</li>
                <li><strong>Message:</strong></li>
            </ul>
            <p>${message}</p>
        `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'An internal error occurred. Please try again later.',
    };
  }
}
