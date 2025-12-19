"use client"
import { useState } from "react"

export default function SearchBar() {
  const [query, setQuery] = useState("")

  return (
    <div className="rounded-2xl " >
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
      className="border px-12 py-1 rounded"
    />
    </div>
  )
}
