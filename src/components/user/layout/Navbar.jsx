import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiFeather, FiX } from "react-icons/fi";
import { useCartStore } from "../../../store/useCartStore";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const itemCount = useCartStore((state) => state.getItemCount());
  const location = useLocation();

  const currentPath = location.pathname;
  const currentCategory = new URLSearchParams(location.search).get("category");

  const getLinkClasses = (path, category = null) => {
    const isActive = category 
      ? currentPath === path && currentCategory === category 
      : currentPath === path && !currentCategory;

    return isActive
      ? "text-[#D4AF37] border-b border-[#D4AF37] pb-1 text-sm uppercase tracking-widest"
      : "text-neutral-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest";
  };

  return (
    <nav className="bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#D4AF37]/10 w-full sticky top-0 z-40 transition-all duration-300 ease-in-out font-label font-medium tracking-wider flex flex-col relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 w-full flex justify-between items-center h-24">
        {/* Brand Logo */}
        <div className="flex-shrink-0 flex items-center z-10">
          <Link
            className="flex items-center gap-2 text-2xl font-headline font-bold text-[#D4AF37] tracking-widest hover:text-white transition-colors"
            to="/"
          >
            <FiFeather className="text-3xl" />
            <span>LaFleur</span>
          </Link>
        </div>

        {/* Navigation Links (Web) */}
        <div className="hidden md:flex space-x-12 items-center h-full absolute left-1/2 -translate-x-1/2">
          <Link
            className={getLinkClasses("/")}
            to="/"
          >
            Home
          </Link>
          <Link
            className={getLinkClasses("/products", "necklaces")}
            to="/products?category=necklaces"
          >
            Necklaces
          </Link>
          <Link
            className={getLinkClasses("/products", "bracelets")}
            to="/products?category=bracelets"
          >
            Bracelets
          </Link>
          <Link
            className={getLinkClasses("/products", "rings")}
            to="/products?category=rings"
          >
            Rings
          </Link>
          <Link
            className={getLinkClasses("/products", "earrings")}
            to="/products?category=earrings"
          >
            Earrings
          </Link>
          <Link
            className={getLinkClasses("/products", "bundles")}
            to="/products?category=bundles"
          >
            Bundles
          </Link>
        </div>

        {/* Trailing Actions */}
        <div className="flex items-center space-x-6 z-10">
          <div className="hidden sm:flex items-center space-x-6 text-neutral-400">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-[#D4AF37] transition-colors focus:outline-none"
            >
              <FiSearch className="text-xl" />
            </button>
            <Link to="/wishlist" className={`${currentPath === '/wishlist' ? 'text-[#D4AF37]' : 'text-neutral-400 hover:text-[#D4AF37]'} transition-colors focus:outline-none`}>
              <FiHeart className="text-xl" />
            </Link>
            <button
              className="hover:text-[#D4AF37] transition-colors focus:outline-none relative"
              onClick={toggleCart}
            >
              <FiShoppingBag className="text-xl" />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#D4AF37] text-[#0a0a0a] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
          <Link
            className="hidden lg:inline-flex text-neutral-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest"
            to="/login"
          >
            Login
          </Link>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 text-neutral-400 hover:text-[#D4AF37] focus:outline-none"
              type="button"
            >
              <span className="sr-only">Open main menu</span>
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Modal Overlay */}
      <div 
        className={`absolute inset-0 bg-[#0a0a0a] z-50 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isSearchOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-full invisible"
        }`}
      >
        <div className="w-full max-w-3xl px-6 flex items-center gap-4">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Search..." 
              autoFocus={isSearchOpen}
              className="w-full border border-neutral-800 bg-[#0a0a0a] text-white font-body px-6 py-4 outline-none focus:border-[#D4AF37] transition-colors rounded-none pr-12 placeholder-neutral-600"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-[#D4AF37] transition-colors">
              <FiSearch className="text-xl" />
            </button>
          </div>
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="text-neutral-500 hover:text-white transition-colors focus:outline-none p-2"
          >
            <FiX className="text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}
