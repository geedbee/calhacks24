// ./components/ClientComponent.tsx
"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import Controls from "./Controls";
import { useState } from "react";
import StartPage from "./StartPage";

export default function ClientComponent({
  accessToken,
}: {
  accessToken: string;
}) {
  interface Message {
    name: string;
  }

  const [hasStarted, setHasStarted] = useState(false);

  return (
    <VoiceProvider auth={{ type: "accessToken", value: accessToken }}>
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
