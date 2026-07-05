import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiHeart } from "react-icons/fi";
import FadeIn from "../layout/FadeIn";
import { useCartStore } from "../../../store/useCartStore";
import toast from "react-hot-toast";

export default function FeaturedProducts() {
  const addItem = useCartStore((state) => state.addItem);

  const products = [
    {
      id: "prod_1",
      name: "Ethereal Gold Ring",
      price: 250,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaOsH-tpJdkeRde2HnpJSsqoMTXLVsvaJLdYSYFeCmR8PmeWO2RVtHoExc_RMmjpI57LXcpOfoma9F6bF4-7W5MvWjj1Hmc4bC4nf_MAPdr4NcfwCkAC8yxIyZRt9HhM689a8Drahv4zqOe73vSBS2mbGDDofNZhjr6HFzZ_mCWK4hH2kIH2t31jAyz62ywPVd9cLyRfc5hc94mQhgjg_ygaN7BdyoGXCeE1BGpGz1VIfWYAodqfDIpZUFAjV0VhkQqSTd2E7OgPCw",
      variant: "18k Yellow Gold"
    },
    {
      id: "prod_2",
      name: "Lumina Pearl Necklace",
      price: 420,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFshjL3lFmasbnMgB4g6ROxQaja5rB0RV69hP2mmxobw5S-cHwE0lAVzZAg_TbPma7VzNPt2TgyZkotvtgL53rVz0OPRtnygMumME1LkTM37W8vzCm5L9AmVz5X9hCdy3DWhY8IGqCVgWWU2OKtbBkf4aBfl6jZmMJKP9A6AGzvVqJZrRspOcBhT-vgVUebp_6bdd_ZzIdeSRX-eGPbvS1_AZyMRVm8KKVu-5HiKqJVHYiD8p_BfTjsIfa50BE5KdWJz0QvrFQHI9S",
      variant: "Freshwater Pearl, Silver"
    },
    {
      id: "prod_3",
      name: "Obsidian Cuff",
      price: 185,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCog7kPT4DfXNu1zGWOamsAIj0K8tRsVoBGKqfp5ilW0O_bJ4nK21-hgdL6FqauWGewaGKA5jVsQAH_4D_H3j5kUilFrIkAuO8ruk4COmiv5q3i13D6if-6EmCHUfwxMjSiFveE2gaT7uItyGt0nvboJVnvYzxKlvPj-kKjBj0PieadXKkx9fcIyD36aITJ-zZvDeqPeLjj3Dkvr9fwyQXKYN8kGSXakYhuDrUbTt1k_oSeVZIod2AaAI7iRBuXSccH-3a06Ut1p6mU",
      variant: "Matte Black, Rose Gold"
    },
    {
      id: "prod_4",
      name: "Soleil Rigid Choker",
      price: 410,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcHUMlZMTEMS9MHfAZpZF6UjJ7SvjUQsvl4eBIzZSErub_mI07GeVpsMEsjg-e8jCYBN5BjawGmiKCb9iGmTAyxSr6K4_olwQXnHg5XwMf8Klnv4annNqcEJid0wex0edb6zflWSQcBrfBZ1TS6j9Td05637wBnQL3SIkHSU6Z9FN73bQvwBhGsac4-VPYBBCGkzAa80uP0ellcggNK0i1qCZ2SSZbbPEmDnhCNe7z8xEHbvZ_GA0QRTiTaPaWnoCyQkG_v35EyZxq",
      variant: "18k Gold Plated"
    },
    {
      id: "prod_5",
      name: "Heritage Signet",
      price: 220,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArvtIOL0F3mFkpHIHpsWK-mSI9T4-bGglhUGxwh30XykWLt_b-ef0J14gLlFCQpY3fDsqozNZq4ex_seXAgsOL6OpVSa55htz0-NV8tQZhJB9JX3RKmwKisXolzJSZg15kgndklldpj01K64jS5_xxAOA9L67zRVo0CD80l-0tEo64Hjnh1B0eaCmi5tf8LnV0OtyRbzbfIqPyS2Xsrw0Z0dT8rtgtl8b52wZGqGC53S49eLmch1dk5J6pcboLw5jYkB0gPpxxXh6C",
      variant: "Sterling Silver"
    }
  ];

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <section className="py-24 px-6 sm:px-12 max-w-360 mx-auto border-b border-primary/10">
      <FadeIn delay={0}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-headline text-white mb-4">
            Featured Pieces
          </h2>
          <p className="text-neutral-400 font-body text-lg font-light max-w-lg">
            Hand-selected for uncompromising elegance. These pieces represent
            the pinnacle of our craftsmanship.
          </p>
        </div>
        <div>
          <Link
            className="text-primary text-sm font-label uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-4 group"
            to="/products"
          >
            View All
            <FiArrowRight className="text-lg transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
      </FadeIn>

      <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar pb-8">
        {products.map((product, index) => (
          <FadeIn key={product.id} delay={Math.min(index * 100, 500)} className="group flex flex-col w-50 sm:w-60 md:w-70 shrink-0 snap-start">
            <Link to={`/products/${product.id}`} className="relative aspect-square overflow-hidden mb-3 block">
              <img
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                alt={product.name}
                src={product.image}
              />
              <div className="absolute bottom-3 left-3 bg-surface-container text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                Sale
              </div>
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                className="absolute top-3 right-3 text-white/70 hover:text-primary transition-colors z-10 focus:outline-none drop-shadow-md"
              >
                <FiHeart className="text-xl" />
              </button>
            </Link>
            <div className="flex flex-col">
              <Link to={`/products/${product.id}`}>
                <h4 className="text-white text-sm font-medium mb-1 hover:text-primary transition-colors truncate">
                  {product.name}
                </h4>
              </Link>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-neutral-500 line-through">LE {product.price + 50}.00 EGP</span>
                <span className="text-white font-medium">From LE {product.price}.00 EGP</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
