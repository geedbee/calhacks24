// ./components/ClientComponent.tsx
"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Message";
import Controls from "./Controls";
import { useConversation } from "../ConversationContext";

export default function VoiceComponent({
  accessToken,
}: {
  accessToken: string;
}) {
  const { conversationHistory, addMessage } = useConversation();
  console.log("conv his", conversationHistory);
  return (
    <VoiceProvider
      auth={{ type: "accessToken", value: accessToken }}
      sessionSettings={{
        type: "session_settings",
        context: {
          text: conversationHistory, // Pass conversation history to parse
        },
      }}
    >
      <Messages />
      {/* <Controls /> */}
    </VoiceProvider>
  );
}
