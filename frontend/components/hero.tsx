"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { FloatingQuestions } from "./quiz-decorations"

export default function Hero() {
  return (
    <section id="about" className="relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] left-[50%] w-[600px] h-[600px] bg-yellow-400/25 rounded-full blur-[100px] transform -translate-x-1/2" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-yellow-400/15 rounded-full blur-[80px]" />
      </div>

      {/* Floating question marks */}
      <div className="absolute inset-0 w-full h-full">
        <FloatingQuestions className="opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 relative">
            <div className="absolute -inset-6 rounded-full bg-yellow-400/30 blur-md animate-pulse"></div>
            <Image
              src="/images/quiz-club-logo.png"
              alt="Quiz Club Logo"
              width={120}
              height={120}
              className="object-contain relative z-10"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Think Smart.</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500 relative">
              Quiz Smarter.
              <span className="absolute -top-8 -right-8 text-3xl text-yellow-400 opacity-70 rotate-12 animate-float-medium">
                ?
              </span>
              <span className="absolute -bottom-6 -left-6 text-4xl text-yellow-400 opacity-60 -rotate-6 animate-float-slow">
                ?
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
            Join the premier quiz club on campus. We host exciting quiz competitions, train champions, and foster a
            community of knowledge enthusiasts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-6 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:translate-y-[-3px]"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join Our Club
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-yellow-500/30 hover:border-yellow-500/60 text-gray-200 font-medium px-8 py-6 rounded-xl backdrop-blur-sm bg-black/50 hover:bg-black/70 transition-all duration-300 transform hover:translate-y-[-3px]"
              onClick={() => document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" })}
            >
              Upcoming Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
