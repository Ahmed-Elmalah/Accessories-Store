import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export default function DashboardLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isStaff = location.pathname.startsWith('/staff');

  const adminLinks = [
    { 
      name: 'Dashboard', 
      path: '/admin', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
        </svg>
      )
    },
    { 
      name: 'Products', 
      path: '/admin/products', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ) 
    },
    { 
      name: 'Orders', 
      path: '/admin/orders', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ) 
    },
    { 
      name: 'Promotions', 
      path: '/admin/promotions', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ) 
    },
    { 
      name: 'Staff', 
      path: '/admin/staff', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) 
    },
    { 
      name: 'Settings', 
      path: '/admin/settings', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ) 
    },
  ];

  const staffLinks = [
    { 
      name: 'Orders', 
      path: '/staff', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ) 
    }
  ];

  const currentLinks = isStaff ? staffLinks : adminLinks;

  const SidebarContent = ({ isMobile = false }) => (
    <>
      <div className={`mb-12 px-4 flex items-center gap-3 ${!isMobile ? 'justify-center lg:justify-start' : ''}`}>
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 shrink-0">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h75" />
          </svg>
        </div>
        <div className={!isMobile ? 'hidden lg:block' : ''}>
          <h1 className="text-2xl font-display font-black tracking-tighter text-primary">LaFleur</h1>
          <p className="text-on-surface-variant text-xs font-medium tracking-widest uppercase mt-0.5">Luxury Admin</p>
        </div>
      </div>

      <div className="flex-1 space-y-2">
        {currentLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            end={link.path === '/admin' || link.path === '/staff'}
            onClick={() => isMobile && setIsMobileMenuOpen(false)}
            className={({ isActive }) => `flex items-center gap-4 px-4 py-3 rounded-lg font-display font-bold uppercase tracking-widest text-sm transition-colors duration-300 ${
              !isMobile ? 'justify-center lg:justify-start' : ''
            } ${
              isActive
                ? 'text-primary bg-primary/10 border-r-2 border-primary'
                : 'text-on-surface-variant hover:text-primary hover:bg-surface'
            }`}
          >
            {link.icon}
            <span className={!isMobile ? 'hidden lg:block' : ''}>{link.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-outline-variant px-2">
        <button className={`flex items-center gap-3 group w-full text-left ${!isMobile ? 'justify-center lg:justify-start' : ''}`}>
          <img
            alt={isStaff ? "Staff Profile" : "Admin Profile"}
            className="w-10 h-10 rounded-full object-cover border border-outline-variant group-hover:border-primary transition-colors shrink-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQfmoEKSVJ2c6TSh6jL4pwh5veaDuFdVDHahhYoPq-x5nWHcgNaX7Tz58BLu5b4x5rEKmJfF8Fuu4TI2XAWR43UB8Os4HfGgN35mwKwKnyngvGJt4jJwG2zs2vJqDw1_jGjA-McH7bLqF6A5WWj9cqgmjseB9ehRXgDIGew8tll7YPds6TrV2sDD-9ei9g7E_we4AHwYEdH1EE6wkEiRKI_fmGvOIMBTWpVuduXo8JSqiYoGZ0YIwknF7-DXUVy7Itd5juKVGze2cl"
          />
          <div className={!isMobile ? 'hidden lg:block' : ''}>
            <p className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">{isStaff ? 'Staff User' : 'Admin User'}</p>
            <p className="text-xs text-on-surface-variant">{isStaff ? 'Store Operations' : 'Superadmin'}</p>
          </div>
        </button>
      </div>
    </>
  );

  return (
    <div className="font-body text-on-surface antialiased bg-background min-h-screen">
      <nav className="hidden md:flex bg-surface h-screen fixed left-0 top-0 border-r border-outline-variant flex-col py-8 px-4 z-50 transition-all duration-300 w-20 lg:w-64">
        <SidebarContent isMobile={false} />
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 md:hidden backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      <nav className={`fixed top-0 bottom-0 left-0 w-64 bg-surface border-r border-outline-variant z-50 p-6 flex flex-col transition-transform duration-300 transform md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <button className="absolute top-4 right-4 text-on-surface-variant hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <SidebarContent isMobile={true} />
      </nav>

      <header className="bg-surface/80 backdrop-blur-md fixed top-0 right-0 z-40 border-b border-outline-variant flex justify-between items-center h-16 px-6 md:px-8 transition-all duration-300 w-full md:w-[calc(100%-5rem)] lg:w-[calc(100%-16rem)]">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-on-surface-variant hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h2 className="text-xl font-headline font-bold text-on-surface tracking-wide">Overview</h2>
        </div>
      </header>

      <main className="pt-24 px-4 md:px-8 pb-12 min-h-screen transition-all duration-300 ml-0 md:ml-20 lg:ml-64">
        {/* المكون السحري اللي بيعرض الصفحات */}
        <Outlet />
      </main>
    </div>
  );
} 