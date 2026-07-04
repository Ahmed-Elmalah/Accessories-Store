import React from 'react';

const ProductsFilter = () => (
  <div className="bg-surface border border-outline-variant rounded-xl p-4 mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
    <div className="relative w-full sm:w-96">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
      <input
        className="w-full bg-background border border-outline-variant rounded-lg py-2 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
        placeholder="Search products by name or ID..."
        type="text"
      />
    </div>
    <div className="flex gap-4 w-full sm:w-auto">
      <select className="bg-background border border-outline-variant rounded-lg text-sm py-2 px-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary flex-1 sm:flex-none">
        <option>All Categories</option>
        <option>Accessories</option>
        <option>Apparel</option>
        <option>Jewelry</option>
      </select>
      <button className="bg-background border border-outline-variant text-on-surface-variant px-4 py-2 rounded-lg hover:text-primary transition-colors flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">filter_list</span>
        Filter
      </button>
    </div>
  </div>
);

export default ProductsFilter;