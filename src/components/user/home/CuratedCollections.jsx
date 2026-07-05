import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import FadeIn from "../layout/FadeIn";

export default function CuratedCollections() {
  const collections = [
    {
      title: "Bracelets",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe2thEMV1dZcigY-xOeqpHybPv-rm67l8rus6CfmmagRz1ifIBpn2MbRSPFCEhVX3igcKh6xXAcmJpd4peI7_omH5pKlRUZcZUaEmznLXxXTy_kR_Gg-H4cBjcUDAv_BmsPMcTkmFt1RfhfHyLuASNu6GT2hZb7nrM0zm6_ThvI6U3JJZv8ek5ao1sitx3lkoY8yPJApQSMDFD9CJgQWpkxGoqP0nPl9v5wYgrxtqh6tb106yccwAUohW8muKYEFpugYo7zg1Fdgq3",
      link: "/products?category=bracelets"
    },
    {
      title: "Necklaces",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUl3Vf1mYSLvXDfvoaexJ-EYN6Td6aS_TSNuXrKbtI03hpdirv1op7powDicQCFPddd_CxaRoFDwqNpvqlAvWTZAq-BKnO-n-HvpTysV3TXOZyDoMSDLQ7mBsKQldMIm8lEO8PVrvlyd5BFI8yYvyVeJ5pgFrCpjaBidplSaM6xj_aF6iV5nB6d5HMk1IFzP3aMV53SyWrnsx65XHuT5WoG052mizPkfC395Sc3gqLT-EoluGrTs2bC2cnzBBcIERNwAZbqEqArj9o",
      link: "/products?category=necklaces"
    },
    {
      title: "Rings",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJIjaFPzhfsVTTANJaKZc7nOoTcDSkEbAMq26UrioOzXWUxAps__7-J7MSKuw8BPWXYROfq0rkWsTOXPThgujnOYeWBHvHedjLcA8RdWuvqNMH1cisAMozo3fLXqsboTJkpLWXTiLiQrTOQeopk42rz-HQN9uM9g3yAsco526pd5NlwN9GQUVQxR_3lRLwIhLP7-Q83nRMaeqSn7B7SMGyzDI1R4NdEb4_Hrn3IjiBEWHYY7ui09XWeR0Yawl5OZjdeAoUTg5StGEe",
      link: "/products?category=rings"
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
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-12 max-w-[90rem] mx-auto border-b border-[#D4AF37]/10">
      <FadeIn delay={0}>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-white bg-neutral-800/50 px-4 py-2 inline-block">
            Our Collection
          </h2>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {collections.map((cat, i) => (
          <FadeIn key={i} delay={Math.min(i * 100, 500)} className="group flex flex-col">
            <Link to={cat.link} className="block relative aspect-square overflow-hidden mb-3">
              <img
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                alt={cat.title}
                src={cat.image}
              />
            </Link>
            <div>
              <Link to={cat.link} className="inline-flex items-center gap-2 bg-neutral-800 text-neutral-300 hover:text-white px-2 py-1 text-xs sm:text-sm transition-colors font-medium">
                {cat.title} <FiArrowRight className="text-xs" />
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
