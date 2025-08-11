"use client"

import { useState, useEffect } from "react"
import { Code, Database, Wrench } from "lucide-react"

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set())
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true)
            const skillElements = entry.target.querySelectorAll("[data-skill]")
            skillElements.forEach((el, index) => {
              setTimeout(() => {
                setVisibleSkills((prev) => new Set([...prev, el.getAttribute("data-skill") || ""]))
              }, index * 50)
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' },
    )

    const skillsSection = document.getElementById("skills")
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    // Fallback: Load after 2 seconds if observer fails
    const fallbackTimer = setTimeout(() => {
      if (!isLoaded) {
        setIsLoaded(true)
        const skillElements = document.querySelectorAll("[data-skill]")
        skillElements.forEach((el, index) => {
          setTimeout(() => {
            setVisibleSkills((prev) => new Set([...prev, el.getAttribute("data-skill") || ""]))
          }, index * 50)
        })
      }
    }, 2000)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [isLoaded])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-gray-700 to-gray-400",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 92, icon: "▲" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Angular", level: 87, icon: "🅰️" },
        { name: "React Native", level: 88, icon: "📱" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "HTML/CSS", level: 93, icon: "🎨" },
        { name: "Tailwind CSS", level: 92, icon: "💨" },
        { name: "Bootstrap", level: 88, icon: "🅱️" },
        { name: "Sass", level: 85, icon: "💅" },
        { name: "Material UI", level: 87, icon: "📦" },
        { name: "jQuery", level: 80, icon: "💫" },
      ],
    },
    {
      title: "Backend & APIs",
      icon: Database,
      color: "from-gray-400 to-gray-600",
      skills: [
        { name: "Node.js", level: 92, icon: "🟢" },
        { name: "Express.js", level: 90, icon: "🚀" },
        { name: "Nest.js", level: 87, icon: "🏠" },
        { name: "REST APIs", level: 95, icon: "🔗" },
        { name: "GraphQL", level: 82, icon: "📊" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "LangChain", level: 85, icon: "🔗" },
        { name: "OpenAI API", level: 88, icon: "🤖" },
      ],
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      color: "from-gray-500 to-yellow-300",
      skills: [
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "MongoDB", level: 92, icon: "🍃" },
        { name: "MySQL", level: 85, icon: "🗄️" },
        { name: "Firebase", level: 87, icon: "🔥" },
        { name: "Supabase", level: 85, icon: "⚡" },
        { name: "Prisma", level: 88, icon: "💎" },
        { name: "Drizzle ORM", level: 80, icon: "🌧️" },
        { name: "DynamoDB", level: 75, icon: "⚡" },
        { name: "Vector DB", level: 78, icon: "🔢" },
        { name: "AWS S3", level: 82, icon: "☁️" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "from-yellow-300 to-gray-600",
      skills: [
        { name: "Git", level: 95, icon: "📝" },
        { name: "Docker", level: 82, icon: "🐳" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Vercel", level: 92, icon: "▲" },
        { name: "Netlify", level: 88, icon: "🌐" },
        { name: "DigitalOcean", level: 78, icon: "🌊" },
        { name: "Postman", level: 93, icon: "📮" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Jira", level: 90, icon: "📋" },
        { name: "Trello", level: 85, icon: "📌" },
        { name: "ClickUp", level: 82, icon: "✅" },
        { name: "Slack", level: 88, icon: "💬" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="skills-section">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">Technologies I use to bring ideas to life</p>
          
          {!isLoaded && (
            <button 
              onClick={() => {
                setIsLoaded(true)
                const skillElements = document.querySelectorAll("[data-skill]")
                skillElements.forEach((el, index) => {
                  setTimeout(() => {
                    setVisibleSkills((prev) => new Set([...prev, el.getAttribute("data-skill") || ""]))
                  }, index * 50)
                })
              }}
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-lg hover:from-amber-400 hover:to-yellow-400 transition-all duration-300"
            >
              Load Skills Animation
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <div
                key={categoryIndex}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Category header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                      <Icon className="text-black" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const skillKey = `${categoryIndex}-${skillIndex}`
                    const isVisible = visibleSkills.has(skillKey)

                    return (
                      <div key={skillIndex} data-skill={skillKey} className="group/skill">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="text-white font-medium text-lg">{skill.name}</span>
                          </div>
                          <span className="text-amber-400 font-mono text-sm">{isVisible ? `${skill.level}%` : ""}</span>
                        </div>

                        <div className="relative">
                          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                              style={{
                                width: isVisible ? `${skill.level}%` : "0%",
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
