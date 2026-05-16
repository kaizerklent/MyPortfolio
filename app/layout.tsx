import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaizer Klent Auceran — Backend Developer",
  description: "Portfolio of Kaizer Klent Auceran, a Backend Developer & Mobile App Builder from Davao City, Philippines",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        {children}
      </body>
    </html>
  );
}