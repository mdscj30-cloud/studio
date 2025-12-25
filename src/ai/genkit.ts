import {genkit, Plugin} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {genkitEval} from 'genkitx-groq';

const groq: Plugin<any> = async (options) => {
  return {
    name: 'groq',
    configure: (config) => {
      genkitEval.init(config);
    },
  };
};
export const ai = genkit({
  plugins: [googleAI(), groq()],
  model: 'googleai/gemini-2.5-flash',
});
