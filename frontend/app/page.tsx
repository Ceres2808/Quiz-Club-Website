import Hero from "@/components/hero"
import Features from "@/components/features"
import Events from "@/components/events"
import Achievements from "@/components/achievements"
import Members from "@/components/members"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Events />
      <Achievements />
      <Members />
      <Contact />
    </main>
  )
}
