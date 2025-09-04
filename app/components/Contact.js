"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@stockmarkettraining.org",
      subContent: "",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 7989456792",
      subContent: "+91 9290693926",
      color: "green",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Hyderabad, Telangana",
      subContent: "",
      color: "purple",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday to Saturday: 09:00 AM - 07:00 PM",
      subContent: "",
      color: "indigo",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your stock market journey? Let&apos;s discuss how we can guide you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to help you learn and grow. Reach out to us through any of the following channels.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-600">{info.content}</p>
                        {info.subContent && (
                          <p className="text-gray-600">{info.subContent}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="relative bg-white rounded-2xl p-8 shadow-lg overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Stock market training consultation"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">
                    Why Contact Us?
                  </h4>
                  <div className="space-y-4">
                    {[
                      "Free initial consultation",
                      "24-hour response time",
                      "Customized training plans",
                      "Expert guidance from professionals",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Send Us a Message
                  </h3>
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Required hidden input for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />

                    {/* Honeypot */}
                    <div className="hidden">
                      <label>
                        Don&apos;t fill this out if you&apos;re human:{" "}
                        <input name="bot-field" />
                      </label>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors duration-200"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors duration-200"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors duration-200"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select a service</option>
                        <option value="beginner-course">Beginner Stock Market Course</option>
                        <option value="advanced-trading">Advanced Trading Strategies</option>
                        <option value="technical-analysis">Technical Analysis</option>
                        <option value="fundamental-analysis">Fundamental Analysis</option>
                        <option value="derivatives">Futures & Options (Derivatives)</option>
                        <option value="investment-planning">Investment & Wealth Planning</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors duration-200"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-800 text-white px-6 py-4 rounded-lg hover:bg-green-900 disabled:bg-gray-400 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium shadow-lg"
                    >
                      <Send className="h-5 w-5" />
                      <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
