import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          Elevate Your Style with <span className="text-primary">Premium Accessories</span>
        </h1>
        <p className="text-lg text-zinc-400 mb-10 max-w-xl leading-relaxed">
          Discover our exclusive collection of handcrafted accessories designed to perfect your everyday look. 
        </p>
        <Link to="/products" className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-black hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">
          Explore Collection
        </Link>
      </div>
    </div>
  );
}
