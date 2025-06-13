import { HelpCircle, LightbulbIcon, BrainCircuit, Sparkles } from "lucide-react"

export function QuizDecoration({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none opacity-25 ${className}`}>
      <div className="relative w-full h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HelpCircle
          className="absolute text-yellow-400 w-10 h-10 animate-float-fast"
          style={{ top: "15%", left: "15%" }}
        />
        <HelpCircle
          className="absolute text-yellow-400 w-8 h-8 animate-float-medium"
          style={{ top: "30%", right: "15%" }}
        />
        <HelpCircle
          className="absolute text-yellow-400 w-6 h-6 animate-float-slow"
          style={{ bottom: "20%", left: "25%" }}
        />
        <LightbulbIcon
          className="absolute text-yellow-400 w-12 h-12 animate-float-medium"
          style={{ top: "15%", right: "25%" }}
        />
        <BrainCircuit
          className="absolute text-yellow-400 w-14 h-14 animate-float-slow"
          style={{ bottom: "30%", right: "20%" }}
        />
        <Sparkles className="absolute text-yellow-400 w-10 h-10 animate-pulse" style={{ bottom: "10%", left: "40%" }} />
      </div>
    </div>
  )
}

export function QuizPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden opacity-15 pointer-events-none ${className}`}>
      <div className="absolute -inset-[50%] grid grid-cols-12 gap-4 transform rotate-12">
        {Array.from({ length: 150 }).map((_, i) => (
          <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
        ))}
      </div>
    </div>
  )
}

export function FloatingQuestions({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="relative w-full h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {Array.from({ length: 20 }).map((_, i) => {
          const size = Math.floor(Math.random() * 24) + 16
          const left = Math.floor(Math.random() * 80) + 10
          const top = Math.floor(Math.random() * 80) + 10
          const delay = Math.floor(Math.random() * 5)
          const duration = Math.floor(Math.random() * 8) + 8

          return (
            <div
              key={i}
              className="absolute text-yellow-400/30 font-bold"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                fontSize: `${size}px`,
                animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
              }}
            >
              ?
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TriviaFact() {
  const facts = [
    "The first televised quiz show was 'Spelling Bee' in 1938.",
    "The highest prize ever won on a quiz show was $3.5 million.",
    "The term 'quiz' originally meant an eccentric person.",
    "The longest-running quiz show is 'University Challenge' in the UK.",
    "The human brain can store approximately 2.5 petabytes of information.",
    "The first multiple-choice test was developed in 1914.",
    "The world's largest quiz competition had over 2,500 participants.",
    "The word 'trivia' comes from Latin meaning 'three roads'.",
  ]

  const randomFact = facts[Math.floor(Math.random() * facts.length)]

  return (
    <div className="bg-yellow-400/15 border border-yellow-400/30 rounded-lg p-4 flex items-start hover:bg-yellow-400/20 transition-all duration-300">
      <LightbulbIcon className="text-yellow-400 w-6 h-6 mr-3 flex-shrink-0 mt-1 animate-pulse" />
      <div>
        <p className="font-medium text-yellow-400 mb-1">Did you know?</p>
        <p className="text-gray-300 text-sm">{randomFact}</p>
      </div>
    </div>
  )
}
