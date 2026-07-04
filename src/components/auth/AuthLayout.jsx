import React from "react";
import { Link } from "react-router-dom";

export default function AuthLayout({ children }) {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col antialiased selection:bg-primary selection:text-on-primary">
      {/* Minimal Nav (Transactional) */}
      <header className="absolute top-0 w-full flex justify-center items-center py-6 z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter text-primary">
            LaFleur
          </Link>
        </div>
      </header>

      {/* Centered Layout Container */}
      <main className="grow flex w-full min-h-screen relative items-center justify-center py-10">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Form Container */}
        <section className="w-full flex flex-col justify-center items-center px-6 py-12 relative z-10">
          <div className="w-full max-w-md bg-surface-container border border-outline-variant p-8 md:p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}
