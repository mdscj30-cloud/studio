'use server';

/**
 * @fileOverview AI-powered client testimonial generator.
 *
 * - generateClientTestimonial - A function that generates a client testimonial with ROI figures.
 * - GenerateClientTestimonialInput - The input type for the generateClientTestimonial function.
 * - GenerateClientTestimonialOutput - The return type for the generateClientTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateClientTestimonialInputSchema = z.object({
  clientData: z
    .string()
    .describe("Comprehensive data about the client's project, including objectives, challenges, solutions implemented, and quantitative results achieved."),
  industryBenchmarks: z
    .string()
    .describe('Relevant industry benchmarks and average ROI figures for similar projects.'),
});
export type GenerateClientTestimonialInput = z.infer<typeof GenerateClientTestimonialInputSchema>;

const GenerateClientTestimonialOutputSchema = z.object({
  testimonial: z
    .string()
    .describe('A persuasive client testimonial with potential ROI figures, based on the provided client data and industry benchmarks.'),
});
export type GenerateClientTestimonialOutput = z.infer<typeof GenerateClientTestimonialOutputSchema>;

export async function generateClientTestimonial(
  input: GenerateClientTestimonialInput
): Promise<GenerateClientTestimonialOutput> {
  return generateClientTestimonialFlow(input);
}

const generateClientTestimonialPrompt = ai.definePrompt({
  name: 'generateClientTestimonialPrompt',
  input: {schema: GenerateClientTestimonialInputSchema},
  output: {schema: GenerateClientTestimonialOutputSchema},
  prompt: `You are a marketing expert specializing in creating persuasive client testimonials.

  Based on the provided client data and industry benchmarks, create a compelling testimonial that highlights the value and ROI achieved.

  Client Data: {{{clientData}}}
  Industry Benchmarks: {{{industryBenchmarks}}}

  Focus on quantifiable results and present the information in a clear, concise, and impactful manner.
  Include potential ROI figures based on industry averages where possible.
  The testimonial should sound authentic and credible, avoiding exaggerated claims.
  `,
});

const generateClientTestimonialFlow = ai.defineFlow(
  {
    name: 'generateClientTestimonialFlow',
    inputSchema: GenerateClientTestimonialInputSchema,
    outputSchema: GenerateClientTestimonialOutputSchema,
  },
  async input => {
    const {output} = await generateClientTestimonialPrompt(input);
    return output!;
  }
);
