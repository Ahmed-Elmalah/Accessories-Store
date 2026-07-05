import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // In a real app we'd get these from user state if logged in
  const totalAmount = getCartTotal();
  
  const handleConfirmOrder = (e) => {
    e.preventDefault();
    // Simulate order placement
    clearCart();
    navigate("/order-confirmation");
  };

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Column: Forms */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-16">
          <form onSubmit={handleConfirmOrder} id="checkout-form">
            {/* Shipping Information */}
            <section className="mb-16">
              <h2 className="font-headline text-3xl tracking-wide mb-8 text-white border-b border-[#222] pb-4">Shipping Information</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-label text-sm text-neutral-400 uppercase tracking-wider" htmlFor="fullName">Full Name</label>
                    <input required className="w-full bg-[#1a1a1a] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-DEFAULT p-3 outline-none transition-colors" id="fullName" placeholder="Jane Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-sm text-neutral-400 uppercase tracking-wider" htmlFor="phone">Phone Number</label>
                    <input required className="w-full bg-[#1a1a1a] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-DEFAULT p-3 outline-none transition-colors" id="phone" placeholder="+20 100 000 0000" type="tel" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-label text-sm text-neutral-400 uppercase tracking-wider" htmlFor="governorate">Governorate</label>
                    <select required className="w-full bg-[#1a1a1a] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-DEFAULT p-3 outline-none transition-colors appearance-none" id="governorate" defaultValue="">
                      <option disabled value="">Select Governorate</option>
                      <option value="cairo">Cairo</option>
                      <option value="giza">Giza</option>
                      <option value="alexandria">Alexandria</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-sm text-neutral-400 uppercase tracking-wider" htmlFor="city">City / Area</label>
                    <input required className="w-full bg-[#1a1a1a] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-DEFAULT p-3 outline-none transition-colors" id="city" placeholder="Zamalek, Maadi, etc." type="text" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block font-label text-sm text-neutral-400 uppercase tracking-wider" htmlFor="address">Detailed Address</label>
                  <input required className="w-full bg-[#1a1a1a] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-DEFAULT p-3 outline-none transition-colors" id="address" placeholder="Street name, building number, floor, apartment" type="text" />
                </div>
                
                <div className="space-y-2">
                  <label className="block font-label text-sm text-neutral-400 uppercase tracking-wider" htmlFor="notes">Order Notes (Optional)</label>
                  <textarea className="w-full bg-[#1a1a1a] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-DEFAULT p-3 outline-none transition-colors resize-none" id="notes" placeholder="Special instructions for delivery" rows="3"></textarea>
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section>
              <h2 className="font-headline text-3xl tracking-wide mb-8 text-white border-b border-[#222] pb-4">Payment Method</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                
                <label className={`border rounded-lg p-4 cursor-pointer flex flex-col items-center justify-center text-center space-y-3 relative group transition-all duration-300 ${paymentMethod === 'cod' ? 'border-[#D4AF37] bg-[#1a1a1a]' : 'border-[#333] bg-[#0a0a0a]'}`}>
                  <input 
                    className="hidden" 
                    name="payment" 
                    type="radio" 
                    value="cod" 
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                  />
                  <span className={`material-symbols-outlined text-3xl transition-transform ${paymentMethod === 'cod' ? 'text-[#D4AF37]' : 'text-neutral-500 group-hover:text-[#D4AF37]'}`}>local_shipping</span>
                  <span className={`font-label font-medium text-sm tracking-wide transition-colors ${paymentMethod === 'cod' ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>Cash on Delivery</span>
                </label>

                <label className={`border rounded-lg p-4 cursor-pointer flex flex-col items-center justify-center text-center space-y-3 relative group transition-all duration-300 ${paymentMethod === 'instapay' ? 'border-[#D4AF37] bg-[#1a1a1a]' : 'border-[#333] bg-[#0a0a0a]'}`}>
                  <input 
                    className="hidden" 
                    name="payment" 
                    type="radio" 
                    value="instapay" 
                    checked={paymentMethod === 'instapay'}
                    onChange={() => setPaymentMethod('instapay')}
                  />
                  <span className={`material-symbols-outlined text-3xl transition-transform ${paymentMethod === 'instapay' ? 'text-[#D4AF37]' : 'text-neutral-500 group-hover:text-[#D4AF37]'}`}>account_balance</span>
                  <span className={`font-label font-medium text-sm tracking-wide transition-colors ${paymentMethod === 'instapay' ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>Instapay</span>
                </label>

              </div>

              {/* Dynamic Fields */}
              {paymentMethod === 'instapay' && (
                <div className="space-y-6 bg-[#111111] p-6 rounded-lg border border-[#333] animate-fade-in">
                  <p className="text-sm text-neutral-400 mb-4">Please transfer the total amount to <strong className="text-[#D4AF37] font-medium">010 1234 5678</strong> and provide the transaction details below.</p>
                  <div className="space-y-2">
                    <label className="block font-label text-sm text-neutral-400 uppercase tracking-wider" htmlFor="transactionId">Transaction Number</label>
                    <input required className="w-full bg-[#1a1a1a] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-DEFAULT p-3 outline-none transition-colors" id="transactionId" placeholder="e.g. 123456789" type="text" />
                  </div>
                </div>
              )}
            </section>
          </form>
        </div>

        {/* Right Column: Order Summary Sidebar */}
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="sticky top-28 bg-[#111111] border border-[#222] rounded-xl p-8 shadow-2xl">
            <h2 className="font-headline text-2xl tracking-wide mb-8 text-white">Order Summary</h2>
            
            {/* Items */}
            <div className="space-y-6 mb-8 border-b border-[#333] pb-8">
              {items.length === 0 ? (
                <p className="text-neutral-500 text-sm">Your cart is empty.</p>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[#1a1a1a] rounded-md overflow-hidden flex-shrink-0">
                      <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-label font-medium text-white text-sm">{item.name}</h3>
                      <p className="text-neutral-400 text-xs mt-1">Qty: {item.quantity}</p>
                      <p className="text-[#D4AF37] font-headline mt-2 font-semibold tracking-wide">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Totals */}
            <div className="space-y-4 mb-8 text-sm font-label tracking-wide">
              <div className="flex justify-between text-neutral-300">
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-400 pb-4 border-b border-[#333]">
                <span>Shipping</span>
                <span className="italic">Calculated at next step</span>
              </div>
              <div className="flex justify-between items-center text-lg mt-4">
                <span className="font-semibold text-white">Total</span>
                <span className="font-headline text-2xl text-[#D4AF37] font-bold">${totalAmount.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Action */}
            <button 
              type="submit"
              form="checkout-form"
              disabled={items.length === 0}
              className="w-full bg-[#D4AF37] hover:bg-white text-[#0a0a0a] font-label font-bold text-sm tracking-widest uppercase py-4 px-6 rounded-DEFAULT transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              Confirm Order
            </button>
            
            {/* Trust */}
            <div className="flex flex-col space-y-3 text-xs text-neutral-400 items-center justify-center mt-6">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-base">verified_user</span>
                <span>Secure encrypted checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
