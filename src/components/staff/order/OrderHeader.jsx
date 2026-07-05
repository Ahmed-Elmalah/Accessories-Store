import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiPrinter } from "react-icons/fi";

export default function OrderHeader({ order, status }) {
  return (
    <div className="flex justify-between items-center py-6 px-4 md:px-8 border-b border-outline-variant shrink-0 bg-background">
      <div className="flex items-center gap-4">
        <Link to="/staff" className="text-on-surface-variant hover:text-primary transition-colors flex items-center">
          <FiArrowLeft className="text-xl" />
        </Link>
        <h2 className="font-headline font-semibold text-white text-xl md:text-2xl tracking-wide flex items-center gap-3">
          Order #{order.id}
          <span className={`px-2 py-0.5 rounded text-xs font-label font-bold tracking-widest uppercase border ${
            status === 'delivered' ? 'border-[#10b981] text-[#10b981] bg-[#10b981]/10' :
            status === 'processing' ? 'border-primary text-primary bg-primary/10' :
            status === 'cancelled' ? 'border-red-500 text-red-500 bg-red-500/10' :
            'border-outline-variant text-on-surface-variant bg-surface'
          }`}>
            {status}
          </span>
        </h2>
      </div>
      <button className="hidden md:flex px-4 py-2 text-sm font-label tracking-widest uppercase text-primary border border-primary hover:bg-primary hover:text-black rounded transition-colors duration-300 items-center gap-2">
        <FiPrinter className="text-[18px]" />
        Print Invoice
      </button>
    </div>
  );
}
