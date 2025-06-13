import { Trophy, Award, Medal } from "lucide-react"
import { QuizDecoration } from "./quiz-decorations"

const achievements = [
  {
    year: "2023",
    title: "National Quiz Championship",
    position: "Winners",
    icon: Trophy,
  },
  {
    year: "2022",
    title: "Regional Science Quiz",
    position: "Runners-up",
    icon: Medal,
  },
  {
    year: "2022",
    title: "Inter-University Knowledge Bowl",
    position: "Winners",
    icon: Trophy,
  },
  {
    year: "2021",
    title: "Tech Quiz Masters",
    position: "Third Place",
    icon: Award,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* The decorative elements container */}
      <div className="absolute inset-0 w-full h-full">
        <QuizDecoration />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A track record of excellence in quiz competitions at various levels.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-yellow-400/40" />

            {/* Achievement items */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/30 flex items-center justify-center animate-pulse">
                    <achievement.icon className="h-4 w-4 text-black" />
                  </div>

                  {/* Content */}
                  <div
                    className={`relative ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-[55%] md:pr-12" : "md:ml-[55%] md:pl-12"
                    } quiz-box p-4 group`}
                  >
                    <div className="absolute top-4 right-4 text-sm font-semibold px-2 py-1 rounded-full bg-yellow-900/40 text-yellow-400 group-hover:bg-yellow-800/50 transition-colors duration-300">
                      {achievement.year}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors duration-300">
                      {achievement.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
