import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { useCartStore } from "../../../store/useCartStore";
import toast from "react-hot-toast";

export default function ProductCard({ product, index = 0 }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    toast.success(`${product.name} added to cart`);
  };

  const isOutOfStock = product.stock === 0;

  return (
    <article className={`product-card group flex flex-col relative animate-fade-in-up animation-delay-${Math.min(index * 100, 500)} ${isOutOfStock ? 'opacity-75 grayscale-[30%]' : ''}`}>
      <Link to={`/products/${product.id}`} className="relative overflow-hidden aspect-[4/5] bg-[#111111] mb-4 block">
        <img
          className="object-cover w-full h-full product-image transition-transform duration-700 ease-out"
          alt={product.name}
          src={product.image}
        />
        {/* Badges & Wishlist */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && (
            <span className={`text-[10px] font-label font-bold uppercase tracking-wider px-2 py-1 ${product.badge === 'New' ? 'bg-[#D4AF37] text-[#0a0a0a]' : 'bg-white text-black'}`}>
              {product.badge}
            </span>
          )}
        </div>
        
        {isOutOfStock ? (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
            <span className="bg-neutral-900/90 border border-neutral-700 text-white text-xs font-label uppercase tracking-widest px-4 py-2 backdrop-blur-md">Out of Stock</span>
          </div>
        ) : (
          <div className="absolute bottom-0 left-0 w-full p-4 quick-action opacity-0 translate-y-4 transition-all duration-300 ease-out bg-gradient-to-t from-[#0a0a0a]/90 to-transparent group-hover:opacity-100 group-hover:translate-y-0">
            <button 
              onClick={handleQuickAdd}
              className="w-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#0a0a0a] border border-[#D4AF37]/50 hover:border-[#D4AF37] py-3 font-label text-sm uppercase tracking-widest transition-colors backdrop-blur-md">
              Quick Add
            </button>
          </div>
        )}

        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); }} className="absolute top-3 right-3 text-neutral-400 hover:text-[#D4AF37] transition-colors z-20 bg-[#0a0a0a]/50 p-1.5 rounded-full backdrop-blur-sm focus:outline-none">
          <FiHeart className="text-lg" />
        </button>
      </Link>

      <div className="flex flex-col items-center text-center px-2">
        <span className="text-neutral-500 text-xs font-label uppercase tracking-widest mb-1">{product.category}</span>
        <Link to={`/products/${product.id}`} className="text-lg font-headline text-white mb-2 hover:text-[#D4AF37] transition-colors line-clamp-1">
          {product.name}
        </Link>
        <p className={`${isOutOfStock ? 'text-neutral-500' : 'text-[#D4AF37]'} font-body font-light tracking-wide`}>${product.price}</p>
      </div>
    </article>
  );
}
