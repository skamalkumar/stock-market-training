"use client";
import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      setIsSubmitted(true);
    } catch (error) {
      alert("Something went wrong: " + error.message);
    }
  };

  if (isSubmitted) {
    return (
      <p className="text-green-600 font-semibold">
        ✅ Thank you! Your message has been sent successfully.
      </p>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white rounded-xl shadow-md"
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
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Service</label>
        <input
          type="text"
          name="service"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          rows="4"
          required
          className="mt-1 block w-full border rounded-md p-2"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
}
