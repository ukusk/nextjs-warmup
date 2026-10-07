import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next.js Warm-up",
  description: "A tiny Next.js App Router exercise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="et">
      <body>
        <nav className="nav">
          <Link href="/">Avaleht</Link>
          <Link href="/about">Minust</Link>
        </nav>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
