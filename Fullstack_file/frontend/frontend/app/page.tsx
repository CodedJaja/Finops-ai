"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchBackend = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/`);
        const data = await res.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error connecting to backend:", error);
        setMessage("Failed to connect to backend ❌");
      }
    };

    fetchBackend();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">🚀 FinOps Frontend</h1>
      <p className="mt-4 text-lg">Backend says: {message}</p>
    </main>
  );
}
