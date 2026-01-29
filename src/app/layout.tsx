import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rafael Oliveira | Software Engineer & Architect",
  description: "Building scalable systems with Clean Architecture, DDD and TDD. Software Engineering student passionate about quality code.",
  keywords: ["software engineer", "clean architecture", "DDD", "TDD", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Rafael Oliveira" }],
  openGraph: {
    title: "Rafael Oliveira | Software Engineer",
    description: "Building scalable systems with Clean Architecture, DDD and TDD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
