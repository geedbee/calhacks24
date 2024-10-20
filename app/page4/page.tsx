// ./app/page.tsx
import ClientComponent from "@/components/ClientComponent";
import "../globals.css";
import { fetchAccessToken } from "hume";
import ClientInterface from "@/components/ClientInterface";

export default async function Page() {
  const accessToken = await fetchAccessToken({
    apiKey: String(process.env.HUME_API_KEY),
    secretKey: String(process.env.HUME_SECRET_KEY),
  });

  if (!accessToken) {
    throw new Error();
  }

  return <>
    <ClientComponent accessToken={accessToken} />
  </>
}
