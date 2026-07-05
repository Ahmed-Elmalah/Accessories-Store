import React from "react";
import { Outlet } from "react-router-dom";
import PromoBanner from "./PromoBanner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

export default function StoreLayout() {
  return (
    <div className="bg-[#0a0a0a] text-neutral-200 font-body antialiased min-h-screen flex flex-col overflow-x-hidden">
      <PromoBanner />
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
