// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Stock Market Training",
  description: "Learn stock market trading and investment strategies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Hidden static form for Netlify recognition */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          hidden
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>

        {/* Your actual app */}
        {children}
      </body>
    </html>
  );
}
