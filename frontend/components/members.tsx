import Image from "next/image"

const members = [
  {
    name: "Alex Johnson",
    role: "Club President",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Jamie Smith",
    role: "Vice President",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Taylor Williams",
    role: "Quiz Master",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Morgan Brown",
    role: "Event Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function Members() {
  return (
    <section id="members" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The passionate individuals behind our quiz club's success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
