"use client"

import { useState } from "react"
import { Filter, Sparkles } from "lucide-react"

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "SNAP PROMISE",
      description:
        "Led development of comprehensive web app (Angular) and mobile app (React Native). Integrated REST APIs, Google/Apple Auth, Stripe payments, and Recoil state management. Successfully deployed on Ubuntu, Google Play Console, and App Store Connect.",
      technologies: ["Angular", "React Native", "REST APIs", "Stripe", "Google Auth", "Apple Auth", "Recoil"],
      category: "mobile",
      image: "/SPromise.jpg",
      gradient: "from-yellow-500 to-yellow-600",
      ai: false,
    },
    {
      title: "RECRUITER AI",
      description:
        "Advanced resume parser using OpenAI to analyze uploaded resumes. Integrated Firecrawl for scraping user-linked profiles (GitHub) and RapidAPI for LinkedIn data. Features AI-powered job-candidate match scoring using OpenAI's semantic analysis.",
      technologies: ["OpenAI", "Firecrawl", "RapidAPI", "Resume Parsing", "AI Matching"],
      category: "ai",
      image: "/lemur.jpg",
      gradient: "from-yellow-400 to-orange-500",
      ai: true,
    },
    {
      title: "EDVENITY",
      description:
        "Multi-role platform (Recruiter, User, Admin) where recruiters post jobs and users apply with AI-powered matching. Features OpenAI scoring system and integrated AI bot for scheduling, evaluating, and reporting interviews back to recruiters.",
      technologies: ["Multi-role Platform", "OpenAI", "AI Bot", "Interview Scheduling", "Job Matching"],
      category: "ai",
      image: "/edvenitty.jpg",
      gradient: "from-gray-500 to-slate-600",
      ai: true,
    },
    {
      title: "LEMUR",
      description:
        "Next.js application to fetch and store healthcare facilities by ZIP code using Google Maps API. Integrated Firecrawl for scraping facility website data and displaying enriched metadata with custom APIs for data management.",
      technologies: ["Next.js", "Google Maps API", "Firecrawl", "Data Scraping", "Healthcare"],
      category: "web",
      image: "/lemur.jpg",
      gradient: "from-gray-400 to-slate-500",
    },
    {
      title: "INSTANT SPACE",
      description:
        "Full stack development with React and Node.js. Built comprehensive chat system, interactive map integration, and multilingual modules using React-Redux for state management.",
      technologies: ["React", "Node.js", "React-Redux", "Chat System", "Maps", "Multilingual"],
      category: "web",
      image: "/IS.jpg",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      title: "GROW AND SHARE",
      description:
        "PWA job-matching platform with React, Node.js, and MongoDB. Features advanced search functionality, map integration, and Stripe subscription system for premium features.",
      technologies: ["PWA", "React", "Node.js", "MongoDB", "Stripe", "Job Matching", "Maps"],
      category: "web",
      image: "/gns.png",
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      title: "SERVE ON ROUTE",
      description:
        "Parcel service mobile application built with React Native, Nest.js, and MongoDB. Features Stripe payment integration, real-time chat using Socket.io, and comprehensive map functionality for delivery tracking.",
      technologies: ["React Native", "Nest.js", "MongoDB", "Stripe", "Socket.io", "Maps"],
      category: "mobile",
      image: "/Sor.jpg",
      gradient: "from-gray-600 to-gray-800",
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
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-6xl font-bold opacity-50">
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
