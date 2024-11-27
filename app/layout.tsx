import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: "OnchainKit",
  description: "Ready-to-use components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className="__variable_1e4310 __variable_c3aa02 antialiased"
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
