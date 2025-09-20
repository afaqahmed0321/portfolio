import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Javascript Engineer | Mern & Cloud",
      company: "Artilence",
      location: "Lahore, Pakistan",
      period: "May 2023 – Sep 2024",
      description: [
        "Developed Multiple Projects at eSoftage, Worked on map-based, referral, and MS Word-like editor modules",
        "Lead projects with React-Native, Angular.js, and Postgress, managing real-time data using REST APIs",
        "Leveraged technologies like React-Native, React.js, Angular and Postgress for successful outcomes",
        "Guided and mentored the team, fostering continuous learning and adaptation",
        "Lead project and responsible for deliver on time",
        "Manage frontend team and collaborate with backend team and designers as well",
        "Develop logical UI, integrate backend APIs, third party services like stripe, dots, Apple Pay etc",
      ],
    },
    {
      title: "Senior Fullstack Engineer",
      company: "TechMade",
      location: "Remote",
      period: "Oct 2023 – Oct 2024",
      description: [
        "Led a Fullstack team of 4 developers, ensuring best practices in code quality, security, and performance",
        "Developed and maintained the company's SaaS dashboard using React + TypeScript",
        "Responsible for multiple projects including Frontend, Backend, Client Calls, and technical leadership",
        "Built a custom component library for UI consistency across products",
        "Ensured SOC 2 Type 2 compliance by integrating robust security practices",
        "Conducted weekly code reviews, standups, and mentoring sessions for junior developers",
      ],
      current: true,
    },
    {
      title: "Software Engineer",
      company: "eSoftage",
      location: "Lahore, Pakistan",
      period: "May 2022 – Sep 2023",
      description: [
        "Developed and maintained web applications using React Js, Next Js and Node Js",
        "Participated in the full software development lifecycle, including coding, testing, and deployment",
        "Troubleshot and debugged issues, implemented new features, and enhanced applications based on client requirements",
        "Demonstrated a strong understanding of JavaScript fundamentals",
        "Collaborated effectively at XeroBit Technologies, engaging in brainstorming sessions, sharing insights, and fostering teamwork",
        "Contributed to team projects and achieved project milestones",
      ],
    },
    {
      title: "Software Engineer",
      company: "XEROBIT TECHNOLOGY LTD",
      location: "Remote",
      period: "Feb 2021 – Apr 2022",
      description: [
        "Assisted in developing a customer analytics dashboard using React and PHP",
        "Built API endpoints for data visualization using Nodejs",
        "Collaborated with designers to improve UX/UI consistency",
        "Composed technical documentation and onboarded new developers",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "REDFIRE AI",
      location: "onsite",
      period: "Mar 2020 – Feb 2021",
      description: [
        "Assisted in developing a customer analytics dashboard using React and PHP",
        "Built API endpoints for data visualization using Nodejs",
        "Collaborated with designers to improve UX/UI consistency",
        "Composed technical documentation and onboarded new developers",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gray-400/10 rounded-full blur-xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            About my professional Journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-700/60 to-gray-700/40 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 border-gray-900 hidden md:block ${
                    exp.current ? "bg-yellow-500 shadow-lg" : "bg-gray-500"
                  }`}
                ></div>

                <div className="md:ml-16">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl hover:border-yellow-400/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <h4 className="text-xl font-semibold text-yellow-400 mb-2">{exp.company}</h4>
                      </div>
                      {exp.current && (
                        <span className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-300 text-sm font-medium rounded-full border border-amber-400/20">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 text-gray-300 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-gray-200">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
