import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
              Afaq Ahmed
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating exceptional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/afaqahmed0321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/afaqahmed77"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors p-2 bg-white/5 rounded-lg hover:bg-amber-400/10"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:afaqahmed0321@gmail.com"
                className="text-gray-400 hover:text-amber-400 transition-colors p-2 bg-white/5 rounded-lg hover:bg-amber-400/10"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>afaqahmed0321@gmail.com</p>
              <p>+92 301 3740860</p>
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made by Afaq Ahmed © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
