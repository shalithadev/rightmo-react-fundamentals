"use client";

import { useContext, useState } from "react";
import StateChild from "./state-child";
import UserContext from "@/components/user-context";

export const StateExample = () => {
  const [count, setCount] = useState(0);
  const user = useContext(UserContext);

  const incrementCount = () => {
    // Callback function to get the previous value
    setCount((prev) => prev + 1);
    // Trigger a re-render

    // Logging before the re-render
    // console.log(count);
  };

  // console.log("User Email: ", user.email);

  return (
    <div className="flex flex-col text-center gap-3">
      <p>Count: {count}</p>
      <button
        onClick={incrementCount}
        className="border p-4 rounded cursor-pointer"
      >
        Increase Counter
      </button>
      <StateChild count={count} />
    </div>
  );
};
