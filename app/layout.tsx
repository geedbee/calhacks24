// app/layout.tsx
import { ConversationProvider } from "./ConversationContext";
import Navbar from "./page2/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConversationProvider>
          <Navbar /> {/* Navbar stays visible on all pages */}
          <main>{children}</main>
        </ConversationProvider>
      </body>
    </html>
  );
}
