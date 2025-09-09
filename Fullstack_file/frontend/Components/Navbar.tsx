// components/Navbar.tsx
export function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold text-indigo-600">FinOps AI</h1>
      <div className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-indigo-600">Dashboard</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600">Reports</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600">Settings</a>
      </div>
    </nav>
  );
}
