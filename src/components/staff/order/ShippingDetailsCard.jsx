import React from "react";
import { FiTruck } from "react-icons/fi";

export default function ShippingDetailsCard({ customerName, shipping }) {
  return (
    <section className="bg-surface rounded-xl p-5 border border-outline-variant shadow-lg">
      <h3 className="font-headline font-semibold text-white text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
        <FiTruck className="text-primary text-base" />
        Shipping Details
      </h3>
      <div className="font-body text-sm text-on-surface-variant space-y-1">
        <p className="font-semibold text-white">{customerName}</p>
        {shipping.address.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-outline-variant">
        <p className="font-label text-xs uppercase tracking-widest text-primary mb-1">Method</p>
        <p className="font-body text-sm text-white font-medium">{shipping.method}</p>
      </div>
    </section>
  );
}
