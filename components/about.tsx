"use client"

import { useState, useEffect } from "react"
import { Code, Rocket, Users, Award } from "lucide-react"
import { useCounter } from "@/hooks/use-counter"

export default function About() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { icon: Code, label: "Years Experience", value: 6, color: "text-amber-400" },
    { icon: Rocket, label: "Projects Completed", value: 50, color: "text-yellow-400" },
    { icon: Users, label: "Happy Clients", value: 30, color: "text-gray-300" },
    { icon: Award, label: "Technologies", value: 25, color: "text-amber-300" },
  ]

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById("about")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-32 h-32 bg-amber-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gray-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a real impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Senior Fullstack Engineer with a Passion for Excellence</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Senior Fullstack Engineer with over{" "}
                  <strong className="text-amber-400">6 years of experience{" "}</strong>
                  building exceptional digital experiences. I specialize in modern JavaScript frameworks, AI integration, and have a
                  strong foundation in both frontend and backend technologies.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with diverse teams and cutting-edge
                  technologies, from leading fullstack teams at <strong className="text-amber-400">TechMade</strong> to
                  developing complex AI-powered platforms and SaaS dashboards with SOC 2 Type 2 compliance.
                </p>
                <p>
                  I believe in writing clean, maintainable code while ensuring exceptional user experiences. My expertise includes
                  LangChain, OpenAI API integration, and building scalable solutions that not only work flawlessly but also delight users.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const animatedValue = useCounter({
                end: stat.value,
                start: 0,
                duration: 2000,
                delay: isVisible ? index * 200 : 0
              })
              
              return (
                <div
                  key={index}
                  className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10 hover:shadow-2xl hover:border-amber-400/30 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    activeCard === index ? "ring-2 ring-amber-400/50" : ""
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="text-center space-y-4">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={32} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">
                        {animatedValue}+
                      </div>
                      <div className="text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Skills preview */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10">
          <h4 className="text-2xl font-bold text-white mb-6 text-center">Core Technologies</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "LangChain",
              "Artificial Intelligence", 
              "OpenAI API",
              "Vapi",
              "ElevenLabs",
              "React.js",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Angular",
              "React Native",
              "Node.js",
              "Express.js",
              "Nest.js",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "MySQL",
              "Firebase",
              "Supabase",
              "Prisma",
              "GraphQL",
              "REST APIs",
              "AWS",
              "Docker",
              "Vercel",
              "Git",
              "Tailwind CSS",
              "Bootstrap",
              "Material UI",
              "Stripe",
              "Socket.io",
              "Postman",
              "Jira",
              "Slack"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 text-gray-300 rounded-full border border-amber-400/20 hover:border-amber-400/50 hover:shadow-md hover:text-white transition-all duration-200 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
