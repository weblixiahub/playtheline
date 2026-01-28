import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 'play-the-line-tee',
    name: 'Play The Line Tee',
    price: 35,
    image: '/assets/media/Merch8.jpg',
    description: 'Classic black tee with bold Play The Line branding',
  },
  {
    id: 'oversized-tee',
    name: 'Oversized Tee',
    price: 40,
    image: '/assets/media/Merch9.jpg',
    description: 'Comfortable oversized fit with premium quality',
  },
  {
    id: 'unisex-tee',
    name: 'Unisex Tee',
    price: 35,
    image: '/assets/media/Merch10.jpg',
    description: 'Unisex design perfect for any style',
  },
]

export default function Merch() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider mb-4">
            SHOP
          </h1>
          <p className="font-body text-white/60 text-xl tracking-wide">
            Official Play The Line Merchandise
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link 
              key={product.id}
              href={`/merch/${product.id}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="font-body text-white tracking-widest uppercase">
                    View Details
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-body text-xl text-white tracking-wide group-hover:text-brand-red transition-colors">
                  {product.name}
                </h3>
                <p className="font-body text-white/60 text-sm">
                  {product.description}
                </p>
                <p className="font-body text-brand-red text-lg">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border border-white/10">
            <svg className="w-12 h-12 mx-auto mb-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <h3 className="font-body text-white text-lg tracking-wide mb-2">
              Premium Quality
            </h3>
            <p className="font-body text-white/60 text-sm">
              High-quality materials and printing
            </p>
          </div>
          
          <div className="p-6 border border-white/10">
            <svg className="w-12 h-12 mx-auto mb-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <h3 className="font-body text-white text-lg tracking-wide mb-2">
              Secure Checkout
            </h3>
            <p className="font-body text-white/60 text-sm">
              Safe and secure payment processing
            </p>
          </div>
          
          <div className="p-6 border border-white/10">
            <svg className="w-12 h-12 mx-auto mb-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 className="font-body text-white text-lg tracking-wide mb-2">
              Fast Shipping
            </h3>
            <p className="font-body text-white/60 text-sm">
              Quick delivery to your doorstep
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
