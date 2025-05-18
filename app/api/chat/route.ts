import { streamText } from "ai";
import { openai } from "@ai-sdk/openai"; // Import the openai provider

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const result = await streamText({
    model: openai("gpt-4.1-nano"), // Use the imported openai provider
    messages,
  });

  // Respond with the stream
  return result.toDataStreamResponse();
}
