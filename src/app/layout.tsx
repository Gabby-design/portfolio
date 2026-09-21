import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative AI-Augmented Developer & Front-End Engineer | Portfolio",
  description: "Senior front-end and full-stack developer portfolio showcasing high-performance web platforms, real-time SVG liquid glass refraction, Next.js App Router, and AI-accelerated workflows.",
  keywords: ["Front-End Engineer", "Next.js 14", "TypeScript", "Tailwind CSS", "QuickLiquid", "Glassmorphism", "AI Full-Stack Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#010101] text-white selection:bg-[#00E676]/30 selection:text-[#00E676]"
      >
        {/* Global Ambient Refraction Canvas */}
        <AmbientBackground />

        {/* Global Fixed Slim Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <div className="pt-16 sm:pt-20 flex-1 flex flex-col relative z-10">
          {children}
        </div>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
