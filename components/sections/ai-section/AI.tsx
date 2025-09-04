/**
 * AI - Main AI Chat Interface Component
 *
 * This component provides a functional AI chat interface using the Vercel AI SDK.
 * It handles real-time message streaming, user input processing, and manages UI states
 * including loading indicators and error handling.
 *
 * Features:
 * - Real-time message streaming with OpenAI integration
 * - Automatic scrolling to the latest messages
 * - Loading state indicators with animated dots
 * - Error display with appropriate styling
 * - Accessible form controls with proper ARIA attributes
 *
 * The component uses the useChat hook from @ai-sdk/react which provides:
 * - messages: Array of chat messages with role (user/assistant) and content
 * - input: Controlled input state
 * - handleInputChange: Input change handler
 * - handleSubmit: Form submission handler
 * - isLoading: Loading state indicator
 * - error: Error state with message
 *
 * This component is the core of the site-wide chat functionality and is used in the
 * ChatWidget component. A simplified static version is also used in AIIntegrationDemo
 * to showcase the UI in the solution cards.
 */
"use client";

import { useChat, type Message } from "@ai-sdk/react";
import { Input } from "@kushagradhawan/kookie-ui";
import { Button } from "@kushagradhawan/kookie-ui";
import { ScrollArea } from "@kushagradhawan/kookie-ui";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { SendHorizonal } from "lucide-react";

export function AI() {
  // Initialize chat functionality through the useChat hook
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({});

  // Reference to the scroll area element for automatic scrolling
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="h-full flex flex-col bg-transparent">
      {/* Scrollable message container */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 space-y-3" style={{ scrollbarWidth: "thin" }}>
        {/* Render all chat messages */}
        {messages.map((m: Message) => (
          <div key={m.id} className={cn("rounded-xl px-3.5 py-2.5 max-w-[80%] text-sm shadow-sm break-words whitespace-pre-wrap", m.role === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted text-muted-foreground mr-auto")}>
            {/* @ts-ignore: Vercel AI SDK message parts not fully typed yet */}
            {m.content || m.parts?.map((part) => part.text).join("")}
          </div>
        ))}

        {/* Loading indicator - shown only when no messages exist yet */}
        {isLoading && messages.length === 0 && (
          <div className="flex justify-center items-center h-full">
            <div className="flex space-x-1.5 p-3 bg-muted/80 rounded-lg shadow-sm">
              <div className="animate-bounce h-2 w-2 bg-primary rounded-full" style={{ animationDelay: "0ms" }}></div>
              <div className="animate-bounce h-2 w-2 bg-primary rounded-full" style={{ animationDelay: "150ms" }}></div>
              <div className="animate-bounce h-2 w-2 bg-primary rounded-full" style={{ animationDelay: "300ms" }}></div>
            </div>
          </div>
        )}

        {/* Error display */}
        {error && (
          <div className="rounded-xl px-3.5 py-2.5 max-w-[80%] text-sm shadow-sm break-words whitespace-pre-wrap bg-destructive text-destructive-foreground mr-auto">
            <p>Error: {error.message}</p>
          </div>
        )}
      </ScrollArea>

      {/* Message input form */}
      <form onSubmit={handleSubmit} className="border-t p-3 flex items-center gap-2 bg-background/90 sticky bottom-0">
        <Input
          value={input}
          placeholder="Send a message..."
          onChange={handleInputChange}
          className="flex-1 bg-muted/60 border-border/50 focus-visible:ring-1 focus-visible:ring-primary/40 text-sm h-10"
          disabled={isLoading}
          aria-label="Chat input"
        />
        <Button type="submit" size="icon" className="h-10 w-10 shrink-0" disabled={isLoading || !input.trim()}>
          <SendHorizonal className="h-5 w-5" />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
    </div>
  );
}
