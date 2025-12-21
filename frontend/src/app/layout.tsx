/**
 * @license MIT License
 * @author Gurkirat Singh
 * @file layout.tsx
 * @file Root layout for the app, sets fonts and wraps pages with ClerkProvider.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * App metadata for page title and description.
 */
export const metadata: Metadata = {
  title: "Domscrolling",
  description: "Domscrolling curates and surfaces the most valuable short-form coding content so you can learn more, faster.",
};

/**
 * Root layout component that wraps the app with providers and sets global fonts.
 * @param {{ children: React.ReactNode }} props - Component props.
 * @param {React.ReactNode} props.children - Page content to render.
 * @returns {JSX.Element} The root layout element.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
