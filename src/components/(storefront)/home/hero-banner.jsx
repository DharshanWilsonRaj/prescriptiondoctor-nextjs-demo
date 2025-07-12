'use client'

import React from 'react'

const HeroBanner = () => {
  return (
    <section
      className="relative h-[300px] md:h-[450px] flex items-center justify-center text-center text-white px-4
                 bg-[url('/images/hero-banner.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Get Fast, Reliable Treatment Online
        </h1>
        <p className="text-md md:text-xl max-w-xl mx-auto drop-shadow-sm">
          Trusted by thousands across the UK. Your health, your way — discreet and quick.
        </p>
        <a
          href="/consultation"
          className="mt-6 inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium shadow-lg transition"
        >
          Start Consultation
        </a>
      </div>
    </section>
  )
}

export default HeroBanner
