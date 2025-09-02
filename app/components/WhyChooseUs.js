import { BookOpen, TrendingUp, BarChart3, Users, Target, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "From basics to advanced concepts, covering equities, derivatives, research, and portfolio management.",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Real Market Insights",
      description: "Learn with live market examples, practical case studies, and hands-on trading strategies.",
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Industry-Relevant Training",
      description: "Designed for aspiring Research Analysts, Derivatives Analysts, Financial Planners, and Portfolio Managers.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Experienced market professionals and SEBI-certified trainers with proven track record.",
      color: "indigo"
    },
    {
      icon: Target,
      title: "Career-Focused Approach",
      description: "Skill development tailored for jobs, certifications, and entrepreneurship in stock markets.",
      color: "yellow"
    },
    {
      icon: CheckCircle,
      title: "Trusted by Learners",
      description: "Hundreds of students trained and successfully placed in financial institutions and corporates.",
      color: "red"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Foundation Building",
      description: "Start with basics of stock markets, trading instruments, and market structure."
    },
    {
      step: "02",
      title: "Advanced Modules",
      description: "Learn technical analysis, derivatives, research methodologies, and risk management."
    },
    {
      step: "03",
      title: "Practical Exposure",
      description: "Work on live market scenarios, trading simulations, and real-world case studies."
    },
    {
      step: "04",
      title: "Assessments & Projects",
      description: "Regular tests, assignments, and projects to ensure concept clarity and application."
    },
    {
      step: "05",
      title: "Certification & Placement Support",
      description: "Get industry-recognized certification and career guidance for top financial roles."
    }
  ]

  return (
    <section id="whychooseus" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose StockMarketTraining.org?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              India’s trusted platform for stock market learning — designed for beginners, traders, and finance professionals.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-green-300 group"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-800 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-green-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Process Section */}
          <div className="relative bg-gradient-to-br from-green-50 to-orange-50 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-5">
              <Image 
                src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Stock market training process workflow"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Our Learning Process
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A step-by-step approach designed to make you confident and market-ready.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {process.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                          {step.step}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Arrow for desktop */}
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-0.5 bg-green-400"></div>
                        <div className="w-0 h-0 border-l-4 border-l-green-400 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready to Start Your Stock Market Journey?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Learn from experts, gain practical exposure, and build a successful career in financial markets.
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
    </section>
  )
}
