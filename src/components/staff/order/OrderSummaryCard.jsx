import React from "react";
import { FiFileText } from "react-icons/fi";

export default function OrderSummaryCard({ summary }) {
  return (
    <section className="bg-surface rounded-xl p-5 border border-outline-variant shadow-lg">
      <h3 className="font-headline font-semibold text-white text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
        <FiFileText className="text-primary text-base" />
        Order Summary
      </h3>
      <div className="space-y-3 font-body text-sm">
        <div className="flex justify-between text-on-surface-variant">
          <span>Subtotal</span>
          <span className="text-white">{summary.subtotal}</span>
        </div>
        <div className="flex justify-between text-on-surface-variant">
          <span>Shipping</span>
          <span className="text-white">{summary.shipping}</span>
        </div>
        <div className="flex justify-between text-on-surface-variant">
          <span>Tax</span>
          <span className="text-white">{summary.tax}</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-outline-variant flex justify-between items-center">
        <span className="font-headline font-bold text-white text-sm uppercase tracking-wide">Total</span>
        <span className="font-headline font-bold text-primary text-xl">{summary.total}</span>
      </div>
    </section>
  );
}
