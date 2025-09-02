"use client";
import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Courses />
      <About />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}