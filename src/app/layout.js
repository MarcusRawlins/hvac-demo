import './globals.css'

export const metadata = {
  title: 'Blue Ridge HVAC | Richmond VA Heating & Air Conditioning',
  description: '20+ years serving Richmond VA. 24/7 emergency HVAC service. Call (804) 555-2468 for heating, cooling, and air quality solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
