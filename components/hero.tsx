"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Phone, ArrowDown, Download, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "I craft exceptional digital experiences that drive results"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-400/10 to-slate-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-gradient-to-r from-amber-500/10 to-orange-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Main content */}
          <div className="space-y-6">
            <div className="inline-block">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
                <span className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
                  Afaq Ahmed
                </span>
              </h1>
              <div className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8 animate-fade-in-up animation-delay-400">
                <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </div>
            </div>

            <div className="max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
              <p className="text-xl text-gray-300 leading-relaxed min-h-[60px]">
                {displayText}
                <span className="animate-pulse text-amber-400 ml-1">|</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-600 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
            >
              <a href="#contact" className="flex items-center gap-2">
                <Mail size={20} className="group-hover:animate-bounce" />
                Let's Work Together
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-2 border-gray-400 text-gray-300 hover:bg-gray-400/10 hover:border-gray-300 hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 bg-white/5 backdrop-blur-sm transform hover:scale-105"
            >
              <a href="#projects" className="flex items-center gap-2">
                <Code2 size={20} className="group-hover:rotate-12 transition-transform" />
                View My Work
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-2 border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400 hover:text-amber-300 px-8 py-4 rounded-xl font-medium transition-all duration-300 bg-white/5 backdrop-blur-sm transform hover:scale-105"
            >
              <a href="/resume.pdf" target="_blank" className="flex items-center gap-2" rel="noreferrer">
                <Download size={20} className="group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8 animate-fade-in-up animation-delay-1000">
            {[
              {
                href: "https://github.com/afaqahmed0321",
                icon: Github,
                label: "GitHub",
                color: "hover:text-gray-300 hover:bg-gray-800",
              },
              {
                href: "https://linkedin.com/in/afaqahmed77",
                icon: Linkedin,
                label: "LinkedIn",
                color: "hover:text-blue-400 hover:bg-blue-900/20",
              },
              {
                href: "mailto:afaqahmed0321@gmail.com",
                icon: Mail,
                label: "Email",
                color: "hover:text-amber-400 hover:bg-amber-900/20",
              },
              {
                href: "tel:+923013740860",
                icon: Phone,
                label: "Phone",
                color: "hover:text-green-400 hover:bg-green-900/20",
              },
            ].map(({ href, icon: Icon, label, color }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group p-4 bg-white/10 backdrop-blur-sm rounded-xl text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 hover:border-amber-400/50 relative overflow-hidden`}
                aria-label={label}
              >
                <Icon size={24} className="relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/20 group-hover:to-yellow-500/20 transition-all duration-300 rounded-xl"></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-amber-400" size={24} />
      </div>
    </section>
  )
}
