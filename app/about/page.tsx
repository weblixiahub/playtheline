import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Banner */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/assets/press/IMG_8142.jpg"
          alt="Play The Line"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider">
            ABOUT
          </h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-in">
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">
                THE STORY
              </h2>
              <p className="font-body text-white/80 text-lg leading-relaxed">
                Play The Line is an electronic music DJ and producer pushing the boundaries of modern sound. 
                With a unique blend of cutting-edge beats and atmospheric textures, each performance is a 
                journey through sonic landscapes.
              </p>
              <p className="font-body text-white/80 text-lg leading-relaxed">
                From intimate club settings to major festival stages, Play The Line delivers high-energy 
                sets that captivate audiences and create unforgettable moments on the dancefloor.
              </p>
              <p className="font-body text-white/80 text-lg leading-relaxed">
                Drawing inspiration from techno, house, and experimental electronic music, the sound is 
                constantly evolving while maintaining a signature style that's instantly recognizable.
              </p>
              
              <div className="pt-6">
                <h3 className="font-display text-2xl text-white tracking-wider mb-3">
                  ACHIEVEMENTS
                </h3>
                <ul className="space-y-2 font-body text-white/70">
                  <li>• Featured at Art Basel Miami 2017</li>
                  <li>• Resident DJ at premier venues</li>
                  <li>• Collaborated with top electronic artists</li>
                  <li>• Released on independent labels</li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-square overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Image
                src="/assets/press/IMG_8153.jpg"
                alt="Play The Line"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press Photo Section */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-12 text-center">
            PRESS KIT
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/press/IMG_8141.jpg"
                alt="Press Photo 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/press/IMG_8140.jpg"
                alt="Press Photo 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-brand-red hover:bg-brand-red/80 text-white font-body tracking-widest uppercase transition-all hover:scale-105"
            >
              Request Press Kit
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
