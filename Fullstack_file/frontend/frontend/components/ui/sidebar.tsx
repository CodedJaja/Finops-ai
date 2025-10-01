"use client";

import { Home, BarChart, Settings, Wallet } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-md flex flex-col">
      <div className="p-6 font-bold text-xl border-b">FinOps</div>
      <nav className="flex-1 p-4 space-y-2">
        <Link
          href="/"
          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100"
        >
          <Home className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/costs"
          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100"
        >
          <Wallet className="h-5 w-5" />
          <span>Costs</span>
        </Link>
        <Link
          href="/reports"
          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100"
        >
          <BarChart className="h-5 w-5" />
          <span>Reports</span>
        </Link>
        <Link
          href="/settings"
          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>
      <div className="p-4 text-sm text-gray-500 border-t">© 2025 FinOps</div>
    </aside>
  );
}
