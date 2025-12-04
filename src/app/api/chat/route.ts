import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
  // model: 'anthropic/claude-sonnet-4.5',
    //model: 'openai/gpt-4o',
    model: openai('gpt-4o-mini'),

    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}