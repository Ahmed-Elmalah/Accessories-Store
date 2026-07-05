import React from "react";
import { Link } from "react-router-dom";
import { FiX, FiArrowLeft } from "react-icons/fi";
import { useCartStore } from "../../store/useCartStore";
import toast from "react-hot-toast";

export default function WishlistPage() {
  const addItem = useCartStore((state) => state.addItem);

  const wishlistItems = [
    {
      id: "prod_1",
      name: "Ethereal Gold Ring",
      price: 1250,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b2828e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "18k Yellow Gold",
    },
    {
      id: "prod_11",
      name: "Aura Chain Link",
      price: 2800,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBB8UOtKIwnRnlo8hokn2LHINyflyNb87RMhj5zvayG8aR-jBJK8KAJRj82uRi-7jUm1DddzEYYKL-n7iwrTx2DEFcUlD55Y789ZgsMsAvinS_Rs0JvqXwvyzMvRPg-TzOgHvkeEI-ljVKBSG8VkT9mpMNQhHOrk2_n-FcYhVFNsMYZTDzrHDXPBzFZqvDeKOKqyKD5CoCH1xWqeHkzrWDWQlvQBM2N2R0qpu2mcqUZOPiH55Tzoo9spvzLy7ehjMipVm8_NMNTNaZ",
      description: "14k Polished Gold",
    },
    {
      id: "prod_14",
      name: "Lumina Pearl Necklace",
      price: 1950,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMfPkU2pGBo2HE-WZIGOA1PuHPr9Vw6yw7Eodx-P3T07qtO46cKMZ3au9rEuL_KFdjN_AlTQ74mpObq4M9LAtEP_THiYt0PsNjZmavGNFDSqzvWDSLnKsH7PS5d_qoNJWHD823rLWN7xWiUlx_7Ep6xPh7Y-5isVu_J04t71Y6f47wWwi0pVWW30U0TB3TAbyMEqqCDD48GCLxNtDeXQKuEAC1jEJejL-BG4ZJIg2LjaAbip62ApN6E5H6TQgyY-_15dU8w4N20rzN",
      description: "Freshwater Pearl & Gold",
    },
    {
      id: "prod_15",
      name: "Stellar Band Trio",
      price: 3100,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwReO_F6c5vBwPn2WCUQTVyNrHUBO02zjO-wmQt54TVGs8zNvF9RgVlFdiYcOloIF7LS2SN6IOw0cn_22OvJyql-u_e-Jze382FRcIfW0VqgEtHQhgP7zF8aX7T7I5Cnm_8Mw7TFJine9sRDNKGPVwHo9icUSVF1lgdyxMJqOxBfGH95XUftGlVzS2cAWMPM8XYkgFatR3nzouoWAALEyDiynVwcVn17fDzesky8MS7gca1uAR7Rnu_wWedkgTviu1_go-xFECdu9p",
      description: "Recycled 18k Gold",
    }
  ];

  const handleAddToCart = (item) => {
    addItem(item, 1);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 flex-grow">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="font-headline text-5xl md:text-6xl text-white mb-4 italic">Your Wishlist</h1>
        <p className="font-label text-neutral-400 tracking-widest uppercase text-xs">{wishlistItems.length} Items</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12 xl:grid-cols-5">
        {wishlistItems.map((item, index) => (
          <div key={item.id} className={`group relative flex flex-col animate-fade-in-up animation-delay-${Math.min(index * 100, 500)}`}>
            <Link to={`/products/${item.id}`} className="relative aspect-[3/4] overflow-hidden bg-surface-container mb-6 border border-[#222] block">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.name} src={item.image} />
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Remove from wishlist logic would go here
                  toast("Removed from wishlist", { icon: "🗑️" });
                }}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#0a0a0a]/50 backdrop-blur-md rounded-full text-white hover:bg-red-500 hover:text-white transition-all">
                <FiX className="text-sm" />
              </button>
            </Link>
            
            <div className="flex flex-col flex-grow">
              <Link to={`/products/${item.id}`}>
                <h3 className="font-headline text-xl text-white mb-1 hover:text-[#D4AF37] transition-colors">{item.name}</h3>
              </Link>
              <p className="font-body text-sm text-neutral-400 mb-3">{item.description}</p>
              <p className="font-headline text-lg text-[#D4AF37] font-bold mb-6">${item.price}</p>
              
              <button 
                onClick={() => handleAddToCart(item)}
                className="w-full py-4 bg-[#D4AF37] text-[#0a0a0a] font-label text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors duration-300 mt-auto shadow-[0_0_15px_rgba(212,175,55,0.0)] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Link */}
      <div className="mt-24 text-center">
        <Link to="/products" className="group inline-flex items-center gap-2 text-neutral-400 hover:text-[#D4AF37] transition-all duration-300 font-label text-xs uppercase tracking-widest relative">
          <FiArrowLeft className="text-sm" />
          <span>Continue Shopping</span>
          <span className="block h-[1px] w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500 absolute -bottom-1"></span>
        </Link>
      </div>
    </main>
  );
}
