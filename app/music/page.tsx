export default function Music() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider mb-4">
            MUSIC
          </h1>
          <p className="font-body text-white/60 text-xl tracking-wide">
            Listen to the latest releases
          </p>
        </div>

        {/* Latest Single with Spotify Embed */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-display text-4xl text-white tracking-wider text-center mb-8">
            LATEST SINGLE
          </h2>
          <div className="bg-brand-gray p-4 border border-white/10">
            <iframe 
              src="https://open.spotify.com/embed/track/0yaokWLTbYvOMauQY3uPN0?utm_source=generator" 
              width="100%" 
              height="352" 
              style={{ border: 0 }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Spotify Player"
            ></iframe>
          </div>
        </div>

        {/* Streaming Platforms */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl text-white tracking-wider text-center mb-12">
            STREAM NOW
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://open.spotify.com/track/0yaokWLTbYvOMauQY3uPN0?si=29ae8bb924b74ecf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gray p-8 border border-white/10 hover:border-brand-red transition-all hover:scale-105 text-center group"
            >
              <svg className="w-16 h-16 mx-auto mb-4 text-white group-hover:text-brand-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <h3 className="font-body text-white text-lg tracking-wider">
                Spotify
              </h3>
            </a>

            <a
              href="https://soundcloud.com/play-the-line"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gray p-8 border border-white/10 hover:border-brand-red transition-all hover:scale-105 text-center group"
            >
              <svg className="w-16 h-16 mx-auto mb-4 text-white group-hover:text-brand-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106s-1.304-3.106-2.911-3.106c-.506 0-.982.143-1.391.401-.188-.672-.411-1.326-.819-1.11z"/>
              </svg>
              <h3 className="font-body text-white text-lg tracking-wider">
                SoundCloud
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
