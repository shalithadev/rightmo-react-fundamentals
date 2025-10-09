"use client";

import { useState, useEffect, useRef } from "react";

export default function EffectOnce() {
  const [input, setInput] = useState("");
  // useRef to track whether the component has been mounted.
  const didMountRef = useRef(false);

  useEffect(() => {
    // Check if the component has mounted before running the effect.
    if (didMountRef.current) {
      console.log("Input was updated to:", input);
    } else {
      didMountRef.current = true;
    }
  }, [input]); // The effect is triggered by 'input' changes.

  return (
    <div>
      <input
        className="p-2 rounded border border-gray-300 text-black"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
