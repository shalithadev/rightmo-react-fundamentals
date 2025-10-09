"use client";

import { TestUseId } from "@/hooks/use-id";
import { useEffect, useState } from "react";


export default function Page() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    const d = setInterval(() => {
      setCount((prev) => (prev + 1))
    }, 1000)

    return () => {
      clearInterval(d)
    }
  }, [count2])

  useEffect(() => console.log(count), [count])

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-800 w-full text-white">
      {count}
      <button onClick={() => setCount2((prev) => (prev + 1))}>Click {count2}</button>
      <TestUseId />
    </main>
  );
}