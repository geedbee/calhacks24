"use client";
import { useVoice } from "@humeai/voice-react";
import Sentiment from "./Sentiment";
import { useEffect, useRef, useState } from "react";
import User from "./User";
import Assistant from "./Assistant";
import { useConversation } from "../ConversationContext";

export default function Messages() {
  const { conversationHistory, addMessage } = useConversation();
  const { messages } = useVoice(); // Access voice messages
  const [prevCount, setPrevCount] = useState(2); // Initialize with current length

  const latestAssistant = useRef(null); // Store the latest assistant message
  const latestUser = useRef(null); // Store the latest user message

  useEffect(() => {
    if (prevCount >= messages.length) return; // No new messages

    // Process only new messages from prevCount to the current length
    for (let i = prevCount; i < messages.length; i++) {
      const message = messages[i]?.message;

      // Only handle messages with valid content and role
      if (message?.content && message?.role) {
        console.log(message.content);
        console.log(message.role);

        // Add message to conversation history based on role
        if (message.role === "user") {
          addMessage("user", message.content);
          latestUser.current = message; // Store latest user message
        } else if (message.role === "assistant") {
          addMessage("assistant", message.content);
          latestAssistant.current = message; // Store latest assistant message
        }
      }
    }

    // Update the previous message count to the current length
    setPrevCount(messages.length);
  }, [messages, prevCount, addMessage]); // Dependencies for useEffect

  return (
    <div>
      <div className="flex flex-col w-max">
        <div>
          <Assistant latestMessageAssistant={latestAssistant.current} />
        </div>
        <div>
          <User latestMessageUser={latestUser.current} />
        </div>
      </div>
    </div>
  );
}
