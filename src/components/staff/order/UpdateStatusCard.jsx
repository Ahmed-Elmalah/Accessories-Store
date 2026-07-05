import React from "react";

export default function UpdateStatusCard({ status, setStatus }) {
  return (
    <section className="bg-background rounded-xl p-5 border border-primary/20 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      <h3 className="font-headline font-semibold text-white text-xs tracking-widest uppercase mb-4 relative z-10">
        Update Status
      </h3>
      <div className="relative z-10 space-y-4">
        <div>
          <label className="sr-only">Status</label>
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
            className="w-full bg-surface border border-outline-variant text-white font-body text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <button className="w-full py-2.5 bg-primary text-black font-headline font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          Update Order
        </button>
      </div>
    </section>
  );
}
