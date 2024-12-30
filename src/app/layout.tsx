import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./sections/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Portfolio Home | tmpst.xyz",
  description: "Began Development 12/21/2024",
  keywords: [
    "next.js",
    "nextjs",
    "react",
    "react.js",
    "reactjs",
    "react.ts",
    "reactts",
    "tailwind",
    "tailwindcss",
    "tailwind css",
    "framer",
    "framer motion",
  ],
  authors: [{ name: "Matt W. Denton" }, { url: "https://tmpst.xyz" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white select-none`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
