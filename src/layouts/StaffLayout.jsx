import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FiSearch, FiBell, FiHelpCircle } from 'react-icons/fi';

export default function StaffLayout() {
  return (
    <div className="font-body text-on-surface antialiased bg-background min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="flex justify-between items-center h-16 px-4 md:px-8 bg-surface shrink-0 z-10 border-b border-outline-variant sticky top-0 backdrop-blur-md">
        {/* Logo Area */}
        <div className="flex items-center">
          <Link to="/staff" className="text-2xl font-headline font-black tracking-tighter text-primary">
            LaFleur
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 max-w-md mx-8">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch className="text-on-surface-variant text-[20px]" />
            </span>
            <input
              className="w-full bg-background border border-outline-variant text-white font-body text-sm rounded-lg focus:ring-primary focus:border-primary block pl-10 p-2.5 transition-colors"
              placeholder="Search orders, clients, items..."
              type="text"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 md:gap-4 md:border-l border-outline-variant md:pl-6">
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <FiBell className="text-[20px]" />
            </button>
            <button className="hidden sm:block text-on-surface-variant hover:text-primary transition-colors">
              <FiHelpCircle className="text-[20px]" />
            </button>
            <img
              alt="Staff Avatar"
              className="w-8 h-8 rounded-full border border-outline-variant object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCedRtwvfSSRLxIbN6mMf025yq4QyTL8v46s7twycZ0nNpIS-lW-uPFx-mH90erU5bv_fE91ZDwt_AaMghvx_Y5MT86xPBSRlKDeen_PgPcNetf1806MBJVI_B57G2Io84aecIAgfwBNjD82cpKYvrMo-p6UC7YZRE78xYDBmh-h1IQpAN78QeOMOOzDuKbIRWrCYnxdGUp7v732B1aFOlPXZZOV3bKXE4AZQSFHSYV2PaYlfUBUJUyPXqOfpoip_NvNV8ABMgLQXP"
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-x-hidden relative">
        <Outlet />
      </main>
    </div>
  );
}
