import { Button } from "@/components/ui/button";
import Link from "next/link";

// RSC
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-800 w-full">
      <h1 className="text-center text-lg p-16">Home Page</h1>
      <div className="flex justify-center gap-4">
        <Button variant="secondary" asChild>
          <Link href="/admin">Dashboard</Link>
        </Button>
      </div>
    </main>
  );
}
