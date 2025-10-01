import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "OptiCloud – AI-Powered Cloud Cost Optimization",
  description:
    "Cut cloud costs without sacrificing performance. OptiCloud integrates with AWS, Azure, and GCP to deliver real-time dashboards, smart optimization recommendations, and AI-powered forecasting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}
