import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight, FiHeart, FiMinus, FiPlus, FiChevronDown } from "react-icons/fi";
import { useCartStore } from "../../store/useCartStore";
import toast from "react-hot-toast";
import ProductCard from "../../components/user/product/ProductCard";

export default function ProductDetailsPage() {
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = React.useState(1);

  const product = {
    id: "prod_1",
    name: "Ethereal Gold Ring",
    price: 1250,
    category: "Jewelry",
    description: "A masterpiece of contemporary elegance, this 18k yellow gold ring features a delicate, ethereal design that captures the light from every angle. Perfect for stacking or making a solo statement.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b2828e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605100805126-70e28e1215b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605100806121-d779f323e0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605100803522-6b94c3c3a444?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ]
  };

  const relatedProducts = [
    {
      id: "prod_10",
      name: "Lumina Necklace",
      price: 1850,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcrLHMHEbeLhCG3a24mflM1JviA1HnwgzXYYGrEd_yUB2eXEB1Zuh4JrD7vwuQfwSQzhM4q17pwmzwJI9_vDFCJC7M841f745yBuiyV9iufoP3X2oxr8oH5uF3cloiJbh6x4ZByT09gYvqqoapRJCHibPI15Nb2Jc95cDgGdfDhgkt2dW1PaojXGxtp-rzmKY3o7_CNxcYiyo_OytWvqSiJygsxid1DmW6-AiEBI1Wid5BOGz4doixZ0klzFBoodzc-0wV7YInJAM1",
      category: "Necklace"
    },
    {
      id: "prod_11",
      name: "Aura Chain Bracelet",
      price: 2400,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBurJ4fLLp77F7fQDezgYhnsbF2SOwCazopreVTIe1_th0ffQTRvGXisnZr7ZSfNyDOuGagCtwMi1txsCX2dFitb92BMZkKXYgGO2kZQipwgOtIR-mRMknC9khY23yDSyA4Yw07S8T5INUR1h7hz6ofNjGpLP07BDh_5gEhorGK39kTHLY7Zqp_fUhc-lZUuhMrJWb5MxWPrDimQUj0hpzUg6Hg3cfbik9MNlnJKkTdgzMrJKuPOwafIEULbsBpPPJo0T_WCXZCYIeA",
      category: "Bracelet"
    },
    {
      id: "prod_12",
      name: "Solstice Hoops",
      price: 890,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqjFBOq1UKLBb0xBvpICdNDtICOUypF6yx5n8eDZCmZFFlP98PCw4x_-Okmp0vfbnJwMUXbSn5TTjWjwnl7uuj535KK1-vmfY-U6DJJQqV9Gr2KKrFC8RNZFHJshO-M2cUAbGdcjEvsM2_ZV18RUq2lI21usp7BkxaN0d4L9An9Pr7K_JQISb9kjrWeMnd_JnTPFDWs9zDHnre8kZJB1PMB2c4kOkTAP1TV029km7vhrUnSgOuxAL_MnV168w8EkQVHlyOlHV2eUpG",
      category: "Earrings"
    },
    {
      id: "prod_13",
      name: "Nova Band",
      price: 650,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-JQVa40MBDW5r1hSoR2D1qJLqT7j2bhfsF5GUgcTVAP4UeXs8v2rowb_qfs83dj7wWeJaypQPqW3lc-eu5WLsbpJC6p7UXSk44tZvXjZkNtRIWjVwJCSe3t0QwuaGmVnkEK4OIwPSvNEbXeWnncRmgl1lHOq2sLPR_2MEqxMiUKtF1Co8XF7AixoDcJvBxZgliZYBSBs6rHf1D6TtHqU5nSlMZEaizZbOSDeUjGB_sjd3Bj1iSoMKfYumG8gqBcXmNRG2N4-5owka",
      category: "Ring"
    }
  ];

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`${quantity} x ${product.name} added to cart`);
  };

  return (
    <main className="flex-grow w-full max-w-[90rem] mx-auto px-6 sm:px-12 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex text-sm text-neutral-400 font-light mb-12 font-label">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link className="hover:text-[#D4AF37] transition-colors" to="/">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <FiChevronRight className="text-[16px] mx-1" />
              <Link className="hover:text-[#D4AF37] transition-colors ml-1 md:ml-2" to="/products">Jewelry</Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <FiChevronRight className="text-[16px] mx-1" />
              <span className="text-[#D4AF37] ml-1 md:ml-2">{product.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Product Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
        {/* Left Column: Imagery */}
        <div className="flex flex-col gap-6">
          <div className="aspect-[4/5] bg-[#111111] overflow-hidden border border-[#D4AF37]/10">
            <img alt={product.name} className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-in-out" src={product.images[0]} />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <div key={idx} className={`aspect-square bg-[#111111] cursor-pointer border ${idx === 0 ? 'border-[#D4AF37]' : 'border-transparent opacity-60 hover:opacity-100 transition-opacity'} overflow-hidden`}>
                <img className="w-full h-full object-cover" alt={`View ${idx + 1}`} src={img} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col justify-start">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-light tracking-wide">{product.name}</h1>
          <p className="font-headline text-2xl text-[#D4AF37] mb-8">${product.price}</p>
          <p className="font-body text-neutral-400 font-light leading-relaxed mb-10 text-lg">
            {product.description}
          </p>

          {/* Size Selector */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-label text-sm uppercase tracking-widest text-white">Size</h3>
              <a className="text-xs text-neutral-500 underline hover:text-[#D4AF37] transition-colors" href="#">Size Guide</a>
            </div>
            <div className="flex gap-3">
              {[5, 6, 7, 8, 9].map((size) => (
                <button key={size} className={`w-12 h-12 rounded-full border ${size === 7 ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]' : 'border-[#333333] hover:border-[#D4AF37] text-white'} transition-colors flex items-center justify-center font-light`}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="flex items-center border border-[#333333] h-14 w-full sm:w-32">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 text-neutral-400 hover:text-[#D4AF37] transition-colors focus:outline-none h-full"><FiMinus /></button>
              <span className="flex-grow text-center font-light text-white">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 text-neutral-400 hover:text-[#D4AF37] transition-colors focus:outline-none h-full"><FiPlus /></button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-grow bg-[#D4AF37] text-[#0a0a0a] h-14 font-label uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 font-bold">
              Add to Cart
            </button>
            <button className="h-14 w-14 border border-[#333333] flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors focus:outline-none">
              <FiHeart className="text-xl" />
            </button>
          </div>

          {/* Accordions for Details */}
          <div className="border-t border-[#333333] divide-y divide-[#333333] font-label text-sm uppercase tracking-widest">
            <details className="group py-4 cursor-pointer" open>
              <summary className="flex justify-between items-center font-medium text-white list-none">
                Product Details
                <FiChevronDown className="text-lg group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pt-4 text-neutral-400 normal-case tracking-normal font-body font-light text-base leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Solid 18k Yellow Gold</li>
                  <li>Handcrafted in Paris</li>
                  <li>Band width: 2mm</li>
                  <li>Weight: approx. 3.5g</li>
                </ul>
              </div>
            </details>
            <details className="group py-4 cursor-pointer">
              <summary className="flex justify-between items-center font-medium text-white list-none">
                Shipping & Returns
                <FiChevronDown className="text-lg group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pt-4 text-neutral-400 normal-case tracking-normal font-body font-light text-base leading-relaxed">
                Complimentary express shipping on all orders over $500. Returns are accepted within 30 days of purchase in original condition.
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mb-16">
        <h2 className="font-headline text-3xl italic font-light text-center mb-12 text-white">Complete the Look</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {relatedProducts.map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </main>
  );
}
