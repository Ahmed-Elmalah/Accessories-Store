import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiPackage, FiHeart, FiLogOut, FiTruck } from "react-icons/fi";
import { MdWorkspacePremium, MdBadge } from "react-icons/md";
import toast from "react-hot-toast";

import useLogin from "../../auth/useLogin";
import OrderTrackingPage from "./OrderTrackingPage";

export default function ProfilePage() {
  const { logOut } = useLogin();
  const [activeTab, setActiveTab] = useState("details");
  const [user, setUser] = useState({
    firstName: "Ahmed",
    lastName: "Elmalah",
    email: "ahmed@example.com",
    phone: "+20 100 123 4567",
    governorate: "Cairo",
    city: "Nasr City",
    address: "Makram Ebeid St, Bldg 12"
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Horizontal Tab Navigation */}
      <div className="bg-[#111111] border-b border-[#333333]">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex overflow-x-auto gap-8 no-scrollbar">
            <button onClick={() => setActiveTab("details")} className={`py-4 text-sm font-label uppercase tracking-widest whitespace-nowrap flex items-center gap-2 transition-colors ${activeTab === 'details' ? 'text-primary border-b-2 border-[#D4AF37]' : 'text-neutral-400 hover:text-primary'}`}>
              <FiUser className="text-lg" />
              Account Details
            </button>
            <button onClick={() => setActiveTab("orders")} className={`py-4 text-sm font-label uppercase tracking-widest whitespace-nowrap flex items-center gap-2 transition-colors ${activeTab === 'orders' ? 'text-primary border-b-2 border-[#D4AF37]' : 'text-neutral-400 hover:text-primary'}`}>
              <FiPackage className="text-lg" />
              My Orders
            </button>
            <button onClick={logOut} className="py-4 text-sm font-label uppercase tracking-widest text-neutral-400 hover:text-primary transition-colors whitespace-nowrap flex items-center gap-2 ml-auto">
              <FiLogOut className="text-lg" />
              Logout
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      {activeTab === "details" ? (
        <div className="grow p-6 md:p-12 lg:p-16">
          <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-headline font-light text-primary mb-2">Welcome, {user.firstName}</h1>
              <p className="text-neutral-400 font-body">Manage your personal details, addresses and preferences.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs font-label uppercase tracking-widest text-neutral-500 mb-1">Status</p>
              <p className="text-primary font-display font-semibold">Premium Member</p>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Forms */}
            <div className="lg:col-span-2 space-y-12">
              <form onSubmit={handleSave}>
                {/* Personal Information */}
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#222]">
                    <MdBadge className="text-primary text-xl" />
                    <h2 className="text-xl font-headline text-white tracking-wide">Personal Information</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-label uppercase tracking-wider text-neutral-400 mb-2" htmlFor="firstName">First Name</label>
                      <input onChange={handleChange} value={user.firstName} className="w-full bg-[#111111] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded px-4 py-3 text-sm outline-none transition-all" id="firstName" type="text" />
                    </div>
                    <div>
                      <label className="block text-xs font-label uppercase tracking-wider text-neutral-400 mb-2" htmlFor="lastName">Last Name</label>
                      <input onChange={handleChange} value={user.lastName} className="w-full bg-[#111111] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded px-4 py-3 text-sm outline-none transition-all" id="lastName" type="text" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-label uppercase tracking-wider text-neutral-400 mb-2" htmlFor="email">Email Address</label>
                      <input onChange={handleChange} value={user.email} disabled className="w-full bg-[#0a0a0a] border border-[#333333] text-neutral-500 rounded px-4 py-3 text-sm outline-none cursor-not-allowed" id="email" type="email" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-label uppercase tracking-wider text-neutral-400 mb-2" htmlFor="phone">Phone Number</label>
                      <input onChange={handleChange} value={user.phone} className="w-full bg-[#111111] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded px-4 py-3 text-sm outline-none transition-all" id="phone" type="tel" />
                    </div>
                  </div>
                </section>

                {/* Shipping Address */}
                <section>
                  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#222]">
                    <FiTruck className="text-primary text-xl" />
                    <h2 className="text-xl font-headline text-white tracking-wide">Shipping Address</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-label uppercase tracking-wider text-neutral-400 mb-2" htmlFor="governorate">State / Governorate</label>
                      <input onChange={handleChange} value={user.governorate} className="w-full bg-[#111111] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded px-4 py-3 text-sm outline-none transition-all" id="governorate" type="text" />
                    </div>
                    <div>
                      <label className="block text-xs font-label uppercase tracking-wider text-neutral-400 mb-2" htmlFor="city">City / Area</label>
                      <input onChange={handleChange} value={user.city} className="w-full bg-[#111111] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded px-4 py-3 text-sm outline-none transition-all" id="city" type="text" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-label uppercase tracking-wider text-neutral-400 mb-2" htmlFor="address">Detailed Address</label>
                      <textarea onChange={handleChange} value={user.address} className="w-full bg-[#111111] border border-[#333333] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded px-4 py-3 text-sm outline-none transition-all resize-none" id="address" rows="3"></textarea>
                    </div>
                  </div>
                </section>

                {/* Action */}
                <div className="pt-8">
                  <button type="submit" className="w-full md:w-auto bg-[#D4AF37] text-[#0a0a0a] font-label font-bold text-sm uppercase tracking-widest px-10 py-4 rounded hover:bg-white transition-colors duration-300">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Loyalty Badge */}
            <div className="lg:col-span-1">
              <div className="bg-[#111111] border border-[#333333] rounded p-8 relative overflow-hidden group sticky top-28">
                {/* Decorative background glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37] opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <MdWorkspacePremium className="text-primary text-3xl" />
                  <h3 className="text-lg font-headline font-semibold text-primary tracking-wide">LaFleur Privilège</h3>
                </div>
                
                <p className="text-sm font-body leading-relaxed text-neutral-400 mb-8 relative z-10">
                  You are <span className="text-white font-semibold">1 order away</span> from unlocking a lifetime <span className="text-primary">10% discount</span> on all exclusive collections.
                </p>
                
                <div className="w-full bg-[#333333] rounded-full h-1.5 mb-2 relative z-10">
                  <div className="bg-[#D4AF37] h-1.5 rounded-full w-4/5"></div>
                </div>
                
                <div className="flex justify-between text-xs font-label text-neutral-500 relative z-10">
                  <span>Tier 1</span>
                  <span className="text-primary">Tier 2</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      ) : (
        <OrderTrackingPage />
      )}
    </div>
  );
}