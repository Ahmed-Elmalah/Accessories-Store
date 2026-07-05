import React, { useState } from "react";
import { useParams } from "react-router-dom";
import OrderHeader from "../../components/staff/order/OrderHeader";
import ItemsOrderedCard from "../../components/staff/order/ItemsOrderedCard";
import OrderTimelineCard from "../../components/staff/order/OrderTimelineCard";
import CustomerDetailsCard from "../../components/staff/order/CustomerDetailsCard";
import ShippingDetailsCard from "../../components/staff/order/ShippingDetailsCard";
import OrderSummaryCard from "../../components/staff/order/OrderSummaryCard";
import UpdateStatusCard from "../../components/staff/order/UpdateStatusCard";

export default function StaffOrderDetailsPage() {
  const { id } = useParams();
  const [status, setStatus] = useState("processing");

  // Mock data for the order
  const order = {
    id: id || "LAF-1024",
    customer: {
      name: "Eleanor Vance",
      email: "eleanor.v@lafleur.com",
      phone: "+33 1 23 45 67 89",
      initials: "EV",
      isVIP: true,
    },
    shipping: {
      address: "42 Rue de Rivoli\nParis, 75001\nFrance",
      method: "Express Insured Delivery",
    },
    summary: {
      subtotal: "$3,650.00",
      shipping: "$45.00",
      tax: "$0.00",
      total: "$3,695.00",
    },
    items: [
      {
        name: "Ethereal Gold Ring",
        desc: "18k Yellow Gold, Diamond Accent",
        sku: "LAF-R-7729",
        price: "$1,850",
        qty: 1,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC07BjA5cROPXBHWafeKD8CCIahAOMQYMTa7Zi0C3ohRp2lBBEhgFUoTOMHlQdEF0RyeXN5I5sNSn2C6_f3VWDLGsOZ-hNTCrsoAXesid6T7cdpBixwdg7c2iYVifgYdLz8m5CR1S9eSg330Ks8xG2QP0t6CZe2kNEH-5cgXHPT-9Ogv72TUcanNemjRa-JebSPf8tWVo6dNXTvZTnaidwB4CUqf7pA-ss2OoDVpxcPx1-ndwIsjeYP9QavgLXDbHa3kiSijzG21nVZ"
      },
      {
        name: "Aura Gold Cuff",
        desc: "Solid 24k Gold, Matte Finish",
        sku: "LAF-B-4410",
        price: "$1,800",
        qty: 1,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqDxGToIT4DUybFH2CzFK2BDBZ_-KFJDzbPFhb0G5TXvRl55-FIOf1OnEZoY4vGn1kdOMfMn9MZHn1Uirxl3YiL-Y4nPrbTVdPJrP7Cqm40XoZLU4MLTYVIP5AOoWkt4z0uo9p7OikdT0S22gkjQlrs5aJY2mx7f3R5v1NN5bIM_DA6nRHFWmooq8fESImcSuyLPKQqvQow0HdDEXmCo8mbx1bNFrF9wzR44PKpC_DRYysJqk6DwWNOgudDGMOV9hETEMIMArcz11T"
      }
    ]
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-background relative">
      <OrderHeader order={order} status={status} />

      {/* Scrollable Canvas */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 pb-12">
          
          {/* LEFT COLUMN (65%) */}
          <div className="lg:w-[65%] flex flex-col gap-8">
            <ItemsOrderedCard items={order.items} />
            <OrderTimelineCard />
          </div>

          {/* RIGHT COLUMN (35%) */}
          <div className="lg:w-[35%] flex flex-col gap-6">
            <CustomerDetailsCard customer={order.customer} />
            <ShippingDetailsCard customerName={order.customer.name} shipping={order.shipping} />
            <OrderSummaryCard summary={order.summary} />
            <UpdateStatusCard status={status} setStatus={setStatus} />
          </div>
          
        </div>
      </div>
    </div>
  );
}
