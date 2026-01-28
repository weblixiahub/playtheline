'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <svg className="w-24 h-24 mx-auto mb-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h1 className="font-display text-4xl text-white mb-4 tracking-wider">
              Your Cart is Empty
            </h1>
            <p className="font-body text-white/60 mb-8">
              Add some items to get started
            </p>
            <Link
              href="/merch"
              className="inline-block px-8 py-4 bg-brand-red hover:bg-brand-red/80 text-white font-body tracking-widest uppercase transition-all"
            >
              Shop Merch
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-5xl md:text-6xl text-white tracking-wider mb-12">
          SHOPPING CART
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div 
                key={`${item.id}-${item.size}`}
                className="flex gap-6 bg-brand-gray p-6 border border-white/10"
              >
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="font-body text-xl text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="font-body text-white/60 text-sm mb-4">
                    Size: {item.size}
                  </p>
                  <p className="font-body text-brand-red text-lg">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-white/60 hover:text-brand-red transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                      className="w-8 h-8 border border-white/30 hover:border-white text-white flex items-center justify-center text-sm"
                    >
                      −
                    </button>
                    <span className="font-body text-white w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                      className="w-8 h-8 border border-white/30 hover:border-white text-white flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-brand-gray p-8 border border-white/10 sticky top-32">
              <h2 className="font-display text-3xl text-white tracking-wider mb-6">
                ORDER SUMMARY
              </h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex justify-between font-body text-white/60">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-body text-white/60">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="flex justify-between font-body text-white text-xl mb-8">
                <span>Total</span>
                <span className="text-brand-red">${totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full px-8 py-4 bg-brand-red hover:bg-brand-red/80 text-white font-body tracking-widest uppercase transition-all mb-4">
                Proceed to Checkout
              </button>

              <Link
                href="/merch"
                className="block text-center text-white/60 hover:text-white font-body text-sm transition-colors"
              >
                Continue Shopping
              </Link>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="font-body text-white/40 text-xs text-center">
                  Secure checkout • Free shipping on orders over $100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
