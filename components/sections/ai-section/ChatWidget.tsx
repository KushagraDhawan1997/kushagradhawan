"use client";

import React, { useState } from "react";
import { Button } from "@kushagradhawan/kookie-ui";
import { Input } from "@kushagradhawan/kookie-ui";
import { Popover, PopoverContent, PopoverTrigger } from "@kushagradhawan/kookie-ui";
import { AI } from "@/components/sections/ai-section/AI";
import { MessageCircle, Send, X } from "lucide-react";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex items-center z-50">
      {/* Chat widget with input field */}
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div
            className={`
              flex items-center gap-2 bg-background/80 backdrop-blur-md 
              rounded-full shadow-lg border border-border/40 cursor-pointer
              transition-all duration-300 pl-4 pr-1 py-1
              ${isOpen ? "w-[300px]" : "w-auto hover:w-[200px]"}
            `}
          >
            <MessageCircle className="h-5 w-5 text-primary shrink-0" />
            <span
              className={`
                text-sm text-muted-foreground whitespace-nowrap overflow-hidden transition-opacity
                ${isOpen ? "opacity-100" : "opacity-80"}
              `}
            >
              Ask the AI assistant...
            </span>
            <div className="ml-auto">
              <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
                {isOpen ? <X className="h-4 w-4 text-muted-foreground" /> : <Send className="h-4 w-4 text-muted-foreground" />}
              </Button>
            </div>
          </div>
        </PopoverTrigger>

        <PopoverContent align="end" side="top" className="w-[350px] h-[500px] p-0 overflow-hidden flex flex-col shadow-xl border-border/40 bg-background/95 backdrop-blur-md" sideOffset={10}>
          <div className="p-3 border-b bg-muted/30">
            <h3 className="font-medium text-sm">AI Assistant</h3>
          </div>

          <div className="flex-1 overflow-hidden">
            <AI />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
