import React from "react";
import { Link } from "react-router-dom";
import { FiCheck, FiTruck, FiBox, FiMessageCircle } from "react-icons/fi";

export default function OrderTrackingPage() {
  return (
    <div className="py-12 md:py-16 px-6 md:px-12 max-w-5xl mx-auto grow w-full">
      {/* Page Header */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-headline text-primary mb-4 italic font-light">Track Your Order</h1>
        <p className="text-neutral-400 font-body max-w-xl mx-auto">Enter your credentials below to see the real-time status of your bespoke luxury accessory.</p>
      </section>

      {/* Tracking Search Bar */}
      <section className="mb-20">
        <div className="bg-[#111111] border border-[#333333] p-2 flex flex-col md:flex-row gap-2 rounded-lg">
          <input 
            aria-label="Order ID" 
            className="bg-transparent border-none text-white px-6 py-4 flex-1 font-body focus:ring-1 focus:ring-[#D4AF37] outline-none rounded" 
            placeholder="Order ID" 
            type="text" 
            defaultValue="#LF-890214"
          />
          <div className="w-px bg-[#333333] hidden md:block my-3"></div>
          <input 
            aria-label="Phone Number" 
            className="bg-transparent border-none text-white px-6 py-4 flex-1 font-body focus:ring-1 focus:ring-[#D4AF37] outline-none rounded" 
            placeholder="Phone Number" 
            type="text" 
          />
          <button className="bg-[#D4AF37] text-[#0a0a0a] px-10 py-4 font-label font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded">
            Track Order
          </button>
        </div>
      </section>

      {/* Progress Timeline */}
      <section className="mb-20 px-4">
        <div className="relative flex justify-between items-start">
          {/* Connector Line Background */}
          <div className="absolute top-6 left-0 w-full h-[2px] bg-[#333333] -z-10"></div>
          
          {/* Connector Line Active */}
          <div className="absolute top-6 left-0 w-[66%] h-[2px] bg-[#D4AF37] -z-10 shadow-[0_0_8px_rgba(212,175,55,0.4)]"></div>
          
          {/* Step 1: Completed */}
          <div className="flex flex-col items-center gap-4 text-center w-1/4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <FiCheck className="text-[#0a0a0a] font-bold text-xl" />
            </div>
            <div className="space-y-1">
              <p className="font-label font-bold text-primary text-sm uppercase tracking-tighter">Order Received</p>
              <p className="text-xs text-neutral-400">Nov 12, 10:45 AM</p>
            </div>
          </div>
          
          {/* Step 2: Completed */}
          <div className="flex flex-col items-center gap-4 text-center w-1/4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <FiCheck className="text-[#0a0a0a] font-bold text-xl" />
            </div>
            <div className="space-y-1">
              <p className="font-label font-bold text-primary text-sm uppercase tracking-tighter">In Preparation</p>
              <p className="text-xs text-neutral-400">Nov 13, 02:20 PM</p>
            </div>
          </div>
          
          {/* Step 3: Active */}
          <div className="flex flex-col items-center gap-4 text-center w-1/4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(212,175,55,0.15)] relative">
              <FiTruck className="text-[#0a0a0a] font-bold text-xl relative z-10" />
              <div className="absolute -inset-2 rounded-full border border-[#D4AF37]/30 animate-ping"></div>
            </div>
            <div className="space-y-1">
              <p className="font-label font-bold text-primary text-sm uppercase tracking-tighter">Shipped</p>
              <p className="text-xs text-white">Estimated: Nov 16</p>
            </div>
          </div>
          
          {/* Step 4: Inactive */}
          <div className="flex flex-col items-center gap-4 text-center w-1/4">
            <div className="w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center border-4 border-[#0a0a0a]">
              <FiBox className="text-neutral-500 text-xl" />
            </div>
            <div className="space-y-1">
              <p className="font-label font-bold text-neutral-500 text-sm uppercase tracking-tighter">Delivered</p>
              <p className="text-xs text-neutral-500 opacity-0">Pending</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Detail Card */}
      <section className="mb-12">
        <div className="bg-[#111111] border border-[#333333] p-8 md:p-12 shadow-2xl rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-start border-b border-[#222] pb-8 mb-10">
            <h2 className="text-2xl font-headline italic text-white font-light">Order Details</h2>
            <div className="text-right mt-4 md:mt-0">
              <p className="text-neutral-400 font-label text-xs uppercase tracking-widest mb-1">ID: #LF-890214</p>
              <p className="text-primary font-headline font-bold">In Transit</p>
            </div>
          </div>
          
          {/* Product List */}
          <div className="space-y-8 mb-12">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-[#0a0a0a] border border-[#222] p-2 rounded">
                <img className="w-full h-full object-cover rounded-sm" alt="Ethereal Gold Ring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdSsP4rp5vdM7UVfquITon1TOyQaetUXi4W1MI2-d6IZPDe_SCcoyG2tD_okl7O2atMPYEd3pw_X2oTu72Q2Qe0Eu0jyNTj91qFx-19PgVfIfbLbGWSedLY6fos9y4Re46CSPosn1vqiKo4orYnuadBo1LwDTpk1w_HBCdAZs7f6ueWBNs96iCQJs_0i7wN8Zj2U9uaKO8NbaASEPrkmdvmjhXTyWQ_WnG3Uys8UYsyLSrTgo9LWplyLtE4pa2VOhY0SWCjZFH3Ycc" />
              </div>
              <div className="flex-1">
                <h3 className="font-label font-bold text-white">Ethereal Gold Ring</h3>
                <p className="text-neutral-400 text-sm mt-1">Size: 7 • 18k Yellow Gold</p>
              </div>
              <div className="text-right">
                <p className="font-headline font-bold text-primary">$1,250</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-[#0a0a0a] border border-[#222] p-2 rounded">
                <img className="w-full h-full object-cover rounded-sm" alt="Aura Chain Link" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6GMfctVHNQJ9sj8QdGUZAeZQEHkaCacrY4ICiJPlUqqcET-7jjaxm2QWsVNUdH9tSyj9NXrXKcowbbgwtA_Ds3fbonAY2PgnXTBR61tykMItLYb6_i0Rkc93OCLkBRwn18ybODVvExaQ7bpvni4MMMvTNwjZ8xeV5re5eF43CTbeNo0_vubgywdl2b8cxuUNGwXLh2JAEgxqNYs987ZBB5YfOTF1QVWx-tsk1QALj-NMaxuea_AKjgPUcysQVCZ7Xa6s_F6FtHzdO" />
              </div>
              <div className="flex-1">
                <h3 className="font-label font-bold text-white">Aura Chain Link</h3>
                <p className="text-neutral-400 text-sm mt-1">Length: 18" • Solid Links</p>
              </div>
              <div className="text-right">
                <p className="font-headline font-bold text-primary">$2,100</p>
              </div>
            </div>
          </div>
          
          {/* Shipping and Payment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#222] pt-10">
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-neutral-500 mb-4">Shipping Address</h4>
              <div className="space-y-1 text-white font-body leading-relaxed text-sm">
                <p>Eleanor Fitzgerald</p>
                <p>7245 Artisan Way, Apt 4B</p>
                <p>Manhattan, NY 10014</p>
                <p>United States</p>
              </div>
            </div>
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-neutral-500 mb-4">Payment Method</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-[#0a0a0a] border border-[#333333] rounded flex items-center justify-center text-[10px] font-bold text-neutral-400">VISA</div>
                <div className="space-y-1 text-white font-body text-sm">
                  <p>Ending in 8842</p>
                  <p className="text-xs text-neutral-400">Transaction ID: TXN_90022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="flex flex-col items-center gap-6">
        <p className="text-neutral-400 font-body">Expected delivery within 3-5 business days.</p>
        <button className="group flex items-center gap-3 border border-[#D4AF37] px-8 py-4 text-primary font-label font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0a0a0a] transition-all duration-300 rounded">
          <FiMessageCircle className="group-hover:scale-110 transition-transform text-xl" />
          Need Help? Contact us
        </button>
      </section>
    </div>
  );
}
