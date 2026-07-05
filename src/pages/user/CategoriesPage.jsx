import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function CategoriesPage() {
  const collections = [
    {
      title: "Rings",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJIjaFPzhfsVTTANJaKZc7nOoTcDSkEbAMq26UrioOzXWUxAps__7-J7MSKuw8BPWXYROfq0rkWsTOXPThgujnOYeWBHvHedjLcA8RdWuvqNMH1cisAMozo3fLXqsboTJkpLWXTiLiQrTOQeopk42rz-HQN9uM9g3yAsco526pd5NlwN9GQUVQxR_3lRLwIhLP7-Q83nRMaeqSn7B7SMGyzDI1R4NdEb4_Hrn3IjiBEWHYY7ui09XWeR0Yawl5OZjdeAoUTg5StGEe",
      link: "/products?category=rings"
    },
    {
      title: "Necklaces",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUl3Vf1mYSLvXDfvoaexJ-EYN6Td6aS_TSNuXrKbtI03hpdirv1op7powDicQCFPddd_CxaRoFDwqNpvqlAvWTZAq-BKnO-n-HvpTysV3TXOZyDoMSDLQ7mBsKQldMIm8lEO8PVrvlyd5BFI8yYvyVeJ5pgFrCpjaBidplSaM6xj_aF6iV5nB6d5HMk1IFzP3aMV53SyWrnsx65XHuT5WoG052mizPkfC395Sc3gqLT-EoluGrTs2bC2cnzBBcIERNwAZbqEqArj9o",
      link: "/products?category=necklaces"
    },
    {
      title: "Bracelets",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe2thEMV1dZcigY-xOeqpHybPv-rm67l8rus6CfmmagRz1ifIBpn2MbRSPFCEhVX3igcKh6xXAcmJpd4peI7_omH5pKlRUZcZUaEmznLXxXTy_kR_Gg-H4cBjcUDAv_BmsPMcTkmFt1RfhfHyLuASNu6GT2hZb7nrM0zm6_ThvI6U3JJZv8ek5ao1sitx3lkoY8yPJApQSMDFD9CJgQWpkxGoqP0nPl9v5wYgrxtqh6tb106yccwAUohW8muKYEFpugYo7zg1Fdgq3",
      link: "/products?category=bracelets"
    },
    {
      title: "Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      link: "/products?category=earrings"
    },
    {
      title: "Bundles",
      image: "https://images.unsplash.com/photo-1599643478524-fb66f7cae625?auto=format&fit=crop&w=800&q=80",
      link: "/products?category=bundles"
    },
    {
      title: "Gifts",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFmGImj6hbgeK43qfqBVZqbkLW2259LU6p02uX737enrKGgrRuPpJZbJvCyqTikbFw_XO31NUp--HeSXAAnAhoxHOzjrApF-x-8kLJzq_-5vD7YmaNYWUBelggt2gYqQEU6PPE9d6CfFt9Z-hpx5YdwL8p4Z_PnA79mDTsf5eBxXYwVhctQsBfPBWbpPYz59nr8S7nIK3h_mDpXzuqYgSYZOTeAZqojfzGE1TQ9UG0Iez7WqSDP9Hha0V1RcrMsoW_XiIQ_rG9IVB-",
      link: "/products?category=gifts"
    }
  ];

  return (
    <main className="flex-grow max-w-[90rem] mx-auto w-full px-6 py-12 md:py-16">
      {/* Page Header */}
      <div className="mb-12 border-b border-[#D4AF37]/10 pb-8 animate-fade-in-up">
        <div className="flex flex-col gap-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs font-label uppercase tracking-widest text-neutral-500">
              <li>
                <Link className="hover:text-[#D4AF37] transition-colors" to="/">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <FiChevronRight className="text-[14px] mx-1" />
                  <span className="text-[#D4AF37]">Categories</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-[#D4AF37] tracking-tight">Shop by Category</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {collections.map((cat, i) => (
          <div key={i} className={`group flex flex-col animate-fade-in-up animation-delay-${Math.min(i * 100, 500)}`}>
            <Link to={cat.link} className="block relative aspect-[4/5] overflow-hidden mb-4 bg-neutral-900/30 border border-[#D4AF37]/5">
              <img
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                alt={cat.title}
                src={cat.image}
              />
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent">
                <div className="block text-center w-full bg-[#D4AF37] text-[#0a0a0a] font-label uppercase tracking-[0.2em] py-3 text-xs hover:bg-white transition-colors">
                  Explore {cat.title}
                </div>
              </div>
            </Link>
            <div className="flex justify-between items-start">
              <div>
                <Link to={cat.link}>
                  <h4 className="text-white font-headline text-2xl mb-1 hover:text-[#D4AF37] transition-colors">
                    {cat.title}
                  </h4>
                </Link>
                <p className="text-neutral-500 text-sm font-body">
                  Explore the collection
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
