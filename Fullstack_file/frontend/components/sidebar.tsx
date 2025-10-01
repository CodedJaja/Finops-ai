import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">FinOps AI</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/" className="hover:text-blue-400">Dashboard</Link>
        <Link href="/reports" className="hover:text-blue-400">Reports</Link>
        <Link href="/settings" className="hover:text-blue-400">Settings</Link>
      </nav>
    </aside>
  )
}
