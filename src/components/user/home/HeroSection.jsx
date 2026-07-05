import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-[#0a0a0a] border-b border-[#D4AF37]/10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center"
          alt="Close-up of an elegant woman wearing a gold necklace and rings, cinematic lighting, dark sophisticated background"
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=2560&q=80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-[#0a0a0a]/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-12 w-full flex flex-col">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-editorial text-white mb-6 leading-[1.1] tracking-tight animate-fade-in-up">
            Elegance <br />
            <span className="text-[#D4AF37] italic font-light">in Detail</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 font-body mb-10 max-w-md font-light leading-relaxed animate-fade-in-up animation-delay-200">
            Discover our curated collection of premium jewelry, designed for those who appreciate the finer things.
          </p>
          <div className="flex items-center gap-8 animate-fade-in-up animation-delay-400">
            <Link
              className="inline-flex items-center justify-center px-12 py-5 bg-[#D4AF37] text-[#0a0a0a] font-label tracking-[0.2em] uppercase text-sm hover:bg-white transition-all duration-500 rounded-none"
              to="/products"
            >
              Shop Collection
            </Link>
            <span className="text-[#D4AF37]/60 text-sm font-label tracking-[0.2em] uppercase hidden sm:block">
              Est. 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
