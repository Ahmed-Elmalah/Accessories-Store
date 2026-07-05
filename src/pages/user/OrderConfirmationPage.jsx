import React from "react";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

export default function OrderConfirmationPage() {
  return (
    <main className="flex-grow flex items-center justify-center py-24 px-6 relative overflow-hidden">
      {/* Subtle Glow Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-2xl w-full flex flex-col items-center text-center relative z-10">
        {/* Icon */}
        <div className="w-24 h-24 mb-10 flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]">
          <FiCheckCircle className="text-5xl" />
        </div>
        
        {/* Headlines */}
        <h1 className="font-headline text-4xl md:text-5xl font-light tracking-wide mb-4 text-white">
          Thank you for your order!
        </h1>
        <p className="font-body text-neutral-400 text-lg max-w-lg mx-auto mb-12 font-light">
          Your order has been received and is now being processed. We are preparing your exquisite pieces.
        </p>
        
        {/* Order Details Card */}
        <div className="w-full bg-[#111111] border border-[#D4AF37]/20 rounded shadow-2xl shadow-black p-8 md:p-12 mb-10 text-left">
          <h2 className="font-headline text-xl text-[#D4AF37] uppercase tracking-widest mb-8 border-b border-[#333] pb-4">Order Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 text-sm uppercase tracking-wider">Order Number</span>
              <span className="text-white text-lg font-medium tracking-wide">#LAF-{(Math.random() * 10000).toFixed(0)}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 text-sm uppercase tracking-wider">Date</span>
              <span className="text-white text-lg font-medium tracking-wide">
                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 text-sm uppercase tracking-wider">Payment Method</span>
              <span className="text-white text-lg font-medium tracking-wide">Cash on Delivery</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 text-sm uppercase tracking-wider">Status</span>
              <span className="text-[#D4AF37] text-xl font-headline tracking-wide">Processing</span>
            </div>
          </div>
        </div>
        
        {/* Next Steps */}
        <p className="font-body text-neutral-400 text-base max-w-md mx-auto mb-12 font-light">
          We will contact you shortly on your phone number to confirm the delivery details and finalize dispatch.
        </p>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <Link to="/" className="px-8 py-4 bg-[#D4AF37] text-[#0a0a0a] font-label text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300 rounded-DEFAULT text-center">
            Continue Shopping
          </Link>
          <Link to="/profile" className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] font-label text-sm uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-colors duration-300 rounded-DEFAULT text-center">
            Track Order
          </Link>
        </div>
      </div>
    </main>
  );
}
