import React from 'react';

const ProductsHeader = () => (
  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
    <div>
      <h2 className="text-2xl font-headline font-bold text-on-surface tracking-wide">Products</h2>
      <p className="text-sm text-on-surface-variant mt-1">Manage your luxury inventory and catalog.</p>
    </div>
    <button className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors">
      <span className="material-symbols-outlined text-[20px]">add</span>
      Add Product
    </button>
  </div>
);

export default ProductsHeader;