import React from "react";
import { FiClock, FiCheck } from "react-icons/fi";

export default function OrderTimelineCard() {
  return (
    <section className="bg-surface rounded-xl p-6 border border-outline-variant shadow-lg">
      <h3 className="font-headline font-semibold text-white text-sm tracking-widest uppercase mb-6 flex items-center gap-2 border-b border-outline-variant pb-4">
        <FiClock className="text-primary text-lg" />
        Order Timeline
      </h3>
      <div className="pl-4 py-2 relative">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-6 w-px bg-outline-variant"></div>
        <div className="space-y-8 relative">
          {/* Step 1: Placed */}
          <div className="flex gap-6 relative z-10">
            <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-surface mt-1 shrink-0 flex items-center justify-center">
              <FiCheck className="text-[10px] text-black font-bold stroke-[3]" />
            </div>
            <div>
              <h4 className="font-headline font-semibold text-white text-sm">Order Placed</h4>
              <p className="font-body text-on-surface-variant text-xs mt-1">Oct 24, 2023 - 09:41 AM</p>
            </div>
          </div>
          
          {/* Step 2: Payment */}
          <div className="flex gap-6 relative z-10">
            <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-surface mt-1 shrink-0 flex items-center justify-center">
              <FiCheck className="text-[10px] text-black font-bold stroke-[3]" />
            </div>
            <div>
              <h4 className="font-headline font-semibold text-white text-sm">Payment Confirmed</h4>
              <p className="font-body text-on-surface-variant text-xs mt-1">Oct 24, 2023 - 09:45 AM</p>
            </div>
          </div>

          {/* Step 3: Processing (Active) */}
          <div className="flex gap-6 relative z-10">
            <div className="w-4 h-4 rounded-full bg-background border-2 border-primary ring-4 ring-primary/20 mt-1 shrink-0"></div>
            <div>
              <h4 className="font-headline font-bold text-primary text-sm">Processing</h4>
              <p className="font-body text-primary/70 text-xs mt-1">Preparing for shipment in Paris boutique.</p>
            </div>
          </div>

          {/* Step 4: Shipped (Future) */}
          <div className="flex gap-6 relative z-10 opacity-40">
            <div className="w-4 h-4 rounded-full bg-background border-2 border-outline-variant ring-4 ring-surface mt-1 shrink-0"></div>
            <div>
              <h4 className="font-headline font-semibold text-white text-sm">Shipped</h4>
              <p className="font-body text-on-surface-variant text-xs mt-1">Pending carrier pickup.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
