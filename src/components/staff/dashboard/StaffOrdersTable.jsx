import React from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiChevronLeft, FiChevronRight, FiUserPlus } from "react-icons/fi";

export default function StaffOrdersTable({ orders, activeTab }) {
  const navigate = useNavigate();

  return (
    <div className="bg-surface rounded-xl border border-primary/10 overflow-hidden shadow-2xl w-full mt-6">
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="border-b border-outline-variant text-xs uppercase tracking-wider text-on-surface-variant font-label font-semibold bg-surface">
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Customer Name</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Total Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant text-sm font-body">
            {orders.length === 0 ? (
               <tr>
                 <td colSpan="6" className="px-6 py-8 text-center text-on-surface-variant">
                   No orders found in this category.
                 </td>
               </tr>
            ) : orders.map((order, idx) => (
              <tr 
                key={idx} 
                onClick={() => navigate(`/staff/orders/${order.id}`)}
                className="hover:bg-surface-container/50 transition-colors group cursor-pointer"
              >
                <td className="px-6 py-4 font-mono text-primary">#{order.id}</td>
                <td className="px-6 py-4 font-medium text-on-surface">{order.customer}</td>
                <td className="px-6 py-4 text-on-surface-variant">{order.date}</td>
                <td className="px-6 py-4 font-semibold text-on-surface">{order.total}</td>
                <td className="px-6 py-4">
                  {order.status === "Delivered" ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/20">
                      Delivered
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/30">
                      Pending
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    {activeTab === "unassigned" && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Logic to assign to me
                          console.log("Assigned", order.id);
                        }}
                        className="flex items-center gap-1.5 text-xs font-label uppercase tracking-wider text-primary border border-primary/30 hover:border-primary hover:bg-primary/10 px-3 py-1.5 rounded transition-all"
                      >
                        <FiUserPlus />
                        Assign to me
                      </button>
                    )}
                    <button className="text-on-surface-variant hover:text-primary transition-colors p-1 inline-block" title="View Order">
                      <FiEye className="text-[20px]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="px-6 py-4 border-t border-outline-variant flex items-center justify-between bg-surface">
        <span className="text-xs text-on-surface-variant font-label">Showing 1 to {orders.length} of {orders.length} results</span>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded text-on-surface-variant hover:text-primary disabled:opacity-50 disabled:hover:text-on-surface-variant transition-colors" disabled>
            <FiChevronLeft className="text-[20px]" />
          </button>
          <button className="w-8 h-8 rounded flex items-center justify-center text-sm font-medium bg-primary text-black">1</button>
          <button className="p-1 rounded text-on-surface-variant hover:text-primary transition-colors" disabled>
            <FiChevronRight className="text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
