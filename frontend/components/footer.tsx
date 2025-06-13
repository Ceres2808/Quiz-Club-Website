"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, HelpCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center mb-4">
              <div className="relative h-10 w-10 mr-2">
                <div className="absolute -inset-1 rounded-full bg-yellow-400/30 blur-sm"></div>
                <Image
                  src="/images/quiz-club-logo.png"
                  alt="Quiz Club Logo"
                  width={40}
                  height={40}
                  className="object-contain relative z-10"
                />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
                QuizClub
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              The premier quiz club at our college, fostering knowledge, critical thinking, and a competitive spirit
              through engaging quiz events and competitions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <HelpCircle className="h-4 w-4 text-yellow-400 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="text-yellow-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#events"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="text-yellow-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#achievements"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#achievements")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="text-yellow-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  href="#members"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#members")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="text-yellow-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="text-yellow-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <HelpCircle className="h-4 w-4 text-yellow-400 mr-2" />
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="text-yellow-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Quiz Archives
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="text-yellow-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Learning Materials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="text-yellow-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Quiz Preparation Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="text-yellow-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="text-yellow-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Join Our Team
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Quiz Club. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
