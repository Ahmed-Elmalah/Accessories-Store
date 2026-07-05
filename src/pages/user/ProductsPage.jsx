import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FiChevronRight, FiChevronLeft, FiChevronDown } from "react-icons/fi";
import ProductCard from "../../components/user/product/ProductCard";

export default function ProductsPage() {
  const products = [
    {
      id: "prod_1",
      name: "L'Éternité Diamond Pendant",
      price: 2450,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIj3fewkEAEBIzMBtjwlsJFTfNbsE0k82NKwMXecJu-5LuwHT4GOvQcHukKuNnUF28HlyEiZv__TKpQsmmdzy5vSia4LsVWSZ3WZ0jy5ICZPXZpl0LdIP6zVI7DNSl_ujiWlVD-7MV3eYJ72cG_S3F74wXallxNShwAYg5_AKK3azgmjBKoIpwqDasbhlOqxN_8hLff37fKiL5QW-VvITaQgmPtU1WOZqSUXEgAVszydiOOf1O9uwdvGgpz2nTNhTbx-L7GbnMIwW5",
      category: "Necklace",
      badge: "New",
      stock: 10
    },
    {
      id: "prod_2",
      name: "Aura Chain Link",
      price: 1800,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo0IX4uezDHVkH8BXQXVZoVr6_5vbE0IUOUc8f-xWGRkYzzdaR-gj83LW6uPFphxaO_gwATzoEWQXEC3b-3PSCXPs2XtQVuNJ54_Zcd3lU5yg2HG0ukHhllIA0JL2IPBIz1pETw-1TpjNylXZRHSzHWgQ6ZRd1M0IGbxoY8nQJzmI0LXlhFnB4DVJ6CxhHjyGEEu8guNxtuD9PfkVYTL6B5I0Ir5Vhao0b_tRjabcmp1L1lfPoFpXwSJ9xw3PYsF56k_wJPgfHSyVK",
      category: "Bracelet",
      stock: 5
    },
    {
      id: "prod_3",
      name: "Emerald Trinity Stack",
      price: 3200,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYLmRbHHTg7JrvOIwiMOfFxenEv5--1Kf3E5ydvExlAg6TPqCf3-hQuSzhroc7xlplF-o8OvmDFZC2spaGvelZw_a1LUD8ASAlY1srt-pL_Ii6pvI8Pxb_bWPcKJw3X0BXkK63TiOVHyQQAUenGxmCrUfDQUAmfONTfYIMc18URtxxi7FxJO-SGYasjZMBfCSyK0-L1ZVATF6Ee24YPjm89qxeK2aEj_5ohOajr6FmbqmomNoMoGVCy8AB55L68R16v2tUGh6gJuV0",
      category: "Ring",
      stock: 3
    },
    {
      id: "prod_4",
      name: "Soleil Rigid Choker",
      price: 4100,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcHUMlZMTEMS9MHfAZpZF6UjJ7SvjUQsvl4eBIzZSErub_mI07GeVpsMEsjg-e8jCYBN5BjawGmiKCb9iGmTAyxSr6K4_olwQXnHg5XwMf8Klnv4annNqcEJid0wex0edb6zflWSQcBrfBZ1TS6j9Td05637wBnQL3SIkHSU6Z9FN73bQvwBhGsac4-VPYBBCGkzAa80uP0ellcggNK0i1qCZ2SSZbbPEmDnhCNe7z8xEHbvZ_GA0QRTiTaPaWnoCyQkG_v35EyZxq",
      category: "Necklace",
      badge: "Best Seller",
      stock: 12
    },
    {
      id: "prod_5",
      name: "Lumina Pearl Strand",
      price: 950,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXW9PLTHGduHzg5HEiHx46f7mS13MMz-6t4k21Ed2HAvELhEbUHjzLNi9I2Nb3ziVg9mNFlRN2JeQQdkk61Vqsg3oh0DlhAXa3IZDLEDIrngOUY01U0oczNLKjiUkaUyButXniVSI6xEBF8lkIm_Xs3R6d1gttnlxntIc6zxoaaG-Zuwaz-9z573zkzak9wjhZaA5G1SAkieGLAFTyN8lK7KK7yX4P4q9LtRpP_tD7Ric6DdMXi7If9MuiIt1SftmFnA-Kb1roFXqh",
      category: "Bracelet",
      stock: 8
    },
    {
      id: "prod_6",
      name: "Heritage Signet",
      price: 1450,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArvtIOL0F3mFkpHIHpsWK-mSI9T4-bGglhUGxwh30XykWLt_b-ef0J14gLlFCQpY3fDsqozNZq4ex_seXAgsOL6OpVSa55htz0-NV8tQZhJB9JX3RKmwKisXolzJSZg15kgndklldpj01K64jS5_xxAOA9L67zRVo0CD80l-0tEo64Hjnh1B0eaCmi5tf8LnV0OtyRbzbfIqPyS2Xsrw0Z0dT8rtgtl8b52wZGqGC53S49eLmch1dk5J6pcboLw5jYkB0gPpxxXh6C",
      category: "Ring",
      stock: 0
    }
  ];

  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  // Filter products by category (handling singular/plural mismatch like "Necklace" vs "necklaces")
  const filteredProducts = categoryParam
    ? products.filter((p) => categoryParam.toLowerCase().includes(p.category.toLowerCase()))
    : products;

  const pageTitle = categoryParam
    ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)
    : "The Collection";

  return (
    <main className="flex-grow max-w-[90rem] mx-auto w-full px-6 py-12 md:py-16">
      {/* Page Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D4AF37]/20 pb-6">
        <div>
          <nav aria-label="Breadcrumb" className="flex text-neutral-500 text-xs font-label uppercase tracking-widest mb-4">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link className="hover:text-[#D4AF37] transition-colors" to="/">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <FiChevronRight className="text-[14px] mx-1" />
                  <span className="text-[#D4AF37]">{pageTitle}</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-[#D4AF37] tracking-tight">{pageTitle}</h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Right Grid (Products) */}
        <div className="w-full">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-12 p-6 bg-[#111111] border border-[#D4AF37]/20 rounded-DEFAULT">
            <div className="flex flex-wrap items-center gap-8">
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm font-label text-neutral-300 hover:text-[#D4AF37] transition-colors uppercase tracking-widest">
                  Categories <FiChevronDown className="text-lg" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm font-label text-neutral-300 hover:text-[#D4AF37] transition-colors uppercase tracking-widest">
                  Availability <FiChevronDown className="text-lg" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm font-label text-neutral-300 hover:text-[#D4AF37] transition-colors uppercase tracking-widest">
                  Sort By <FiChevronDown className="text-lg" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-label text-neutral-500 uppercase tracking-widest">Price Range:</span>
              <div className="flex items-center gap-2">
                <input className="w-20 bg-[#0a0a0a] border border-[#D4AF37]/20 px-3 py-1.5 text-xs font-label text-white focus:border-[#D4AF37] focus:ring-0 outline-none transition-colors" placeholder="Min" type="text" />
                <span className="text-neutral-600">-</span>
                <input className="w-20 bg-[#0a0a0a] border border-[#D4AF37]/20 px-3 py-1.5 text-xs font-label text-white focus:border-[#D4AF37] focus:ring-0 outline-none transition-colors" placeholder="Max" type="text" />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 xl:grid-cols-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-neutral-400 font-body">No products found in this category.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="p-2 text-neutral-500 hover:text-[#D4AF37] transition-colors border border-transparent hover:border-[#D4AF37]/20 rounded-DEFAULT">
                <FiChevronLeft className="text-[20px]" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#D4AF37] text-[#0a0a0a] font-label font-medium rounded-DEFAULT">1</button>
              <button className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:bg-[#111111] border border-transparent hover:border-[#D4AF37]/20 transition-colors rounded-DEFAULT">2</button>
              <button className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:bg-[#111111] border border-transparent hover:border-[#D4AF37]/20 transition-colors rounded-DEFAULT">3</button>
              <span className="text-neutral-600 px-1">...</span>
              <button className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:bg-[#111111] border border-transparent hover:border-[#D4AF37]/20 transition-colors rounded-DEFAULT">8</button>
              <button className="p-2 text-neutral-400 hover:text-[#D4AF37] transition-colors border border-transparent hover:border-[#D4AF37]/20 rounded-DEFAULT">
                <FiChevronRight className="text-[20px]" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
