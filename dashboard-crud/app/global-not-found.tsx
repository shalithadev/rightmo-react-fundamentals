// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Children:", children);

  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col text-center min-h-screen my-16">
        <h1>404 - Page Not Found</h1>
        <p>This page does not exist.</p>
      </body>
    </html>
  );
}
