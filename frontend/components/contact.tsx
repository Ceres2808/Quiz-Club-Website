import { MapPin, Mail, Phone } from "lucide-react"
import { FloatingQuestions } from "./quiz-decorations"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <FloatingQuestions className="opacity-15" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions or want to join our club? Reach out to us!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="quiz-box p-6 group">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-900/40 text-yellow-400 mb-4 group-hover:animate-glow">
                <MapPin className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                Location
              </h4>
              <p className="text-gray-400">
                Student Center, Room 203
                <br />
                University Campus
                <br />
                College Town, ST 12345
              </p>
            </div>
          </div>

          <div className="quiz-box p-6 group">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-900/40 text-yellow-400 mb-4 group-hover:animate-glow">
                <Mail className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                Email
              </h4>
              <p className="text-gray-400">
                <a href="mailto:info@quizclub.edu" className="hover:text-yellow-400 transition-colors">
                  info@quizclub.edu
                </a>
                <br />
                <a href="mailto:president@quizclub.edu" className="hover:text-yellow-400 transition-colors">
                  president@quizclub.edu
                </a>
              </p>
            </div>
          </div>

          <div className="quiz-box p-6 group">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-900/40 text-yellow-400 mb-4 group-hover:animate-glow">
                <Phone className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                Phone
              </h4>
              <p className="text-gray-400">
                <a href="tel:+11234567890" className="hover:text-yellow-400 transition-colors">
                  (123) 456-7890
                </a>
                <br />
                Mon-Fri, 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
