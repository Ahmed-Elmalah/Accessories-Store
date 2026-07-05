import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#D4AF37]/10 pt-20 pb-10">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 flex flex-col">
            <Link
              className="text-3xl font-headline font-bold text-[#D4AF37] tracking-wider mb-6"
              to="/"
            >
              LaFleur
            </Link>
            <p className="text-neutral-400 font-body text-sm font-light leading-relaxed mb-6">
              Elegance in detail. Discover our curated collection of premium jewelry, designed for those who appreciate the finer things.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-headline text-lg mb-6">Shop</h4>
            <ul className="space-y-4 flex flex-col">
              <li><Link to="/necklaces" className="text-neutral-400 hover:text-[#D4AF37] font-body text-sm transition-colors">Necklaces</Link></li>
              <li><Link to="/bracelets" className="text-neutral-400 hover:text-[#D4AF37] font-body text-sm transition-colors">Bracelets</Link></li>
              <li><Link to="/rings" className="text-neutral-400 hover:text-[#D4AF37] font-body text-sm transition-colors">Rings</Link></li>
              <li><Link to="/gifts" className="text-neutral-400 hover:text-[#D4AF37] font-body text-sm transition-colors">Gifts</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-headline text-lg mb-6">Company</h4>
            <ul className="space-y-4 flex flex-col">
              <li><Link to="#" className="text-neutral-400 hover:text-[#D4AF37] font-body text-sm transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-[#D4AF37] font-body text-sm transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-[#D4AF37] font-body text-sm transition-colors">Press</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-[#D4AF37] font-body text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-headline text-lg mb-6">Support</h4>
            <ul className="space-y-4 flex flex-col">
              <li><Link to="#" className="text-neutral-400 hover:text-[#D4AF37] font-body text-sm transition-colors">FAQ</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-[#D4AF37] font-body text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-[#D4AF37] font-body text-sm transition-colors">Care Guide</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-[#D4AF37] font-body text-sm transition-colors">Track Order</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#D4AF37]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 font-body text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LaFleur Luxury. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-neutral-500 hover:text-[#D4AF37] font-body text-xs transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-neutral-500 hover:text-[#D4AF37] font-body text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
