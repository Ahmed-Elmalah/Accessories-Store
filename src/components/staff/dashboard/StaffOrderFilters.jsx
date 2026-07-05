import React from "react";
import { FiFilter, FiChevronDown, FiCalendar } from "react-icons/fi";

export default function StaffOrderFilters() {
  return (
    <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
      {/* Status Filter */}
      <div className="relative group min-w-[140px] flex-1 md:flex-none">
        <button className="w-full flex items-center justify-between gap-2 px-4 py-2 bg-surface-container border border-outline-variant rounded-lg text-sm text-on-surface hover:border-primary/50 transition-colors">
          <span className="flex items-center gap-2 text-on-surface-variant">
            <FiFilter className="text-[18px]" /> All Statuses
          </span>
          <FiChevronDown className="text-[16px] text-on-surface-variant" />
        </button>
      </div>
      {/* Date Filter */}
      <div className="relative group min-w-[160px] flex-1 md:flex-none">
        <button className="w-full flex items-center justify-between gap-2 px-4 py-2 bg-surface-container border border-outline-variant rounded-lg text-sm text-on-surface hover:border-primary/50 transition-colors">
          <span className="flex items-center gap-2 text-on-surface-variant">
            <FiCalendar className="text-[18px]" /> Last 30 Days
          </span>
          <FiChevronDown className="text-[16px] text-on-surface-variant" />
        </button>
      </div>
    </div>
  );
}
