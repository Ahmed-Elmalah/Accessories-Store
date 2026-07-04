import React from "react";

export default function AuthButton({ children, loading, icon, ...props }) {
  return (
    <button
      className="w-full bg-primary text-on-primary font-label font-bold py-4 px-8 tracking-[0.15em] uppercase text-xs hover:bg-opacity-90 active:scale-[0.98] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] flex justify-center items-center gap-2 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed mt-6"
      disabled={loading}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin h-4 w-4 text-on-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <>
          <span>{children}</span>
          {icon && (
            <span className="material-symbols-outlined text-sm">{icon}</span>
          )}
        </>
      )}
    </button>
  );
}
