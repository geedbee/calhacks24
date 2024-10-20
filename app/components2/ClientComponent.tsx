// ./components/ClientComponent.tsx
"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import Controls from "./Controls";
import { useState } from "react";
import StartPage from "./StartPage";
import { useConversation } from "../ConversationContext";

export default function ClientComponent({
  accessToken,
}: {
  accessToken: string;
}) {
  interface Message {
    name: string;
  }

  const { conversationHistory, addMessage } = useConversation();

  const [hasStarted, setHasStarted] = useState(false);

  const parse = (array) => {
    let str = "";
    array.forEach((obj, index) => {
      const role = obj.role || "[Unknown role]";
      const content = obj.content || "[No message provided]";
      str += JSON.stringify({ role, content });
      if (index < array.length - 1) {
        str += ", "; // Add a separator between objects
      }
    });
    console.log(str.replace(/\\+/g, "").replace(/\"/g, ""));
    return str.replace(/\\+/g, "").replace(/\"/g, "");
  };
  return (
    <VoiceProvider
      auth={{ type: "accessToken", value: accessToken }}
      sessionSettings={{
        type: "session_settings",
        context: {
          text: parse(conversationHistory), // Pass conversation history to parse
        },
      }}
    >
      {!hasStarted && (
        <StartPage hasStarted={hasStarted} setHasStarted={setHasStarted} />
      )}

      {hasStarted && (
        <>
          <Messages />
          <Controls />
        </>
      )}
    </VoiceProvider>
  );
}
