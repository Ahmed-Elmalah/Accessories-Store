import React from "react";
import { FiShoppingBag } from "react-icons/fi";

export default function ItemsOrderedCard({ items }) {
  return (
    <section className="bg-surface rounded-xl p-6 border border-outline-variant shadow-lg backdrop-blur-sm">
      <h3 className="font-headline font-semibold text-white text-sm tracking-widest uppercase mb-6 flex items-center gap-2 border-b border-outline-variant pb-4">
        <FiShoppingBag className="text-primary text-lg" />
        Items Ordered
      </h3>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded bg-background shrink-0 overflow-hidden border border-outline-variant relative">
                <img className="w-full h-full object-cover" src={item.img} alt={item.name} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline font-semibold text-white text-base">{item.name}</h4>
                    <p className="font-body text-on-surface-variant text-sm mt-1">{item.desc}</p>
                    <p className="font-body text-on-surface-variant text-xs mt-1">SKU: {item.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-headline font-bold text-white">{item.price}</p>
                    <p className="font-body text-on-surface-variant text-sm mt-1">Qty: {item.qty}</p>
                  </div>
                </div>
              </div>
            </div>
            {idx < items.length - 1 && <hr className="border-outline-variant border-dashed" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
