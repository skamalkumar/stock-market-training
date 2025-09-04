"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
          >
            {/* Required hidden input */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field */}
            <div hidden>
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </div>

            <div>
              <label className="block mb-1 font-medium">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message *</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
