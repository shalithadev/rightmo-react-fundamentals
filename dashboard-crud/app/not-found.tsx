import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="flex flex-col text-center min-h-screen my-16">
      <h1>404 - Page Not Found</h1>
      <p>This page does not exist.</p>

      <a href="/" className="text-blue-500 hover:underline">
        Go back home
      </a>
    </main>
  );
}
