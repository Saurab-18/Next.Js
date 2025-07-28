"use client";

import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");

  return (
    <>
      <h1>Dashoboard</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>hello, {name}!</p>
    </>
  );
}
