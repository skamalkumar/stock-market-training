import './globals.css'

export const metadata = {
  title: 'Stock Market Training - Learn. Invest. Grow.',
  description: 'India’s trusted platform for learning stock markets. Join our courses to master trading, investing, and financial growth.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" /> 
      </head>
      <body>{children}</body>
    </html>
  )
}
