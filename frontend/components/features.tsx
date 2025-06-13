import { Brain, Trophy, Users, Calendar, MessageSquare } from "lucide-react"
import { QuizPattern } from "./quiz-decorations"

const features = [
  {
    name: "Weekly Quiz Sessions",
    description:
      "Participate in our weekly quiz sessions covering various topics from general knowledge to specialized subjects.",
    icon: Brain,
  },
  {
    name: "Competitive Teams",
    description: "Join our competitive teams that represent the college in regional and national quiz competitions.",
    icon: Trophy,
  },
  {
    name: "Community Building",
    description: "Connect with like-minded individuals who share your passion for knowledge and learning.",
    icon: Users,
  },
  {
    name: "Special Events",
    description: "Attend and organize special quiz events, workshops, and knowledge-sharing sessions.",
    icon: Calendar,
  },
  {
    name: "Mentorship Program",
    description: "Get guidance from experienced quizzers and alumni who have excelled in the field.",
    icon: MessageSquare,
  },
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-black relative">
      <QuizPattern className="opacity-15" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            What We Offer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our quiz club provides a platform for knowledge enthusiasts to learn, compete, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="quiz-box p-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/10 group-hover:to-yellow-400/15 rounded-xl transition-all duration-500" />

              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-900/40 text-yellow-400 mb-4 group-hover:animate-glow">
                <feature.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                {feature.name}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
