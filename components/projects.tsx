"use client"

import { useState } from "react"
import { ExternalLink, Github, Filter, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Smart Email",
      description:
        "Full-stack email marketing platform for CRM-style campaign management. Built with Next.js (frontend) and Python (backend). Features AI-powered email content generation, automated follow-ups, and secure authentication with Clerk.",
      technologies: ["Next.js", "Python", "AI", "Clerk", "Email Automation"],
      category: "ai",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-yellow-500 to-yellow-600",
      ai: true,
    },
    {
      title: "Calling Agent",
      description:
        "AI-powered virtual assistant for real estate websites. Built with Next.js (frontend) and Python (backend), integrated with OpenAI and ElevenLabs for natural language and voice. Users can upload PDF knowledge base, train a custom AI bot, and embed it on their site for real-time property support.",
      technologies: ["Next.js", "Python", "OpenAI", "ElevenLabs", "PDF Parsing", "Voice AI"],
      category: "ai",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-yellow-400 to-orange-500",
      ai: true,
    },
    {
      title: "Lead By Carry",
      description:
        "Automated lead generation and outreach platform. Users search by location and business filters, then the system finds leads and auto-fills contact forms with personalized messages. Built with Next.js (frontend), Python (backend), and Google Maps API integration.",
      technologies: ["Next.js", "Python", "Google Maps API", "Automation"],
      category: "web",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-gray-500 to-slate-600",
    },
    {
      title: "FixMyDevice",
      description:
        "Full-stack web app for mobile repair shops. Built with Next.js. Features device sales, service booking, warranty management, and real-time admin dashboard for service requests and status tracking.",
      technologies: ["Next.js", "Admin Dashboard", "Real-time Updates"],
      category: "web",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-gray-400 to-slate-500",
    },
    {
      title: "Equity",
      description:
        "Mobile investment and property staking platform. Built with React Native (frontend), Node.js (backend), and PostgreSQL. Users can explore, verify, and invest in real estate opportunities with secure KYC and staking process.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "KYC", "Mobile"],
      category: "mobile",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      title: "Ilham",
      description:
        "AI-powered idea estimation and enhancement platform. Built with Next.js and OpenAI. Users submit ideas, get AI-generated suggestions, timeline, budget, and execution steps. Ideal for entrepreneurs and creatives.",
      technologies: ["Next.js", "OpenAI", "AI", "Idea Management"],
      category: "ai",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-yellow-500 to-yellow-500",
      ai: true,
    },
    {
      title: "ServeOnRoute",
      description:
        "Community-driven parcel delivery mobile app. Built with React Native (frontend) and Next.js (backend). Connects users, riders, and admins for peer-to-peer parcel delivery based on daily commute routes.",
      technologies: ["React Native", "Next.js", "Real-time", "Mobile"],
      category: "mobile",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-gray-400 to-slate-500",
    },
    {
      title: "Recruiter AI",
      description:
        "AI-powered resume parser and job-candidate matching platform. Uses OpenAI for semantic analysis, profile scraping from GitHub/LinkedIn, and intelligent matching algorithms.",
      technologies: ["OpenAI", "Firecrawl", "RapidAPI", "AI/ML", "Next.js"],
      category: "ai",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-yellow-400 to-yellow-500",
      ai: true,
    },
    {
      title: "Edvenity",
      description:
        "Multi-role job matching platform with AI-powered interview scheduling and evaluation. Features recruiter dashboard, candidate portal, and automated interview reporting. Built with React, Node.js, and OpenAI.",
      technologies: ["React", "Node.js", "OpenAI", "AI Bot", "PostgreSQL"],
      category: "ai",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-gray-400 to-slate-500",
      ai: true,
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI Projects" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/5 to-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-400/5 to-slate-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Showcasing my expertise in full-stack development and modern technologies
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === filterItem.id
                    ? "bg-gradient-to-r from-yellow-300 to-yellow-600 text-black shadow-lg shadow-yellow-500/25"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-yellow-400/30"
                }`}
              >
                <Filter size={16} />
                {filterItem.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:shadow-2xl hover:border-yellow-400/30 transition-all duration-500 hover:-translate-y-2 relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image/header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-3 py-1 bg-black/30 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {project.category.toUpperCase()}
                  </span>
                  {project.ai && (
                    <span className="flex items-center gap-1 px-2 py-1 bg-yellow-400/20 text-yellow-300 text-xs font-bold rounded-full border border-yellow-400/30">
                      <Sparkles size={14} /> AI
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-lg text-sm font-medium hover:from-yellow-900/20 hover:to-yellow-900/20 hover:text-yellow-300 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200 bg-transparent"
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button> */}
                </div>
              </div>

              {/* Hover overlay */}
              {hoveredProject === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-500/5 pointer-events-none rounded-2xl"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
