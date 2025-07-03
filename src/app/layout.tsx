import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { TRPCReactProvider } from "@/trpc/client";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Neuralife",
  description: "AI Agent for your life",
  manifest: "/manifest.json",
 
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TRPCReactProvider>
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
    </TRPCReactProvider>
  );
}
