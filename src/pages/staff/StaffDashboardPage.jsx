import React, { useState } from "react";
import StaffOrderFilters from "../../components/staff/dashboard/StaffOrderFilters";
import StaffOrdersTable from "../../components/staff/dashboard/StaffOrdersTable";

export default function StaffDashboardPage() {
  const [activeTab, setActiveTab] = useState("unassigned");

  const allOrders = [
    { id: "LAF-1024", customer: "Eleanor Vance", date: "Oct 24, 2023", total: "$3,695.00", status: "Pending", assignedTo: null },
    { id: "LF-8921", customer: "Eleanor Vance", date: "Oct 24, 2023", total: "$1,250.00", status: "Delivered", assignedTo: "me" },
    { id: "LF-8920", customer: "Marcus Sterling", date: "Oct 24, 2023", total: "$3,400.00", status: "Pending", assignedTo: null },
    { id: "LF-8919", customer: "Sophia Chen", date: "Oct 23, 2023", total: "$890.00", status: "Delivered", assignedTo: "other" },
    { id: "LF-8918", customer: "Jameson Wright", date: "Oct 22, 2023", total: "$5,100.00", status: "Pending", assignedTo: "me" },
    { id: "LF-8917", customer: "Olivia Bennett", date: "Oct 22, 2023", total: "$2,150.00", status: "Delivered", assignedTo: "me" },
  ];

  // Filter logic
  const filteredOrders = allOrders.filter(o => {
    if (activeTab === "unassigned") return o.assignedTo === null && o.status !== "Delivered";
    if (activeTab === "mine") return o.assignedTo === "me" && o.status !== "Delivered";
    if (activeTab === "finished") return o.status === "Delivered";
    return true;
  });

  return (
    <div className="p-4 md:p-8 flex-1 w-full space-y-6">
      {/* Tabs Row */}
      <div className="flex items-center gap-6 border-b border-outline-variant pb-px">
        {/* Unassigned */}
        <button
          onClick={() => setActiveTab("unassigned")}
          className={`pb-3 text-sm font-label uppercase tracking-widest transition-colors relative ${
            activeTab === "unassigned" ? "text-primary font-bold" : "text-on-surface-variant hover:text-white"
          }`}
        >
          Unassigned Orders
          {activeTab === "unassigned" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>}
        </button>

        {/* Mine */}
        <button
          onClick={() => setActiveTab("mine")}
          className={`pb-3 text-sm font-label uppercase tracking-widest transition-colors relative ${
            activeTab === "mine" ? "text-primary font-bold" : "text-on-surface-variant hover:text-white"
          }`}
        >
          My Orders
          {activeTab === "mine" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>}
        </button>

        {/* Finished */}
        <button
          onClick={() => setActiveTab("finished")}
          className={`pb-3 text-sm font-label uppercase tracking-widest transition-colors relative ${
            activeTab === "finished" ? "text-primary font-bold" : "text-on-surface-variant hover:text-white"
          }`}
        >
          Finished Orders
          {activeTab === "finished" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>}
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row justify-end items-start md:items-center gap-4 bg-surface p-4 rounded-xl border border-outline-variant shadow-sm">
        <StaffOrderFilters />
      </div>

      <StaffOrdersTable orders={filteredOrders} activeTab={activeTab} />
    </div>
  );
}
