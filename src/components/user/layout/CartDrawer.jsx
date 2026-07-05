import React from "react";
import { FiX, FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartStore } from "../../../store/useCartStore";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    getCartTotal,
  } = useCartStore();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#0a0a0a] border-l border-[#D4AF37]/20 z-[70] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#D4AF37]/10">
          <h2 className="text-xl font-headline text-white tracking-widest">
            YOUR CART
          </h2>
          <button
            onClick={closeCart}
            className="text-neutral-400 hover:text-primary transition-colors focus:outline-none p-2"
          >
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-[#D4AF37]/30 scrollbar-track-transparent">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-neutral-500 space-y-4">
              <span className="material-symbols-outlined text-4xl font-light">
                shopping_bag
              </span>
              <p className="font-body text-sm">Your cart is empty.</p>
              <button
                onClick={closeCart}
                className="mt-4 px-8 py-3 border border-[#D4AF37]/50 text-primary font-label text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0a0a0a] transition-all"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 group relative">
                <div className="w-24 h-24 bg-neutral-900 border border-[#D4AF37]/10 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image || "https://placehold.co/100x100"}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-headline text-base">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-neutral-500 font-body text-xs mt-1">
                          {item.variant}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-neutral-500 hover:text-red-500 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <FiTrash2 className="text-lg" />
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-[#D4AF37]/20 rounded-sm">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-neutral-400 hover:text-primary transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <FiMinus />
                      </button>
                      <span className="px-2 text-white font-body text-sm w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-neutral-400 hover:text-primary transition-colors"
                      >
                        <FiPlus />
                      </button>
                    </div>
                    <span className="text-primary font-headline text-base italic">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#D4AF37]/10 bg-neutral-950/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-neutral-400 font-body text-sm uppercase tracking-wider">
                Subtotal
              </span>
              <span className="text-white font-headline text-xl">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            <p className="text-neutral-500 font-body text-xs mb-6 text-center">
              Shipping & taxes calculated at checkout.
            </p>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="w-full block text-center bg-[#D4AF37] text-[#0a0a0a] font-label font-bold py-4 px-8 tracking-[0.15em] uppercase text-xs hover:bg-white active:scale-[0.98] transition-all duration-300"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
