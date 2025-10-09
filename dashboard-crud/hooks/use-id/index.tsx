import { useId, useMemo } from "react"

export function TestUseId() {
  const id = useMemo(() => Math.round(Math.random() * 10).toString(), [])

  return <div>
    <label htmlFor={id}></label>
    <input type="text" id={id} />
  </div>
}