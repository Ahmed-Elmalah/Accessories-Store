import React from 'react';
import ProductsFilter from '../../components/admin/Products/Filter';
import ProductsHeader from '../../components/admin/Products/Header';
import ProductsTable from '../../components/admin/Products/Table';
export default function Products() {
  const products = [
    { id: '#LF-P001', name: 'Golden Cufflinks', category: 'Accessories', price: '$250.00', stock: 45, status: 'In Stock', badge: 'badge-success' },
    { id: '#LF-P002', name: 'Silk Tie - Midnight', category: 'Apparel', price: '$120.00', stock: 5, status: 'Low Stock', badge: 'badge-urgent' },
    { id: '#LF-P003', name: 'Leather Wallet', category: 'Accessories', price: '$180.00', stock: 0, status: 'Out of Stock', badge: 'badge-pending' },
    { id: '#LF-P004', name: 'Silver Watch', category: 'Accessories', price: '$850.00', stock: 12, status: 'In Stock', badge: 'badge-success' },
    { id: '#LF-P005', name: 'Diamond Ring', category: 'Jewelry', price: '$3,200.00', stock: 2, status: 'Low Stock', badge: 'badge-urgent' },
  ];

  return (
    <div className="animate-fade-in">
      <ProductsHeader />
      <ProductsFilter />
      <ProductsTable products={products} />
    </div>
  );
}