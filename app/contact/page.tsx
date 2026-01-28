'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider mb-4">
            GET IN TOUCH
          </h1>
          <p className="font-body text-white/60 text-xl tracking-wide">
            Bookings, collaborations, and inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-body text-white text-sm uppercase tracking-wider mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-brand-gray border border-white/20 text-white font-body focus:outline-none focus:border-brand-red transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-body text-white text-sm uppercase tracking-wider mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-brand-gray border border-white/20 text-white font-body focus:outline-none focus:border-brand-red transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-body text-white text-sm uppercase tracking-wider mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-brand-gray border border-white/20 text-white font-body focus:outline-none focus:border-brand-red transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="press">Press / Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-body text-white text-sm uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-brand-gray border border-white/20 text-white font-body focus:outline-none focus:border-brand-red transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full px-8 py-4 font-body tracking-widest uppercase transition-all ${
                  submitted
                    ? 'bg-green-600 text-white'
                    : 'bg-brand-red hover:bg-brand-red/80 text-white hover:scale-105'
                }`}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-brand-gray p-8 border border-white/10">
              <h3 className="font-display text-3xl text-white tracking-wider mb-6">
                BOOKING INFO
              </h3>
              <div className="space-y-4 font-body text-white/80">
                <p>
                  For booking inquiries and event scheduling, please fill out the form with your event details, date, and location.
                </p>
                <p>
                  Average response time: 24-48 hours
                </p>
              </div>
            </div>

            <div className="bg-brand-gray p-8 border border-white/10">
              <h3 className="font-display text-3xl text-white tracking-wider mb-6">
                PRESS KIT
              </h3>
              <div className="space-y-4 font-body text-white/80">
                <p>
                  High-resolution photos, bio, and press materials available upon request for media and promotional purposes.
                </p>
                <button className="px-6 py-3 border border-white/30 hover:border-brand-red hover:text-brand-red text-white tracking-wider uppercase text-sm transition-colors">
                  Download Press Kit
                </button>
              </div>
            </div>

            <div className="bg-brand-gray p-8 border border-white/10">
              <h3 className="font-display text-3xl text-white tracking-wider mb-6">
                CONNECT
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/30 hover:border-brand-red rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-brand-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://soundcloud.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/30 hover:border-brand-red rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-brand-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106s-1.304-3.106-2.911-3.106c-.506 0-.982.143-1.391.401-.188-.672-.411-1.326-.819-1.11z"/>
                  </svg>
                </a>
                <a 
                  href="https://spotify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/30 hover:border-brand-red rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-brand-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
