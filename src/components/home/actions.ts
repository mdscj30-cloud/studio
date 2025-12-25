'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

type FormState = {
  success: boolean;
  message?: string;
};

export async function handleHeroFormSubmission(values: z.infer<typeof formSchema>): Promise<FormState> {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data.',
    };
  }

  try {
    const { name, email } = validatedFields.data;

    await resend.emails.send({
      from: 'noreply@nconsulting.com',
      to: 'cachirag1@outlook.com',
      subject: 'New "Partner with Us" Submission',
      reply_to: email,
      html: `
            <p>You have a new submission from the "Partner with Us" form on your homepage.</p>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
            </ul>
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
