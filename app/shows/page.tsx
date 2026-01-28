import Image from 'next/image'

export default function Shows() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider mb-4">
            UPCOMING SHOWS
          </h1>
          <p className="font-body text-white/60 text-xl tracking-wide">
            Catch Play The Line Live
          </p>
        </div>

        {/* Featured Show Flyer */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/assets/shows/Upcoming.PNG"
              alt="Upcoming Shows"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Future Shows Section */}
        <div className="mt-20">
          <h2 className="font-display text-4xl text-white tracking-wider text-center mb-12">
            MORE DATES COMING SOON
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Placeholder Show Cards */}
            {[1, 2].map((num) => (
              <div 
                key={num}
                className="bg-brand-gray p-8 border border-white/10 hover:border-brand-red transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-body text-brand-red text-sm uppercase tracking-wider mb-2">
                      TBA
                    </p>
                    <h3 className="font-body text-2xl text-white tracking-wide mb-2">
                      New Show Announcement
                    </h3>
                    <p className="font-body text-white/60">
                      Location TBA
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl text-white">
                      TBA
                    </p>
                    <p className="font-body text-white/60 text-sm">
                      2026
                    </p>
                  </div>
                </div>
                
                <button 
                  disabled
                  className="w-full px-6 py-3 border border-white/30 text-white/40 font-body tracking-wider uppercase cursor-not-allowed"
                >
                  Details Coming Soon
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 max-w-2xl mx-auto text-center">
          <div className="bg-brand-gray p-12 border border-white/10">
            <h3 className="font-display text-3xl text-white tracking-wider mb-4">
              STAY UPDATED
            </h3>
            <p className="font-body text-white/60 mb-8">
              Get notified about new shows and exclusive announcements
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 bg-black border border-white/20 text-white font-body focus:outline-none focus:border-brand-red"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-brand-red hover:bg-brand-red/80 text-white font-body tracking-widest uppercase transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Booking Info */}
        <div className="mt-12 text-center">
          <p className="font-body text-white/40 mb-2">
            Interested in booking Play The Line?
          </p>
          <a 
            href="/contact"
            className="text-brand-red hover:text-brand-red/80 font-body tracking-wider uppercase transition-colors"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </div>
  )
}
