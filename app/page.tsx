import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        >
          <source src="/assets/hero/Hero.mov" type="video/mp4" />
        </video>
        
        {/* Fallback Image for Mobile */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/assets/hero/Hero.jpg"
            alt="Play The Line"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="relative w-full max-w-4xl mb-12 animate-fade-in">
            <Image
              src="/assets/branding/Logo2.PNG"
              alt="Play The Line"
              width={1200}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link
              href="/music"
              className="px-8 py-4 bg-brand-red hover:bg-brand-red/80 text-white font-body tracking-widest uppercase transition-all hover:scale-105"
            >
              Listen Now
            </Link>
            <Link
              href="/merch"
              className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black text-white font-body tracking-widest uppercase transition-all hover:scale-105"
            >
              Shop Merch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Merch Section */}
      <section className="py-20 bg-gradient-to-b from-black to-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-5xl md:text-6xl text-center text-white mb-4 tracking-wider">
            OFFICIAL MERCH
          </h2>
          <p className="text-center text-white/60 font-body mb-12 tracking-wide">
            Limited edition apparel and accessories
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Link href="/merch/play-the-line-tee" className="group">
              <div className="relative aspect-square overflow-hidden mb-4">
                <Image
                  src="/assets/media/Merch8.jpg"
                  alt="Play The Line Tee"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <h3 className="font-body text-xl text-white tracking-wide">Play The Line Tee</h3>
              <p className="font-body text-brand-red">$35.00</p>
            </Link>

            {/* Product 2 */}
            <Link href="/merch/oversized-tee" className="group">
              <div className="relative aspect-square overflow-hidden mb-4">
                <Image
                  src="/assets/media/Merch9.jpg"
                  alt="Oversized Tee"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <h3 className="font-body text-xl text-white tracking-wide">Oversized Tee</h3>
              <p className="font-body text-brand-red">$40.00</p>
            </Link>

            {/* Product 3 */}
            <Link href="/merch/unisex-tee" className="group">
              <div className="relative aspect-square overflow-hidden mb-4">
                <Image
                  src="/assets/media/Merch10.jpg"
                  alt="Unisex Tee"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <h3 className="font-body text-xl text-white tracking-wide">Unisex Tee</h3>
              <p className="font-body text-brand-red">$35.00</p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/merch"
              className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-black text-white font-body tracking-widest uppercase transition-all hover:scale-105"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-5xl md:text-6xl text-center text-white mb-12 tracking-wider">
            GALLERY
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="relative aspect-square overflow-hidden group">
                <Image
                  src={`/assets/media/Merch${num}.jpg`}
                  alt={`Gallery ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/20 transition-colors" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/videos"
              className="inline-block px-8 py-4 bg-brand-red hover:bg-brand-red/80 text-white font-body tracking-widest uppercase transition-all hover:scale-105"
            >
              View More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
