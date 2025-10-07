"use client";

import UserContext from "@/components/user-context";
// import { Button } from "@/components/ui/button";
import { EffectExample } from "@/hooks/use-effect";
import { StateExample } from "@/hooks/use-state";
// import Link from "next/link";

// RSC
export default function Home() {
  return (
    <UserContext
      value={{ name: "Janith", age: 24, email: "janithumeda@gmail.com" }}
    >
      <main className="flex flex-col justify-center items-center min-h-screen bg-gray-800 w-full text-white">
        <StateExample />
        <EffectExample />
      </main>
    </UserContext>
  );
}
