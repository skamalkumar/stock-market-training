import { LineChart, BookOpen, Briefcase, TrendingUp, Users, Target } from 'lucide-react'
import Image from 'next/image'

export default function Courses() {
  const courses = [
    {
      icon: BookOpen,
      title: "Beginner to Advanced Training",
      description: "Step-by-step learning path covering basics of investing to advanced trading strategies.",
      features: ["Stock Market Basics", "Technical Analysis", "Fundamental Analysis", "Advanced Derivatives"],
      color: "blue"
    },
    {
      icon: LineChart,
      title: "Research Analyst Program",
      description: "Master equity research and financial modeling with industry-standard techniques.",
      features: ["Equity Valuation", "Financial Modeling", "Ratio Analysis", "Report Writing"],
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Derivatives & F&O Training",
      description: "Learn Futures, Options, and advanced strategies for hedging and trading.",
      features: ["Options Strategies", "Futures Trading", "Risk Management", "Volatility Analysis"],
      color: "purple"
    },
    {
      icon: Briefcase,
      title: "Portfolio Management",
      description: "Practical insights into building and managing investment portfolios.",
      features: ["Asset Allocation", "Risk Profiling", "Wealth Creation", "Performance Tracking"],
      color: "indigo"
    },
    {
      icon: Users,
      title: "Career Oriented Courses",
      description: "Specialized training for aspiring finance professionals.",
      features: ["Research Analyst Prep", "Investment Adviser Prep", "Portfolio Manager Pathway", "Financial Planner Certification"],
      color: "red"
    },
    {
      icon: Target,
      title: "Live Market Training",
      description: "Real-time market sessions to practice strategies with expert guidance.",
      features: ["Live Trading Sessions", "Market Psychology", "Strategy Backtesting", "Case Studies"],
      color: "yellow"
    }
  ]

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Training Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive stock market courses designed for beginners, traders, and finance professionals.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course, index) => {
              const IconComponent = course.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-green-300 group"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-800 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-green-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <Image 
                src="https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Stock Market Training Live Sessions"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Ready to Start Your Stock Market Journey?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our expert-led courses and gain practical knowledge to succeed in trading, investing, or building a finance career.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-green-800 text-white px-8 py-4 rounded-lg hover:bg-green-900 transition-colors duration-200 font-medium shadow-lg"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
