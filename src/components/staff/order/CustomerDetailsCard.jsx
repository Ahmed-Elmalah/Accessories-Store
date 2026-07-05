import React from "react";
import { FiUser, FiStar, FiMail, FiPhone } from "react-icons/fi";

export default function CustomerDetailsCard({ customer }) {
  return (
    <section className="bg-surface rounded-xl p-5 border border-outline-variant shadow-lg">
      <h3 className="font-headline font-semibold text-white text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
        <FiUser className="text-primary text-base" />
        Customer Details
      </h3>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-background border border-outline flex items-center justify-center text-primary font-headline font-bold text-lg">
          {customer.initials}
        </div>
        <div>
          <h4 className="font-headline font-semibold text-white">{customer.name}</h4>
          {customer.isVIP && (
            <p className="font-body text-on-surface-variant text-xs flex items-center gap-1 mt-0.5">
              <FiStar className="text-[14px]" /> VIP Client
            </p>
          )}
        </div>
      </div>
      <div className="space-y-3 font-body text-sm text-on-surface-variant">
        <p className="flex items-center gap-3">
          <FiMail className="text-base" />
          {customer.email}
        </p>
        <p className="flex items-center gap-3">
          <FiPhone className="text-base" />
          {customer.phone}
        </p>
      </div>
    </section>
  );
}
