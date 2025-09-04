"use client";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

      {isSubmitted ? (
        <p className="text-green-600 font-semibold">
          ✅ Thank you! Your message has been sent successfully. We&apos;ll get
          back to you within 24 hours.
        </p>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Required hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field */}
          <div hidden>
            <label>
              Don&apos;t fill this out if you&apos;re human:{" "}
              <input name="bot-field" />
            </label>
          </div>

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Company</label>
            <input
              type="text"
              name="company"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Service</label>
            <select
              name="service"
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="stock-training">Stock Market Training</option>
              <option value="trading-strategies">Trading Strategies</option>
              <option value="investment-advisory">
                Investment Advisory
              </option>
              <option value="portfolio-management">
                Portfolio Management
              </option>
              <option value="financial-planning">Financial Planning</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
