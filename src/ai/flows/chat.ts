'use server';

/**
 * @fileOverview A simple conversational AI flow for a support chatbot.
 *
 * - chat - A function that takes the current message and conversation history to get a response.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe("The user's message."),
  history: z
    .array(z.object({ role: z.enum(['user', 'model']), content: z.string() }))
    .describe('The conversation history.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe("The AI's response."),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatPrompt = ai.definePrompt({
  name: 'chatPrompt',
  input: { schema: ChatInputSchema },
  output: { schema: ChatOutputSchema },
  model: 'googleai/gemini-1.5-pro-latest',
  prompt: `You are a friendly and helpful customer support assistant for N consulting, a firm that provides strategic consulting for startups.

Your goal is to answer user questions about the company, its services, and provide support. Be concise and helpful.

Here is the conversation history:
{{#each history}}
- {{role}}: {{{content}}}
{{/each}}

Here is the user's latest message:
- user: {{{message}}}

Provide a helpful response.`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const { output } = await chatPrompt(input);
    return { response: output!.response };
  }
);
