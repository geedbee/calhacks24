// app/layout.tsx
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/page1">Page 1</Link>
              </li>
              <li>
                <Link href="/page2">Page 2</Link>
              </li>
              <li>
                <Link href="/page3">Page 3</Link>
              </li>
              <li>
                <Link href="/page4">Page 4</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
