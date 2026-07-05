import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import FadeIn from "../layout/FadeIn";

export default function CuratedCollections() {
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
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-12 max-w-[90rem] mx-auto border-b border-[#D4AF37]/10">
      <FadeIn delay={0}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-headline text-white mb-4">
            Curated Collections
          </h2>
          <p className="text-neutral-400 font-body text-lg font-light">
            Categorical expressions of our defining aesthetic, grouped for your
            discovery.
          </p>
        </div>
        <div>
          <Link
            className="text-[#D4AF37] text-sm font-label uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-4 group"
            to="/categories"
          >
            Explore Categories
            <FiArrowRight className="text-lg transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((cat, i) => (
          <FadeIn key={i} delay={Math.min(i * 100, 500)} className="group flex flex-col">
            <Link to={cat.link} className="block relative aspect-square overflow-hidden mb-4 bg-neutral-900/30 border border-[#D4AF37]/5">
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
                  <h4 className="text-white font-headline text-xl mb-1 hover:text-[#D4AF37] transition-colors">
                    {cat.title}
                  </h4>
                </Link>
                <p className="text-neutral-500 text-sm font-body">
                  Explore the collection
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
