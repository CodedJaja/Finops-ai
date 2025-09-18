"use client";

import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/settings">Settings</Link>
      </div>
      <button
        onClick={handleLogout}
        className="px-3 py-1 bg-red-500 text-white rounded-lg"
      >
        Logout
      </button>
    </nav>
  );
}
