import { Award, Target, Users, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const stats = [
    {
      icon: Users,
      number: "5,000+",
      label: "Learners Trained",
      color: "blue"
    },
    {
      icon: Award,
      number: "90%+",
      label: "Certification Success Rate",
      color: "green"
    },
    {
      icon: Target,
      number: "15+",
      label: "Years of Market Experience",
      color: "purple"
    },
    {
      icon: TrendingUp,
      number: "Beginner to Advanced",
      label: "Comprehensive Courses",
      color: "indigo"
    }
  ]

  const values = [
    {
      title: "Excellence in Education",
      description: "We deliver world-class stock market training, keeping pace with evolving financial markets."
    },
    {
      title: "Integrity",
      description: "Our courses are built on transparency, ethics, and a commitment to empowering learners."
    },
    {
      title: "Practical Learning",
      description: "We focus on real-world applications through live case studies, simulations, and practice sessions."
    },
    {
      title: "Student Success",
      description: "We are dedicated to helping learners achieve their career goals and financial independence."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About StockMarketTraining.org
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted platform for learning the Indian stock market, from basics to advanced strategies.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Transforming Beginners into Confident Market Professionals
              </h3>
              <p className="text-gray-600 leading-relaxed">
                StockMarketTraining.org is dedicated to providing practical, hands-on learning in Indian stock markets. 
                From beginners to aspiring analysts and traders, our structured programs help learners build a strong 
                foundation and grow into professionals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our curriculum is aligned with SEBI and NISM standards, covering everything from equity research, 
                derivatives, and technical analysis to financial planning and portfolio management.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With expert-led sessions, real market case studies, and mentorship, we ensure learners gain both 
                knowledge and application skills needed to succeed in the markets.
              </p>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              {/* About Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image 
                  src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Stock market training session"
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h4>
                <p className="text-gray-600">
                  To empower individuals with high-quality stock market education that builds confidence, skills, 
                  and financial independence.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h4>
                <p className="text-gray-600">
                  To be India’s most trusted learning destination for stock market education, shaping the next 
                  generation of analysts, investors, and wealth creators.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-800" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-l-4 hover:border-l-orange-400">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
