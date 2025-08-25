import { useEffect, useState } from "react";

/** Generic localStorage state sync (demo for useEffect mount/update) */
export function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw != null
        ? JSON.parse(raw)
        : typeof initialValue === "function"
        ? initialValue()
        : initialValue;
    } catch {
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
  });

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
