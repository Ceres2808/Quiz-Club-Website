"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, HelpCircle } from "lucide-react"
import { TriviaFact } from "./quiz-decorations"

const events = [
  {
    id: 1,
    title: "General Knowledge Quiz",
    date: "October 15, 2023",
    time: "3:00 PM - 5:00 PM",
    location: "Main Auditorium",
    description:
      "Test your general knowledge across various domains including history, science, arts, and current affairs.",
  },
  {
    id: 2,
    title: "Science & Technology Quiz",
    date: "October 22, 2023",
    time: "4:00 PM - 6:00 PM",
    location: "Science Block, Room 103",
    description: "A specialized quiz focusing on scientific discoveries, technological innovations, and breakthroughs.",
  },
  {
    id: 3,
    title: "Inter-College Quiz Championship",
    date: "November 5, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Central Convention Center",
    description: "Our flagship event where colleges compete for the prestigious Quiz Champion title.",
  },
]

export default function Events() {
  return (
    <section id="events" className="py-16 md:py-24 relative quiz-pattern-bg overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <HelpCircle className="text-yellow-400 w-8 h-8 mr-3 animate-float-slow" />
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Upcoming Events
            </h2>
            <HelpCircle className="text-yellow-400 w-8 h-8 ml-3 animate-float-medium" />
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Mark your calendars for these exciting quiz events and competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="quiz-box overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/0 via-yellow-400/0 to-yellow-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2 text-yellow-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-2 text-yellow-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-4 w-4 mr-2 text-yellow-400" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{event.description}</p>

                <Button
                  className="w-full bg-gray-900/60 hover:bg-yellow-400/40 text-white border border-transparent hover:border-yellow-400/60 transition-all duration-300 hover:shadow-md hover:shadow-yellow-400/30 transform hover:translate-y-[-3px]"
                  onClick={() => {
                    alert(`Registration for ${event.title} will open soon!`)
                  }}
                >
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <TriviaFact />
        </div>
      </div>
    </section>
  )
}
