import React from 'react';
import ProductRow from './Row';
const ProductsTable = ({ products }) => (
  <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden">
    <div className="p-6 border-b border-outline-variant">
      <h3 className="text-lg font-headline font-bold text-on-surface">Product Catalog</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-background/50 border-b border-outline-variant text-on-surface-variant font-label text-xs uppercase tracking-wider">
          <tr>
            <th className="px-6 py-4 font-medium">Product Info</th>
            <th className="px-6 py-4 font-medium">Category</th>
            <th className="px-6 py-4 font-medium">Price</th>
            <th className="px-6 py-4 font-medium">Stock</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/50 text-on-surface">
          {products.map((product, index) => (
            <ProductRow key={index} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ProductsTable;