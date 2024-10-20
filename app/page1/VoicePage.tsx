// ./app/page.tsx
"use client"; // Ensures this is a client component

import { useEffect, useState } from "react";
import ClientComponent from "../components2/ClientComponent";
import { fetchAccessToken } from "hume";

export default function VoicePage() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await fetchAccessToken({
          apiKey: "Fk2INt8qYRydSE97vMDa5VpsbctUGTDdPpRQw8njvtaJks3T",
          secretKey:
            "rrKc8KnISmMXRGBbYZpx17GJfAGCJzAtcOe71DXvUEXKXmZAPIOjoAxOAoM0Oemx",
        });
        setAccessToken(token);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    getToken(); // Invoke the function correctly
  }, []); // Run only once when the component mounts

  if (!accessToken) return <p>Loading...</p>; // Show a loading message until the token is ready

  return <ClientComponent accessToken={accessToken} />;
}
