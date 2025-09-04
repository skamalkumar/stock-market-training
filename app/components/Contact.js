"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info@stockmarkettraining.org",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 7989456792",
    subContent: "+91 9290693926",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Hyderabad, Telangana",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon – Sat: 09:00 AM - 07:00 PM",
  },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      alert("Something went wrong: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          {contactInfo.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex-shrink-0">
                <item.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
                {item.subContent && (
                  <p className="text-gray-600">{item.subContent}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Contact Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center p-10 bg-green-50 rounded-xl shadow-lg text-center">
              <CheckCircle2 className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-700">
                ✅ Thank you! Your message has been sent.
              </h3>
              <p className="text-gray-600 mt-2">
                Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Contact Us
              </h2>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Hidden form-name input */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field */}
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Service
                  </label>
                  <input
                    type="text"
                    name="service"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 transition"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
