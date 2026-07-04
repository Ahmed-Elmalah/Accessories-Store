import React from 'react';

const ProductRow = ({ product }) => (
  <tr className="hover:bg-primary/5 transition-colors">
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-background border border-outline-variant flex items-center justify-center">
          <span className="material-symbols-outlined text-primary/80">inventory_2</span>
        </div>
        <div>
          <p className="font-medium text-on-surface">{product.name}</p>
          <p className="font-mono text-xs text-primary/80 mt-0.5">{product.id}</p>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 text-on-surface-variant">{product.category}</td>
    <td className="px-6 py-4 font-medium">{product.price}</td>
    <td className="px-6 py-4 text-on-surface-variant">{product.stock} units</td>
    <td className="px-6 py-4">
      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${product.badge}`}>
        {product.status}
      </span>
    </td>
    <td className="px-6 py-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-md hover:bg-primary/10" title="Edit">
        <span className="material-symbols-outlined text-sm">edit</span>
      </button>
      <button className="text-on-surface-variant hover:text-error transition-colors p-1 rounded-md hover:bg-error/10 ml-2" title="Delete">
        <span className="material-symbols-outlined text-sm">delete</span>
      </button>
    </td>
  </tr>
);

export default ProductRow;