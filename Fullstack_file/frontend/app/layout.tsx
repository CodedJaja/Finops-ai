// app/layout.tsx
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "FinOps AI",
  description: "AI-powered FinOps platform for cloud cost optimization",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
