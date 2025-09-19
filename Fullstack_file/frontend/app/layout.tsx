import "@/Styles/globals.css";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "FinOps Dashboard",
  description: "AI-powered FinOps tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Sidebar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
