'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string(),
  message: z.string(),
});

type FormState = {
  success: boolean;
  message?: string;
};

export async function handleFormSubmission(values: z.infer<typeof formSchema>): Promise<FormState> {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data.',
    };
  }

  try {
    // In a real application, you would send this data to your CRM,
    // email service, or database.
    console.log('New Consultation Request:', validatedFields.data);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (error) {
    console.error('Error handling form submission:', error);
    return {
      success: false,
      message: 'An internal error occurred. Please try again later.',
    };
  }
}
