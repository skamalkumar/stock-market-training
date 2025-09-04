'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(v => !v)

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const NavLink = ({ href, children }) => (
    <a
      href={`#${href}`}
      onClick={(e) => { e.preventDefault(); scrollToSection(href) }}
      className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  )

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-2">
            <Image
              src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Stock Market Training Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Stock Market Training</h1>
              <p className="text-sm text-gray-600">Learn. Invest. Grow.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden md:flex items-center space-x-8">
            <NavLink href="home">Home</NavLink>
            <NavLink href="courses">Courses</NavLink>
            <NavLink href="about">About</NavLink>
            <NavLink href="whychooseus">Why Choose Us</NavLink>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-gray-700 hover:text-blue-800 transition-colors duration-200"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav aria-label="Mobile" className="flex flex-col space-y-4">
              <NavLink href="home">Home</NavLink>
              <NavLink href="courses">Courses</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="whychooseus">Why Choose Us</NavLink>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-left w-fit shadow-lg"
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
