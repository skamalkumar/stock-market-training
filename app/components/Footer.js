'use client'

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Stock Market Training',
    'Trading & Investing Courses',
    'Technical Analysis Classes',
    'Fundamental Analysis Workshops',
    'Financial Planning Guidance',
    'Mentorship & Live Market Practice'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <Image 
          src="https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Stock Market Training - Learn Investing and Trading" 
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Master the Stock Market with Expert Training
            </h3>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Join India’s leading stock market training institute and learn trading, investing, and wealth-building strategies.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Image 
                  src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Stock Market Training Logo"
                  width={40}
                  height={40}
                  className="h-5 w-5 rounded-full"
                />

                <div>
                  <h3 className="text-xl font-bold">StockMarketTraining.org</h3>
                  <p className="text-gray-400 text-sm">Learn. Trade. Succeed.</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                We provide high-quality stock market education, helping beginners and professionals gain confidence in trading, investing, and financial planning.
              </p>
              
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Training Programs</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400">Hyderabad, Telangana, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="text-gray-400">+91 7989456792</p>
                    <p className="text-gray-400">+91 9290693926</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="text-gray-400">info@stockmarkettraining.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 StockMarketTraining.org | Learn Stock Trading, Investing & Technical Analysis. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
