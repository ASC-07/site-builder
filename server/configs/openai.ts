import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.AI_API_KEY,
});

export default openai