import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ishan Gautam | Portfolio",
  description: "Full stack developer building AI-powered web apps with React, Next.js, Node.js and Python.",
  keywords: ["Ishan Gautam", "portfolio", "full stack developer", "react", "next.js", "node.js", "fastapi"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
