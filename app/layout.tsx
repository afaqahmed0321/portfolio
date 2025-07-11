import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Afaq Ahmed - Full Stack Developer",
  description:
    "Experienced Full Stack Developer with 5+ years of experience building scalable web & mobile applications. Specializing in React, Next.js, Node.js, and modern backend stacks.",
  keywords: "Full Stack Developer, React, Next.js, Node.js, TypeScript, Software Engineer, Web Development",
  authors: [{ name: "Afaq Ahmed" }],
  openGraph: {
    title: "Afaq Ahmed - Full Stack Developer",
    description: "Building robust, scalable apps with modern web & mobile stacks",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
