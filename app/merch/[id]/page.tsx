'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'

const products: Record<string, any> = {
  'play-the-line-tee': {
    id: 'play-the-line-tee',
    name: 'Play The Line Tee',
    price: 35,
    description: 'Classic black tee featuring the iconic Play The Line logo in a bold 3D block design. Perfect for shows, everyday wear, and representing the brand.',
    images: [
      '/assets/media/Merch8.jpg',
      '/assets/media/Merch1.jpg',
      '/assets/media/Merch2.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      '100% premium cotton',
      'Screen-printed graphics',
      'Pre-shrunk fabric',
      'Unisex sizing',
      'Made for Play The Line'
    ]
  },
  'oversized-tee': {
    id: 'oversized-tee',
    name: 'Oversized Tee',
    price: 40,
    description: 'Comfortable oversized fit with premium quality construction. Features the Play The Line branding in a stylish oversized silhouette.',
    images: [
      '/assets/media/Merch9.jpg',
      '/assets/media/Merch3.jpg',
      '/assets/media/Merch4.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Heavyweight cotton blend',
      'Oversized relaxed fit',
      'Dropped shoulders',
      'Durable construction',
      'Limited edition'
    ]
  },
  'unisex-tee': {
    id: 'unisex-tee',
    name: 'Unisex Tee',
    price: 35,
    description: 'Unisex design perfect for any style. Classic crew neck with the Play The Line logo printed on the chest and back.',
    images: [
      '/assets/media/Merch10.jpg',
      '/assets/media/Merch8.jpg',
      '/assets/media/Merch9.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Soft cotton material',
      'True to size fit',
      'Double-stitched seams',
      'Tag-free comfort',
      'Official merchandise'
    ]
  },
}

export default function ProductDetail() {
  const params = useParams()
  const router = useRouter()
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)

  const product = products[params.id as string]

  if (!product) {
    return (
      <div className="min-h-screen bg-black pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">Product Not Found</h1>
          <Link href="/merch" className="text-brand-red hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      quantity: quantity,
    })

    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 3000)
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link 
          href="/merch"
          className="inline-flex items-center text-white/60 hover:text-white mb-8 font-body"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square overflow-hidden border-2 ${
                    selectedImage === idx ? 'border-brand-red' : 'border-white/20'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-display text-5xl text-white tracking-wider mb-4">
                {product.name}
              </h1>
              <p className="font-body text-3xl text-brand-red">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="font-body text-white/80 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div>
              <label className="font-body text-white text-sm uppercase tracking-wider mb-3 block">
                Select Size
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 font-body tracking-wider transition-all ${
                      selectedSize === size
                        ? 'border-brand-red bg-brand-red text-white'
                        : 'border-white/30 text-white hover:border-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="font-body text-white text-sm uppercase tracking-wider mb-3 block">
                Quantity
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-white/30 hover:border-white text-white flex items-center justify-center"
                >
                  −
                </button>
                <span className="font-body text-white text-xl w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-white/30 hover:border-white text-white flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full px-8 py-4 bg-brand-red hover:bg-brand-red/80 text-white font-body tracking-widest uppercase transition-all hover:scale-105"
            >
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Product Details */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="font-body text-white text-lg uppercase tracking-wider mb-4">
                Product Details
              </h3>
              <ul className="space-y-2">
                {product.details.map((detail: string, idx: number) => (
                  <li key={idx} className="font-body text-white/70 flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
