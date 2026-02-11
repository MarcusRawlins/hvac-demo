'use client'

import { useState } from 'react'

// Real Unsplash photos for HVAC
const images = {
  hero: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80',
  acInstall: 'https://images.unsplash.com/photo-1631545806609-3a4c7dce0969?w=800&q=80',
  heating: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
  maintenance: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
  ductwork: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
  commercial: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  emergency: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80',
  team: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
  avatar1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  avatar2: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
  avatar3: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
}

const services = [
  {
    title: 'AC Installation',
    description: 'Expert installation of high-efficiency air conditioning systems. We help you choose the perfect unit for your home and budget.',
    image: images.acInstall,
  },
  {
    title: 'Heating Systems',
    description: 'Complete furnace and heat pump installation, repair, and replacement. Stay warm all winter with reliable heating.',
    image: images.heating,
  },
  {
    title: 'Preventive Maintenance',
    description: 'Keep your system running efficiently with our seasonal tune-ups. Prevent costly breakdowns and extend equipment life.',
    image: images.maintenance,
  },
  {
    title: 'Ductwork Services',
    description: 'Professional duct cleaning, sealing, and installation. Improve air quality and system efficiency throughout your home.',
    image: images.ductwork,
  },
  {
    title: 'Commercial HVAC',
    description: 'Comprehensive heating and cooling solutions for businesses of all sizes. Minimize downtime, maximize comfort.',
    image: images.commercial,
  },
  {
    title: '24/7 Emergency Repair',
    description: "HVAC emergencies don't wait, and neither do we. Call anytime for fast, reliable emergency service.",
    image: images.emergency,
  },
]

const testimonials = [
  {
    name: 'Michael Thompson',
    location: 'Richmond, VA',
    text: "Blue Ridge installed our new heat pump last winter. The crew was professional, clean, and finished ahead of schedule. Our energy bills dropped 30%!",
    avatar: images.avatar1,
  },
  {
    name: 'Sarah Martinez',
    location: 'Henrico, VA',
    text: "After our AC died on the hottest day of summer, Blue Ridge had a tech here within 2 hours. They've earned a customer for life.",
    avatar: images.avatar2,
  },
  {
    name: 'David Chen',
    location: 'Chesterfield, VA',
    text: "We've used Blue Ridge for our office building for 5 years. Their maintenance program has saved us thousands in potential repairs.",
    avatar: images.avatar3,
  },
]

const serviceAreas = [
  'Richmond', 'Henrico', 'Chesterfield', 'Hanover', 
  'Glen Allen', 'Midlothian', 'Short Pump', 'Mechanicsville',
  'Ashland', 'Colonial Heights', 'Petersburg', 'Hopewell'
]

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '15,000+', label: 'Happy Customers' },
  { value: '24/7', label: 'Emergency Service' },
  { value: '100%', label: 'Satisfaction Guarantee' },
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-navy/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">Blue Ridge</span>
              <span className="text-2xl font-light text-sky-brand ml-1">HVAC</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition">Reviews</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
              <a href="tel:8045552468" className="bg-orange-accent hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition">
                (804) 555-2468
              </a>
            </div>
            <a href="tel:8045552468" className="md:hidden bg-orange-accent hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.hero})` }}
        >
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Richmond's Trusted <span className="text-sky-brand">HVAC Experts</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            20+ years keeping Virginia families comfortable. 24/7 emergency service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-orange-accent hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg"
            >
              Get Free Estimate
            </a>
            <a 
              href="tel:8045552468" 
              className="bg-sky-brand hover:bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg"
            >
              Call (804) 555-2468
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive heating, cooling, and air quality solutions for homes and businesses throughout Richmond.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Stats */}
      <section id="about" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Local HVAC Partner Since 2004
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Blue Ridge HVAC was founded with a simple mission: provide Richmond families with honest, reliable heating and cooling services at fair prices.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Two decades later, we've grown from a one-truck operation to a team of certified technicians serving the entire Richmond metro area. But our commitment to quality and customer service remains unchanged.
              </p>
              <p className="text-gray-300 text-lg">
                Every technician is background-checked, drug-tested, and factory-trained. We stand behind our work with a 100% satisfaction guarantee.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={images.team} 
                alt="Blue Ridge HVAC team"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-sky-brand mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied Richmond homeowners</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-navy">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-sky-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Proudly Serving the Greater Richmond Area
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <span 
                key={index}
                className="bg-white/20 text-white px-4 py-2 rounded-full text-sm md:text-base"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Get Your Free Estimate
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Ready to upgrade your comfort? Fill out the form and we'll contact you within 24 hours with a free, no-obligation estimate.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-sky-brand/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-sky-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Phone</div>
                    <a href="tel:8045552468" className="text-sky-brand hover:underline">(804) 555-2468</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-sky-brand/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-sky-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Location</div>
                    <div className="text-gray-600">Richmond, VA & Surrounding Areas</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Emergency Service</div>
                    <div className="text-orange-accent font-medium">24/7 Available</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-brand focus:border-transparent outline-none transition"
                    placeholder="John Smith"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-brand focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-brand focus:border-transparent outline-none transition"
                      placeholder="(804) 555-1234"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-brand focus:border-transparent outline-none transition bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="ac-install">AC Installation</option>
                    <option value="ac-repair">AC Repair</option>
                    <option value="heating">Heating Services</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="ductwork">Ductwork</option>
                    <option value="commercial">Commercial HVAC</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-brand focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your HVAC needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-accent hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition shadow-lg"
                >
                  Request Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-white">Blue Ridge</span>
                <span className="text-2xl font-light text-sky-brand ml-1">HVAC</span>
              </div>
              <p className="text-gray-400 mb-4">
                Richmond's trusted heating and cooling experts since 2004. Licensed, insured, and committed to your comfort.
              </p>
              <a href="tel:8045552468" className="text-sky-brand text-xl font-semibold hover:underline">
                (804) 555-2468
              </a>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">AC Installation</a></li>
                <li><a href="#services" className="hover:text-white transition">Heating Systems</a></li>
                <li><a href="#services" className="hover:text-white transition">Maintenance</a></li>
                <li><a href="#services" className="hover:text-white transition">Emergency Repair</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Blue Ridge HVAC. All rights reserved. Licensed in Virginia.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
