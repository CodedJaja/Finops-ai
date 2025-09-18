import "@/app/globals.css";
import { Sidebar } from "@/components/ui/ui/sidebar";

export const metadata = {
  title: "FinOps Dashboard",
  description: "AI-powered Cloud Cost Optimization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50 text-gray-900">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
