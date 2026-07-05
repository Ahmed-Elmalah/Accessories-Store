import React from 'react';

export default function StatsCard({ title, value, icon, badgeText, badgeClass, trend, trendText, glowClass = "bg-primary/5" }) {
  return (
    <div className="bg-surface border border-outline-variant rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors">
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-100 opacity-60 transition-colors ${glowClass}`}></div>
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <p className="text-sm font-medium text-on-surface-variant uppercase tracking-wider font-label mb-1">{title}</p>
          <h3 className="text-3xl font-display font-bold text-on-surface">{value}</h3>
        </div>
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl">
          {icon}
        </div>
      </div>
      <div className="flex items-center gap-2 relative z-10">
        {trend ? (
          <span className="flex items-center text-success text-sm font-medium">
            {trend}
            <span className="text-on-surface-variant text-xs ml-1">{trendText}</span>
          </span>
        ) : (
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${badgeClass}`}>
            {badgeText}
          </span>
        )}
      </div>
    </div>
  );
}